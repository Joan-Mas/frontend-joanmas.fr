import styles from "../styles/Background.module.css";
import BgVideo from "../assets/background.mp4";
import BgPoster from "../assets/bgposter.png";
import BackgroundG from "../assets/background.gif";
import { useState } from "react";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { cursorBorW } from "../reducers/mouse";

function Background() {
  const [light, setLight] = useState(false);

  const dispatch = useDispatch();

  const addLight = () => {
    dispatch(cursorBorW(light));
  };

  const handleClick = () => {
    if (light === false) {
      setLight(true);
    } else {
      setLight(false);
    }
    addLight();
  };

  const inverseColor = {
    filter: light === true ? "invert(1)" : "invert(0)",
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,-25"
      />

      {/* <video autoPlay loop muted playsInline className={styles.video} style={inverseColor} poster={BgPoster}>
        <source src={BgVideo} type="video/mp4" />
      </video> */}

      <Image
        className={styles.video}
        style={inverseColor}
        src={BackgroundG}
        alt="bg"
      />

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
    </div>
  );
}

export default Background;
