import React from 'react'
import Library from '../components/library/Library'

function LibraryPage() {
  return (
    <>
      <section className=" w-full overflow-hidden relative">
        <div className='background-tor'></div>
        <div className='background-shadow'></div>
        <Library />
      </section>
    </>
  )
}

export default LibraryPage
