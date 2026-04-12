import React from 'react'
import Music from '../../components/music/Music'
import GenreVisual from '../../components/music/GenreVisual'
import ListeningJournal from '../../components/music/ListeningJournal'

function MusicPage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Music />
                <GenreVisual />
                <ListeningJournal />
            </section>
        </>
    )
}

export default MusicPage