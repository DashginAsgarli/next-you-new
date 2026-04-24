import React from 'react'
import WordOfTheDayStatic from './WordOfTheDay'
import LangDictionary from './LangDictionary'
import QuickTranslate from './QuickTranslate'
import AudioPractice from './AudioPractice'
import LangLearn from './LangLearn'
import SentenceBuilder from './SentenceBuilder'
import IdiomLearn from './IdiomLearn'



function EnglishLang() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <LangDictionary />
                <LangLearn />
                <WordOfTheDayStatic />
                <AudioPractice />
                <QuickTranslate />
                <SentenceBuilder />
                <IdiomLearn />

            </section>
        </>
    )
}

export default EnglishLang
