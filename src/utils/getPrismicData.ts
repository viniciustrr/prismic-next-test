
import { createClient } from "../services/prismic"
import { BlogPost } from "../types/prismic";


// export async function getBlogPosts(previewData?){
//     const client = createClient({ previewData })
//     const page = await client.getAllByType('blog_post')
//     return page;
// }

export async function getBlogPosts( currentPage?,previewData?): Promise<BlogPost[]> {
    const client = createClient({ previewData });
    let page;

    if(currentPage){
        page = await client.getAllByType('blog_post').then(data => data.slice(0, currentPage * 5));
    }else{
        page = await client.getAllByType('blog_post');
    }
    
    return page;
  }