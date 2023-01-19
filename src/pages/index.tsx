import { SliceZone } from '@prismicio/react'

import { createClient } from '../services/prismic'
import { components } from '../../slices'
import { MainPage } from '../types/prismic'
import Header from '../components/header'
import { getMainPage } from '../utils/getPrismicData'


type Props = {
    mainPage: MainPage;
}

const Page = ({ mainPage } : Props ) => {
  return(
  <>
    <Header data={mainPage.logo} />

  </>
  )
}

export default Page

export async function getStaticProps({ previewData }) {
  const page = await getMainPage(previewData)
  return {
    props: {
      mainPage: page,
    },
  }
}
