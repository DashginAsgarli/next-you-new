import React from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'

function HomePage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Hero />
                <About />
            </section>

        </>
    )
}

export default HomePage
