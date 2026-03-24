import React from 'react'
import LangTerminal from '../components/language/LangTerminal'
import PopularLanguages from '../components/language/PopularLanguages'
import OtherLanguagesList from '../components/language/OtherLanguagesList'
import LangLearn from '../components/language/LangLearn'
import DailyChallenges from '../components/language/DailyChallenges'


function LanguagePage() {
    return (
        <>
            <LangTerminal />
            <PopularLanguages />
            <OtherLanguagesList />
            <LangLearn />
            <DailyChallenges />

        </>
    )
}

export default LanguagePage
