import { useEffect, useState } from "react";
import styles from "./commonNavigation.module.scss";
import { navData } from "./navData";
import { useNavigate, useParams } from "react-router-dom";
export default function CommonNavigation({ setParams }) {
  const navigate = useNavigate();
  const params = useParams();
  const [navMenus, setNavMenus] = useState(navData);
  const [isActive, setActive] = useState(params?.search);
  const sliceFixedMenuData = navMenus.slice(0, 2);
  const sliceScrollMenuData = navMenus.slice(2);

  const handleClickMenu = (menu) => {
    setParams((prev) => ({ ...prev, searchValue: menu.path }));
    navigate(menu.path);
    setActive(menu.path);
  };

  useEffect(() => {
    setNavMenus((prev) =>
      prev.map((menu) =>
        menu.path === isActive
          ? { ...menu, isActive: true }
          : { ...menu, isActive: false }
      )
    );
  }, [isActive]);

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__wrapper}>
        <ul className={styles.navigation__fixed}>
          {sliceFixedMenuData.map((menu, idx) => (
            <li key={idx} className={styles.navigation__menu}>
              <button
                onClick={() => handleClickMenu(menu)}
                className={`${menu.isActive ? styles.active : ""}`}
              >
                {menu.title}
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.navigation__scroll}>
          {sliceScrollMenuData.map((menu) => (
            <li key={menu.title} className={styles.navigation__menu}>
              <button
                onClick={() => handleClickMenu(menu)}
                className={`${menu.isActive ? styles.active : ""}`}
              >
                {menu.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
