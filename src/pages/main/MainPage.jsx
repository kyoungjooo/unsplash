import { useEffect, useRef, useState } from "react";
import CommonBanner from "./components/common/banner/CommonBanner";
import styles from "./styles/main.module.scss";
import useInfinity from "@/hooks/useInfinity";
import ImagesContainer from "./components/common/image/ImagesContainer";
import CommonHeader from "./components/common/header/CommonHeader";
import CommonNavigation from "./components/common/navigation/CommonNavigation";
import { useParams } from "react-router-dom";
import { navData } from "./components/common/navigation/navData";
import CommonFooter from "./components/common/footer/CommonFooter";

export default function MainPage() {
  const paramData = useParams();
  console.log(paramData);
  const lastImageItemRef = useRef(null);

  const [params, setParams] = useState({
    searchValue: "Korea",
    lang: "ko",
    per_page: 30,
    // order_by: "relevant",
  });

  const handleUpdateSearchParams = (searchValue) => {
    setParams((prev) => ({ ...prev, searchValue }));
  };

  const {
    data: imageLists,
    fetchNextPage,
    isLoading,
    hasNextPage,
  } = useInfinity({
    params,
  });
  const { pages, pageParams } = imageLists || {};
  console.log(pages);
  useEffect(() => {
    const el = lastImageItemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
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
        <div className={styles.main__header}>
          <CommonHeader handleUpdateSearchParams={handleUpdateSearchParams} />
          <CommonNavigation navData={navData} />
        </div>
        <div className={styles.main__contents}>
          <CommonBanner />
          <div className={styles.main__images}>
            <ImagesContainer pages={pages} />
          </div>
          <div ref={lastImageItemRef}></div>
        </div>
        <CommonFooter />
      </div>
    </>
  );
}
