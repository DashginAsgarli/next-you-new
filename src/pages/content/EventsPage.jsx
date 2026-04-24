import React from 'react'
import Events from '../../components/events/Events'
import { Helmet } from "react-helmet";

function EventsPage() {
    return (
        <>
            <Helmet>
                <title>Next You - Events</title>
            </Helmet>
            <section className="w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Events />
            </section>

        </>
    )
}

export default EventsPage
