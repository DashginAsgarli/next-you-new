import React from 'react'
import Leaderboard from '../../components/leaderboard/Leaderboard'

function LeaderboardPage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Leaderboard />
            </section>
        </>
    )
}

export default LeaderboardPage
