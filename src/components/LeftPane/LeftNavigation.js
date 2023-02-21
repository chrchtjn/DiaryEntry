import styles from "./LeftNavigation.module.css";
import Infonavbar from "./Infonavbar.js";
import Options from "./OptionsPane.js";
import DisplayOptions from "./DisplayOptions.js";
import { useState } from "react";

export default function LeftNavigation() {
  const [selected, setSelected] = useState("Calender");

  const setSelectHandler = (name) => {
    setSelected(name);
  };

  return (
    <div className={styles["container"]}>
      <Infonavbar />
      <DisplayOptions selected={selected} />
      <Options selected={selected} onSelect={setSelectHandler} />
    </div>
  );
}