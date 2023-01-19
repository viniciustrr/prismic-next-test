import { MainPage } from './../types/prismic';
import { createClient } from "../services/prismic"



export async function getMainPage(previewData?){
    const client = createClient({ previewData })
    const page = await client.getSingle('main_page')
    return page.data;
}