import React from 'react'
import Portfolio from '../../components/portfolio/Portfolio'

function PortfolioPage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Portfolio />
            </section>
        </>
    )
}

export default PortfolioPage
