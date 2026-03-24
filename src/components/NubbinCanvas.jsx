import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import {clamp01, lerp, easeInOutSine} from "@/lib/nubbin.js"
import MODEL from "@/assets/nubbin.glb";

let hmrVersion = 0;

if (import.meta.hot) {
  hmrVersion = import.meta.hot.data.hmrVersion ?? 0;
  import.meta.hot.dispose((data) => {
    data.hmrVersion = hmrVersion + 1;
  });
}

// Waypoint-based positioning
function getWaypoints() {
  return [...document.querySelectorAll('[data-nubbin-x], [data-nubbin-y], [data-nubbin-scale]')];
}

function getPinnedWaypoint() {
  return document.querySelector('[data-nubbin-pin="true"]');
}

export default function NubbinCanvas() {
  const mountRef = useRef(null);
  const refreshKey = hmrVersion;
  const waypointsLength = getWaypoints().length;

  useEffect(() => {
    const mountEl = mountRef.current;
    if (!mountEl) return;

    let animationFrameId;
    let disposed = false;
    let nubbin = null;

    mountEl.replaceChildren();

    const getSize = () => ({
      width: mountEl.clientWidth,
      height: mountEl.clientHeight,
    });

    const { width, height } = getSize();

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 1, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    mountEl.appendChild(renderer.domElement);

    // Post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      0.1,
      0.35,
      0.9
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());

    // Model loading
    const loader = new GLTFLoader();
    loader.load(
      MODEL,
      (gltf) => {
        if (disposed) {
          gltf.scene.traverse((child) => {
            if (child.geometry) child.geometry.dispose();

            if (child.material) {
              const materials = Array.isArray(child.material)
                ? child.material
                : [child.material];

              materials.forEach((material) => material.dispose());
            }
          });
          return;
        }

        nubbin = gltf.scene;
        nubbin.position.x = 10.35;
        nubbin.position.y = 2.5;
        scene.add(nubbin);
      },
      undefined,
      (error) => {
        console.error("Failed to load model:", error);
      }
    );

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.15);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 1.25);
    key.position.set(3, 4, 2);
    scene.add(key);

    function getTargetPosition(axis) {
      const waypoints = getWaypoints();
      if (waypoints.length === 0) return 0;
      
      const viewportCenter = window.innerHeight / 2;

      // Find waypoints that straddle the viewport center
      let beforeWaypoint = null;
      let afterWaypoint = null;
      
      for (const waypoint of waypoints) {
        const rect = waypoint.getBoundingClientRect();
        const waypointCenter = rect.top + rect.height / 2;
        
        if (waypointCenter <= viewportCenter) {
          beforeWaypoint = { element: waypoint, center: waypointCenter };
        } else if (!afterWaypoint) {
          afterWaypoint = { element: waypoint, center: waypointCenter };
          break;
        }
      }
      
      // If we're before the first waypoint, use the first one
      if (!beforeWaypoint) {
        const dataAttr = axis === 'x' ? 'nubbinX' : axis === 'y' ? 'nubbinY' : 'nubbinScale';
        return parseFloat(waypoints[0].dataset[dataAttr]) || 0;
      }
      
      // If we're after the last waypoint, use the last one
      if (!afterWaypoint) {
        const dataAttr = axis === 'x' ? 'nubbinX' : axis === 'y' ? 'nubbinY' : 'nubbinScale';
        return parseFloat(beforeWaypoint.element.dataset[dataAttr]) || 0;
      }
      // Interpolate between the two waypoints
      const dataAttr = axis === 'x' ? 'nubbinX' : axis === 'y' ? 'nubbinY' : 'nubbinScale';
      const beforePos = parseFloat(beforeWaypoint.element.dataset[dataAttr]) || 0;
      const afterPos = parseFloat(afterWaypoint.element.dataset[dataAttr]) || 0;
      
      const totalDistance = afterWaypoint.center - beforeWaypoint.center;
      const progressDistance = viewportCenter - beforeWaypoint.center;
      const progress = clamp01(progressDistance / totalDistance);
      
      return lerp(beforePos, afterPos, easeInOutSine(progress));
    }

    function getTargetX() {
      return getTargetPosition('x');
    }

    function getTargetY() {
      return getTargetPosition('y');
    }

    function getTargetScale() {
      return getTargetPosition('scale');
    }
    
    let targetScrollX = 0;
    let targetScrollY = 0;
    let targetScale = 0;
    let scrollX = targetScrollX;
    let scrollY = targetScrollY;
    let scale = targetScale;
    let lastScrollSpeed = -1;
    
    function updateScrollProgress() {
      targetScrollX = getTargetX();
      targetScrollY = getTargetY();
      targetScale = getTargetScale();
    }

    let lastScrollY = window.scrollY;
    let lastTimestamp = performance.now();

    function getScrollSpeed() {
      const currentScrollY = window.scrollY;
      const currentTimestamp = performance.now();
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = (currentTimestamp - lastTimestamp) / 1000; // seconds

      lastScrollY = currentScrollY;
      lastTimestamp = currentTimestamp;

      return deltaTime > 0 ? deltaY / deltaTime : 0;
    }


    function smoothScrollProgress(deltaTime) {
      const lerpFactor = 1 - Math.exp(-8 * deltaTime);
      scrollX = lerp(scrollX, targetScrollX, lerpFactor);
      scrollY = lerp(scrollY, targetScrollY, lerpFactor);
      scale = lerp(scale, targetScale, lerpFactor);
    }

    function scaleNubbin(size) {
      if (!nubbin) return;

      nubbin.scale.x = size;
      nubbin.scale.y = size;
      nubbin.scale.z = size;
    }

    function getPinnedWorldTarget(frustumWidth, frustumHeight) {
      const pinned = getPinnedWaypoint();
      if (!pinned) return null;

      const rect = pinned.getBoundingClientRect();
      const isVisible =
        rect.bottom > window.innerHeight* 5/6 &&
        rect.top < window.innerHeight/2 &&
        rect.right > 0 &&
        rect.left < window.innerWidth;

      if (!isVisible) return null;

      const u = (parseFloat(pinned.dataset.nubbinPinU) || 0.5);
      const v = (parseFloat(pinned.dataset.nubbinPinV) || 0.5);

      const viewportX = rect.left + rect.width * u;
      const viewportY = rect.top + rect.height * v;

      const ndcX = (viewportX / window.innerWidth) * 2 - 1;
      const ndcY = 1 - (viewportY / window.innerHeight) * 2;

      return {
        x: ndcX * (frustumWidth / 2),
        y: ndcY * (frustumHeight / 2),
      };
    }

    function smoothToValue(current, goal, deltaTime, speed = 20) {
      return lerp(current, goal, 1 - Math.exp(-speed * deltaTime));
    }

    function animateNubbinCinematic(t, deltaTime) {
      if (!nubbin) return;
      
      const restX = Math.PI / 8;
      const faceX = Math.PI / 2;

      const introDuration = 1.4 * 3;
      const spinUpDuration = 1.2 * 3;
      const spinDownDuration = 1.1 * 2;
      const outroDuration = 1.8 * 4;
      const totalDuration =
        introDuration +
        spinUpDuration +
        spinDownDuration +
        outroDuration;

      const loopT = t % totalDuration;

      let x = restX;
      let w = 0.0002;

      if (loopT < introDuration) {
        const p = clamp01(loopT / introDuration);

        // tilt toward camera
        x = lerp(restX, faceX, easeInOutSine(p));

        // intro speed
        w = lerp(0.0002, 0.003, p);
      } else if (loopT < introDuration + spinUpDuration) {
        const localT = loopT - introDuration;
        const p = clamp01(localT / spinUpDuration);

        // hold facing camera
        x = faceX;

        // spin-up
        w = lerp(0.003, 0.008, easeInOutSine(p));
      } else if (loopT < introDuration + spinUpDuration + spinDownDuration) {
        const localT = loopT - introDuration - spinUpDuration;
        const p = clamp01(localT / spinDownDuration);

        // hold facing camera
        x = faceX;

        // spin-down
        w = lerp(0.008, 0.003, easeInOutSine(p));
      } else {
        const localT =
          loopT - introDuration - spinUpDuration - spinDownDuration;
        const p = clamp01(localT / outroDuration);

        // tilt back to resting pose
        x = lerp(faceX, restX, easeInOutSine(p));

        // ease-out
        w = lerp(0.003, -0.0002, p);
      }

      nubbin.rotation.x = x;

      // make each loop spin in a diff dir
      const spinDir = ((t / 2) % totalDuration) > totalDuration / 2 ? -1 : 1;
      w *= spinDir;

      // incremental Y rotation for smooth continuity
      nubbin.rotation.y += w;

      // Frustum-based horizontal and vertical movement
      // Calculate world space dimensions at the nubbin's z-position (z=0)
      const fov = camera.fov * (Math.PI / 180); // Convert to radians
      const distance = camera.position.z; // Distance from camera to nubbin
      const frustumHeight = 2 * Math.tan(fov / 2) * distance;
      const frustumWidth = frustumHeight * camera.aspect;
      
      // Convert normalized positions (-1 to 1) to world space
      const worldX = scrollX * (frustumWidth / 2);
      const worldY = scrollY * (frustumHeight / 2);
      
      const pinnedWorld = getPinnedWorldTarget(frustumWidth, frustumHeight);

      let targetX, targetY;

      if (pinnedWorld) {
        targetX = pinnedWorld.x;
        targetY = pinnedWorld.y;
      } else {
        // Add subtle oscillation for dynamic movement
        const oscillationX = Math.sin(t * Math.PI * 0.45) * 0.1;
        const oscillationY = Math.cos(t * Math.PI * 0.35) * 0.05;

        targetX = worldX + oscillationX;
        targetY = worldY + oscillationY;
      }

      nubbin.position.x = smoothToValue(nubbin.position.x, targetX, deltaTime);
      nubbin.position.y = smoothToValue(nubbin.position.y, targetY, deltaTime);
      const scrollSpeed = getScrollSpeed();
      nubbin.rotation.z = (nubbin.rotation.z + scrollSpeed/50000) % (Math.PI * 2);
      let sign = Math.sign(scrollSpeed);
      if (sign !== 0) {
        lastScrollSpeed = sign;
      } else {
        nubbin.rotation.z = smoothToValue(nubbin.rotation.z, lastScrollSpeed == -1 ? -Math.PI * 2 : Math.PI * 2, deltaTime, 2) % (Math.PI * 2);
      }
      scaleNubbin(smoothToValue(nubbin.scale.x, scale, deltaTime));
    }

    // Timer
    const bloomTimer = new THREE.Timer();

    // Initialize scroll tracking
    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    // Resize
    function resize() {
      const { width, height } = getSize();

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      composer.setSize(width, height);
      bloomPass.setSize(width, height);
    }

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(mountEl);

    // Animation loop
    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      bloomTimer.update();
      const t = bloomTimer.getElapsed();
      const deltaTime = bloomTimer.getDelta();

      // Update smooth scroll interpolation
      smoothScrollProgress(deltaTime);

      animateNubbinCinematic(t, deltaTime);

      bloomPass.strength =
        0.07 +
        0.05 *
          Math.pow(
            0.5 - 0.5 * Math.cos((t / 4.0) * Math.PI * 2),
            1.8
          );

      composer.render();
    }

    animate();

    // Cleanup
    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', updateScrollProgress);
      if (observer) observer.disconnect();

      if (nubbin) {
        scene.remove(nubbin);
        nubbin.traverse((child) => {
          if (child.geometry) child.geometry.dispose();

          if (child.material) {
            const materials = Array.isArray(child.material)
              ? child.material
              : [child.material];

            materials.forEach((material) => material.dispose());
          }
        });
      }
      
      // Dispose of Three.js objects to free GPU memory
      composer.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      scene.clear();

      if (mountEl && mountEl.contains(renderer.domElement)) {
        mountEl.removeChild(renderer.domElement);
      }
    };
  }, [refreshKey, waypointsLength]);

  return (
    <div
      className="nubbin-canvas"
      key={refreshKey}
      ref={mountRef}
    />
  );
}