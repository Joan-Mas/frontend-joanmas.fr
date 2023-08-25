import styles from "../styles/Background.module.css";
import BgVideo from "../assets/background.mp4";

function Background() {
  return (
    <div>
      <video autoPlay loop muted className={styles.video}>
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div className={styles.header}>
        <div className={styles.idTitle}>
          <h1 className={styles.title}>Joan Mas</h1>
          <h2 className={styles.underTitle}>Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Background;
