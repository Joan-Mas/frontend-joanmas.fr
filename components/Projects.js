import styles from "../styles/Home.module.css";
import Menu from "./Menu";
import EnTete from "./EnTete";
import MySlider from "./SliderComponent";

import CustomCursor from "./CustomCursor"; // curseur circulaire

function Projects() {
  return (
    <main className={styles.main} /*style={inverseColor}*/>
      <div className={styles.container}>
        <CustomCursor />
        <EnTete />
        <MySlider />
        <div>
          <Menu className={styles.menu} />
        </div>
      </div>
    </main>
  );
}

export default Projects;
