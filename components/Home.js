import styles from "../styles/Home.module.css";
import Menu from "./Menu";
import Background from "./Background";
import CustomCursor from "./CustomCursor"

function Home() {
  return (
    <div>
      <main className={styles.main}>
      <CustomCursor />
        <Background/>
        <Menu/>
      </main>
    </div>
  );
}

export default Home;
