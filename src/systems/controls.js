import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function createControls(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Smooth movement
  controls.autoRotate = false; // Enable auto-rotation-if needed
  controls.autoRotateSpeed = 1; // Adjust rotation speed
  controls.enablePan = false; // Disable panning to keep focus on the product
  controls.maxPolarAngle = Math.PI / 2; // Prevent the camera from flipping below the ground

  return controls;
}

export { createControls };
