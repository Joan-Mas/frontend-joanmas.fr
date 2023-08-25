import styles from "../styles/Home.module.css";
import Menu from "./Menu";
import Background from "./Background";
import Image from "next/image";
import picProfile from "../assets/profil.png"; //penser à importer l'image à la stocker sous cette forme pour utiliser le component image
import cvJoanMas from "../assets/cvJoanMas.pdf";
import CustomCursor from "./CustomCursor"

function About() {
  return (
    <div>
      <main className={styles.main}>
      <CustomCursor />
        <div className={styles.containerAbout}>
          <div className={styles.itemAbout}>
            <Image
              src={picProfile}
              width={200}
              height={200}
              alt="Joan Mas"
              style={{ borderRadius: "20px" }}
            />
          </div>

      
            
              <a href={cvJoanMas} download="CvJoanMas" className={styles.cv}>Curriculum Vitae</a>
            
          
        </div>

        <Background />
        <Menu />
      </main>
    </div>
  );
}

export default About;
