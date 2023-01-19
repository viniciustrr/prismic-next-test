
import { createClient } from "../services/prismic"


export async function getBlogPosts(previewData?){
    const client = createClient({ previewData })
    const page = await client.getAllByType('blog_post')
    return page;
}
