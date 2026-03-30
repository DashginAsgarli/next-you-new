import React, { useState } from 'react';

function Portfolio() {
    const [activeTab, setActiveTab] = useState('projects');

    const projects = [
        { name: 'NextYou Platform', tech: ['React', 'Tailwind', 'Node.js'], status: 'Aktiv', desc: 'Çox sahəli öyrənmə platforması', year: 2026 },
        { name: 'Weather Dashboard', tech: ['React', 'Open-Meteo API'], status: 'Tamamlandı', desc: 'Real-time hava məlumatları', year: 2025 },
        { name: 'Quiz Engine', tech: ['JavaScript', 'OpenTDB API'], status: 'Tamamlandı', desc: 'Dinamik trivia quiz sistemi', year: 2025 },
        { name: 'Kitab İzləyici', tech: ['React', 'OpenLibrary API'], status: 'Beta', desc: 'Oxuduğun kitabları izlə', year: 2025 },
    ];

    const skills = [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Node.js', level: 55 },
        { name: 'Python', level: 40 },
        { name: 'SQL', level: 60 },
    ];

    const certs = [
        { name: 'HTML & CSS Sertifikatı', platform: 'NextYou', date: 'Yan 2026' },
        { name: 'JavaScript Fundamentals', platform: 'NextYou', date: 'Dek 2025' },
        { name: 'İngilis Dili B2', platform: 'NextYou', date: 'Noy 2025' },
    ];

    function handleTabChange(tabName) { setActiveTab(tabName); }

    return (
        <section>
            <div className="px-8 md:px-16 py-16">
                <div className="flex items-start justify-between mb-12 flex-wrap gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-px bg-[#378079]" />
                            <span className="text-[10px] tracking-[0.3em] text-[#378079] uppercase font-bold">Şəxsi Portfolio</span>
                        </div>
                        <h1 className="text-[#f0ebe2] font-black text-[2.4rem] md:text-[4rem] leading-[1.07] tracking-[-0.01em] uppercase">
                            MƏNİM <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">İŞLƏRİM</span>
                        </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="w-20 h-20 bg-[#378079]/20 border border-[#378079]/30 flex items-center justify-center font-black text-[#378079] text-2xl">NX</div>
                        <span className="text-[8px] font-mono text-[#f0ebe2]/20 text-center">NextYou User</span>
                    </div>
                </div>

                <div className="flex gap-3 mb-10 border-b border-white/5 pb-6">
                    <button onClick={() => handleTabChange('projects')} className={`px-5 py-2 text-[9px] font-black uppercase tracking-widest border transition-all ${activeTab === 'projects' ? 'bg-[#378079]/20 border-[#378079]/50 text-[#378079]' : 'border-white/10 text-[#f0ebe2]/30'}`}>
                        Layihələr
                    </button>
                    <button onClick={() => handleTabChange('skills')} className={`px-5 py-2 text-[9px] font-black uppercase tracking-widest border transition-all ${activeTab === 'skills' ? 'bg-[#378079]/20 border-[#378079]/50 text-[#378079]' : 'border-white/10 text-[#f0ebe2]/30'}`}>
                        Bacarıqlar
                    </button>
                    <button onClick={() => handleTabChange('certs')} className={`px-5 py-2 text-[9px] font-black uppercase tracking-widest border transition-all ${activeTab === 'certs' ? 'bg-[#378079]/20 border-[#378079]/50 text-[#378079]' : 'border-white/10 text-[#f0ebe2]/30'}`}>
                        Sertifikatlar
                    </button>
                </div>

                {activeTab === 'projects' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {projects.map((proj, index) => {
                            return (
                                <div key={index} className="bg-[#06090f] border border-white/10 hover:border-[#378079]/30 p-8 transition-all group">
                                    <div className="flex items-start justify-between mb-4">
                                        <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 ${proj.status === 'Aktiv' ? 'bg-[#378079]/20 text-[#378079] border border-[#378079]/20' : 'bg-white/5 text-white/30 border border-white/10'}`}>
                                            {proj.status}
                                        </span>
                                        <span className="font-mono text-[8px] text-[#f0ebe2]/20">{proj.year}</span>
                                    </div>
                                    <h3 className="text-[#f0ebe2] font-black text-xl uppercase tracking-tight mb-2 group-hover:text-[#378079] transition-colors">{proj.name}</h3>
                                    <p className="text-[12px] text-[#f0ebe2]/40 mb-4">{proj.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {proj.tech.map((t) => {
                                            return <span key={t} className="text-[8px] font-mono bg-white/5 px-2 py-1 text-[#f0ebe2]/50 border border-white/5">{t}</span>
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {activeTab === 'skills' && (
                    <div className="max-w-xl space-y-5">
                        {skills.map((skill, index) => {
                            return (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-[11px] font-bold text-[#f0ebe2]/70 uppercase tracking-wide">{skill.name}</span>
                                        <span className="text-[11px] font-mono text-[#378079]">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#378079] rounded-full" style={{ width: skill.level + "%" }} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {activeTab === 'certs' && (
                    <div className="space-y-4">
                        {certs.map((cert, index) => {
                            return (
                                <div key={index} className="flex items-center justify-between bg-[#06090f] border border-white/10 p-6">
                                    <div>
                                        <p className="font-black text-[#f0ebe2]/80 uppercase tracking-tight">{cert.name}</p>
                                        <p className="text-[9px] text-[#378079] font-mono mt-1">{cert.platform}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[8px] font-mono text-[#f0ebe2]/20">{cert.date}</span>
                                        <p className="text-[#378079] text-lg mt-1">✓</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Portfolio;