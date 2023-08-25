import styles from "../styles/Menu.module.css";
import Link from "next/link";


function Menu() {
  return (
    
      <div className={styles.menuContainer}>
 
        <Link href="/" className={styles.menuItem}>Home</Link>
        <Link href="/portfolio" className={styles.menuItem}>Portfolio</Link>
        <Link href="/about" className={styles.menuItem}>About</Link>
        <Link href="/contact" className={styles.menuItem}>Contact</Link>

      </div>
    
  );
}

export default Menu;
