import React, { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Import the slim version for better performance

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: "#000000",
                },
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: "#ffffff",
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                    },
                    size: {
                        value: 3,
                        random: true,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#00aba2",
                        opacity: 0.5,
                        width: 1,
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                },
            }}
            style={{
                position: "fixed",
                width: "100%",
                height: "100vh",
                zIndex: "-1",
                top: "0",
                left: "0",
            }}
        />
    );
};

export default ParticlesBackground;
