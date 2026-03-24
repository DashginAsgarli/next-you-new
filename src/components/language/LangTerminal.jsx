import React from 'react';
import { IoGameControllerOutline } from "react-icons/io5";
import { FaCoins } from 'react-icons/fa';
import { RiBarChartGroupedFill } from 'react-icons/ri';

function LangTerminal() {
    return (
        <div className="language-terminal relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-[#06090f] p-8">

            <div className="grid-overlay absolute inset-0 z-1" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`, backgroundSize: '60px 60px' }}></div>

            <section className="lang-section relative z-2 text-center">
                <div className="lang-header mb-20">
                    <div className="tag mb-4 flex items-center justify-center gap-2.5">
                        <div className="line h-px w-8 bg-[#378079]"></div>
                        <span className="text-[10px] font-black uppercase tracking-[4px] text-[#378079]">
                            Protocol: Language_Learning
                        </span>
                    </div>

                    <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-black leading-[1.1] tracking-[-1px] text-[#f0ebe2]">
                        DİL ÖYRƏNMƏNİN <br />
                        <span className="outline-text text-transparent" style={{ WebkitTextStroke: '1.5px #f0ebe2' }}>
                            EFEKTİV
                        </span> YOLU
                    </h1>
                </div>

                <div className="lang-wave-container flex items-start justify-center gap-16 max-md:gap-6">

                    <div className="wave-item flex animate-[nextWave_2.5s_ease-in-out_infinite] flex-col items-center gap-4">
                        <div className="lang-circle flex h-22 w-22 items-center justify-center rounded-full border border-white/10 bg-[#378079] text-[2.2rem] text-white transition-[0.3s] max-md:h-16 max-md:w-16">
                            <IoGameControllerOutline />
                        </div>
                    </div>

                    <div className="wave-item flex animate-[nextWave_2.5s_ease-in-out_infinite] flex-col items-center gap-4 [animation-delay:0.4s]">
                        <div className="lang-circle flex h-22 w-22 items-center justify-center rounded-full border border-white/10 bg-[#f0ebe2] text-[2.2rem] text-[#378079] transition-[0.3s] max-md:h-16 max-md:w-16">
                            <FaCoins size="0.9em" />
                        </div>
                    </div>

                    <div className="wave-item flex animate-[nextWave_2.5s_ease-in-out_infinite] flex-col items-center gap-4 [animation-delay:0.8s]">
                        <div className="lang-circle flex h-22 w-22 items-center justify-center rounded-full border border-white/10 bg-[#2a5c57] text-[2.2rem] text-[#f0ebe2] transition-[0.3s] max-md:h-16 max-md:w-16">
                            <RiBarChartGroupedFill />
                        </div>
                    </div>

                </div>
            </section>

            <style>{` @keyframes nextWave {0%, 100% { transform: translateY(0); }50% { transform: translateY(-1.5rem); }  }`}</style>
        </div>
    );
}

export default LangTerminal;