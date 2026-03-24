import React from 'react'
import LangTerminal from '../components/language/LangTerminal'
import PopularLanguages from '../components/language/PopularLanguages'
import OtherLanguagesList from '../components/language/OtherLanguagesList'


function LanguagePage() {
    return (
        <>
            <LangTerminal />
            <PopularLanguages />
            <OtherLanguagesList />

        </>
    )
}

export default LanguagePage
