
import { BoxGeometry, MeshStandardMaterial, Mesh } from "three";

function createProduct() {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshStandardMaterial({
    color: 0xadfe02,
    roughness: 0.0,
    metalness: 0.1,
  });

  const cube = new Mesh(geometry, material);

  cube.position.set(0, 0.5, 0);
  cube.rotation.set(0.4, 0.4, 0); 

  return cube;
}

export { createProduct };
