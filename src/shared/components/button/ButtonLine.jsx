import styles from "./button.module.scss";

export default function ButtonLine({ value }) {
  return <button className={styles.button__line}>{value}</button>;
}
