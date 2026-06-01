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
        fpsLimit: 60,
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
            distance: 130,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          move: { enable: true, speed: 0.8 },
          number: {
            density: { enable: true, width: 800 },
            value: 45,
          },
          opacity: { value: 0.2 },
          size: { value: { min: 1, max: 2.2 } },
        },
        responsive: [
          {
            maxWidth: 768,
            options: {
              fpsLimit: 30,
              interactivity: {
                events: {
                  onHover: { enable: false },
                },
              },
              particles: {
                number: { value: 20 },
                links: { enable: false },
                move: { speed: 0.5 },
              },
            },
          },
        ],
        detectRetina: true,
      }}
    />
  );
};

export default Background;