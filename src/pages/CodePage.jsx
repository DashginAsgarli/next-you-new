import React from 'react'
import DevHeader from '../components/code/DevHeader'
import FutureEarnings from '../components/code/FutureEarnings'
import CertificateBadge from '../components/code/CertificateBadge'
import DevStack from '../components/code/DevStack'
import CodeEditor from '../components/code/CodeEditor'
import CodeMap from '../components/code/CodeMap'
import Html from '../components/code/Html'

function CodePage() {
    return (
        <>
            <DevHeader />
            <CodeMap />
            <Html/>
            <CodeEditor />
            <DevStack />
            <FutureEarnings />
            <CertificateBadge />
        </>
    )
}

export default CodePage