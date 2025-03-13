import styles from "./styles/main.module.scss";
//import { useImageQuery } from "@/hooks/queries/useImageQuery";
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
  return (
    <>
      <div className={styles.main}>
        {/* 공통 헤더 UI 부분 */}
        {/* 공통 네비게이션 UI 부분 */}
        <div className={styles.main__contents}>
          <div className={styles.main__introBox}>
            <div className={styles.main__container}>
              <span className={styles.main__title}>Unsplash</span>
              <span className={styles.main__desc}>
                인터넷의 시각 자료 출처입니다.
                <br />
                모든 지역에 있는 크리에이터들의 지원을 받습니다.
              </span>
              {/* 검색창 UI 부분*/}
            </div>
          </div>
          <div className={styles.main__imageBox}></div>
        </div>
        {/* 공통 푸터 부분*/}
      </div>
    </>
  );
}
