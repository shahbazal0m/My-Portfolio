'use client';
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Background = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ["#ffffff", "#4f46e5", "#c084fc"] },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            // 0.2 se kam karke 0.08 kiya taaki lines bahut halki dikhein
            opacity: 0.08, 
            width: 1,
          },
          // Speed 1 se kam karke 0.8 ki hai thoda smooth feel ke liye
          move: { enable: true, speed: 0.8 }, 
          // Particles ki density thodi control ki hai
          number: { 
            density: { enable: true, width: 800 }, 
            value: 65 
          },
          // 0.4 se kam karke 0.15 kiya, ab ye background mein dab jayenge
          opacity: { value: 0.15 }, 
          size: { value: { min: 0.5, max: 2 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Background;