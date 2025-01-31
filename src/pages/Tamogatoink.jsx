import React, { useEffect, useRef } from 'react';
import styles from './Tamogatoink.module.css';
import '../App.css';
import Footer from '../g_comps/My_Footer';




const Tamogatoink = () => {


    const tamogatoinkRef = useRef(null);

    
    const updateRandomValues = () => {
        const randomTopValue = Math.floor(Math.random() * (95 - 10 + 1)) + 10;// Random percentage between 15% and 70%
        const randomBottomValue = Math.floor(Math.random() * (95 - 55 + 1)) + 55;

        

        
        document.documentElement.style.setProperty('--top_random_value', `${randomTopValue}%`);
        document.documentElement.style.setProperty('--bottom_random_value', `${randomBottomValue}%`);
        
    };

    useEffect(() => {
        
        updateRandomValues();

        
        const tamogatoinkElement = tamogatoinkRef.current;

        
        const handleAnimationIteration = () => {
            updateRandomValues();
            tamogatoinkElement.querySelector('.diamond::before').style.left = '-150%';
        };

        tamogatoinkElement.addEventListener('animationiteration', handleAnimationIteration);

        
        return () => {
            tamogatoinkElement.removeEventListener('animationiteration', handleAnimationIteration);
        };
    }, []);






    return (




        <div ref={tamogatoinkRef} className={styles.tamogatoink}>


            <div className={styles.diamond}>





                <h2>Gyemant fokozatú támogatók</h2>
                <div className={styles.pic_cont}>
                    <a href="https://shop.berner.eu/hu-hu/" target="_blank"><img src="/assets/Gyemant_white/BERNER_standard_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href="https://www.bosch.hu/karrier/?gad_source=1&gclid=Cj0KCQiA0MG5BhD1ARIsAEcZtwR0mG1D3l-S3Oh4XhhypAu-wKiyVf-Y3fDTeWA1im48WFPYYBlEvM4aAlHUEALw_wcB"><img src="/assets/Gyemant_white/Bosch_white_2023.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Gyemant_white/Denso_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Gyemant_white/FerroFlex_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Gyemant_white/imech_logo_white.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Gyemant_white/NI_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Gyemant_white/PNH_2_white.webp" alt="" /></a>

                </div>





            </div>

            <div className={styles.gold}>
                <h2>Arany fokozatú támogatók</h2>
                <div className={styles.pic_cont}>

                    <a target="_blank" href=""><img src="/assets/Arany_white/4K-RAIDERS-LOGO_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/Altium_Logo_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/Audi_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/Borsodi CNC_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/Demes Falap_feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/femforgtech-logo_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/fornetti_fehér.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/GERACON_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/Götz_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/JB_Dekor_logo_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/lézer trió_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/Mitko_logo_vector_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/OMV_Maxx_Motion_feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/PTC_logo_vector_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/sentimento_fehér.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/TE Connectivity_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/VARINEX_feher_FINAL.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Arany_white/Viwa_logo_feher.webp" alt="" /></a>




                </div>

            </div>

            <div className={styles.silver}>
                <h2>Ezüst fokozatú támogatók</h2>
                <div className={styles.pic_cont}>


                    <a target="_blank" href=""><img src="/assets/Ezust_feher/3D connexion_logo_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/ADAM_ledfal_berles_white_RGB.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/biotekuj_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/BSSW_logo_vector_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/c3d_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/Chesterton_Logo_White_FOR_PP_PRESENTATIONS.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/DDD Control_logo_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/DRX_logo_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/Elektrotech_logo_feher_Rajztábla 1.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/esab_white_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/ezpump_logo_white_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/Ferdinand Gross_logo_fehér.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/Fibretech_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/Flaar_logo_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/H Eco Tech_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/Innomatrix_logo_feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/Kész gép_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/Knorr_Bremse_fehér.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/Kollaboratív_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/Loctite_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/lomex-logo_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/Makita_logo_vector_feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/Millenia_logo_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/Resinemat_logo_white_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/teroson_white.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/toolrepair_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/Tracon_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/Trumpf_logo_white_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Ezust_feher/veszmont_white.webp" alt="" /></a>


                </div>

            </div>

            <div className={styles.bronz}>
                <h2>Bronz fokozatú támogatók</h2>
                <div className={styles.pic_cont}>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Bajnok motor_logo_fehér.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Bebo_vector_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Belcord_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Bibus Metals_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Bocz-N-logo_vektor_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Bognar_logo_vector_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Csermák_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Csome_logo_vector_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Easturn_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Ekol_logo_fehér.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/EMAXA_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Emodrivex_logoo_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Fabak_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/faguru_logo_vector_feher_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/fémalk_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Ferrosys_logo_png_feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/GYMBEAM_PNG.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/hermann logo_vector_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/HULLO_logo_vector_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/hutoepito_logo_vector_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Hyundai_logo_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Igus_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/instrum-logo-white_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Karaszy_fehér.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Kvint_R_logo_3d_print_solutions_white_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Lotson_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/MAHLE_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Microsolder_feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Mirka_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Modul_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/molex_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Motul_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Müki_logo_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/muzsai_metall_white_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/olin-logo_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/PalocRing_logo_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Partner cable_logo_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/PLTS_logo_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Porsztatik_logo_fehér.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Purpoint_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/PWX_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Ricsi_logo_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Röhm_logo_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Rolling_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Róna_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/tesa_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/T-Jolle_logo_white_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Triász tömlő_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Bronz_white/Unipcb_logo_fehér 2022.webp" alt="" /></a>


                </div>

            </div>

            <div className={styles.others}>
                <h2>További támogatók</h2>
                <div className={styles.pic_cont}>

                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/almasi feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/Amari_logo_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/askubal_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/AVL_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/Bebesi_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/BLM_LOGO_feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/chassisparts_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/Cobra_white_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/digitalpress_feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/Fullpromo_feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/hestore_egyszeru_feher_vektoros.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/Home autópark_logo_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/hungaroring-logo-1 feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/Kaliber_logo_feher-01.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/Messer_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/Novia_logo_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/Prince Fibre_fehér_png.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/Red Bull feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/Rls_logo_fehér 2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/rollerchain_logo (1) feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Tovabbi_white/versenyfelszereles_feher.webp" alt="" /></a>




                </div>

            </div>

            <div className={styles.university}>
                <h2>Egyetemi szintű támogatók</h2>
                <div className={styles.pic_cont}>
                    <a target="_blank" href=""><img src="/assets/Egyetemi_white/BME_logo.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Egyetemi_white/ehk_white.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Egyetemi_white/Energ_tanszek_feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Egyetemi_white/GJT_logo_feher_2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Egyetemi_white/GPK_logo_feher_2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Egyetemi_white/gt3.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Egyetemi_white/GTT_feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Egyetemi_white/Gyartas_szakosztaly_feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Egyetemi_white/KJK_logo_feher_2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Egyetemi_white/Mugep_logo_feher_2022.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Egyetemi_white/Polimer_Technika_feher.webp" alt="" /></a>
                    <a target="_blank" href=""><img src="/assets/Egyetemi_white/vik_feher.webp" alt="" /></a>

                </div>

            </div>






        <Footer/>
        </div>
    );
};

export default Tamogatoink;