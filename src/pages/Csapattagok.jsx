import React, { useEffect, useState, useMemo } from "react";
import styles from "./Csapattagok.module.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Csapattagok = () => {
    const [teamMembers, setTeamMembers] = useState({});
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });

        fetch("http://localhost:5000/data/teamMembers")
            .then(response => response.json())
            .then(data => {
                // Group team members by type dynamically
                const groupedMembers = data.reduce((groups, member) => {
                    if (!groups[member.type]) {
                        groups[member.type] = [];
                    }
                    groups[member.type].push(member);
                    return groups;
                }, {});
                setTeamMembers(groupedMembers);
            })
            .catch(error => console.error("Error fetching team members:", error));
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
            {/* Particle Effect */}
            <Particles id="tsparticles" options={particlesOptions} />

            <h1 className={styles.page_title}>Csapattagok</h1>
            {Object.entries(teamMembers).map(([group, members]) => (
                <div key={group} className={styles.teamGroup}>
                    <h2 className={styles.groupTitle}>{group}</h2>
                    <div className={styles.teamGrid}>
                        {members.map(member => (
                            <div key={member.id} className={styles.memberCard}>
                                <img src={`http://localhost:5000/${member.path}`} alt={member.name} className={styles.memberImage} />
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.memberDesc}>{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Csapattagok;
