import styles from "../styles/Menu.module.css";
import Link from "next/link";
import { Button, ConfigProvider } from "antd";

function Menu() {
  return (
    <ConfigProvider theme={{
        token: {
          // Seed Token
          colorPrimary: 'grey',
          borderRadius: 2,
  
          // Alias Token
          colorBgContainer: 'white',
        },
      }}>
      <div className={styles.menuContainer}>
        <div></div>
        <Link href="/"><Button className={styles.menuItem}>HOME</Button></Link>
        <Link href="/portfolio"><Button className={styles.menuItem}>PORTFOLIO</Button></Link>
        <Link href="/info"><Button className={styles.menuItem}>INFO</Button></Link>
        <Link href="/contact"><Button className={styles.menuItem}>CONTACT</Button></Link>
      </div>
    </ConfigProvider>
  );
}

export default Menu;
