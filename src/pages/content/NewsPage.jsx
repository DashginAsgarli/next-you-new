import React from 'react'
import News from '../../components/news/News'

function NewsPage() {
  return (
    <>
      <section className=" w-full overflow-hidden relative">
        <div className='background-tor'></div>
        <div className='background-shadow'></div>
        <News />
      </section>
    </>
  )
}

export default NewsPage
