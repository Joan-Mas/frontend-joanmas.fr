import styles from "../styles/Home.module.css";
import Menu from "./Menu";
import Background from "./Background";
import CustomCursor from "./CustomCursor"; //! idée de curseur circulaire

import React, { useState, useEffect } from "react";
import Image from "next/image";

function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main className={styles.main}>
      {loading ? (
        <div>
          <img src="https://media.giphy.com/media/cnzP4cmBsiOrccg20V/giphy.gif" width="480" height="480"  alt='loading'/>
        </div>
      ) : (
        <div>
          <CustomCursor />
          <Background />
          <Menu />
        </div>
      )}
    </main>
  );
}

export default Home;
