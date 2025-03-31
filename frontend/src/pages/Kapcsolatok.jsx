import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import styles from './Kapcsolatok.module.css';

const Kapcsolatok = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: { value: "#00aba2" },
        links: {
          color: "#00aba2",
          distance: 150,
          enable: true,
          opacity: 1,
          width: 2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 2,
          straight: false,
        },
        number: { density: { enable: true }, value: 180 },
        opacity: { value: 0.8 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <div style={{ position: "relative", width: "100vw" }}>
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
      <div className={styles.kapcsolatok} style={{ position: "relative", zIndex: 1 }}>
        <h2>Kapcsolatok</h2>
        <div className={styles.kapcs_cards}> 
          <div className={styles.card}>
            <h3>BME MOTORSPORT</h3>
            <a href="https://www.google.com/maps/place/BME+Motorsport+Workshop/@47.4811857,19.0562117,15z/data=!4m6!3m5!1s0x4741dd7e38be4419:0x3df66b797b5b4ecd!8m2!3d47.4811857!4d19.0562117!16s%2Fg%2F11lkdx6y3m">
              1111 Budapest, Műegyetem rakpart 3., <br /> Központi (K) épület, földszint 94.
            </a>
            <p>motorsport.bme@gmail.com</p>
          </div>

          <div className={styles.card}> 
            <h3>KISS BÁLINT</h3>
            <p>Csapatkapitány</p>
            <a href="https://www.google.com/maps/place/BME+Motorsport+Workshop/@47.4811857,19.0562117,15z/data=!4m6!3m5!1s0x4741dd7e38be4419:0x3df66b797b5b4ecd!8m2!3d47.4811857!4d19.0562117!16s%2Fg%2F11lkdx6y3m">
              1111 Budapest, Műegyetem rakpart 3., <br /> Központi (K) épület, földszint 94.
            </a>
            <p>motorsport.bme@gmail.com</p>
          </div>

          <div className={styles.card}> 
            <h3>JÜTTNER DOMOKOS</h3>
            <p>Főmérnök</p>
            <a href="https://www.google.com/maps/place/BME+Motorsport+Workshop/@47.4811857,19.0562117,15z/data=!4m6!3m5!1s0x4741dd7e38be4419:0x3df66b797b5b4ecd!8m2!3d47.4811857!4d19.0562117!16s%2Fg%2F11lkdx6y3m">
              1111 Budapest, Műegyetem rakpart 3., <br /> Központi (K) épület, földszint 94.
            </a>
            <p>motorsport.bme@gmail.com</p>
          </div>
        </div>

        <div className={styles.map_container}>
          <h3>Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.447795862294!2d19.05363677587826!3d47.48118929663012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dd7e38be4419%3A0x3df66b797b5b4ecd!2sBME%20Motorsport%20Workshop!5e0!3m2!1sen!2shu!4v1730892855595!5m2!1sen!2shu"
            width="100%"
            height="450"
            style={{
              border: 'none',
              filter: 'invert(95%) hue-rotate(180deg)',
              borderRadius: '10px'
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Kapcsolatok;