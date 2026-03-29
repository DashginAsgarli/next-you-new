import React from 'react';
import * as Si from 'react-icons/si';
import * as Fa from 'react-icons/fa';

function TechStack() {

    const techs = [
        { name: 'React', icon: 'SiReact', color: '#61DAFB' },
        { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
        { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
        { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
        { name: 'Python', icon: 'SiPython', color: '#3776AB' },
        { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
        { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#336791' },
        { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
        { name: 'Git', icon: 'SiGit', color: '#F05032' },
        { name: 'Figma', icon: 'SiFigma', color: '#F24E1E' },
        { name: 'TailwindCSS', icon: 'SiTailwindcss', color: '#06B6D4' },
        { name: 'Next.js', icon: 'SiNextdotjs', color: '#ffffff' },
    ];

    return (
        <section className="px-8 md:px-16  py-10 md:py-12 lg:py-16 overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-[#378079]" />
                <span className="text-[10px] tracking-[0.3em] text-[#378079] uppercase font-bold">Texnologiyalar</span>
            </div>
            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[3rem] lg:text-[4rem] max-w-2xl leading-[1.07] tracking-[-0.01em] mb-10 md:mb-16 uppercase">
                ÖYRƏNİLƏN{' '}
                <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">TEXNOLOGİYALAR</span>
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {techs.map((tech, i) => {
                    const IconComp = Si[tech.icon] || Fa[tech.icon];
                    return (
                        <div key={i} className="group flex flex-col items-center gap-3 p-5 border border-white hover:border-white/30 bg-[#06090f] z-10 transition-all duration-300  hover:-translate-y-1">
                            {IconComp && (
                                <span style={{ color: tech.color }} className="text-3xl group-hover:scale-110 transition-transform">
                                    <IconComp />
                                </span>
                            )}
                            <span className="text-[9px] font-bold text-[#f0ebe2]/40 uppercase tracking-widest group-hover:text-[#f0ebe2]/80 transition-colors">{tech.name}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
export default TechStack