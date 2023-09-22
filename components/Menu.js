import styles from "../styles/Menu.module.css";
//import { changePage } from '../reducers/localPage';

//import { useDispatch } from 'react-redux';
import Link from "next/link";

function Menu() {

  // const dispatch = useDispatch();

  // const setPage = (string) => {
  //   dispatch(changePage(string))
  // };

  return (
    
      <div className={styles.menuContainer}>
        <Link href="/"><div className={styles.menuItem}>Home</div></Link>
        <Link href="/projects"><div className={styles.menuItem}>Projects</div></Link>
        <Link href="/about"><div className={styles.menuItem}>About</div></Link>
        <Link href="/contact"><div className={styles.menuItem}>Contact</div></Link>
      </div>
    
  );
}

export default Menu;
