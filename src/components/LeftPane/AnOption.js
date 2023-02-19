import styles from "./AnOption.module.css";

export default function AnOption(props) {
  const clickHandler = (e) => {
    props.onSelect(e.target.alt);
  };

  return (
    <div
      className={styles["container"]}
      style={{ backgroundColor: props.selected === props.text ? "orange" : "" }}
      onClick={clickHandler}
    >
      <img src={props.name} alt={props.text} />
    </div>
  );
}
