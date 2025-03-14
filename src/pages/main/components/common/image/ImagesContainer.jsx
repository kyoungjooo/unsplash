import { useEffect, useState } from "react";
import styles from "./imagesContainer.module.scss";
const sliceNum = 10;

const chunkArray = (array, size) => {
  const chunkedArray = [];
  for (let i = 0; i < array?.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
};

export default function ImagesContainer({ pages }) {
  //page 기존 필터되지 않은 데이터
  const [chunkedimagesArray, setChunkedImagesArray] = useState();
  useEffect(() => {
    const imagesDataArray = pages?.flatMap((page) => page?.results);
    //5개씩 하나의 div에 넣기
    setChunkedImagesArray(chunkArray(imagesDataArray, sliceNum));
  }, [pages]);

  //3열이 넘어가면 다음 행으로 넘어가기
  return (
    <>
      {chunkedimagesArray?.map((chunkedimages, idx) => {
        return (
          <div key={idx} className={styles.images}>
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
    </>
  );
}
