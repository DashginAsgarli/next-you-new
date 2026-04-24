import React from 'react'
import Portfolio from '../../components/portfolio/Portfolio'
import { Helmet } from "react-helmet";

function PortfolioPage() {
    return (
        <>
            <Helmet>
                <title>Next You - Portfolio</title>
            </Helmet>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Portfolio />
            </section>
        </>
    )
}

export default PortfolioPage
