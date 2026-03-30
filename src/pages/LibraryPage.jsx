import React from 'react'
// import Library from '../components/library/Library'
// import BookOfTheDay from '../components/library/BookOfTheDay'
import ReadingChallengeBanner from '../components/library/ReadingChallengeBanner'
import GenreMap from '../components/library/GenreMap'
// import AuthorBio from '../components/library/AuthorBio'

function LibraryPage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                {/* <BookOfTheDay /> */}
                {/* <Library /> */}
                <ReadingChallengeBanner />
                <GenreMap />
                {/* <AuthorBio /> */}

            </section>
        </>
    )
}

export default LibraryPage
