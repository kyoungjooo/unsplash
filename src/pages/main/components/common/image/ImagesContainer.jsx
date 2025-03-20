import { useEffect, useRef, useState } from "react";
import styles from "./imagesContainer.module.scss";
import useInfinity from "@/hooks/useInfinity";
import { useOutletContext } from "react-router-dom";
const sliceNum = 10;

const chunkArray = (array, size) => {
  const chunkedArray = [];
  for (let i = 0; i < array?.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
};

export default function ImagesContainer() {
  const lastImageItemRef = useRef(null);
  const params = useOutletContext();
  const {
    data: imageLists,
    fetchNextPage,
    isLoading,
    hasNextPage,
  } = useInfinity({
    params,
  });
  const { pages, pageParams } = imageLists || {};
  //page 기존 필터되지 않은 데이터
  const [chunkedimagesArray, setChunkedImagesArray] = useState();
  useEffect(() => {
    const imagesDataArray = pages?.flatMap((page) => page?.results);
    //5개씩 하나의 div에 넣기
    setChunkedImagesArray(chunkArray(imagesDataArray, sliceNum));
  }, [pages]);

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

  //3열이 넘어가면 다음 행으로 넘어가기
  return (
    <>
      <div className={styles.images}>
        {chunkedimagesArray?.map((chunkedimages, idx) => {
          return (
            <div key={idx} className={styles.images__container}>
              {chunkedimages?.map((image) => (
                <img
                  key={image.id}
                  className={styles.images__item}
                  src={image.urls.small}
                />
              ))}
            </div>
          );
        })}
        <div ref={lastImageItemRef}></div>
      </div>
    </>
  );
}
