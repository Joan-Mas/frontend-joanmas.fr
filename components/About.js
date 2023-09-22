import styles from "../styles/Home.module.css";
import Menu from "./Menu";
import Image from "next/image";
import picProfile from "../assets/profil.png"; //penser à importer l'image à la stocker sous cette forme pour utiliser le component image
import cvJoanMas from "../assets/cvJoanMas.pdf";
import CustomCursor from "./CustomCursor";
import EnTete from "./EnTete";

function About() {
  return (
    <main className={styles.main} /*style={inverseColor}*/>
      <div className={styles.container}>
        <CustomCursor />
        <EnTete />
        <div>
          <div className={styles.containerAbout}>
            
              <Image
                src={picProfile}
                width={100}
                height={100}
                alt="photo de profil de Joan Mas"
                style={{ borderRadius: "10px" }}
              />
              <div className={styles.divSupAbout}>
                Technique et créatif, je conçois et développe des applications
                web et mobiles. Je propose des solutions innovantes et concrètes
                afin d’optimiser des interfaces et résoudre des problèmes
                spécifiques.
              </div>
           

            <a href={cvJoanMas} download="CvJoanMas" className={styles.cv}>
              Curriculum Vitae
            </a>
          </div>
        </div>
        <div>
          <Menu className={styles.menu} />
        </div>
      </div>
    </main>
  );
}

export default About;
