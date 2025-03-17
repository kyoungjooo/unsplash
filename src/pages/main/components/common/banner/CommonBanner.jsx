import styles from "./commonBanner.module.scss";
export default function CommonBanner({ currentMenu }) {
  const {} = currentMenu || {};
  return (
    <section className={styles.banner}>
      <div className={styles.banner__container}>
        <div className={`${styles.banner__item}, ${styles.banner__text}`}>
          <div className={styles.text__container}>
            <h2 className={styles.text__title}>배경 화면</h2>
            <span>큐레이팅: Unsplash</span>
            <p className={styles.text__desc}>
              인터넷의 시각 자료 출처입니다.
              <br />
              모든 지역에 있는 크리에이터들의 지원을 받습니다.
            </p>
          </div>
          <div>
            <button>관련도순</button>
            <button>인기순</button>
          </div>
        </div>
        <div className={`${styles.banner__item}, ${styles.banner__cards}`}>
          <article className={styles.card__container}>
            <div className={styles.card__image}></div>
            <div className={styles.card__text}>
              Spring Awakening
              <span style={styles.card__text__small}>00이미지</span>
            </div>
          </article>
          <article className={styles.card__container}>
            <div className={styles.card__image}></div>
            <div className={styles.card__text}>
              <span style={styles.card__text__small}>추천</span>Huy Phan
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
