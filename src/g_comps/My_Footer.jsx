import React from 'react';

import styles from './My_Footer.module.css';



const Footer = () => {
    return (
        <footer className={styles.foot}>

            <div className={styles.footer_neon_line}></div>

            <div className={styles.footer_sponsor_container}>

                <a href="https://shop.berner.eu/hu-hu/" target="_blank"><img src="/assets/Gyemant_white/BERNER_standard_fehér_png.webp" alt="" /></a>
                <a target="_blank" href="https://www.bosch.hu/karrier/?gad_source=1&gclid=Cj0KCQiA0MG5BhD1ARIsAEcZtwR0mG1D3l-S3Oh4XhhypAu-wKiyVf-Y3fDTeWA1im48WFPYYBlEvM4aAlHUEALw_wcB"><img src="/assets/Gyemant_white/Bosch_white_2023.webp" alt="" /></a>
                <a target="_blank" href=""><img src="/assets/Gyemant_white/Denso_fehér_png.webp" alt="" /></a>
                <a target="_blank" href=""><img src="/assets/Gyemant_white/FerroFlex_fehér_png.webp" alt="" /></a>
                <a target="_blank" href=""><img src="/assets/Gyemant_white/imech_logo_white.webp" alt="" /></a>
                <a target="_blank" href=""><img src="/assets/Gyemant_white/NI_logo_fehér 2022.webp" alt="" /></a>
                <a target="_blank" href=""><img src="/assets/Gyemant_white/PNH_2_white.webp" alt="" /></a>
            </div>

            <p><span>&#169; BME Motorsport</span> 2024 | Minden jog fenntartva </p>



        </footer>
    );
};

export default Footer; 