import React, { useState } from 'react';
import * as Si from "react-icons/si";
import * as Vsc from "react-icons/vsc";
import * as Fa from "react-icons/fa";
import { Link } from 'react-router-dom';

const DevStack = () => {
    const languages = [
        { name: "HTML", icon: "SiHtml5", hex: "#E34F26", rank: "01", to: "/code/nextera/html" },
        { name: "CSS", icon: "FaCss3Alt", hex: "#1572B6", rank: "02" },
        { name: "JavaScript", icon: "SiJavascript", hex: "#F7DF1E", rank: "03" },
        { name: "React", icon: "SiReact", hex: "#61DAFB", rank: "04" },
        { name: "Python", icon: "SiPython", hex: "#3776AB", rank: "06" },
        { name: "Java", icon: "FaJava", hex: "#ED8B00", rank: "07" },
        { name: "PHP", icon: "SiPhp", hex: "#777BB4", rank: "09" },
        { name: "C++", icon: "SiCplusplus", hex: "#00599C", rank: "12" },
    ];

    return (
        <div className="  font-sans overflow-hidden">

            <section className="px-8 md:px-16 py-5 md:py-10 lg:py-10 relative z-10 ">
                <h1 className="text-[#f0ebe2] uppercase text-center font-black text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[1.07] tracking-[-0.01em] mb-14 md:mb-20 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
                    Kod{" "}
                    <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">öyrenin</span>
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                    {languages.map((lang) => {
                        const IconComponent = Si[lang.icon] || Fa[lang.icon] || Vsc[lang.icon] || Vsc.VscCode;

                        return (
                            <div key={lang.name} style={{ "--brand-color": lang.hex }} className="one-beveled-box group relative bg-[#0a0c12] border border-white/10 h-70 md:h-85 p-4 md:p-8 pb-10 flex flex-col justify-between transition-all duration-700 ease-out hover:scale-[1.02]">
                                <div className="absolute left-0 top-0 w-0.5 h-1/4 transition-all duration-700 z-10 bg-(--brand-color) group-hover:h-full" />

                                <div className="absolute -right-2 -bottom-2 text-5xl md:text-8xl font-black text-white/2 select-none pointer-events-none uppercase italic group-hover:text-white/5 transition-all duration-700 z-0">
                                    {lang.name.substring(0, 3)}
                                </div>

                                <div className="relative z-10">
                                    <span className="text-[8px] md:text-[10px] font-mono opacity-20 group-hover:opacity-100 transition-opacity text-(--brand-color)">
                                        MODUL_{lang.rank}
                                    </span>
                                </div>

                                <div className="relative z-10 flex flex-col items-center pointer-events-none">
                                    <div className="text-3xl md:text-5xl mb-3 md:mb-5 transition-all duration-700 text-(--brand-color)  group-hover:-translate-y-2 group-hover:drop-shadow-[10px_0_40px_var(--brand-color)]">
                                        <IconComponent />
                                    </div>
                                    <h3 className="text-[10px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.4em] uppercase italic text-white/40 group-hover:text-white transition-all text-center">
                                        {lang.name}
                                    </h3>
                                </div>

                                <Link to={lang.to} className="relative z-20 mt-2">
                                    <button className="one-beveled-box w-full py-2 md:py-3 text-[7px] md:text-[9px] font-black tracking-[0.2em] md:tracking-[0.4em] border border-white/10 uppercase transition-all duration-500                    hover:bg-white hover:text-black hover:border-white active:scale-95 cursor-pointer">
                                        KURSA Başla
                                    </button>
                                </Link>

                                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none z-0                bg-[radial-gradient(circle_at_center,var(--brand-color),transparent)]" />
                            </div>
                        );
                    })}
                </div>
            </section>

        </div>
    );
};

export default DevStack;