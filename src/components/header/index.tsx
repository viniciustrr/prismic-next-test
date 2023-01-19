/* eslint-disable @next/next/no-img-element */
import { LogoIcon } from '../../assets/svg'
import { Image } from '../../types/prismic'
import styles from './styles.module.scss'



function Header() {
 return (
   <div className={styles.Header}>
    <div className={styles.HeaderContainer}>
        <LogoIcon/>
    </div>
    
   </div>
)}

export default Header