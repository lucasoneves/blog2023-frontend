import NavBar from "../Navbar/Navbar";
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <NavBar />
    </div>
  );
};

export default Header;