import React, { useState } from 'react';
import * as Si from "react-icons/si";
import * as Vsc from "react-icons/vsc";
import * as Fa from "react-icons/fa"; // CSS ikonu üçün lazımdır

const DevStack = () => {
    const [activeTab, setActiveTab] = useState('ALL');
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const languages = [
        { name: "HTML", icon: "SiHtml5", hex: "#E34F26", cat: "FRONTEND", rank: "01" },
        { name: "CSS", icon: "FaCss3Alt", hex: "#1572B6", cat: "FRONTEND", rank: "02" },
        { name: "JavaScript", icon: "SiJavascript", hex: "#F7DF1E", cat: "FRONTEND", rank: "03" },
        { name: "React", icon: "SiReact", hex: "#61DAFB", cat: "FRONTEND", rank: "04" },
        { name: "W3.CSS", icon: "FaCss3", hex: "#00FF00", cat: "FRONTEND", rank: "05" },
        { name: "Python", icon: "SiPython", hex: "#3776AB", cat: "BACKEND", rank: "06" },
        { name: "Java", icon: "FaJava", hex: "#ED8B00", cat: "BACKEND", rank: "07" },
        { name: "JQuery", icon: "SiJquery", hex: "#0769AD", cat: "FRONTEND", rank: "08" },
        { name: "PHP", icon: "SiPhp", hex: "#777BB4", cat: "BACKEND", rank: "09" },
        { name: "XML", icon: "VscCode", hex: "#FFA500", cat: "TOOLS", rank: "10" },
        { name: "C", icon: "SiC", hex: "#A8B9CC", cat: "BACKEND", rank: "11" },
        { name: "C++", icon: "SiCplusplus", hex: "#00599C", cat: "BACKEND", rank: "12" },
        { name: "Excel", icon: "FaFileExcel", hex: "#1D6F42", cat: "TOOLS", rank: "14" },
        { name: "Bootstrap", icon: "SiBootstrap", hex: "#7952B3", cat: "FRONTEND", rank: "15" },
        { name: "MySQL", icon: "SiMysql", hex: "#4479A1", cat: "TOOLS", rank: "16" },
    ];

    const categories = ["ALL", "FRONTEND", "BACKEND", "TOOLS"];
    const filteredLanguages = activeTab === "ALL" ? languages : languages.filter(l => l.cat === activeTab);

    return (
        <div className="bg-[#020408] min-h-screen text-[#f0ebe2] pb-32 font-sans overflow-hidden selection:bg-[#378079]/30">



            <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#378079] blur-[150px] rounded-full" />
            </div>

            <section className="relative pt-24 pb-12 px-4 text-center z-10">
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.4em] font-bold uppercase transition-all duration-500 py-2 px-4 md:px-6 border-b-2 ${activeTab === cat ? "text-[#378079] border-[#378079]" : "text-white/20 border-transparent hover:text-white/60"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {filteredLanguages.map((lang, index) => {
                        const IconComponent = Si[lang.icon] || Fa[lang.icon] || Vsc[lang.icon] || Vsc.VscCode;
                        const isHovered = hoveredIndex === index;

                        return (
                            <div
                                key={lang.name}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group relative bg-[#0a0c12] border border-white/10 h-[280px] md:h-[340px] p-4 md:p-8 pb-10 flex flex-col justify-between transition-all duration-700 ease-out"
                                style={{
                                    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                                    clipPath: 'polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px))',
                                }}
                            >
                                <div
                                    className="absolute left-0 top-0 w-[2px] transition-all duration-700 z-10"
                                    style={{
                                        background: lang.hex,
                                        boxShadow: isHovered ? `0 0 15px ${lang.hex}` : 'none',
                                        height: isHovered ? '100%' : '25%'
                                    }}
                                />

                                <div className="absolute -right-2 -bottom-2 text-5xl md:text-8xl font-black text-white/[0.02] select-none pointer-events-none uppercase italic group-hover:text-white/[0.05] transition-all duration-700 z-0">
                                    {lang.name.substring(0, 3)}
                                </div>

                                <div className="flex justify-between items-start relative z-10">
                                    <span className="text-[8px] md:text-[10px] font-mono opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: lang.hex }}>
                    //MOD_{lang.rank}
                                    </span>
                                    <Vsc.VscSymbolParameter className="opacity-10 group-hover:opacity-50 text-xs md:text-base" />
                                </div>

                                <div className="relative z-10 flex flex-col items-center pointer-events-none">
                                    <div
                                        className="text-3xl md:text-5xl mb-3 md:mb-5 transition-all duration-700"
                                        style={{
                                            color: lang.hex,
                                            filter: isHovered ? `drop-shadow(0 0 20px ${lang.hex})` : 'none',
                                            transform: isHovered ? 'translateY(-8px)' : 'none'
                                        }}
                                    >
                                        <IconComponent />
                                    </div>
                                    <h3 className="text-[10px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.4em] uppercase italic text-white/40 group-hover:text-white transition-all text-center">
                                        {lang.name}
                                    </h3>
                                </div>

                                <div className="relative z-20 mt-2">
                                    <button
                                        className="w-full py-2 md:py-3 text-[7px] md:text-[9px] font-black tracking-[0.2em] md:tracking-[0.4em] border border-white/10 uppercase transition-all duration-500 hover:bg-white hover:text-black hover:border-white active:scale-95 cursor-pointer"
                                    >
                                        ÖYRƏN_MODUL
                                    </button>
                                </div>

                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none z-0"
                                    style={{ background: `radial-gradient(circle at center, ${lang.hex}, transparent)` }}
                                />
                            </div>
                        );
                    })}
                </div>
            </section>

            <div className="mt-20 px-6 text-center opacity-10">
                <p className="text-[7px] tracking-[1em] uppercase">System_Status: Operational // Data_Nodes: {languages.length}</p>
            </div>

        </div>
    );
};

export default DevStack;