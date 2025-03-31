import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminLogin.module.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const AdminLogin = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [init, setInit] = useState(false);

    // Initialize Particles
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
                opacity: { value: 1 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 4 } },
            },
            detectRetina: true,
        }),
        []
    );

    const handleLogin = () => {
        if (password === "BMEMS#1:)") {
            localStorage.setItem("adminAuthenticated", "true");
            navigate("/admin-panel");
        } else {
            alert("Incorrect password");
        }
    };

    if (!init) return null; // Prevent rendering before particles are initialized

    return (
        <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
            <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
            <div className={styles.bemenet} style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
            }}>
                <h2 style={{marginBottom: "5vw", fontSize: "4rem"}}>Admin Login</h2>
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: "15%",
                        padding: "12px",
                        fontSize: "18px",
                        backgroundColor: "#222",
                        color: "#fff",
                        border: "2px solid #00aba2",
                        borderRadius: "15px",
                        outline: "none",
                        boxShadow: "0 0 10px #00aba2",
                        marginBottom: "15px",
                        textAlign: "center",
                    }}
                />
                <br />
                <button 
                    onClick={handleLogin}
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.25)",
                        height: "10%",
                        width: "15%",
                        borderWidth: "3px",
                        borderColor: "#b8f03f",
                        borderStyle: "solid",
                        borderRadius: "30px",
                        fontSize: "20px",
                        padding: "10px 20px",
                        cursor: "pointer",
                        color: "#b8f03f",
                        transition: "background-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease, font-size 0.4s ease",
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#b8f03f";
                        e.target.style.color = "black";
                        e.target.style.boxShadow = "0 0 10px #b8f03f, 0 0 20px #b8f03f";
                        e.target.style.fontSize = "22px";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.676)";
                        e.target.style.color = "#b8f03f";
                        e.target.style.boxShadow = "none";
                        e.target.style.fontSize = "20px";
                    }}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default AdminLogin;
