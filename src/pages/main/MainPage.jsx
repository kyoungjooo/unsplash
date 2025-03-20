import { useState } from "react";
import CommonBanner from "./components/common/banner/CommonBanner";
import styles from "./styles/main.module.scss";
import CommonHeader from "./components/common/header/CommonHeader";
import CommonNavigation from "./components/common/navigation/CommonNavigation";
import { Outlet, useParams } from "react-router-dom";
import CommonFooter from "./components/common/footer/CommonFooter";

export default function MainPage() {
  const currentPath = useParams();
  console.log(currentPath);
  const [params, setParams] = useState({
    searchValue: undefined || "photos",
    lang: "ko",
    per_page: 30,
    order_by: "relevant",
  });
  console.log(params);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.main__header}>
          <CommonHeader setParams={setParams} />
          {/* 검색을 하면 nav 바 안보이게 */}
          <CommonNavigation setParams={setParams} />
        </div>
        <div className={styles.main__contents}>
          <CommonBanner />
          <Outlet context={params} />
        </div>
        <CommonFooter />
      </div>
    </>
  );
}
