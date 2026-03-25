import React from 'react'
import LangTerminal from '../components/language/LangTerminal'
import PopularLanguages from '../components/language/PopularLanguages'
import OtherLanguagesList from '../components/language/OtherLanguagesList'
import LangLearn from '../components/language/LangLearn'
import DailyChallenges from '../components/language/DailyChallenges'
import LangDictionary from '../components/language/LangDictionary'
import QuickTranslate from '../components/language/QuickTranslate'
import AudioPractice from '../components/language/AudioPractice'


function LanguagePage() {
    return (
        <>
            <LangTerminal />
            <PopularLanguages />
            <OtherLanguagesList />
            <LangDictionary />
            <QuickTranslate />
            <AudioPractice />
            <LangLearn />
            <DailyChallenges />

        </>
    )
}

export default LanguagePage
