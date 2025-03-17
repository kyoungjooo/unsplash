import { useState } from "react";
import styles from "./CommonNavigation.module.scss";
import { navData } from "./navData";

export default function CommonNavigation() {
  //params로 현재 경로 기본으로
  const [isCurrentMenu, setCurrentMenu] = useState("");

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__wrapper}>
        <ul className={styles.navigation__fixed}>
          <li className={styles.navigation__menu}>
            <button>사진</button>
          </li>
          <li className={styles.navigation__menu}>
            <button>일러스트</button>
          </li>
        </ul>
        <ul className={styles.navigation__scroll}>
          {navData.map((menu) => (
            <li className={styles.navigation__menu}>
              <button>{menu.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
