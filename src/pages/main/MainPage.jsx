import CommonBanner from "./components/common/banner/CommonBanner";
import Image from "./components/common/image/Image";
import styles from "./styles/main.module.scss";
import useInfinity from "@/hooks/useInfinity";
export default function MainPage() {
  const searchValue = "Korea";
  const perPage = 30;

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
  const arrLength = images?.length;
  const chunkSize = arrLength / 3;
  const slicedArr = [];

  for (let i = 0; i < arrLength; i += chunkSize) {
    slicedArr.push(images.slice(i, i + chunkSize));
  }
  console.log(slicedArr);
  return (
    <>
      <div className={styles.main}>
        {/* 공통 헤더 UI 부분 */}
        {/* 공통 네비게이션 UI 부분 */}
        {/* 공통 배너 부분 */}
        <div className={styles.main__contents}>
          <CommonBanner />
          <div className={styles.main__images__container}>
            <Image slicedArr={slicedArr} />;
          </div>
        </div>
        {/* 공통 푸터 부분*/}
      </div>
    </>
  );
}
