import React from 'react';
import { IoGameControllerOutline } from "react-icons/io5";
import { FaCoins } from 'react-icons/fa';
import { RiBarChartGroupedFill } from 'react-icons/ri';

function LangTerminal() {
    return (
        <div className="relative flex items-center justify-center overflow-hidden  px-8 md:px-16 py-30 md:py-20  lg:py-20 border-b border-b-white">

            <section className="lang-section relative z-2 text-center">
                <div className="lang-header mb-20">
                    <div className="tag mb-4 flex items-center justify-center gap-2.5">
                        <div className="line h-px w-8 bg-[#378079]"></div>
                        <span className="text-[10px] font-black uppercase tracking-[4px] text-[#378079]">
                            Yeni Dİllər kəşf edin
                        </span>
                        <div className="line h-px w-8 bg-[#378079]"></div>
                    </div>

                    <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-black leading-[1.1] tracking-[-1px] text-[#f0ebe2]">
                        DİL ÖYRƏNMƏNİN <br />
                        <span className="outline-text text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">
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


        </div>
    );
}

export default LangTerminal;