import { useRef } from "react";
import styles from "./imagesContainer.module.scss";
const sliceNum = 10;

export default function ImagesContainer({ pages }) {
  const imagesDataArray = pages?.map((page) => [page?.results]).flat(2);
  //5개씩 하나의 div에 넣기
  const chunkedimagesArray = [];
  for (let i = 0; i < imagesDataArray?.length; i += sliceNum) {
    chunkedimagesArray.push(imagesDataArray.slice(i, i + sliceNum));
  }

  //3열이 넘어가면 다음 행으로 넘어가기
  return (
    <>
      {chunkedimagesArray?.map((chunkedimages) => (
        <div className={styles.images}>
          {chunkedimages?.map((image) => (
            <img className={styles.images__item} src={image.urls.small} />
          ))}
        </div>
      ))}
    </>
  );
}
