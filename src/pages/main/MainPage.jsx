import { useEffect, useRef, useState } from "react";
import CommonBanner from "./components/common/banner/CommonBanner";
import styles from "./styles/main.module.scss";
import useInfinity from "@/hooks/useInfinity";
import ImagesContainer from "./components/common/image/ImagesContainer";
import CommonHeader from "./components/common/header/CommonHeader";

export default function MainPage() {
  const [params, setParams] = useState({
    searchValue: "Korea",
    perPage: 30,
  });
  const lastImageItemRef = useRef(null);
  const {
    data: imageLists,
    fetchNextPage,
    isLoading,
    hasNextPage,
  } = useInfinity({
    params,
  });
  const { pages, pageParams } = imageLists || {};

  useEffect(() => {
    const el = lastImageItemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        console.log("관찰중");
        const entry = entries[0];
        if (entry.isIntersecting && !isLoading) {
          fetchNextPage();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.5,
      }
    );
    observer.observe(el);

    return () => {
      if (!el) return;
      observer.unobserve(el);
    };
  }, [fetchNextPage, isLoading]);

  return (
    <>
      <div className={styles.main}>
        <CommonHeader />
        {/* 공통 네비게이션 UI 부분 */}
        {/* 공통 배너 부분 */}
        <div className={styles.main__contents}>
          <CommonBanner />
          <div className={styles.main__images}>
            <ImagesContainer pages={pages} />
          </div>
          <div ref={lastImageItemRef}></div>
        </div>
        {/* 공통 푸터 부분*/}
      </div>
    </>
  );
}
