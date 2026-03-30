import React from 'react'
import Music from '../components/music/Music'
import GenreVisual from '../components/music/GenreVisual'
import MusicTheory from '../components/music/MusicTheory'
import MusicHistory from '../components/music/MusicHistory'
import MusicGlossary from '../components/music/MusicGlossary'

function MusicPage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                {/* <Music /> */}
                <GenreVisual />
                <MusicTheory />
                <MusicHistory />
                <MusicGlossary />
            </section>
        </>
    )
}

export default MusicPage