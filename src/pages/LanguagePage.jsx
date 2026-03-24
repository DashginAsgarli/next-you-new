import React from 'react'
import LangTerminal from '../components/language/LangTerminal'
import PopularLanguages from '../components/language/PopularLanguages'
import OtherLanguagesList from '../components/language/OtherLanguagesList'
import LangLearn from '../components/language/LangLearn'


function LanguagePage() {
    return (
        <>
            <LangTerminal />
            <PopularLanguages />
            <OtherLanguagesList />
            <LangLearn />

        </>
    )
}

export default LanguagePage
