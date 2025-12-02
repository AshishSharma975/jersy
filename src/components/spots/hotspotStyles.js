const styles = {
  container: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },
  dot: {
    position: "absolute",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    border: "2px solid #eee",
    cursor: "pointer",
    pointerEvents: "auto",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    pointerEvents: "none",
  },
  tooltip: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    color: "#fff",
    borderRadius: "6px",
    fontSize: "12px",
    fontFamily: "Arial, sans-serif",
    textAlign: "left",
    padding: "8px",
    minWidth: "150px", // Ensures a nice readable layout
    maxWidth: "200px", // Prevents excessive stretching
    whiteSpace: "normal", // Allows text wrapping
    pointerEvents: "none",
    transform: "translate(-50%, -150%)",
    opacity: "0",
    transition: "opacity 0.2s ease-in-out",
  },
  tooltipTitle: {
    fontWeight: "bold",
    fontSize: "14px",
    marginBottom: "4px", // Adds spacing below title
    display: "block",
  },
  tooltipDesc: {
    fontSize: "12px",
    lineHeight: "1.4",
    display: "block",
  },
  activeDot: {
    backgroundColor: "#adfe09ab",
  },
};

// Helper function to apply styles
function applyStyles(element, styles) {
  Object.assign(element.style, styles);
}

export { styles, applyStyles };
