import { BlogPost} from '../../types/prismic'
import PostPreview from './postPreview'
import styles from './styles.module.scss'

type Props = {
  data:  BlogPost[]
}




function Posts({data}:Props) {
   
 return (
   <div className={styles.Posts}>
        <div className={styles.PostsContainer} >
            {data.map((post)=>{
              return(
                <PostPreview 
                  key={post.uid}
                  blogPost={post}             
                />
              )
            })}
            
        </div>
   </div>
)}

export default Posts