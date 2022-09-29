import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/artpotlov/react-sneakers">GitHub</a>
      <span>© 2022</span>
    </footer>
  );
}

export default Footer;
