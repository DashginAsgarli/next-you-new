import React from 'react'
import CertificateBadge from '../../components/code/CertificateBadge'
import DevStack from '../../components/code/DevStack'
import CodeMap from '../../components/code/CodeMap'
import CodeChallenge from '../../components/code/CodeChallenge'
import CodingStats from '../../components/code/CodingStats'
// import GithubTrending from '../../components/code/GithubTrending'
import CodeHero from '../../components/code/CodeHero'
import CssPlayground from '../../components/code/CssPlayground'
import GitCommands from '../../components/code/GitCommands'
import AlgorithmRace from '../../components/code/AlgorithmRace'
import MockInterview from '../../components/code/MockInterview'

function CodePage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <CodeHero />
                <CodeMap />
                <DevStack />
                {/* <GithubTrending /> */}
                <CodeChallenge />
                <CodingStats />
                <CertificateBadge />
                <CssPlayground />
                <GitCommands />
                <AlgorithmRace />
                <MockInterview />

            </section>
        </>
    )
}

export default CodePage