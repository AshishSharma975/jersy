import { DirectionalLight, AmbientLight } from "three";

function createLights() {
  const ambientLight = new AmbientLight(0xffffff, 0.5);
  const directionalLight = new DirectionalLight(0xffffff, 4);

  directionalLight.position.set(5, 5, 5);

  return { ambientLight, directionalLight };
}

export { createLights };
