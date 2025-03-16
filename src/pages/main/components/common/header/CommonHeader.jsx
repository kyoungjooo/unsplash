import styles from "./CommonHeader.module.scss";
import logo from "@assets/images/logo.svg";
export default function CommonHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <img src={logo} alt="" className={styles.header__logo} />
        <form className={styles.header__search}>
          <div className={styles.search__container}>
            <button className={styles.search__icon}></button>
            <input
              className={styles.search__input}
              type="text"
              placeholder="사진과 일러스트 검색"
            />
            <button className={styles.search__button}>이미지 검색</button>
          </div>
        </form>
      </div>
      <div className={styles.header__right}>
        <div className={styles.header__language}>
          <span className={styles.language__icon}></span>
          <span className={styles.language__selected}>한국어</span>
          <div className={styles.language__container}>
            <ul>
              <li>한국어</li>
              <li>영어</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
