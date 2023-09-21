import styles from "../styles/Home.module.css";

//import externe
import React, { useState } from "react";

function EnTete() {

  // const [light, setLight] = useState(false);

  // const handleClick = () => {
  //   if (light === false) {
  //     setLight(true);
  //   } else {
  //     setLight(false);
  //   }
  // };



  return (
    <div className={styles.header}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,-25"
      />
      <div className={styles.idTitle}>
        <h1 className={styles.title}>
          Joan Mas
          <div>
            Developer fullstack Web & Mobile{" "}
            <span
              className="material-symbols-outlined"
              // onClick={() => handleClick()}
            >
              radio_button_unchecked
            </span>
          </div>{" "}
        </h1>
      </div>
    </div>
  );
}

export default EnTete;
