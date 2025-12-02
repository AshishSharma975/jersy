function Resizer(camera, renderer) {
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix(); // Update camera's projection matrix
    renderer.setSize(window.innerWidth, window.innerHeight); // Adjust renderer size
  });
}

export { Resizer };
