import styles from "./TextArea.module.css";

export default function TextArea() {
  return (
    <div className={styles["textContainer"]}>
      <textarea
        rows="72"
        cols="102"
        spellCheck="false"
        id={styles["textArea"]}
      ></textarea>
    </div>
  );
}