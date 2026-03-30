import React from 'react'
import GrowthHeader from '../components/growth/GrowthHeader'
import LifeGoalMap from '../components/growth/LifeGoalMap'

function GrowthPage() {
    return (
        <>
            <section className="w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <GrowthHeader />
                <LifeGoalMap />
            </section>

        </>
    )
}

export default GrowthPage
