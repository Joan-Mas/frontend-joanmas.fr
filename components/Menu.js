import styles from "../styles/Menu.module.css";
import { changePage } from '../reducers/localPage';

import { useDispatch } from 'react-redux';

function Menu() {

  const dispatch = useDispatch();

  const setPage = (string) => {
    dispatch(changePage(string))
  };

  return (
    
      <div className={styles.menuContainer}>
        <div className={styles.menuItem} onClick={() => setPage('Home')}>Home</div>
        <div className={styles.menuItem} onClick={() => setPage('Portfolio')}>Portfolio</div>
        <div className={styles.menuItem} onClick={() => setPage('About')}>About</div>
        <div className={styles.menuItem} onClick={() => setPage('Contact')}>Contact</div>
      </div>
    
  );
}

export default Menu;
