import { SliceZone } from '@prismicio/react'

import { createClient } from '../services/prismic'
import { components } from '../../slices'
import { MainPage } from '../types/prismic'


type Props = {
    mainPage: MainPage;
}

const Page = ({ mainPage } : Props ) => {
  return(
  <div>
    Dale dale
  </div>)
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
 

  const page = await client.getSingle('main_page')

  return {
    props: {
      page: page.data,
    },
  }
}
