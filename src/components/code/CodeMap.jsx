import React from "react";
import { Link } from "react-router-dom";
import {
    HiCode,
    HiChartBar,
    HiDatabase,
    HiCog,
    HiLightningBolt,
    HiArrowRight,
    HiTerminal
} from "react-icons/hi";

const courses = [
    { id: "fullstack", title: "Fullstack Proqramlaşdırma", skills: "HTML, CSS, JS, React, NextJS, NodeJS, MongoDB, XML, API, Git, Deployment", icon: <HiCode size={22} />, accent: "#F97316" },
    { id: "digital-marketing", title: "Digital Marketing", skills: "Marketingə giriş, Rəqəmsal marketing, SMM, Kontent ilə işləmə, Google Ads və s.", icon: <HiChartBar size={22} />, accent: "#EAB308" },
    { id: "data-science", title: "Data Science", skills: "Data Science-ə giriş, Python, SQL, Data analitika, Machine Learning, Süni intellekt", icon: <HiDatabase size={22} />, accent: "#A855F7" },
    { id: "it-project-management", title: "IT Project Management", skills: "Agile, Waterfall metodları, Project structures, Soft skills, Risk analysis və s.", icon: <HiCog size={22} />, accent: "#22C55E" },
    { id: "ai-engineering", title: "AI Engineering", skills: "Python, Machine Learning, Data, Pandas, NumPy, TensorFlow, Computer Vision, NLP, MLOps", icon: <HiLightningBolt size={22} />, accent: "#EC4899" }
];

function CodeMap() {
    return (
        <section className="bg-[#06090f] py-20 px-4 md:px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-[#f0ebe2] text-3xl md:text-4xl lg:text-5xl font-black mb-16 italic uppercase tracking-tighter leading-tight">
                    HARADAN BAŞLAYACAĞINIZDAN <br className="hidden md:block" />
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px #f0ebe2' }}>
                        ƏMİN DEYİLSİZ?
                    </span>
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-[#0b0f17] p-5 md:p-8 border border-[rgba(240,235,226,0.05)] relative group transition-all duration-500 hover:bg-[#111622] hover:border-[rgba(240,235,226,0.1)]"
                            style={{
                                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                            }}
                        >
                            <div className="mb-6 text-[#f0ebe2]" style={{ borderLeft: `2px solid ${course.accent}`, paddingLeft: '12px' }}>
                                <div className="p-1">
                                    {course.icon}
                                </div>
                            </div>

                            <h2 className="text-[#f0ebe2] text-base md:text-xl font-bold mb-3 leading-tight min-h-[50px]">
                                {course.title}
                            </h2>

                            <p className="text-[#f0ebe2]/40 text-[10px] md:text-xs mb-8 line-clamp-3 min-h-[45px]">
                                {course.skills}
                            </p>

                            <Link
                                to={`/code/${course.id}`}
                                className="text-[#378079] text-[9px] md:text-[11px] font-bold tracking-[0.2em] flex items-center gap-2 uppercase transition-all hover:text-[#4dbdb1]"
                            >
                                Ətraflı öyrən <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <div className="absolute top-0 right-0 w-3 h-3 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CodeMap;