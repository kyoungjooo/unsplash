import { useState } from "react";
import CommonBanner from "./components/common/banner/CommonBanner";
import styles from "./styles/main.module.scss";
import useInfinity from "@/hooks/useInfinity";
import CommonHeader from "./components/common/header/CommonHeader";
import CommonNavigation from "./components/common/navigation/CommonNavigation";
import { Outlet, useParams } from "react-router-dom";
import { navData } from "./components/common/navigation/navData";
import CommonFooter from "./components/common/footer/CommonFooter";

export default function MainPage() {
  const paramData = useParams();
  console.log("검색", paramData);

  const [params, setParams] = useState({
    searchValue: "Korea",
    lang: "ko",
    per_page: 30,
    order_by: "relevant",
  });

  const handleUpdateSearchParams = (searchValue) => {
    setParams((prev) => ({ ...prev, searchValue }));
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main__header}>
          <CommonHeader handleUpdateSearchParams={handleUpdateSearchParams} />
          <CommonNavigation navData={navData} />
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
