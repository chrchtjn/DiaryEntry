import styles from './Infonavbar.module.css';

export default function Infonavbar(){
    return(
        <nav className={styles["infonavbar"]}>
              
            <ul className={styles['out']}>
                 <ul className={styles['in']}>
                        <li>
                            14th November 2023
                        </li>
                        <li>
                            3:42PM
                        </li>
                </ul>
                <li>
                    NAMEGOESHERE
                </li>
            </ul>
            
        </nav>
    );
}