import styles from "./commonDialog.module.scss";
import { useImperativeHandle, useRef } from "react";

export default function CommonDialog({ ref, selectedImage }) {
  console.log(selectedImage);
  const dialogRef = useRef();
  const { alt_description, likes, urls, user, links } = selectedImage || {};
  useImperativeHandle(ref, handleModal);

  function handleModal() {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  }
  console.log(user);
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
          <button>북마크</button>
          <button>다운로드</button>
          <button>닫기</button>
        </div>
      </header>
      <div className={styles.dialog__wrapper}>
        <article className={styles.dialog__content}>
          <img src={urls?.regular} alt={alt_description} />
        </article>
        <footer className={styles.dialog__footer}></footer>
      </div>
    </dialog>
  );
}
