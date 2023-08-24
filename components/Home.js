import styles from "../styles/Home.module.css";
import BgVideo from "../assets/background.mp4";

function Home() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <main className={styles.main}>
        <video autoPlay loop muted className={styles.video}>
          <source src={BgVideo} type="video/mp4" />
        </video>

        <div className={styles.header}>
          <div className={styles.iconNav}>
            <span class="material-symbols-outlined">menu</span>
          </div>

          <div className={styles.idTitle}>
            <h1 className={styles.title}>Joan Mas</h1>
            <h2 className={styles.underTitle}>Developer</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
