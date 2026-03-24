export function clamp01(x) {
    return Math.max(0, Math.min(1, x));
}

export function lerp(a, b, t) {
    return a + (b - a) * t;
}

export function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
}