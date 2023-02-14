import styles from "./AnOption.module.css"



export default function AnOption(props){

    const {name} = props;

    return(
        <div className={styles["container"]}>
         
           <img src={name} alt="s"/>
        </div>
    )
    
}