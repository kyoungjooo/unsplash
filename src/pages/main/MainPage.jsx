import { useEffect, useState } from "react";
import CommonBanner from "./components/common/banner/CommonBanner";
import styles from "./styles/main.module.scss";
import useInfinity from "@/hooks/useInfinity";
import CommonHeader from "./components/common/header/CommonHeader";
import CommonNavigation from "./components/common/navigation/CommonNavigation";
import { Outlet, useParams } from "react-router-dom";

import CommonFooter from "./components/common/footer/CommonFooter";

export default function MainPage() {
  const paramData = useParams();
  console.log("검색", paramData);

  const [params, setParams] = useState({
    searchValue: "photos",
    lang: "ko",
    per_page: 30,
    order_by: "relevant",
  });

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main__header}>
          <CommonHeader setParams={setParams} />
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
