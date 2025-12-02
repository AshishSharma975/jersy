import { WebGLRenderer, PCFSoftShadowMap } from "three";

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio); // Handle high-DPI displays
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap; // Softer shadows
  document.body.appendChild(renderer.domElement);

  return renderer;
}

export { createRenderer };
