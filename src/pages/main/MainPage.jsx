import { useEffect, useRef } from "react";
import CommonBanner from "./components/common/banner/CommonBanner";
import Image from "./components/common/image/Image";
import styles from "./styles/main.module.scss";
import useInfinity from "@/hooks/useInfinity";
export default function MainPage() {
  const searchValue = "Korea";
  const perPage = 30;

  const lastImageItemRef = useRef(null);
  const {
    data: imageList,
    fetchNextPage,
    isLoading,
    hasNextPage,
  } = useInfinity({
    searchValue,
    perPage,
  });

  console.log("ss", imageList);
  const { pages, pageParams } = imageList || {};

  const { results: images, total, totalPage } = pages?.[0] || {};
  console.log("펭지", pages);
  const arrLength = images?.length;
  const chunkSize = arrLength / 3;
  const slicedArr = [];

  for (let i = 0; i < arrLength; i += chunkSize) {
    slicedArr.push(images.slice(i, i + chunkSize));
  }
  // console.log(slicedArr);

  useEffect(() => {
    const el = lastImageItemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        console.log("관찰중");
        const entry = entries[0];
        if (entry.isIntersecting && !isLoading) {
          fetchNextPage();
          console.log("다음");
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
        {/* 공통 헤더 UI 부분 */}
        {/* 공통 네비게이션 UI 부분 */}
        {/* 공통 배너 부분 */}
        <div className={styles.main__contents}>
          <CommonBanner />
          <div className={styles.main__images__container}>
            <Image slicedArr={slicedArr} />
          </div>
          <div ref={lastImageItemRef}></div>
        </div>
        {/* 공통 푸터 부분*/}
      </div>
    </>
  );
}
