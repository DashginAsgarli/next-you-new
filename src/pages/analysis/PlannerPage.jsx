import React from 'react'
import Planner from '../../components/planner/Planner'
import LifeGoalMap from '../../components/planner/LifeGoalMap'
import GrowthChart from '../../components/planner/GrowthChart'
import { Helmet } from "react-helmet";

function PlannerPage() {
    return (
        <>
            <Helmet>
                <title>Next You - Planner</title>
            </Helmet>
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