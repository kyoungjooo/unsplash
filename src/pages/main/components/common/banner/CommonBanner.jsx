import styles from "./commonBanner.module.scss";
export default function CommonBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__container}>
        <div className={styles.banner__item}>
          <span className={styles.banner__title}>Unsplash</span>
          <span className={styles.banner__desc}>
            인터넷의 시각 자료 출처입니다.
            <br />
            모든 지역에 있는 크리에이터들의 지원을 받습니다.
          </span>
          <div className={styles.banner__search}>
            <input type="text" />
            <button type="button">검색</button>
          </div>
        </div>
        <div className={styles.banner__card}>
          <div className={styles.banner__card__image}></div>
          <div className={styles.banner__card__text}>
            Spring Awakening
            <span style={styles.banner__card__text__small}>00이미지</span>
          </div>
        </div>
        <div className={styles.banner__card}>
          <div className={styles.banner__card__image}></div>
          <div className={styles.banner__card__text}>
            <span style={styles.banner__card__text__small}>추천</span>Huy Phan
          </div>
        </div>
      </div>
    </div>
  );
}
