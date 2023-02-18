import styles from "./OptionsPane.module.css"
import AnOption from "./AnOption.js"
import Calender from "../../images/calendar.svg"
import List from "../../images/List.svg"
import AddNew from "../../images/AddNew.svg"
import Starred from "../../images/Starred.svg"
import Location from "../../images/Location.svg"
import { useState } from "react"

export default function Options(){

    

    return(
     
        <div className={styles["container"]}>

                <AnOption name={Calender}/>
                <AnOption name={List}/>
                <AnOption name={AddNew}/>
                <AnOption name={Starred}/>
                <AnOption name={Location}/>
       
        </div>
     
    )

}