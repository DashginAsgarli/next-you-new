import React from 'react'
import CertificateBadge from '../../components/code/CertificateBadge'
import DevStack from '../../components/code/DevStack'
import CodeMap from '../../components/code/CodeMap'
import CodingStats from '../../components/code/CodingStats'
import CodeHero from '../../components/code/CodeHero'
import { Helmet } from "react-helmet";

function CodePage() {
    return (
        <>
            <Helmet>
                <title>Next You - Code</title>
            </Helmet>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <CodeHero />
                <CodeMap />
                <CodingStats />
                <CertificateBadge />
            </section>
        </>
    )
}

export default CodePage