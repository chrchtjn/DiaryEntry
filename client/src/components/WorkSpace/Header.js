import styles from './Header.module.css'
import UserProfile from './UserProfile.js'

export default function Header(){
    return(
        
            <div className={styles['headContainer']}>
                <div></div> <UserProfile/>
            </div>

    );
}