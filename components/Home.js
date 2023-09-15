// import interne
import styles from "../styles/Home.module.css";
import Menu from "./Menu";
import Pages from "./Pages";
import CustomCursor from "./CustomCursor"; // curseur circulaire

//import externe
import React, { useState } from "react";


function Home() {

  const [light, setLight] = useState(false);


  const handleClick = () => {
    if (light === false) {
      setLight(true);
    } else {
      setLight(false);
    }
  };

  const inverseColor = {
    filter: light === true ? "invert(1)" : "invert(0)",
  };

  return (
    <main className={styles.main} style={inverseColor}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,-25"
      />
      <div>
        <CustomCursor />

        <div className={styles.header}>
          <div className={styles.idTitle}>
            <h1 className={styles.title}>Joan Mas</h1>
            <h2 className={styles.underTitle}>
              Developer{" "}
              <span
                className="material-symbols-outlined"
                onClick={() => handleClick()}
              >
                radio_button_unchecked
              </span>
            </h2>
          </div>
        </div>
        <Menu />
        <Pages />
      </div>
    </main>
  );
}

export default Home;
