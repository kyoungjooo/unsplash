import { useState } from "react";
import styles from "./commonNavigation.module.scss";
import { navData } from "./navData";
import { useNavigate } from "react-router-dom";
export default function CommonNavigation({ setParams }) {
  const [isActive, setSctive] = useState("");
  const sliceFixedMenuData = navData.slice(0, 2);
  const sliceScrollMenuData = navData.slice(2);
  const navigate = useNavigate();

  const handleClickMenu = (menu) => {
    setParams((prev) => ({ ...prev, searchValue: menu.path }));
    navigate(`${menu.path}`);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__wrapper}>
        <ul className={styles.navigation__fixed}>
          {sliceFixedMenuData.map((menu, idx) => (
            <li key={idx} className={styles.navigation__menu}>
              <button onClick={() => handleClickMenu(menu)}>
                {menu.title}
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.navigation__scroll}>
          {sliceScrollMenuData.map((menu) => (
            <li key={menu.title} className={styles.navigation__menu}>
              <button onClick={() => handleClickMenu(menu)}>
                {menu.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
