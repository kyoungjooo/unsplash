import { useEffect, useState } from "react";
import styles from "./commonNavigation.module.scss";
import { navData } from "./navData";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { paramsState } from "@/recoil/atoms/paramsAtom";

export default function CommonNavigation() {
  const navigate = useNavigate();
  const currentPath = useParams();
  const [navMenus, setNavMenus] = useState(navData);
  const [isActive, setActive] = useState(currentPath?.search);
  const sliceFixedMenuData = navMenus.slice(0, 2);
  const sliceScrollMenuData = navMenus.slice(2);
  const [params, setParams] = useRecoilState(paramsState);

  const handleClickMenu = (menu) => {
    setParams((prev) => ({ ...prev, searchValue: menu.path }));
    navigate(menu.path);
    setActive(menu.path);
  };

  useEffect(() => {
    const activePath = currentPath.search || "photos";
    setNavMenus((prev) =>
      prev.map((menu, idx) =>
        menu.path === isActive || (!currentPath.search && idx === 0)
          ? //경로가 빈값이면 0번째 활성화
            { ...menu, isActive: true }
          : { ...menu, isActive: false }
      )
    );
    setActive(activePath);
  }, [currentPath]);

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
