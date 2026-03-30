import React from 'react'
import GrowthHeader from '../../components/growth/GrowthHeader'
import LifeGoalMap from '../../components/growth/LifeGoalMap'
import GrowthChart from '../../components/growth/GrowthChart'
import HabitsMatrix from '../../components/growth/HabitsMatrix'

function GrowthPage() {
    return (
        <>
            <section className="w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <GrowthHeader />
                <LifeGoalMap />
                <GrowthChart />
                <HabitsMatrix />
            </section>

        </>
    )
}

export default GrowthPage
