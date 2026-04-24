import React from 'react'
import Music from '../../components/music/Music'
import GenreVisual from '../../components/music/GenreVisual'
import { Helmet } from "react-helmet";

function MusicPage() {
    return (
        <>
            <Helmet>
                <title>Next You - Music</title>
            </Helmet>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Music />
                <GenreVisual />

            </section>
        </>
    )
}

export default MusicPage