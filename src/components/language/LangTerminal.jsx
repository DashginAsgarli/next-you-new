import React from 'react';
import { IoGameControllerOutline } from "react-icons/io5";
import { FaCoins } from 'react-icons/fa';
import { RiBarChartGroupedFill } from 'react-icons/ri';
import { FaLanguage } from "react-icons/fa6";
function LangTerminal() {

    const waveData = [
        {
            id: 1,
            icon: <IoGameControllerOutline />,
            bgColor: "bg-[#378079]",
            textColor: "text-white",
            delay: "0s",
        },
        {
            id: 2,
            icon: <FaCoins size="0.9em" />,
            bgColor: "bg-[#f0ebe2]",
            textColor: "text-[#378079]",
            delay: "0.4s",
        },
        {
            id: 3,
            icon: <RiBarChartGroupedFill />,
            bgColor: "bg-[#2a5c57]",
            textColor: "text-[#f0ebe2]",
            delay: "0.8s",
        },
    ];

    return (
        <div className="relative flex items-center justify-center overflow-hidden  px-8 md:px-16 py-10 md:py-16">

            <section className="lang-section relative z-2 text-center">
                <div className="lang-header mb-20">
                    <div className="tag mb-4 flex items-center justify-center gap-2.5">
                        <FaLanguage className='text-[#378079]'/>
                        <span className="text-[10px] font-black uppercase tracking-[4px] text-[#378079]">
                            Yeni Dİllər kəşf edin
                        </span>
                    </div>

                    <h1 className="text-[2rem] md:text-[3rem] lg:text-[4.5rem] font-black leading-[1.1] tracking-[-1px] text-[#f0ebe2]">
                        DİL ÖYRƏNMƏNİN <br /><span className="outline-text text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">    EFEKTİV</span> YOLU
                    </h1>


                </div>

                <div className="lang-wave-container flex items-start justify-center gap-16 max-md:gap-6">
                    {waveData.map((item) => (
                        <div key={item.id} className="wave-item flex animate-[nextWave_2.5s_ease-in-out_infinite] flex-col items-center gap-4" style={{ animationDelay: item.delay }} >
                            <div className={`lang-circle flex h-16 w-16 md:h-22 md:w-22 items-center justify-center rounded-full border border-white/10 ${item.bgColor} ${item.textColor} text-[1.8rem] md:text-[2.2rem] transition-[0.3s] max-md:h-16 max-md:w-16`}>
                                {item.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
}

export default LangTerminal;