import React from "react";
import { Link } from "react-router-dom";
import { HiCode, HiChartBar, HiDatabase, HiCog, HiLightningBolt, HiArrowRight, } from "react-icons/hi";

function CodeMap() {

    const courses = [
        { id: "nextera", title: "Proqramlaşdırma", skills: "HTML, CSS, JS, React, NextJS, NodeJS, MongoDB, XML, API, Git, Deployment", icon: <HiCode size={22} />, accent: "#F97316" },
        { id: "", title: "Digital Marketing", skills: "Marketingə giriş, Rəqəmsal marketing, SMM, Kontent ilə işləmə, Google Ads və s.", icon: <HiChartBar size={22} />, accent: "#EAB308" },
        { id: "", title: "Data Science", skills: "Data Science-ə giriş, Python, SQL, Data analitika, Machine Learning, Süni intellekt", icon: <HiDatabase size={22} />, accent: "#A855F7" },
        { id: "", title: "AI Engineering", skills: "Python, Machine Learning, Data, Pandas, NumPy, TensorFlow, Computer Vision, NLP, MLOps", icon: <HiLightningBolt size={22} />, accent: "#EC4899" }
    ];

    return (
        <section className="px-8 md:px-16 py-10 md:py-16  font-sans">
            <div>
                <h1 className="text-[#f0ebe2] uppercase font-black text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[1.07] tracking-[-0.01em] mb-10 md:mb-16 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
                    Mövcud{" "}
                    <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">
                        Kurslar
                    </span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {courses.map((course) => (
                        <div key={course.id} className="beveled-box bg-[#06090f] p-8 md:p-8 border border-white relative transition-all duration-500 hover:transform-[perspective(500px)_rotateY(10deg)_rotateX(5deg)_translateY(-10px)] ">
                            <div className="mb-6 text-[#f0ebe2]" style={{ borderLeft: `2px solid ${course.accent}`, paddingLeft: '12px' }}>
                                <div className="p-1">
                                    {course.icon}
                                </div>
                            </div>

                            <h2 className="text-[#f0ebe2] text-base md:text-xl font-bold mb-3 leading-tight min-h-12.5">
                                {course.title}
                            </h2>

                            <p className="text-[#f0ebe2]/40 text-[10px] md:text-xs mb-8 line-clamp-3 min-h-11.25">
                                {course.skills}
                            </p>

                            <Link to={`/code/${course.id}`} className="text-[#378079] text-[9px] md:text-[11px] font-bold tracking-[0.2em] flex items-center gap-2 uppercase transition-all hover:text-[#4dbdb1]">
                                Ətraflı öyrən <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CodeMap;