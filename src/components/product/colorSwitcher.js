

const COLOR_OPTIONS = [
  { name: "Yellow", hex: "#f6c000" },
  { name: "Blue",   hex: "#0057ff" },
  { name: "Red",    hex: "#ff3b3b" },
  { name: "Black",  hex: "#111111" },
];

function setMeshColor(mesh, hex) {
  if (!mesh) return;

  if (Array.isArray(mesh.material)) {
    mesh.material.forEach((mat) => {
      if (mat && mat.color) {
        mat.color.set(hex);
        mat.needsUpdate = true;
      }
    });
  } else if (mesh.material && mesh.material.color) {
    mesh.material.color.set(hex);
    mesh.material.needsUpdate = true;
  }
}

export function setupColorSwitcher(jerseyMesh) {
  if (!jerseyMesh) return;

  // wrapper
  const wrapper = document.createElement("div");
  wrapper.className = "color-switcher";

  const label = document.createElement("span");
  label.className = "color-switcher__label";
  label.textContent = "Colors:";
  wrapper.appendChild(label);

  COLOR_OPTIONS.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "color-switcher__dot";
    btn.title = option.name;
    btn.dataset.color = option.hex;
    btn.style.backgroundColor = option.hex;

    if (index === 0) {
      btn.classList.add("color-switcher__dot--active");
      setMeshColor(jerseyMesh, option.hex);
    }

    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".color-switcher__dot")
        .forEach((b) => b.classList.remove("color-switcher__dot--active"));
      btn.classList.add("color-switcher__dot--active");

      setMeshColor(jerseyMesh, option.hex);
    });

    wrapper.appendChild(btn);
  });

  document.body.appendChild(wrapper);
}
