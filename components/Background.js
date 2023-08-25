import styles from "../styles/Background.module.css";
import BgVideo from "../assets/background.mp4";

function Background() {
  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,-25" />
      <video autoPlay loop muted className={styles.video}>
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div className={styles.header}>
        <div className={styles.idTitle}>
          <h1 className={styles.title}>Joan Mas</h1>
          <h2 className={styles.underTitle}>Developer <span className="material-symbols-outlined">
radio_button_unchecked
</span></h2>
        </div>
      </div>
    </div>
  );
}

export default Background;
