import { Scene, Color } from "three";

function createScene() {
    const scene = new Scene();
    scene.background = new Color(0x181818);
    return scene;
}

export { createScene };
