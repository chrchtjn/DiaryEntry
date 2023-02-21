import styles from './ListItem.module.css'

export default function ListItem(){

    return(
        <div className={styles['listContainer']}>
            <div>
                <div className={styles['labels']}>01 January 2024</div>
                <div className={styles['labels']}>00:00am</div>
            </div>
            <div className={styles['right']}>
                <div className={styles['labels']} id={styles['title']}>Title of the Entry</div>
                <div className={styles['labels']}>First line of the entry</div>
            </div>

        </div>
    )
}