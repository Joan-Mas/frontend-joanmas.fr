import React, { useState, useEffect } from 'react';
import styles from '../styles/CustomCursor.module.css';
import { useSelector } from 'react-redux'; 

const CustomCursor = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onOffCursor = useSelector((state) => state.mouse.value);
  console.log(onOffCursor)

  let styleClass
  if(onOffCursor === false) {
    styleClass = styles.customCursorBlack;
  } else {
    styleClass = styles.customCursor;
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className={styleClass} style={{ left: position.x, top: position.y }} />;
};

export default CustomCursor;