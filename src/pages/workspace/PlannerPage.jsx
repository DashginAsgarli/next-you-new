import React from 'react'
import Planner from '../../components/planner/Planner'

function PlannerPage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Planner />
            </section>
        </>
    )
}

export default PlannerPage