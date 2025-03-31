import React from 'react';
import styles from './Formula_Student.module.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Formula_Student = () => (
    <div className={styles.formula_student}>
        <Parallax pages={2}>

            {/* First Text Layer */}
            <ParallaxLayer offset={0} speed={1} className={styles.elso_feher}>
                <h2>FORMULA STUDENT</h2>
                <h3>A mérnök hallgatókért 1981 óta</h3>
                <p>A mai világban kiemelten fontos a szakterületen folytatott releváns munkatapasztalat,
                    hogy a végzett hallgatók könnyebben el tudjanak helyezkedni.
                    Ezzel a szemléletmóddal kezdődött a Formula Student története 1981-ben az Egyesült Államokban.
                    A Formula Student egy nemzetközi autó és mérnökversenysorozat, kizárólag egyetemista hallgatóknak,
                    amelynek központi eleme egy egyedi építésű formula versenyautó.
                    Megközelítőleg 800 intézmény csapata vesz részt a nemzetközi versenyeken minden évben.
                    Ezeket a versenyeket a nyár során rendezik meg, Európában a 2020-as szezonban 9 ilyen eseményt hirdettek meg.
                    <br />
                    <br />
                    Fontos kiemelni, hogy annak ellenére, hogy az épített gépek kompetensek lennének komoly versenyzésre
                    (3.0 másodperces gyorsulás százra; nagyon könnyű szénszálas váz),
                    a Formula Student elsősorban egy mérnökverseny, ahol a hallgatók a dinamikus versenyszámok (pályán való versenyzés) mellett több,
                    úgynevezett statikus (pénzügyi, dokumentációs) versenyszámon is összemérik a tudásukat.
                </p>
            </ParallaxLayer>

            {/* Image Layer - Set this to be between the text layers */}
            <ParallaxLayer offset={0} speed={0.5} factor={1} className={styles.background_cars}>

            </ParallaxLayer>

            {/* Second Text Layer */}
            <ParallaxLayer offset={1} factor={1.3} speed={1} className={styles.masodik}>


                <p>
                    A Formula Student versenysorozatban kizárólag egyetemi hallgatók alkothatnak csapatokat és mérhetik össze tudásukat a különböző kategóriákban. A csapatok egy adott egyetem égisze alatt működhetnek, és lényegében az egyetemen megszerzett elméleti tudást kell a gyakorlatba átültetni, kiegészítve rengeteg plusz információval.
                    <br /><br />
                    A alakulatok három kategóriába nevezhetnek: belsőégésű jármű (CV), elektromos jármű (EV) és önvezető jármű (DV). Egy egyetem kategóriánként csak egy csapattal vehet részt a versenyken. Az autókat szigorúan a Formula Student versenyszabályzata alapján kell megtervezni és összeépíteni, ezt minden versenyen ellenőrzik a gépátvételen.
                    <br /><br />
                    Mint fentebb említettük, a versenyszámok megoszlanak statikus és dinamikus versenyszámokra. A statikus versenyszámok közé tartozik az üzleti terv prezentáció (Business Plan Presentation Event); a Cost and Manufacturing Event, ahol az autó egyes elemeit és annak kötségeit kell prezentálnunk; valamint az Engineering Design Event. A dinamikus számok mérik az autó stabilitási képességeit (Skidpad versenyszám), gyorsulását (Acceleration versenyszám), valamint a dinamikusságát és megbízhatóságát (Autocross és Endurance versenyszám). A csapatokat versenyszámonként pontozzák előre meghatározott képletek szerint, és ezek alapján kerülnek rangorolásra a világranglistán.
                    <br /><br />
                    Minden csapatért a csapatkapitány felel, ő átlátja a teljes mérnöki és menedzsment folyamatokat. Csapatunk hierarchia-rendszerében alatta helyezkedik el a főmérnök, aki a mérnöki folyamatokért és az autóért felel. A főmérnök alatt helyezkednek el a különböző részegységek csoportvezetői (akik jellemzően már legalább egy éve tagok) és a csoportjaik (motor, járműdinamika, elektronika, váz, aerodinamika). A menedzsment csoport közvetlenül a csapatkapitány munkáját segíti, de szoros kapcsolatban van a többi csoporttal is. Ők felelnek a szponzorokért, a marketingért, az effektív kommunikációért, a rendezvényekért, a megjelenésért és az egyéb nem-mérnöki feladatokért.
                    <br /><br />
                    Ahhoz, hogy egy Formula Student autó megépülhessen, külső segítségre van szükség. Támogatóink többféleképpen hozzájárulhatnak a fejlesztéseinkhez, legyen szó anyagi, gyártási, oktatási vagy termékkel való hozzájárulásról. Nélkülük nem tartanánk ott, ahol. A csapatok cserébe megjelenési lehetőséget tudnak biztosítani, részt vesznek az adott cég rendezvényein, valamint a tagok nagy százalékban a támogató cégeknél találják meg mind a gyakornoki, mind a teljes állású munkahelyüket.
                </p>

            </ParallaxLayer>

        </Parallax>
    </div>
);

export default Formula_Student;
