import styles from './WorkSpace.module.css'
import TextArea from './TextArea.js'
import Header from './Header.js'

export default function WorkSpace(){
    return(
        <div className={styles['container']}>
            <Header/>
            <TextArea/>
        </div>
    )
}