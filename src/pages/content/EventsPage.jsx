import React from 'react'
import Events from '../../components/events/Events'

function EventsPage() {
    return (
        <>
            <section className="w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Events />
            </section>

        </>
    )
}

export default EventsPage
