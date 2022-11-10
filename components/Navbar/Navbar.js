import styles from './Navbar.module.css';
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <h2>lucasneves</h2>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
