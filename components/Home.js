import styles from "../styles/Home.module.css";
import Menu from "./Menu";
import Background from "./Background";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Background/>
        <Menu/>
      </main>
    </div>
  );
}

export default Home;
