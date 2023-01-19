
import styles from './styles.module.scss'
import {UserIcon} from "../../../assets/svg";
import {CalendarIcon} from "../../../assets/svg";
import Link from 'next/link';
import { BlogPost } from '../../../types/prismic';
import { formatDate } from '../../../utils/formats';



function PostPreview({ blogPost }: {blogPost:BlogPost} ) {
const {uid, data, last_publication_date} = blogPost;
  
 return (
  <Link href={`/${uid}`} className={styles.NoDecoration}>
  
   <div className={styles.Post}>
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <div className={styles.PostFooter}>
          <div className={styles.PostIcon}>
          <CalendarIcon/>
          <p>{formatDate(last_publication_date)}</p>
          </div>
          <div className={styles.PostIcon}>
          <UserIcon/>  
          <p>{data.author}</p>
          </div>
        </div>
   </div>
   </Link>
)}

export default PostPreview