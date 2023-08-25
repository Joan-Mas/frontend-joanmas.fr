import styles from "../styles/Menu.module.css";
import Link from "next/link";


function Menu() {
  return (
    
      <div className={styles.menuContainer}>

        <Link href="/"><div className={styles.menuItem}>Home</div></Link>
        <Link href="/portfolio"><div className={styles.menuItem}>Portfolio</div></Link>
        <Link href="/about"><div className={styles.menuItem}>About</div></Link>
        <Link href="/contact"><div className={styles.menuItem}>Contact</div></Link>

      </div>
    
  );
}

export default Menu;
