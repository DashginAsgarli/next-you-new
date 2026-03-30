import React from 'react'
import Hero from '../../components/home/Hero'
import Stats from '../../components/home/Stats'
import Features from '../../components/home/Features'
import HowItWorks from '../../components/home/HowItWorks'
import CategoryShowcase from '../../components/home/CategoryShowcase'
import NewsletterSignup from '../../components/home/NewsletterSignup'
import TechStack from '../../components/home/TechStack'

function HomePage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Hero />
                <Stats />
                <Features />
                <CategoryShowcase />
                <HowItWorks />
                <TechStack />
                <NewsletterSignup />
            </section>

        </>
    )
}

export default HomePage