import React from 'react';
import styles from './Csapattagok.module.css';
import Member_Cards from '../g_comps/Member_Cards';
import Tagok_List from '../Tagok_List.json';
import videoSrc from '/assets/logo_anim.mp4';
import Footer from '../g_comps/My_Footer';

const Csapattagok = () => {
    // Categorize cards based on the second section (keyword)
    const categorizedCards = Tagok_List.reduce((categories, { originalName, sections }) => {
        const keyword = sections[1].toLowerCase(); // Use the second section as the category
        const card = (
            <Member_Cards
                key={originalName}
                fileName={originalName}
                title={`${sections[0]}`} // Combine first and second sections
                description={sections[2]} // Third section
            />
        );

        if (!categories[keyword]) {
            categories[keyword] = []; // Initialize category array if not present
        }
        categories[keyword].push(card);
        return categories;
    }, {});

    return (
        <div className={styles.csapattagok}>
            <div className={styles.bg_img}>
                <video autoplay muted loop>
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>

            <h1>Csapattagok</h1>

            

            <h2>Vezetők</h2>
            <div id='vezeto' className={styles.card_container}>
                {categorizedCards['vezeto'] || <p>Nincs vezető a listában.</p>}
            </div>

            <h2>Motorvezérlés csoport</h2>
            <div id='motor' className={styles.card_container}>
                {categorizedCards['motor'] || <p>Nincs tag a Motorvezérlés csoportban.</p>}
            </div>
            <h2>Mechanika csoport</h2>
            <div id='mechanika' className={styles.card_container}>
                {categorizedCards['mechanika'] || <p>Nincs tag a Mechanika csoportban.</p>}
            </div>

            <h2>Hybrid csoport</h2>
            <div id='hybrid' className={styles.card_container}>
                {categorizedCards['hybrid'] || <p>Nincs tag a Mechanika csoportban.</p>}
            </div>

            <h2>Mechanika csoport</h2>
            <div id='elektronika' className={styles.card_container}>
                {categorizedCards['elektronika'] || <p>Nincs tag a Mechanika csoportban.</p>}
            </div>

            <h2>Mechanika csoport</h2>
            <div id='futomu' className={styles.card_container}>
                {categorizedCards['futomu'] || <p>Nincs tag a Mechanika csoportban.</p>}
            </div>

            <h2>Kompozit csoport</h2>
            <div id='kompozit' className={styles.card_container}>
                {categorizedCards['kompozit'] || <p>Nincs tag a Kompozit csoportban.</p>}
            </div>
            <h2>Kompozit csoport</h2>
            <div id='marketing' className={styles.card_container}>
                {categorizedCards['marketing'] || <p>Nincs tag a Marketing csoportban.</p>}
            </div>
            <h2>Kompozit csoport</h2>
            <div id='penzugy' className={styles.card_container}>
                {categorizedCards['penzugy'] || <p>Nincs tag a Pénzügy csoportban.</p>}
            </div>


            <Footer />
        </div>

        
    )
};

export default Csapattagok;