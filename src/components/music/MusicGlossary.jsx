import { useState } from 'react';

function MusicGlossary() {

    const terms = [
        { word: 'Tempo', category: 'Ritm', def: 'Musiqinin sürəti. BPM (beats per minute) ilə ölçülür.' },
        { word: 'Harmony', category: 'Nəzəriyyə', def: 'İki və ya daha çox notun eyni anda çalınması ilə yaradılan ahəng.' },
        { word: 'Melody', category: 'Nəzəriyyə', def: 'Ardıcıl notların birləşməsindən yaranan musiqili xətt.' },
        { word: 'Chord', category: 'Nəzəriyyə', def: 'Üç və ya daha çox notun eyni anda çalınması. Major/Minor növləri var.' },
        { word: 'Octave', category: 'Nəzəriyyə', def: 'Tezliyi 2 dəfə fərqli olan eyni adlı iki nota arasındakı məsafə.' },
        { word: 'Rhythm', category: 'Ritm', def: 'Musiqidə güclü və zəif zamanların düzülüşü — musiqinin nəbzi.' },
        { word: 'Timbre', category: 'Səs', def: 'Musiqinin "rəngi" — eyni notun fleytada və gitarada fərqli eşidilməsinin səbəbi.' },
        { word: 'Dynamics', category: 'İfadə', def: 'Musiqinin ucalıq səviyyəsi — pianissimo (çox yavaş) — fortissimo (çox güclü).' },
        { word: 'Crescendo', category: 'İfadə', def: 'Musiqinin yavaş-yavaş güclənməsi.' },
        { word: 'Arpeggio', category: 'Texnika', def: 'Akkordun notlarının eyni anda yox, ardıcıl çalınması.' },
        { word: 'Syncopation', category: 'Ritm', def: 'Gözlənilməyən zamanlarada vurğu — jazz və funk-da çox işlənir.' },
        { word: 'Modulation', category: 'Nəzəriyyə', def: 'Musiqidə bir tonallıqdan digərinə keçid.' },
        { word: 'Vibrato', category: 'Texnika', def: 'Notun tezliyinin tez-tez dəyişdirilməsi ilə yaranan titrəmə effekti.' },
        { word: 'Legato', category: 'İfadə', def: 'Notların fasiləsiz, hamar şəkildə bağlanması ilə çalınması.' },
        { word: 'Staccato', category: 'İfadə', def: 'Notların qısa, kəsik şəkildə çalınması — əksi legatodur.' },
        { word: 'Polyrhythm', category: 'Ritm', def: 'İki fərqli ritmin eyni vaxtda birlikdə çalınması.' },
    ];

    const categories = ['Hamısı', 'Ritm', 'Nəzəriyyə', 'Səs', 'İfadə', 'Texnika'];

    const [filter, setFilter] = useState('Hamısı');
    const [search, setSearch] = useState('');
    const [expanded, setExpanded] = useState(null);

    const filtered = terms.filter((t) => {
        const matchCat = filter === 'Hamısı' || t.category === filter;
        const matchSearch = t.word.toLowerCase().includes(search.toLowerCase()) ||
            t.def.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    return (
        <section className="px-8 md:px-16 py-10 border-t border-white/5">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#378079]" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Lüğət</span>
            </div>
            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] leading-tight tracking-tighter uppercase mb-8">
                MUSİQİ <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">LÜĞƏTİ</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="AXTAR..."
                    className="custom-input flex-1"
                />
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((c) => {
                    return (
                        <button
                            key={c}
                            onClick={() => setFilter(c)}
                            className={
                                'px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase border transition-all ' +
                                (filter === c
                                    ? 'border-[#378079] text-[#378079] bg-[#378079]/10'
                                    : 'border-white/10 text-white/30 hover:border-white/20 hover:text-white/50')
                            }
                        >
                            {c}
                        </button>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filtered.map((t) => {
                    var isOpen = expanded === t.word;
                    return (
                        <div
                            key={t.word}
                            onClick={() => setExpanded(isOpen ? null : t.word)}
                            className="bg-[#0b0f17] border border-white/5 rounded-xl p-5 cursor-pointer hover:border-[#378079]/30 transition-all"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h4 className="text-[#f0ebe2] font-black text-base uppercase tracking-tight">{t.word}</h4>
                                        <span className="text-[8px] px-2 py-0.5 border border-[#378079]/30 text-[#378079] rounded uppercase tracking-[0.2em]">
                                            {t.category}
                                        </span>
                                    </div>
                                    {isOpen && (
                                        <p className="text-[12px] text-[#f0ebe2]/50 leading-relaxed mt-3">{t.def}</p>
                                    )}
                                </div>
                                <span className="text-white/20 text-lg ml-4">{isOpen ? '−' : '+'}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {filtered.length === 0 && (
                <div className="text-center py-12 text-[11px] text-white/20 uppercase tracking-[0.3em]">
                    Nəticə tapılmadı
                </div>
            )}
        </section>
    );
}

export default MusicGlossary;