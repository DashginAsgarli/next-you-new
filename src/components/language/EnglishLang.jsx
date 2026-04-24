import React from 'react'
import WordOfTheDayStatic from './WordOfTheDay'
import LangDictionary from './LangDictionary'
import QuickTranslate from './QuickTranslate'
import AudioPractice from './AudioPractice'
import LangLearn from './LangLearn'
import IdiomLearn from './IdiomLearn'
import { Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";



function EnglishLang() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <div className="px-8 md:px-16 pt-10 md:pt-16 mb-10 animate-[fadeUp_0.7s_ease_both]">
                    <Link to="/language" className="inline-flex items-center gap-2 mb-8 group text-[#378079]">
                        <HiArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[9px] tracking-[0.4em] uppercase font-black">GERİ Qayıt</span>
                    </Link>
                </div>
                <LangDictionary />
                <LangLearn />
                <WordOfTheDayStatic />
                <AudioPractice />
                <QuickTranslate />
                <IdiomLearn />

            </section>
        </>
    )
}

export default EnglishLang
