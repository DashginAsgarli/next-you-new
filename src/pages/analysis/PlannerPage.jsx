import React from 'react'
import Planner from '../../components/planner/Planner'
import LifeGoalMap from '../../components/planner/LifeGoalMap'
import GrowthChart from '../../components/planner/GrowthChart'

function PlannerPage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Planner />
                <LifeGoalMap />
                <GrowthChart />
            </section>
        </>
    )
}

export default PlannerPage