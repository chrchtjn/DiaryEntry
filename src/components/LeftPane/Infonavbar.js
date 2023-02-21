import styles from './Infonavbar.module.css';

export default function Infonavbar(){
    return(
        <nav className={styles["infonavbar"]}>
                 <div >
                        <div>14th November 2023</div>
                        <div>3:42PM</div>
                </div>
                <div className={styles['title']}>
                    NAMEGOESHERE
                </div>
        </nav>
    );
}