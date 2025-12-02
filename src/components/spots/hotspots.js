import { Vector3 } from "three";
import gsap from "gsap";
import { styles, applyStyles } from "./hotspotStyles.js";

function createHotspots(hotspots, camera, controls) {
  const container = document.createElement("div");
  applyStyles(container, styles.container);
  document.body.appendChild(container);

  let activeDot = null;
  let activeTooltip = null;

  hotspots.forEach((hotspot, index) => {
    // 1.SPOTS
    const dot = document.createElement("div");
    applyStyles(dot, styles.dot);

    // a. Add number inside dot
    const number = document.createElement("span");
    number.textContent = index + 1;
    applyStyles(number, styles.number);
    dot.appendChild(number);

    // 2.TOOLTIP (title + description)
    const tooltip = document.createElement("div");
    applyStyles(tooltip, styles.tooltip);

    // a. title
    const title = document.createElement("span");
    title.textContent = hotspot.title || `Hotspot ${index + 1}`;
    applyStyles(title, styles.tooltipTitle);

    // b. description
    const description = document.createElement("span");
    description.textContent =
      hotspot.description || "No description available.";
    applyStyles(description, styles.tooltipDesc);

    tooltip.appendChild(title);
    tooltip.appendChild(description);
    dot.appendChild(tooltip);

    // Animate camera on click
    dot.addEventListener("click", () => {
      const target = hotspot.target;

      // MAIN MAGIC(Key to the Effect)
      gsap.to(camera.position, {
        x: target.x,
        y: target.y,
        z: target.z,
        duration: 2,
        ease: "power3.inOut",
        onUpdate: () => {
          camera.lookAt(0, 0.5, 0);
          controls.update();
        },
      });

      if (activeDot) applyStyles(activeDot, styles.dot);
      if (activeTooltip) activeTooltip.style.opacity = "0";

      applyStyles(dot, { ...styles.dot, ...styles.activeDot });
      tooltip.style.opacity = "1";
      activeDot = dot;
      activeTooltip = tooltip;
    });

    // Show tooltip on hover
    dot.addEventListener("mouseenter", () => {
      if (activeDot !== dot) tooltip.style.opacity = "1";
    });

    dot.addEventListener("mouseleave", () => {
      if (activeDot !== dot) tooltip.style.opacity = "0";
    });

    container.appendChild(dot);
  });

  function updateHotspots() {
    hotspots.forEach((hotspot, index) => {
      const dot = container.children[index];
      const vector = new Vector3(...hotspot.position);
      vector.project(camera);

      const x = ((vector.x + 1) / 2) * window.innerWidth;
      const y = ((-vector.y + 1) / 2) * window.innerHeight;

      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
    });
  }

  return updateHotspots;
}

export { createHotspots };
