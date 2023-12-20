import { useEffect, useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // pointer move
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  const enableMouseFollower = () => {
    setEnabled(!enabled);
  };

  // change body class
  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);

    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#000",
          border: "3px solid #fff",
          borderRadius: "50%",
          opacity: 0.6,
          pointerEvents: "none",
          left: -10,
          top: -10,
          width: 20,
          height: 20,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={enableMouseFollower}>
        {enabled ? "Diseble" : "Enable"} mouse follower
      </button>
    </main>
  );
}

export default App;
