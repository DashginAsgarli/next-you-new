import { useState } from 'react';
import { LuCompass } from "react-icons/lu";
function GenreMap() {

    const genres = [
        {
            key: 'fiction', label: 'Bədii ədəbiyyat', color: '#378079', size: 'lg',
            sub: ['Roman', 'Hekayə', 'Povest', 'Novella'],
            desc: 'İnsanın daxili dünyasını, münasibətlərini və cəmiyyəti əks etdirən əsərlər.',
            examples: 'Dostoyevski, Tolstoy, Kafka, Garcia Marquez',
            count: '1,240+',
        },
        {
            key: 'scifi', label: 'Elmi fantastika', color: '#3a5a9a', size: 'md',
            sub: ['Kosmik opera', 'Distopiya', 'Kiberpunk', 'Hard SF'],
            desc: 'Gələcəyin texnologiyası, süni intellekt, kosmik kəşflər.',
            examples: 'Asimov, Dick, Le Guin, Liu Cixin',
            count: '680+',
        },
        {
            key: 'history', label: 'Tarix', color: '#7a5a2a', size: 'md',
            sub: ['Dünya tarixi', 'Bioqrafiya', 'Mədəniyyət', 'Hərb'],
            desc: 'Keçmişdən dərs, bugün üçün məna, gələcəyə işıq.',
            examples: 'Yuval Noah Harari, Barbara Tuchman',
            count: '520+',
        },
        {
            key: 'psychology', label: 'Psixologiya', color: '#6a3a7a', size: 'md',
            sub: ['Özünüinkişaf', 'Davranış elmi', 'Koqnitiv', 'Sosial'],
            desc: 'İnsan ağlının sirləri, davranış motivləri, emosional zəka.',
            examples: 'Kahneman, Cialdini, Viktor Frankl',
            count: '430+',
        },
        {
            key: 'philosophy', label: 'Fəlsəfə', color: '#5a3a3a', size: 'sm',
            sub: ['Etika', 'Metafizika', 'Epistemologiya', 'Siyasi'],
            desc: 'Var olmanın mənası, bilik, ədalət — əbədi suallar.',
            examples: 'Stoics, Nietzsche, Camus, Simone de Beauvoir',
            count: '280+',
        },
        {
            key: 'tech', label: 'Texnologiya', color: '#2a5a4a', size: 'sm',
            sub: ['Proqramlaşdırma', 'AI', 'Startup', 'Dizayn'],
            desc: 'Rəqəmsal inqilabı anlat — gələcəyə hazır ol.',
            examples: 'Clean Code, Zero to One, Thinking in Systems',
            count: '350+',
        },
        {
            key: 'mystery', label: 'Detektiv', color: '#3a3a5a', size: 'sm',
            sub: ['Cinayət', 'Triller', 'Nuar', 'Həll etmə'],
            desc: 'Sirr, gərginlik, gözlənilməz sonluqlar.',
            examples: 'Agatha Christie, Dostoevsky, Stieg Larsson',
            count: '320+',
        },
        {
            key: 'poetry', label: 'Şeir', color: '#7a4a2a', size: 'sm',
            sub: ['Klassik', 'Müasir', 'Epik', 'Lirik'],
            desc: 'Dilin ən sıxışdırılmış, ən güclü forması.',
            examples: 'Rumi, Nizami, Rilke, Pablo Neruda',
            count: '210+',
        },
    ];

    const [active, setActive] = useState(null);

    const selected = active ? genres.find(g => g.key === active) : null;

    return (
        <section className="px-8 md:px-16 py-10 md:py-16">
            <div className="flex items-center gap-2 mb-4">
                <LuCompass className="text-[#378079] text-xl" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Kəşf</span>
            </div>
            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-tight tracking-tighter uppercase mb-8">
                JANR <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">XƏRİTƏSİ</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-wrap gap-3">
                    {genres.map(g => {
                        const isActive = active === g.key;
                        const sizes = { lg: 'px-6 py-5 text-[13px]', md: 'px-5 py-4 text-[12px]', sm: 'px-4 py-3 text-[11px]' };
                        return (
                            <button key={g.key} onClick={() => setActive(isActive ? null : g.key)} className={'border rounded-2xl font-black tracking-[0.15em] uppercase transition-all ' + sizes[g.size]} style={{ borderColor: isActive ? g.color : 'rgba(255,255,255,0.06)', background: isActive ? g.color + '20' : '#0b0f17', color: isActive ? g.color : 'rgba(240,235,226,0.5)', }}>
                                {g.label}
                                <span className="ml-2 text-[9px] opacity-50 font-mono">{g.count}</span>
                            </button>
                        );
                    })}
                </div>

                <div>
                    {selected ? (
                        <div className="bg-[#0b0f17] rounded-2xl p-6 md:p-8 border transition-all" style={{ borderColor: selected.color + '40' }}>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-black text-xl uppercase tracking-tight" style={{ color: selected.color }}>
                                    {selected.label}
                                </h3>
                                <span className="text-[10px] font-mono px-3 py-1 rounded-lg" style={{ background: selected.color + '15', color: selected.color }}>
                                    {selected.count}
                                </span>
                            </div>

                            <p className="text-[13px] text-[#f0ebe2]/50 leading-relaxed mb-5">{selected.desc}</p>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/20 mb-2">Alt kateqoriyalar</p>
                                    <div className="flex flex-wrap gap-2">
                                        {selected.sub.map(s => (
                                            <span key={s} className="text-[9px] px-2 py-1 rounded border" style={{ borderColor: selected.color + '30', color: selected.color }}>
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/20 mb-2">Nümunə müəlliflər</p>
                                    <p className="text-[12px] text-[#f0ebe2]/40">{selected.examples}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-[#0b0f17] border border-white/5 rounded-2xl p-8 flex items-center justify-center h-full min-h-48">
                            <p className="text-[11px] text-white/20 uppercase tracking-[0.2em] text-center">
                                Bir janrı seç — ətraflı məlumat gör
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default GenreMap;