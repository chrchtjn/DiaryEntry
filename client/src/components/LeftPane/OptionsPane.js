import styles from "./OptionsPane.module.css";
 import AnOption from "./AnOption.js";
 import Calender from "../../images/calendar.svg";
 import List from "../../images/List.svg";
 import AddNew from "../../images/AddNew.svg";
 import Starred from "../../images/Starred.svg";
 import Location from "../../images/Location.svg";
 import { useState } from "react";

 export default function Options(props) {
   const selectHandler = (name) => {
     props.onSelect(name);
   };

   return (
     <div className={styles["container"]}>
       <AnOption
         name={Calender}
         selected={props.selected}
         onSelect={selectHandler}
         text="Calender"
       />
       <AnOption
         name={List}
         selected={props.selected}
         onSelect={selectHandler}
         text="List"
       />
       <AnOption
         name={AddNew}
         selected={props.selected}
         onSelect={selectHandler}
         text="AddNew"
       />
       <AnOption
         name={Starred}
         selected={props.selected}
         onSelect={selectHandler}
         text="Starred"
       />
       <AnOption
         name={Location}
         selected={props.selected}
         onSelect={selectHandler}
         text="Location"
       />
     </div>
   );
 }