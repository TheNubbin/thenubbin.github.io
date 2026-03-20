import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import MODEL from "@/assets/nubbin.glb";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
);
camera.position.set(0, 1, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping; // tone mapping must be enabled
renderer.toneMappingExposure = 1.0;
document.body.appendChild(renderer.domElement);

// Post-processing chain
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.1, // strength
    0.35, // radius
    0.9, // threshold
);
composer.addPass(bloomPass);

// handles tone mapping + color space conversion at end of chain
composer.addPass(new OutputPass());
const loader = new GLTFLoader();
// loader.setPath("../assets/");
var nubbin;
loader.load(MODEL, (gltf) => {
    nubbin = gltf.scene;
    scene.add(nubbin);
});
// const nubbin = await loader.load("nubbin.glb");

const ambient = new THREE.AmbientLight(0xffffff, 0.15);
scene.add(ambient);

const key = new THREE.DirectionalLight(0xffffff, 1.25);
key.position.set(3, 4, 2);
scene.add(key);

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
});

export function clamp01(x) {
    return Math.max(0, Math.min(1, x));
}

export function lerp(a, b, t) {
    return a + (b - a) * t;
}

export function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
}

function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}

function easeInCubic(x) {
    return x * x * x;
}

function animateNubbinCinematic(t) {
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

        // intro speed: 0.0002 -> 0.001
        w = lerp(0.0002, 0.003, (p));

    } else if (loopT < introDuration + spinUpDuration) {
        const localT = loopT - introDuration;
        const p = clamp01(localT / spinUpDuration);

        // hold facing camera
        x = faceX;

        // spin-up: 0.001 -> 0.005
        w = lerp(0.003, 0.008, easeInOutSine(p));

    } else if (loopT < introDuration + spinUpDuration + spinDownDuration) {
        const localT = loopT - introDuration - spinUpDuration;
        const p = clamp01(localT / spinDownDuration);

        // hold facing camera
        x = faceX;

        // spin-down: 0.005 -> 0.002
        w = lerp(0.008, 0.003, easeInOutSine(p));

    } else {
        const localT = loopT - introDuration - spinUpDuration - spinDownDuration;
        const p = clamp01(localT / outroDuration);

        // tilt back to resting pose
        x = lerp(faceX, restX, easeInOutSine(p));

        // ease-out: 0.002 -> 0.0002
        w = lerp(0.003, -0.0002, (p));
    }

    nubbin.rotation.x = x;

    // make each loop spin in a diff dir
    const spinDir = ((t/2 % totalDuration) > totalDuration/2) ? -1 : 1;
    w *= spinDir;
    // incremental Y rotation for smooth continuity
    nubbin.rotation.y += w;
}

const bloomTimer = new THREE.Timer();

function animate() {
    requestAnimationFrame(animate);
    bloomTimer.update();
    const t = bloomTimer.getElapsed();
    animateNubbinCinematic(t);

    bloomPass.strength = 0.07 + 0.05 * Math.pow(0.5 - 0.5 * Math.cos((t / 4.0) * Math.PI * 2), 1.8);
    composer.render(); // use composer, not renderer.render(...)
}

animate();