import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { paramsState } from "@/recoil/atoms/paramsAtom";

import styles from "./commonNavigation.module.scss";

export default function CommonNavigation({ currentPath, navData }) {
  const navigate = useNavigate();
  const [navMenus, setNavMenus] = useState(navData);
  const [isActive, setActive] = useState(currentPath?.search);
  const sliceFixedMenuData = navMenus.slice(0, 2);
  const sliceScrollMenuData = navMenus.slice(2);
  const [params, setParams] = useRecoilState(paramsState);

  const handleClickMenu = (menu) => {
    //클릭한 메뉴 path 요청
    setParams((prev) => ({ ...prev, searchValue: menu.path }));
    navigate(menu.path);
    //현재 이동한 경로와 같은 path를 가진 객체 업데이트
    setNavMenus((prev) =>
      prev.map((menu) =>
        menu.path === isActive
          ? { ...menu, isActive: true }
          : { ...menu, isActive: false }
      )
    );
    setActive(menu.path);
  };

  useEffect(() => {
    const activePath = currentPath?.search || "photos";
    setParams((prev) => ({ ...prev, searchValue: activePath }));
    setNavMenus((prev) =>
      prev.map((menu) =>
        menu.path === activePath
          ? { ...menu, isActive: true }
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
