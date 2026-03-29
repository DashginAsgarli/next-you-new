import React from 'react'
import Blog from '../components/blog/Blog'

function BlogPage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Blog />
            </section>

        </>
    )
}

export default BlogPage
