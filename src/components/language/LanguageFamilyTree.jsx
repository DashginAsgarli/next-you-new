import React, { useState } from 'react';
import { MdOutlineAccountTree } from "react-icons/md";

function LanguageFamilyTree() {
    const  langFamilies = [
        { family: 'Hind-Avropa', color: '#378079', members: ['İngilis', 'Alman', 'Fransız', 'İspan', 'Rus', 'Hind', 'Yunan'], origin: 'Proto-Hind-Avropa (5000 il əvvəl, Pont çölləri)' },
        { family: 'Türk', color: '#9a7a2a', members: ['Azərbaycanca', 'Türkcə', 'Özbəkcə', 'Qazaxca', 'Türkmən'], origin: 'Orta Asiya çölləri (2500 il əvvəl)' },
        { family: 'Sami', color: '#6d3a4a', members: ['Ərəbcə', 'İbranicə', 'Amhar', 'Aramey', 'Maltaca'], origin: 'Ərəbistan yarımadası (4000 il əvvəl)' },
        { family: 'Sino-Tibet', color: '#4a6d3a', members: ['Mandarin', 'Kanton', 'Birman', 'Tibet'], origin: 'Çin-Tibet dağları (6000 il əvvəl)' },
        { family: 'Yapon-Koreya', color: '#3a4a9a', members: ['Yapon', 'Koreya'], origin: 'Şərqi Asiya (tam mənşəyi bilinmir)' },
    ];

    const [active, setActive] = useState(0);
    const fam = langFamilies[active];

    return (
        <section className="px-8 md:px-16 py-10 md:py-16">
            <div className="flex items-center gap-2 mb-4">
                <MdOutlineAccountTree className="text-[#378079] text-xl" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Etimalogiya</span>
            </div>

            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-tight tracking-tighter uppercase mb-10">
                DİL <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">AİLE AĞACI</span>
            </h2>

            <div className="flex flex-wrap gap-2 mb-10">
                {langFamilies.map((f, i) => (
                    <button key={i} onClick={() => setActive(i)} className={`px-5 py-2 text-[10px] font-black tracking-[0.2em] uppercase border transition-all duration-300 ${active === i ? 'border-[#378079] text-[#06090f] bg-[#378079]' : 'border-white/5 text-white/30 hover:border-white/20 hover:text-white/60'}`}>
                        {f.family}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="bg-[#06090f] border rounded-2xl p-8 relative overflow-hidden transition-all duration-700" style={{ borderColor: `${fam.color}30` }}>
                    <div className="absolute top-0 right-0 w-32 h-32 blur-[100px] opacity-10 pointer-events-none" style={{ backgroundColor: fam.color }} />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: fam.color }} />
                            <h3 className="text-[#f0ebe2] font-black text-2xl uppercase tracking-tighter italic">{fam.family} Ailəsi</h3>
                        </div>

                        <div className="mb-8 p-4 bg-white/2 border border-white/5 rounded-2xl">
                            <p className="text-[8px] text-white/20 uppercase tracking-[0.2em] mb-1">Mənşə və Tarix</p>
                            <p className="text-[12px] text-[#f0ebe2]/60 font-mono leading-relaxed uppercase">{fam.origin}</p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-[8px] text-white/20 uppercase tracking-[0.2em] font-bold">Ailə Üzvləri</p>
                            <div className="flex flex-wrap gap-2">
                                {fam.members.map((m) => (
                                    <span key={m} className="px-4 py-2 text-[11px] font-black rounded-xl border transition-all hover:scale-105" style={{ backgroundColor: `${fam.color}10`, color: fam.color, borderColor: `${fam.color}30` }}>
                                        {m}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#0b0f17] border border-white/5 rounded-2xl p-10 flex flex-col items-center justify-center relative">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${fam.color} 1px, transparent 0)`, backgroundSize: '24px 24px' }} />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="px-8 py-2 rounded-full text-sm font-black uppercase tracking-[0.2em]"
                            style={{ backgroundColor: fam.color, color: '#06090f' }}>
                            {fam.family}
                        </div>

                        <div className="w-px h-12" style={{ backgroundColor: `${fam.color}40` }} />

                        <div className="relative flex flex-wrap justify-center gap-4 max-w-md -mt-px">
                            <div className="absolute top-0 left-10 right-10 h-px" style={{ backgroundColor: `${fam.color}20` }} />

                            {fam.members.slice(0, 4).map((m) => (
                                <div key={m} className="flex flex-col items-center">
                                    <div className="w-px h-8" style={{ backgroundColor: `${fam.color}20` }} />
                                    <div className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all duration-500 hover:bg-white/5" style={{ color: `${fam.color}cc`, borderColor: `${fam.color}30`, backgroundColor: `${fam.color}05` }}>
                                        {m}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <span className="text-[9px] font-mono text-white/10 uppercase tracking-[0.5em]">və digər alt qruplar...</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LanguageFamilyTree;