import { useState } from "react";
import styles from "./CommonNavigation.module.scss";

export default function CommonNavigation({ navData }) {
  //params로 현재 경로 기본으로
  const [isCurrentMenu, setCurrentMenu] = useState("");
  const sliceFixedMenuData = navData.slice(0, 2);
  const sliceScrollMenuData = navData.slice(2);

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__wrapper}>
        <ul className={styles.navigation__fixed}>
          {sliceFixedMenuData.map((menu) => (
            <li className={styles.navigation__menu}>
              <button>{menu.title}</button>
            </li>
          ))}
        </ul>
        <ul className={styles.navigation__scroll}>
          {sliceScrollMenuData.map((menu) => (
            <li className={styles.navigation__menu}>
              <button>{menu.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
