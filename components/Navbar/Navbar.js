import styles from './Navbar.module.css';
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <h2>lucasneves</h2>
      <ul>
        <Link href="/">home</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
