import { useEffect, useState } from 'react'
import { BlogPost} from '../../types/prismic'
import { getBlogPosts } from '../../utils/getPrismicData'
import PostPreview from './postPreview'
import styles from './styles.module.scss'

type Props = {
  data:  BlogPost[]
}



function Posts({data}:Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postData, setPostData] = useState(data);
  const [numCurrentPosts, setNumCurrentPosts] = useState(data.length);

  function changePages(data){
    setPostData(data)
    setNumCurrentPosts(data.length)
  }

  useEffect(() => {
    
    getBlogPosts(currentPage)
      .then(data =>changePages(data))
    
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const isAllPostsShowing = numCurrentPosts % 5 === 0;

 return (
   <div className={styles.Posts}>
        <div className={styles.PostsContainer} >
            {postData.map((post)=>{
              return(
                <PostPreview 
                  key={post.uid}
                  blogPost={post}             
                />
              )
            })}
          {
            isAllPostsShowing && <button onClick={handleLoadMore}>Carregar mais posts</button>
          }
          
        </div>
   </div>
)}

export default Posts