import styles from "./DisplayOptions.module.css"
import ListItem from "../ListItem"

export default function WorkArea(){

    return(
        <div className={styles["container"]}>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>

        </div>  
    )

}