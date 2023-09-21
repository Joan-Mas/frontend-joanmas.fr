// import interne
import styles from "../styles/Home.module.css";
import Menu from "./Menu";
import EnTete from "./EnTete";
import CustomCursor from "./CustomCursor"; // curseur circulaire

function Home() {

  // const inverseColor = {
  //   filter: light === true ? "invert(1)" : "invert(0)",
  // };
  
  return (
    <main className={styles.main} /*style={inverseColor}*/>
      <div className={styles.container}>
        <CustomCursor />
        <EnTete/>
        <Menu className={styles.menu}/>
      </div>
    </main>
  );
}

export default Home;
