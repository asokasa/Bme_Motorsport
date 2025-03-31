import React, { useEffect, useState, useRef } from 'react';
import styles from './Tamogatoink.module.css';
import '../App.css';
import Footer from '../g_comps/My_Footer';

const Tamogatoink = () => {
    const tamogatoinkRef = useRef(null);
    const [sponsors, setSponsors] = useState([]);

    const updateRandomValues = () => {
        const randomTopValue = Math.floor(Math.random() * (95 - 10 + 1)) + 10;
        const randomBottomValue = Math.floor(Math.random() * (95 - 55 + 1)) + 55;

        document.documentElement.style.setProperty('--top_random_value', `${randomTopValue}%`);
        document.documentElement.style.setProperty('--bottom_random_value', `${randomBottomValue}%`);
    };

    useEffect(() => {
        updateRandomValues();

        const tamogatoinkElement = tamogatoinkRef.current;
        const handleAnimationIteration = () => {
            updateRandomValues();
        };

        tamogatoinkElement.addEventListener('animationiteration', handleAnimationIteration);
        return () => {
            tamogatoinkElement.removeEventListener('animationiteration', handleAnimationIteration);
        };
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/data/sponsors")
            .then(res => res.json())
            .then(data => {
                console.log("Sponsor data received:", data);
                setSponsors(data);
            })
            .catch(err => {
                console.error("Failed to fetch sponsors:", err);
            });
    }, []);

    const renderSponsorGroup = (label) => {
        const group = sponsors.filter(s => s.type === label);
        if (group.length === 0) return null;

        return group.map(sponsor => (
            <a key={sponsor.id} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img
                    src={`http://localhost:5000/${sponsor.path}`}
                    alt="Sponsor"
                    className={styles.sponsorImage}
                />
            </a>
        ));
    };

    return (
        <div ref={tamogatoinkRef} className={styles.tamogatoink}>
            <div className={styles.diamond}>
                <h2>Gyémánt fokozatú támogatók</h2>
                <div className={styles.pic_cont}>
                    {renderSponsorGroup("gyémánt")}
                </div>
            </div>

            <div className={styles.gold}>
                <h2>Arany fokozatú támogatók</h2>
                <div className={styles.pic_cont}>
                    {renderSponsorGroup("arany")}
                </div>
            </div>

            <div className={styles.silver}>
                <h2>Ezüst fokozatú támogatók</h2>
                <div className={styles.pic_cont}>
                    {renderSponsorGroup("ezüst")}
                </div>
            </div>

            <div className={styles.bronz}>
                <h2>Bronz fokozatú támogatók</h2>
                <div className={styles.pic_cont}>
                    {renderSponsorGroup("bronz")}
                </div>
            </div>

            <div className={styles.others}>
                <h2>További támogatók</h2>
                <div className={styles.pic_cont}>
                    {renderSponsorGroup("további")}
                </div>
            </div>

            <div className={styles.university}>
                <h2>Egyetemi szintű támogatók</h2>
                <div className={styles.pic_cont}>
                    {renderSponsorGroup("egyetemi")}
                </div>
            </div>

            
        </div>
    );
};

export default Tamogatoink;
