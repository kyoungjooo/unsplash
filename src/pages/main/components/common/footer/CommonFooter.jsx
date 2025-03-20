import styles from "./commonFooter.module.scss";
import logo from "@assets/images/logo.svg";

export default function CommonFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <img className={styles.footer__logo} src={logo}></img>
        <p className={styles.footer__text}>멋진 것을 만들어 보세요</p>
      </div>
    </footer>
  );
}
