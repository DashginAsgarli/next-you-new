import React from 'react'
import FutureEarnings from '../components/code/FutureEarnings'
import CertificateBadge from '../components/code/CertificateBadge'
import DevStack from '../components/code/DevStack'
import CodeEditor from '../components/code/CodeEditor'
import CodeMap from '../components/code/CodeMap'
import Html from '../components/code/Html'

function CodePage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <CodeMap />
                <DevStack />
                <Html />
                <CodeEditor />
                <FutureEarnings />
                <CertificateBadge />
            </section>
        </>
    )
}

export default CodePage