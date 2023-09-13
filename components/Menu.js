import styles from "../styles/Menu.module.css";
import Link from "next/link";
import { cursorBorW } from '../reducers/mouse';
import { useDispatch } from 'react-redux';

function Menu() {

  const dispatch = useDispatch();

  const resetLight = () => {
    dispatch(cursorBorW(true))
  };

  return (
    
      <div className={styles.menuContainer}>
        <Link href="/"><div className={styles.menuItem} onClick={() => resetLight()}>Home</div></Link>
        <Link href="/portfolio"><div className={styles.menuItem} onClick={() => resetLight()}>Portfolio</div></Link>
        <Link href="/about"><div className={styles.menuItem} onClick={() => resetLight()}>About</div></Link>
        <Link href="/contact"><div className={styles.menuItem} onClick={() => resetLight()}>Contact</div></Link>
      </div>
    
  );
}

export default Menu;
