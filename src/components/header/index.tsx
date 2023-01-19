/* eslint-disable @next/next/no-img-element */
import { Image } from '../../types/prismic'
import styles from './styles.module.scss'

type Props = {
    data: Image
}

function Header({ data }: Props) {
 return (
   <div className={styles.Header}>
    <div className={styles.HeaderContainer}>
        <img src={data.url} alt={data.alt} />
    </div>
    
   </div>
)}

export default Header