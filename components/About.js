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
            <div className={styles.itemAbout}>
              <Image
                src={picProfile}
                width={800}
                height={800}
                alt="Joan Mas"
                style={{ borderRadius: "20px" }}
              />
            </div>

            <a href={cvJoanMas} download="CvJoanMas" className={styles.cv}>
              Curriculum Vitae
            </a>
          </div>
        </div>
        <Menu className={styles.menu}/>
      </div>
    </main>
  );
}

export default About;
