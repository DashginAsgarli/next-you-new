import React from 'react'
import Music from '../components/music/Music'
import MusicHeader from '../components/music/MusicHeader'

function MusicPage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Music />
            </section>
        </>
    )
}

export default MusicPage
