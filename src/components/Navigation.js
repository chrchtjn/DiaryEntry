import styles from './Navigation.module.css';
import Infonavbar from './Infonavbar.js';
import Options from "./OptionsPane.js";
import WorkArea from './WorkArea.js';

export default function Navigation(){

    return(
        <div className={styles["container"]}>
            <Infonavbar/>
            <WorkArea/>
            <Options/>
        </div>
    )
}