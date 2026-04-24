import React from 'react'
import Library from '../../components/library/Library'
import ReadingChallengeBanner from '../../components/library/ReadingChallengeBanner'
import GenreMap from '../../components/library/GenreMap'
import AuthorBio from '../../components/library/AuthorBio'
import { Helmet } from "react-helmet";


function LibraryPage() {
    return (
        <>
            <Helmet>
                <title>Next You - Library</title>
            </Helmet>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Library />
                <ReadingChallengeBanner />
                <GenreMap />
                <AuthorBio />

            </section>
        </>
    )
}

export default LibraryPage
