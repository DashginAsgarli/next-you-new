import React from 'react'
import LangTerminal from '../../components/language/LangTerminal'
import PopularLanguages from '../../components/language/PopularLanguages'
import OtherLanguagesList from '../../components/language/OtherLanguagesList'
import DailyChallenges from '../../components/language/DailyChallenges'
import LanguageFamilyTree from '../../components/language/LanguageFamilyTree'
import WorldAlphabets from '../../components/language/WorldAlphabets'
import { Helmet } from "react-helmet";


function LanguagePage() {
    return (
        <>
            <Helmet>
                <title>Next You - Language</title>
            </Helmet>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <LangTerminal />
                <PopularLanguages />
                <OtherLanguagesList />
                <LanguageFamilyTree />
                <WorldAlphabets />
                <DailyChallenges />
            </section>
        </>
    )
}

export default LanguagePage
