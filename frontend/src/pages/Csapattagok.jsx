import React, { useEffect, useState, useMemo } from "react";
import styles from "./Csapattagok.module.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Csapattagok = () => {
    const [teamMembers, setTeamMembers] = useState({});
    const [loading, setLoading] = useState(true);
    const [init, setInit] = useState(false);

    // This is the desired display order from the AdminDashboard's select
    const groupOrder = [
        "Vezetőség",
        "Hajtáslánc csoport",
        "Járműdinamika csoport",
        "Váz csoport",
        "Aerodinamika csoport",
        "hybrid csoport",
        "elektronika csoport",
        "Marketing és Szponzoráció csoport",
        "pénzügy"
    ];

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });

        setLoading(true);
        fetch("/api/data/teamMembers")
            .then(response => response.json())
            .then(data => {
                console.log("Data received from backend:", data);
                // Group by type
                const groupedMembers = data.reduce((groups, member) => {
                    if (!groups[member.type]) {
                        groups[member.type] = [];
                    }
                    groups[member.type].push(member);
                    return groups;
                }, {});
                setTeamMembers(groupedMembers);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching team members:", error);
                setLoading(false);
            });
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
        <div className={styles.csapattagok_wrap}>
            <Particles id="tsparticles" options={particlesOptions} />

            {loading ? (
                <div className={styles.loadingScreen}>
                    <div className={styles.loader}></div>
                    <p>Loading...</p>
                </div>
            ) : (
                <>
                    <h1 className={styles.page_title}>Csapattagok</h1>
                    {groupOrder.map(group => (
                        teamMembers[group] ? (
                            <div key={group} className={styles.teamGroup}>
                                <h2 className={styles.groupTitle}>{group}</h2>
                                <div className={styles.teamGrid}>
                                    {teamMembers[group].map(member => (
                                        <div key={member.id} className={styles.memberCard}>
                                            <img
                                                src={member.path.replace(
                                                    '/upload/',
                                                    '/upload/w_400,q_auto,f_auto/'
                                                )}
                                                alt={member.name}
                                                className={styles.memberImage}
                                                loading="lazy"
                                                onError={(e) => (e.target.style.display = "none")}
                                            />

                                            <h3 className={styles.memberName}>{member.name}</h3>
                                            <p className={styles.memberDesc}>{member.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null
                    ))}
                </>
            )}

            <a className={styles.alumni_button} href="/alumni">ALUMNI</a>
        </div>
    );
};

export default Csapattagok;
