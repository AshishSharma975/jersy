
import * as THREE from 'three';
import "../styles/style.css";



// Loaders
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

// Components
import { createScene } from "./components/scene";
import { createCamera } from "./components/camera";
import { createLights } from "./components/lights";
import { createProduct } from "./components/product/product";
import { createHotspots } from "./components/spots/hotspots";
import { addBgMusic } from "./components/music/audio";
import "../styles/colorSwitcher.css";


// Data
import hotspots from "./components/spots/spotsData";

// Model
import { model } from "./components/product/model";

// Systems
import { Resizer } from "./systems/resizer";
import { createRenderer } from "./systems/renderer";
import { createControls } from "./systems/controls";


const scene = createScene();
const camera = createCamera();

const { ambientLight, directionalLight } = createLights();
scene.add(ambientLight, directionalLight);


// const product = createProduct();
// scene.add(product); 

// Add 3D model into scene
model(scene);


const rgbeLoader = new RGBELoader();

rgbeLoader.load("/christmas_photo_studio_01_1k.hdr", (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
    scene.background = texture;
});



const renderer = createRenderer();
const controls = createControls(camera, renderer);

const updateHotspots = createHotspots(hotspots, camera, controls);

// Background music
addBgMusic();



function animate() {
  requestAnimationFrame(animate);

  controls.update();

  updateHotspots();

  renderer.render(scene, camera);
}

animate();

Resizer(camera, renderer);


// Fullscreen handler
const fsBtn = document.getElementById("btnFullscreen");
if (fsBtn) {
  fsBtn.addEventListener("click", async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        fsBtn.textContent = "⤡";
      } else {
        await document.exitFullscreen();
        fsBtn.textContent = "⛶";
      }
    } catch (err) {
      console.warn("Fullscreen failed:", err);
    }
  });
}

document.querySelectorAll(".nav__link[data-scroll]").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const id = a.getAttribute("data-scroll");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
});
