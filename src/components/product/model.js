// src/components/product/model.js
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { setupColorSwitcher } from "./colorSwitcher.js"; // new file
// (no default export collision — exporting loadModel as before)

function loadModel(url) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        const scene = gltf.scene;

        if (scene.children.length === 1) {
          resolve(scene.children[0]);
        } else {
          resolve(scene);
        }
      },
      undefined,
      (error) => {
        reject(error);
      }
    );
  });
}

// model
function model(scene) {
  // adjust path if your GLB lives in public folder (leading slash)
  loadModel("/shift.glb")
    .then((mdl) => {
      // 'mdl' might be a single Mesh or a Group
      console.log("[model] loaded:", mdl);

      // scale & add
      mdl.scale.set(40, 40, 40);
      scene.add(mdl);

      // Find a mesh to act as jersey
      let jerseyMesh = null;
      mdl.traverse((child) => {
        if (child.isMesh) {
          // if your GLB has a named jersey mesh, match by name:
          // if (child.name.toLowerCase().includes("jersey")) jerseyMesh = child;

          // fallback: first mesh encountered
          if (!jerseyMesh) jerseyMesh = child;
        }
      });

      if (jerseyMesh) {
        console.log("[model] jerseyMesh found:", jerseyMesh.name || jerseyMesh.id);
        // Attach the color switcher UI
        setupColorSwitcher(jerseyMesh);
      } else {
        console.warn("[model] jerseyMesh not found - color switcher skipped");
      }
    })
    .catch((error) => {
      console.error("Error loading model:", error);
    });

  // keep previous behavior (returns model function reference)
  return model;
}

export { model };
