import styles from "../styles/Home.module.css";
import Menu from "./Menu";
import EnTete from "./EnTete";
import CustomCursor from "./CustomCursor"; // curseur circulaire

function Projects() {
  return (
    <main className={styles.main} /*style={inverseColor}*/>
      <div className={styles.container}>
        <CustomCursor />
        <EnTete />
        <div className={styles.projects}> here my Projects !</div>
        <Menu className={styles.menu}/>
      </div>
    </main>
  );
}

export default Projects;
