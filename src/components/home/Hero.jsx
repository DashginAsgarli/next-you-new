import React from 'react';
import { HiSparkles } from "react-icons/hi2";

const stats = [
    { label: "Kateqoriya", value: "4+" },
    { label: "Sənin tempinlə", value: "100%" },
    { label: "İmkan", value: "∞" },
];

const Hero = () => {
    return (
        <section className=" home-wrapper bg-[#06090f] w-full overflow-hidden">
            <div className="  flex items-center relative py-20 lg:py-19">

                <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[40px_40px] md:bg-size-[60px_60px]" />

                <div className="relative z-10 px-10 md:px-15 lg:pl-16 w-full">

                    <div className="flex items-center gap-2.5 mb-6 md:mb-10 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.05s]">
                        <div className="w-6 md:w-9 h-px bg-[#378079]" />
                        <span className="text-[8px] md:text-[12px] tracking-[0.22em] text-[#378079] uppercase">
                            Öyrən. Yarat. İrələ.
                        </span>
                    </div>

                    <h1 className="text-[#f0ebe2] font-bold text-4xl md:text-7xl lg:text-8xl leading-[1.1] tracking-[0.01em] mb-8 md:mb-9 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
                        ÖZ <span className="md:[-webkit-text-stroke:1.5px_#f0ebe2] md:text-transparent text-[#f0ebe2] ml-1 md:ml-2.5">TEMPİNDƏ</span>
                        <br />
                        <span className="text-[#378079]">İRƏLİLƏ</span>
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-12 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.35s]">

                        <button className="flex items-center justify-center gap-3 px-5 md:px-10 h-11 md:h-13 bg-[#378079] text-white text-[9px] md:text-[11px] font-medium tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))] hover:bg-[#449a92] active:scale-95 w-fit">
                            <HiSparkles size={18} />
                            Keşfetmeye başla
                        </button>

                        <p className="text-[10px] md:text-[0.8rem] font-light text-[#f0ebe261] tracking-widest uppercase leading-loose max-w-100 border-l border-[#3780794d] pl-5">
                            Kitab &nbsp;·&nbsp; Musiqi &nbsp;·&nbsp; Kod &nbsp;·&nbsp; Dil<br />
                            Hər sahədə özünü kəşf et
                        </p>
                    </div>

                    <div className="flex items-center gap-4 md:gap-8  animate-[fadeUp_0.7s_ease_both] [animation-delay:0.45s]">
                        {stats.map((stat, index) => (
                            <div key={index} className={index !== 0 ? "pl-4 md:pl-8" : ""}>
                                <span className="font-['Bebas_Neue'] text-[1.5rem] md:text-[2.2rem] text-[#378079] leading-none block">
                                    {stat.value}
                                </span>
                                <span className="text-[8px] md:text-[9px] tracking-[0.2em] text-[#f0ebe24d] uppercase block mt-1">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;