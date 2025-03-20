import { useRef, useState } from "react";
import styles from "./commonHeader.module.scss";
import logo from "@assets/images/logo.svg";
import check from "@assets/images/check.svg";

const languages = ["한국어", "영어"];
export default function CommonHeader({ setParams }) {
  const [isToggle, setToggle] = useState(false);
  const searchRef = useRef();

  const handleToggleLanguage = () => {
    setToggle((prev) => !prev);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setParams((prev) => ({ ...prev, searchValue: searchRef.current.value }));
    searchRef.current.value = "";
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <img src={logo} alt="" className={styles.header__logo} />
        <form className={styles.header__search} onSubmit={handleSearch}>
          <div className={styles.search__container}>
            <button className={styles.search__icon}></button>
            <input
              className={styles.search__input}
              type="text"
              name="search"
              placeholder="사진과 일러스트 검색"
              ref={searchRef}
            />
            <button className={styles.search__button}>이미지 검색</button>
          </div>
        </form>
      </div>
      <div className={styles.header__right}>
        <div className={styles.header__language}>
          <span
            className={styles.language__wrapper}
            onClick={handleToggleLanguage}
          >
            <span className={styles.language__icon}></span>
            <span className={styles.language__selected}>한국어</span>
            {isToggle && (
              <div className={styles.language__container}>
                <span>언어 선택</span>
                <ul className={styles.language__items}>
                  {languages.map((lang) => (
                    <li className={styles.language__item}>
                      <span>{}</span>
                      <button>{lang}</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </span>
        </div>
      </div>
    </header>
  );
}
