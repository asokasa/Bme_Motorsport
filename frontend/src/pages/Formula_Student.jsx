import React from 'react';
import styles from './Formula_Student.module.css';


const Formula_Student = () => (
    
    <div className={styles.formula_student}>

        <div className={styles.intro}>
            <h2>Formula Student</h2>
            <div className={styles.introInner}>
                
            <p>&nbsp;&nbsp;&nbsp;&nbsp;A Formula Student egy nemzetközi mérnökhallgatói versenysorozat, amelyben egyetemi és főiskolai csapatok terveznek, építenek és versenyeztetnek együléses versenyautókat. A hallgatók nem csupán technikai tudásukat bizonyítják, hanem komplex mérnöki, gazdasági és menedzsment képességeiket is: az autó megépítése mellett egy teljes üzleti koncepciót dolgoznak ki, prezentálnak szakmai zsűri előtt, és gondoskodnak a projekt fenntartásához szükséges pénzügyi háttérről is.<br />
            &nbsp;&nbsp;&nbsp;&nbsp;A versenysorozat az 1980-as években indult az Egyesült Államokban, és azóta világszerte meghonosodott. Napjainkra Európától Dél-Amerikáig, Ausztráliától Ázsiáig számos országban rendeznek hivatalos futamokat – köztük Németországban (Hockenheimring), az Egyesült Királyságban (Silverstone), Ausztriában (Red Bull Ring), valamint 2010 óta Magyarországon is. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;A Formula Student különlegessége, hogy a hallgatók nem csupán egy versenyautó megépítésén dolgoznak, hanem egy összetett, ipari szintű projekt teljes körű megvalósításán. A verseny a műszaki kiválóság mellett nagy hangsúlyt fektet az üzleti szemléletre, a költséghatékonyságra, valamint a csapatmunka és a prezentációs készségek fejlesztésére is. A megmérettetés során statikus és dinamikus versenyszámokban kell bizonyítaniuk: ezek során az autó teljesítménye, megbízhatósága és technikai megoldásai mellett a koncepció mögötti gondolkodásmódot, az előadásmódot és a projektmenedzsment képességeket is értékeli a szakmai zsűri. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;A Formula Student nem csupán egy verseny – egy belépő a jövő mérnökei, innovátorai és vezetői világába.
            </p>
            <img src="assets/FS_Page/Formula_Student_2.jpg" alt="" />
                
            </div>
            
        </div>

        <div className={styles.topDiv}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 892.25 114.72 1200 0z" className={styles.shapeFill}></path>
            </svg>
        </div>

        <div className={styles.categories}>
            <h3>A Formula Student 3 kategóriája</h3>
            <p>A versenysorozat három technikai kategóriában zajlik, melyek különböző mérnöki kihívásokat és fókuszterületeket képviselnek:</p>
            <div className={styles.catContainer}>

            <img src="assets/FS_Page/CV_EV_DV.jpg" alt="Internal Combustion Vehicle" />
            
            <div className={styles.cv_ev_dv}>
                
                <ul>
                    <li>
                    <h4>CV – Internal Combustion Vehicle / Belsőégésű motorral hajtott jármű</h4>
                    <p>Ebben a kategóriában a csapatok belső égésű motorral hajtott járművet építenek. A cél a hagyományos hajtáslánc optimalizálása, magas teljesítmény és megbízhatóság mellett.</p>
                    </li>
                    <li>
                    <h4>EV – Electric Vehicle / Elektromos meghajtású jármű</h4>
                    <p>Az EV kategóriában teljesen elektromos meghajtású autók versenyeznek. A fókusz az energiamenedzsmenten, az akkumulátorok biztonságos kezelésén és a fejlett elektronikai rendszereken van.</p>
                    </li>
                    <li>
                    <h4>DV – Driverless Vehicle / Önvezető Jármű</h4>
                    <p>Az önvezető járművek kategóriájában a csapatok olyan rendszert fejlesztenek, amely emberi beavatkozás nélkül képes teljesíteni a pályát. A hangsúly az érzékelők, algoritmusok és a jármű autonóm irányításán van.</p>
                    </li>
                </ul> 
                
            </div>

            
            </div>

            
        </div>

        <div className={styles.bottomDiv}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className={styles.shapeFill}></path>
                </svg>
            </div>
        


        <div className={styles.versenyszamok}>
            <h3>Versenyszámok</h3>
            <p>A versenyek lebonyolítása több napot ölel fel, és szigorúan strukturált menetrendet követ. A program a technikai ellenőrzéssel veszi kezdetét, ahol minden járművet részletes vizsgálatnak vetnek alá. A cél, hogy kizárólag a biztonsági és műszaki előírásoknak maradéktalanul megfelelő autók kerüljenek a pályára. Ezt követik a különböző versenyszámok, amelyek két fő kategóriába sorolhatók: statikus és dinamikus próbákra. A végeredményt a kettő kombinációja adja: a projektelméletre és prezentációkra épülő statikus számok 40%-ban, míg a pályán mutatott gyakorlati teljesítmény 60%-ban járul hozzá a csapat összpontszámához.</p>

            <div className={styles.statikus}>
                <h4>Statikus versenyszámok</h4>
                <div className={styles.staticContainer}>

                    <div className={styles.vszCards}>     
                        <div className={styles.vszCardsInner}>
                            <div className={styles.vszCardsFront}>
                                <img src="assets/FS_Page/Engineering_Design_2.jpg" alt="Engineering Design" />
                                <h5>Engineering Design</h5>
                            </div>
                            <div className={styles.vszCardsBack}>
                                <p>A csapatok bemutatják az autó tervezésének műszaki részleteit egy szakértő zsűrinek. A fókusz a tervezési folyamaton, a választott megoldások indoklásán, valamint az autó innovatív és biztonságos kialakításán van.</p>
                            </div>
                        </div>     
                    </div>

                    <div className={styles.vszCards}>
                        <div className={styles.vszCardsInner}>
                            <div className={styles.vszCardsFront}>
                                <img src="assets/FS_Page/Cost_And_Manufacturing_2.jpg" alt="Cost and Manufacturing" />
                                <h5>Cost and Manufacturing</h5>    
                            </div>
                            <div className={styles.vszCardsBack}>
                                <p>A versenyzők bemutatják, hogyan és mennyiért építették meg az autót. A zsűri a költséghatékonyságot, a gyártástervezést és a dokumentáció minőségét értékeli. Szimulált beszerzési és gyártási szituációk is részei lehetnek.</p>    
                            </div>
                        </div>
                    </div>

                    <div className={styles.vszCards}>
                        <div className={styles.vszCardsInner}>
                            <div className={styles.vszCardsFront}>
                                <img src="assets/FS_Page/Business_Plan_Presentation_2.jpg" alt="Business Plan Presentation" />
                                <h5>Business Plan Presentation</h5>
                            </div>
                            <div className={styles.vszCardsBack}>
                                <p>A csapatok egy fiktív befektetői csoport előtt mutatják be üzleti terveiket, amelyek egy versenyautóra vagy annak egy konkrét alkatrészére épülő vállalkozás ötleteit dolgozzák ki. A cél, hogy bizonyítsák: képesek valós piaci igényekre reagáló, pénzügyileg fenntartható és nyereséges üzleti modelleket kialakítani.</p>
                            </div>
                        </div>  
                    </div>

                </div>
            </div>


            <div className={styles.statikus}>
                <h4>Dinamikus versenyszámok</h4>
                <div className={styles.dynamicContainer}>

                    <div className={styles.vszCards}>
                        <div className={styles.vszCardsInner}>
                            <div className={styles.vszCardsFront}>
                                <img src="assets/FS_Page/Acceleration_2.jpg" alt="Acceleration" />
                                <h5>Acceleration / Gyorsulás</h5>
                            </div>
                            <div className={styles.vszCardsBack}>
                                <p>Ebben a versenyszámban a jármű gyorsító képessége kerül középpontba, különös tekintettel a motor teljesítményére és a hajtáslánc hatékonyságára. A feladat egy 75 méteres, egyenes szakasz teljesítése állórajttal, a lehető legrövidebb idő alatt.</p>
                                <ul>
                                    <li>Pályahossz: 75 méter</li>
                                    <li>Legjobb csapatok ideje: 3,2–3,5 másodperc</li>
                                    <li>Elérhető végsebesség: 75–85 km/h</li>
                                    <li>Átlagos gyorsulás: 1,25–1,5 g</li>
                                </ul>
                            </div>
                        </div>   
                    </div>

                    <div className={styles.vszCards}>
                        <div className={styles.vszCardsInner}>
                            <div className={styles.vszCardsFront}>
                                <img src="assets/FS_Page/Skid_Pad_2.jpg" alt="Skid Pad" />
                                <h5>Skid Pad</h5>
                            </div>
                            <div className={styles.vszCardsBack}>
                                <p>A skid pad versenyszám célja a jármű oldalirányú tapadásának és kanyarstabilitásának vizsgálata. A pálya egy nyolcas alakú vonalvezetésű, szimmetrikus körsorozatból áll, ahol mindkét irányban két kört kell teljesíteni. A jó eredményhez precíz futóműhangolás, megfelelő súlyeloszlás, alacsony tömegközéppont és jó minőségű gumiabroncsok szükségesek.</p>
                                <ul>
                                    <li>Pálya szélessége: 3 méter</li>
                                    <li>Körök belső átmérője: 15,25 méter</li>
                                </ul>
                            </div>
                        </div>  
                    </div>

                    <div className={styles.vszCards}>
                        <div className={styles.vszCardsInner}>
                            <div className={styles.vszCardsFront}>
                                <img src="assets/FS_Page/Autocross_2.jpg" alt="Autocross" />
                                <h5>Autocross</h5>
                            </div>
                            <div className={styles.vszCardsBack}>
                                <p>Ez a versenyszám egy technikás, maximum 1500 méter hosszú pályán zajlik, amely rövid egyenesekből, szűk kanyarokból, szlalomelemekből és hajtűkanyarokból áll. A jármű irányíthatóságát, gyorsulási és lassítási képességét, valamint kanyarban mutatott viselkedését méri. A futam eredménye alapján határozzák meg az Endurance versenyszám rajtsorrendjét.</p>
                                <ul>
                                    <li>Pályahossz: maximum 1500 méter</li>
                                    <li>Egyenes szakaszok hossza: maximum 80 méter</li>
                                    <li>Kanyarsugár: maximum 25 méter</li>
                                    <li>Szlalom bójaköz: 7,5–12 méter</li>
                                    <li>Átlagsebesség: 40–48 km/h</li>
                                </ul>
                            </div>
                        </div>    
                    </div>

                    <div className={styles.vszCards}>
                        <div className={styles.vszCardsInner}>
                            <div className={styles.vszCardsFront}>
                                <img src="assets/FS_Page/Endurance_2.jpg" alt="" />
                                <h5>Endurance</h5>
                            </div>
                            <div className={styles.vszCardsBack}>
                                <p>Az Endurance a leghosszabb és legkomplexebb dinamikus versenyszám, amely a jármű megbízhatóságát és állóképességét teszi próbára. A csapat két pilótája összesen 22 kilométert teljesít egy technikás pályán, amely az autocross nyomvonalához hasonlít, de a szlalom szakaszok bójaközei 2–5 méterrel nagyobbak. A verseny különösen kritikus pontja a pilótacsere, amely során a jármű motorját vagy elektronikus rendszerét újra kell indítani.</p>
                                <ul>
                                    <li>Táv: 22 km</li>
                                    <li>Átlagsebesség: 60–70 km/h</li>
                                    <li>Kanyarsugár: maximum 25 méter</li>
                                    <li>Maximális sebesség: kb. 110 km/h</li>
                                </ul>
                            </div>
                        </div>  
                    </div>

                    <div className={styles.vszCards}>
                        <div className={styles.vszCardsInner}>
                            <div className={styles.vszCardsFront}>
                                <img src="assets/FS_Page/Efficiency_2.jpg" alt="" />
                                <h5>Efficiency</h5>
                            </div>
                            <div className={styles.vszCardsBack}>
                                <p>
                                    Az Efficiency versenyszám célja annak értékelése, hogy a jármű mennyire hatékonyan használja fel az energiát az Endurance futam teljesítése során. Belső égésű motorral hajtott járművek esetében a fogyasztást üzemanyag-tömeg alapján mérik: a verseny előtt feltöltött üzemanyagot lemérik, majd az Endurance befejezése után ismét, és a különbség alapján számolják ki a felhasznált mennyiséget. <br />
                                    A pontozás során figyelembe veszik, hogy a csapat milyen üzemanyag-fogyasztással és milyen tempóval teljesítette a 22 kilométeres távot. A cél a lehető legjobb arány elérése a teljesítmény és a hatékonyság között. Fontos kiemelni, hogy Efficiency pontokat kizárólag azok a csapatok szerezhetnek, amelyek sikeresen befejezik az Endurance versenyt.
                                </p>
                            </div> 
                        </div>
                    </div>

                </div>
            </div>
        
        </div>
        </div>
    
);

export default Formula_Student;
