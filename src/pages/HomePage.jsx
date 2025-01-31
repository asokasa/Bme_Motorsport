import React from 'react';
import styles from './HomePage.module.css';
import Footer from '../g_comps/My_Footer';
import My_carousel from '../g_comps/My_carousel';
import SignUpForm from '../g_comps/SignUpForm';


const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.banner_pic}>
        <img src="/assets/main_bg.jpg" alt="" />
      </div>
      <div className={styles.main_page_content}>
        <div className={styles.home_1}>
          <h2>Legfrissebb híreink</h2>
          <My_carousel />
        </div>




        <div className={styles.home_2}>
          <div className={styles.home2_szoveg}>
            <h3>2018 ÓTA</h3>
            <a className={styles.fs_button} href="">Formula Student</a>
            <a className={styles.support_button} href="">TÁMOGATÓINK</a>
          </div>
          <div className={styles.home2_pic}>
            <img src="assets/home_page/Main_2_pic.jpg" alt="" />
          </div>

        </div>


        <div className={styles.home3}>
          <div className={styles.home_3_pic1}></div>
          <div className={styles.home_3_text}>
            <h2>Csapatunk</h2>
            <p>A BME Motorsport 2018 végén alakult csupán 8 fővel, a Budapesti Műszaki és Gazdaságtudományi Egyetemen azzal a céllal, hogy kiemelkedő fejlődési és tapasztalatszerzési lehetőséget biztosítson a fiatal, tehetséges és motorsport iránt érdeklődő hallgatóknak. Csapatunkat jelenleg 80 lelkes és elkötelezett mérnök, közgazdász, matematikus, valamint gazdaságtudományi szakos hallgató alkotja.</p>
            <a href="">ISMERD MEG A CSAPATOT!</a>
          </div>
          <div className={styles.home_3_pic2}></div>
        </div>
      </div>


      <div className={styles.home_4}>
        <SignUpForm />
      </div>

      <Footer />
    </div>
  )
};

export default HomePage;