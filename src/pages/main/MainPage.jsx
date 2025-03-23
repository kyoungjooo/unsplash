import { useState } from "react";
import CommonBanner from "./components/common/banner/CommonBanner";
import styles from "./styles/main.module.scss";
import CommonHeader from "./components/common/header/CommonHeader";
import CommonNavigation from "./components/common/navigation/CommonNavigation";
import { Outlet, useParams } from "react-router-dom";
import CommonFooter from "./components/common/footer/CommonFooter";
import { useRecoilState, useRecoilValue } from "recoil";
import { paramsState } from "@/recoil/atoms/paramsAtom";

export default function MainPage() {
  const currentPath = useParams();
  console.log("경로", currentPath);
  const [params, setParams] = useRecoilState(paramsState);

  //경로에 아무 path 도 없으면 기본 검색 값, 기본 활성화 메뉴를 photos로
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
