import React from 'react'
import DevStack from './DevStack'
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import CodeChallenge from './CodeChallenge';
import CssPlayground from './CssPlayground';
import GitCommands from './GitCommands';
import MockInterview from './MockInterview';
import FlexGridLab from './FlexGridLab';
import HTMLValidator from './HTMLValidator';
import HTTPStatusReference from './HTTPStatusReference';
import CodeEditor from './CodeEditor';

function NexstEra() {
    return (
        <>
            <section className=" w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <Link to="/code" className="px-8 md:px-16 pt-12 inline-flex items-center gap-2 mb-8 group text-[#378079]">
                    <HiArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-[9px] tracking-[0.4em] uppercase font-black">GERİ DÖN</span>
                </Link>
                <DevStack />
                <CodeEditor />
                <HTMLValidator />
                <MockInterview />
                <CodeChallenge />
                <FlexGridLab />
                <HTTPStatusReference />
                <CssPlayground />
                <GitCommands />

            </section>
        </>
    )
}

export default NexstEra
