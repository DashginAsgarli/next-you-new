import React from 'react'
import News from '../../components/news/News'
import { Helmet } from "react-helmet";

function NewsPage() {
  return (
    <>
      <Helmet>
        <title>Next You - News</title>
      </Helmet>
      <section className=" w-full overflow-hidden relative">
        <div className='background-tor'></div>
        <div className='background-shadow'></div>
        <News />
      </section>
    </>
  )
}

export default NewsPage
