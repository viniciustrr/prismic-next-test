import { GetStaticPaths, GetStaticProps } from 'next'
import Header from '../../components/header';
import { createClient } from '../../services/prismic'
import { BlogPost } from '../../types/prismic'
import { getBlogPosts} from '../../utils/getPrismicData';
import PostPageView from '../../views/blogPost';


type Props = {
    postInfo: BlogPost;
}


function PostPage({postInfo }: Props) {

 return (
    <>
    <Header/>
    <PostPageView blogPost={postInfo} />
    </>
   
)}



export default PostPage


export const getStaticPaths:GetStaticPaths = async () => {
    const blogPosts = await getBlogPosts();

    const paths = blogPosts.map((item)=>{
        return {
            params: {
                slug: item.uid
            }
        }
    })
    return {
        paths,
        fallback:false
      }
}
  

export const getStaticProps:GetStaticProps = async ({ previewData, params }) => {
    const blogPost = await getBlogPosts(previewData);
    const blogPostInfo  = blogPost.filter(function(item) {
        return item.uid === params.slug;
    })[0]


    return {
        props: {
          postInfo: blogPostInfo,
        },
      }
}
  