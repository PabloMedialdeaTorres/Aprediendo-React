import { useEffect, useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

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

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          border: "2px solid #fff",
          borderRadius: "50%",
          opacity: 0.6,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 40,
          height: 40,
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
