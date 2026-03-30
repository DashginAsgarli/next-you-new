import React from 'react'
import LangTerminal from '../components/language/LangTerminal'
import PopularLanguages from '../components/language/PopularLanguages'
import OtherLanguagesList from '../components/language/OtherLanguagesList'
import LangLearn from '../components/language/LangLearn'
import DailyChallenges from '../components/language/DailyChallenges'
// import LangDictionary from '../components/language/LangDictionary'
// import QuickTranslate from '../components/language/QuickTranslate'
// import AudioPractice from '../components/language/AudioPractice'
import WordOfTheDay from '../components/language/WordOfTheDay'
import SentenceBuilder from '../components/language/SentenceBuilder'
import IdiomLearn from '../components/language/IdiomLearn'
import LanguageFamilyTree from '../components/language/LanguageFamilyTree'
import WorldAlphabets from '../components/language/WorldAlphabets'
import MultiLangTable from '../components/language/MultiLangTable'


function LanguagePage() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <LangTerminal />
                <PopularLanguages />
                <OtherLanguagesList />
                <WordOfTheDay />
                {/* <LangDictionary /> */}
                {/* <QuickTranslate /> */}
                {/* <AudioPractice /> */}
                <LangLearn />
                <DailyChallenges />
                <SentenceBuilder />
                <IdiomLearn />
                <LanguageFamilyTree />
                <WorldAlphabets />
                <MultiLangTable />
            </section>
        </>
    )
}

export default LanguagePage
