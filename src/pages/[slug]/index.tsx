import { GetStaticPaths, GetStaticProps } from 'next'
import { createClient } from '../../services/prismic'
import { MainPage } from '../../types/prismic'
import { getMainPage } from '../../utils/getPrismicData';

type Props = {
    slug: String,
    postPage: MainPage;
}


function PostPage({ slug, postPage }: Props) {
    console.log(slug, postPage)
 return (
   <div>
    {postPage.slices[0].items.filter(post => post.slug === slug )[0].title}
   </div>
)}



export default PostPage


export const getStaticPaths:GetStaticPaths = async () => {
    const page = await getMainPage()
    console.log(page)

    const paths = page.slices[0].items.map((item)=>{
        return {
            params: {
                slug: item.slug 
            }
        }
    })
    return {
        paths,
        fallback:false
      }
}
  

export const getStaticProps:GetStaticProps = async ({ previewData, params }) => {
    const page = await getMainPage(previewData)
    return {
        props: {
          slug: params.slug,
          postPage: page
        },
      }
}
  