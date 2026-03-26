import React from 'react'
import CertificateBadge from '../components/code/CertificateBadge'
import DevStack from '../components/code/DevStack'
import CodeMap from '../components/code/CodeMap'

function CodePage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <CodeMap />
                <DevStack />
                <CertificateBadge />
            </section>
        </>
    )
}

export default CodePage