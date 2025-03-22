import ButtonLine from "@/shared/components/button/ButtonLine";
import styles from "./commonDialog.module.scss";
import { useEffect, useImperativeHandle, useRef } from "react";

export default function CommonDialog({ ref, selectedImage }) {
  console.log(selectedImage);
  const dialogRef = useRef();
  const {
    alt_description,
    created_at,
    alternative_slugs,
    likes,
    urls,
    user,
    links,
    height,
    width,
    updated_at,
  } = selectedImage || {};
  useImperativeHandle(ref, handleModal);

  useEffect(() => {
    document.title = alternative_slugs?.ko;
  }, [selectedImage]);

  function handleModal() {
    return {
      open() {
        dialogRef.current.showModal();
      },
      close() {
        dialogRef.current.onReset();
      },
    };
  }
  console.log(selectedImage);
  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <header className={styles.dialog__header}>
        <div className={styles.dialog__header__left}>
          <img src={user?.profile_image.small} alt="profile_image" />
          <div className={styles.dialog__header__user}>
            <span>{user?.name}</span>
            <span>{user?.username}</span>
          </div>
        </div>
        <div className={styles.dialog__header__right}>
          <ButtonLine value="북마크" />
          <ButtonLine value="다운로드" />
          <form method="dialog">
            <button
              className={styles.dialog__header__close}
              aria-label="닫기"
            ></button>
          </form>
        </div>
      </header>
      <div className={styles.dialog__wrapper}>
        <article className={styles.dialog__content}>
          <img src={urls?.regular} alt={alt_description} />
        </article>
        <footer className={styles.dialog__footer}>
          <div className={styles.dialog__footer__wrapper}>
            <div className={styles.dialog__footer__info}>
              <span>이미지 크기</span>
              <p>
                {width} X {height}
              </p>
            </div>
            <div className={styles.dialog__footer__info}>
              <span>업로드</span>
              <p>{created_at}</p>
            </div>
            <div className={styles.dialog__footer__info}>
              <span>마지막 업데이트</span>
              <p>{updated_at}</p>
            </div>
            <div className={styles.dialog__footer__info}>
              <span>좋아요</span>
              <p>{likes}</p>
            </div>
          </div>
        </footer>
      </div>
    </dialog>
  );
}
