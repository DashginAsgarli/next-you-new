import React from 'react'
import LangTerminal from '../components/language/LangTerminal'
import PopularLanguages from '../components/language/PopularLanguages'
import OtherLanguagesList from '../components/language/OtherLanguagesList'
import LangLearn from '../components/language/LangLearn'
import DailyChallenges from '../components/language/DailyChallenges'
import LangDictionary from '../components/language/LangDictionary'


function LanguagePage() {
    return (
        <>
            <LangTerminal />
            <PopularLanguages />
            <OtherLanguagesList />
            <LangDictionary />
            <LangLearn />
            <DailyChallenges />

        </>
    )
}

export default LanguagePage
