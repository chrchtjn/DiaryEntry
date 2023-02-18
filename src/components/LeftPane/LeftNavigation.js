import styles from './LeftNavigation.module.css';
import Infonavbar from './Infonavbar.js';
import Options from "./OptionsPane.js";
import DisplayOptions from './DisplayOptions.js';

export default function LeftNavigation(){

    return(
        <div className={styles["container"]}>
            <Infonavbar/>
            <DisplayOptions/>
            <Options/>
        </div>
    )
}