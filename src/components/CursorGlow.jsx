import { useEffect, useState } from "react";

function MouseSparkle() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const newParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev.slice(-15), newParticle]);

      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => p.id !== newParticle.id)
        );
      }, 800);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9999] animate-ping"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        >
          <div className="w-3 h-3 rounded-full bg-yellow-300 shadow-[0_0_20px_#facc15]" />
        </div>
      ))}
    </>
  );
}

export default MouseSparkle;