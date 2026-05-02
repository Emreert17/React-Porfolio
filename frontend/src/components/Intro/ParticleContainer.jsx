"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleContainer() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },

      background: {
        color: {
          value: "transparent",
        },
      },

      fpsLimit: 60,

      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: false, // ❌ hover kapalı (performans fix)
          },
          resize: true,
        },
      },

      particles: {
        color: {
          value: "#818cf8",
        },

        links: {
          color: "#6366f1",
          distance: 140,
          enable: true,
          opacity: 0.08, // ↓ daha hafif
          width: 1,
        },

        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out", // ❌ bounce yerine out (çok daha hafif)
          },
          speed: 1.2, // ↓ düşürüldü
        },

        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: 35, // 🔥 60 → 35 (performans fix)
        },

        opacity: {
          value: 0.4,
        },

        shape: {
          type: "circle",
        },

        size: {
          value: { min: 1, max: 2 },
        },
      },

      detectRetina: true,
    }),
    [],
  );

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
