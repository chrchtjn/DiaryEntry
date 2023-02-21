import styles from "./DisplayOptions.module.css";
import ListItem from "../ListItem";

export default function WorkArea(props) {
  return (
    <div className={styles["container"]}>
      {props.selected === "Calender" && <div>Calender</div>}
      {props.selected === "Location" && <div>Location</div>}
      {props.selected === "List" && <div>List</div>}
      {props.selected === "AddNew" && <div>AddNew</div>}
      {props.selected === "Starred" && <div>Starred</div>}
    </div>
  );
}
