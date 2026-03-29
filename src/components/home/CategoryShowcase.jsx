import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineCode, HiOutlineBookOpen, HiOutlineMusicNote, HiOutlineAcademicCap, HiArrowRight } from 'react-icons/hi'

function CategoryShowcase() {

    const categories = [
        { id: 'code', title: 'Kod', subtitle: 'HTML → Fullstack Developer', description: 'Sıfırdan başlayaraq tam stack developer ol. HTML, CSS, JS, React, Node, MongoDB və daha çox.', icon: <HiOutlineCode size={32} />, accent: '#F97316', count: '4 kurs', to: '/code', },
        { id: 'library', title: 'Kitab', subtitle: '10,000+ Rəqəmsal Kitab', description: 'Dünya klassiklərindən müasir texnoloji kitablara qədər geniş kolleksiya.', icon: <HiOutlineBookOpen size={32} />, accent: '#A855F7', count: '10K+ kitab', to: '/library', },
        { id: 'music', title: 'Musiqi', subtitle: 'Qlobal Musiqi Platforması', description: 'Milyonlarla mahnı — jazz, lofi, synthwave, phonk və daha çox janr.', icon: <HiOutlineMusicNote size={32} />, accent: '#EC4899', count: '∞ mahnı', to: '/music', },
        { id: 'language', title: 'Dil', subtitle: '10+ Dil, Sıfırdan C1-ə', description: 'İnteraktiv dərslər, lüğət, çeviri, audio praktika və günlük çalışmalar.', icon: <HiOutlineAcademicCap size={32} />, accent: '#3B82F6', count: '10+ dil', to: '/language', },
    ]

    return (
        <section className="px-8 md:px-16 py-10 md:py-12 lg:py-16">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-[#378079]" />
                <span className="text-[10px] tracking-[0.3em] text-[#378079] uppercase font-bold">Kateqoriyalar</span>
            </div>
            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[1.07] tracking-[-0.01em] mb-10 lg::mb-16 uppercase">
                NƏ{' '}
                <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">ÖYRƏNİRSƏN</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map(cat => {
                    return (
                        <Link key={cat.id} to={cat.to} className="group beveled-box bg-[#06090f] border border-white p-8 md:p-10 flex flex-col justify-between min-h-64 transition-all duration-500 hover:border-white/40 hover:transform-[perspective(500px)_rotateY(10deg)_rotateX(5deg)_translateY(-10px)] relative overflow-hidden">

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700" style={{ background: `radial-gradient(circle at bottom right, ${cat.accent}, transparent 60%)` }} />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 border border-white/10 text-[#f0ebe2]"
                                        style={{ borderLeftColor: cat.accent, borderLeftWidth: '2px' }}>
                                        {cat.icon}
                                    </div>
                                    <span className="text-[9px] font-mono tracking-[2px] text-[#f0ebe2]/30 uppercase">{cat.count}</span>
                                </div>

                                <h3 className="text-[#f0ebe2] font-black text-2xl md:text-3xl uppercase tracking-tighter mb-2">{cat.title}</h3>
                                <p className="text-[10px] text-[#f0ebe2]/40 font-bold tracking-widest uppercase mb-4">{cat.subtitle}</p>
                                <p className="text-[13px] text-[#f0ebe2]/50 leading-relaxed">{cat.description}</p>
                            </div>

                            <div className="relative z-10 flex items-center gap-2 mt-8 text-[#378079] text-[11px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                                Kəşfet <HiArrowRight size={14} />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default CategoryShowcase