import styles from "../styles/Home.module.css";
import Menu from "./Menu";
import Background from "./Background";
import CustomCursor from "./CustomCursor"; //! idée de curseur circulaire
import { useDispatch, useSelector } from "react-redux";
import { cursorBorW } from "../reducers/mouse";
import React, { useState, useEffect } from "react";

function Home() {
  const [loading, setLoading] = useState(false);
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
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <main className={styles.main} style={inverseColor}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,-25"
      />
      {loading ? (
        <div className={styles.loading}>
        </div>
      ) : (
        <div>
          <CustomCursor />
          {/* <Background /> */}
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
        </div>
      )}
    </main>
  );
}

export default Home;
