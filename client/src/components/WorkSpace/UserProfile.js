import styles from './UserProfile.module.css'
import UserLogo from '../../images/User.svg'

export default function UserProfile(){
    return(
        <div className={styles['container']}>
           <img src={UserLogo}></img> <span className={styles['text']}>propsUsr</span>
        </div>
    );
}