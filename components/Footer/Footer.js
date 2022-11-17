import Wrapper from "../Wrapper/Wrapper";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <Wrapper>
      <footer className={styles.footer}>
        <ul>
          <li>
            <a href="">instagram</a>
          </li>
          <li>
            <a href="">twitter</a>
          </li>
          <li>
            <a href="">github</a>
          </li>
        </ul>
      </footer>
    </Wrapper>
  );
};

export default Footer;
