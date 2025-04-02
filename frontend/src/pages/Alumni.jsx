import React, { useEffect, useState, useMemo } from "react";
import styles from "./Alumni.module.css"; // or rename if needed
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Alumni = () => {
  const [init, setInit] = useState(false);
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    fetch("http://localhost:5000/data/alumni")
      .then((res) => res.json())
      .then(setAlumni);
  }, []);

  const particlesOptions = useMemo(() => ({
    background: { color: { value: "#000000" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#00aba2" },
      links: { color: "#00aba2", distance: 150, enable: true, opacity: 1, width: 2 },
      move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 2, straight: false },
      number: { density: { enable: true }, value: 180 },
      opacity: { value: 0.8 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <div className={styles.alumni_wrap}>
      <Particles id="tsparticles" options={particlesOptions} />
      
        <div className={styles.cimnek}>
        <h2>Alumni</h2>
      <div className={styles.grid}>
      
        {alumni.map((member) => (
          <div key={member.id} className={styles.card}>
            <img src={`http://localhost:5000/${member.path}`} alt={member.name} />

            <p>{member.name}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Alumni;
