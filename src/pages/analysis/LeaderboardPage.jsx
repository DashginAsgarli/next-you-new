import React from 'react'
import Leaderboard from '../../components/leaderboard/Leaderboard'
import { Helmet } from "react-helmet";

function LeaderboardPage() {
    return (
        <>
            <Helmet>
                <title>Next You - Leaderboard</title>
            </Helmet>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Leaderboard />
            </section>
        </>
    )
}

export default LeaderboardPage
