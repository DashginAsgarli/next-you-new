import React, { useState } from 'react';

function MusicTheory() {

    const SCALES = {
        'C Major': {
            notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
            formula: 'Tam - Tam - Yarım - Tam - Tam - Tam - Yarım',
            mood: 'Şən, parlaq, pozitiv',
            examples: 'Bach Prelude, Happy Birthday',
            color: '#378079',
        },
        'A Minor': {
            notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            formula: 'Tam - Yarım - Tam - Tam - Yarım - Tam - Tam',
            mood: 'Kədərli, emosional, dərin',
            examples: 'Für Elise, Stairway to Heaven',
            color: '#7c6d9a',
        },
        'G Major': {
            notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
            formula: 'Tam - Tam - Yarım - Tam - Tam - Tam - Yarım',
            mood: 'Coşqulu, güclü, dramatik',
            examples: 'Ode to Joy (G key), Country music',
            color: '#9a6d3a',
        },
        'D Minor': {
            notes: ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'],
            formula: 'Tam - Yarım - Tam - Tam - Yarım - Tam - Tam',
            mood: 'Ciddi, ağır, melanxolik',
            examples: 'Toccata in D minor, Misirlou',
            color: '#6d3a3a',
        },
    };

    const ALL_NOTES = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
    const [selected, setSelected] = useState('C Major');
    const scale = SCALES[selected];

    return (
        <section className="px-8 md:px-16 py-10 bg-[#06090f] border-t border-white/5 min-h-screen">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#378079]" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Nəzəriyyə</span>
            </div>
            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] leading-tight tracking-tighter uppercase mb-8">
                MUSİQİ <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">NƏZƏRİYYƏSİ</span>
            </h2>

            <div className="flex flex-wrap gap-3 mb-10">
                {Object.keys(SCALES).map((k) => (
                    <button
                        key={k}
                        onClick={() => setSelected(k)}
                        className={`px-5 py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase border transition-all duration-300 rounded ${selected === k
                            ? 'border-[#378079] text-[#378079] bg-[#378079]/10'
                            : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white/70'
                            }`}
                    >
                        {k}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="bg-[#0b0f17] border border-white/5 rounded-2xl p-6 md:p-8">
                    <p className="text-[9px] tracking-[0.3em] text-white/30 uppercase font-black mb-10">Klaviatura Üzərində Göstərim</p>

                    <div className="flex justify-center gap-1 mb-12 h-32">
                        {ALL_NOTES.map((n) => {
                            const isSharp = n.includes('#') || n.includes('b');
                            const inScale = scale.notes.includes(n);

                            return (
                                <div key={n} className="flex flex-col items-center gap-3">
                                    <div
                                        className={`rounded-b-md transition-all duration-500 ${isSharp ? 'z-10 -mx-2' : 'z-0'}`}
                                        style={{
                                            width: isSharp ? '22px' : '32px',
                                            height: isSharp ? '60px' : '100px',
                                            background: inScale
                                                ? scale.color
                                                : isSharp ? '#111318' : '#1e2128',
                                            border: inScale ? `1px solid ${scale.color}` : '1px solid rgba(255,255,255,0.05)',
                                            opacity: inScale ? 1 : 0.4,
                                        }}
                                    />
                                    <span className={`text-[10px] font-mono transition-colors ${inScale ? 'text-white font-bold' : 'text-white/10'}`}>
                                        {n}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex gap-3 flex-wrap justify-center border-t border-white/5 pt-8">
                        {scale.notes.map((n, i) => (
                            <div key={i} className="flex flex-col items-center group">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black transition-transform group-hover:scale-110"
                                    style={{
                                        background: `${scale.color}15`,
                                        border: `1px solid ${scale.color}44`,
                                        color: scale.color
                                    }}
                                >
                                    {n}
                                </div>
                                <span className="text-[8px] font-mono text-white/20 mt-2 uppercase">Derece {i + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <InfoCard title="Formula (Interval)" content={scale.formula} />
                    <InfoCard title="Əhval-ruhiyyə (Mood)" content={scale.mood} />
                    <InfoCard title="Məşhur Nümunələr" content={scale.examples} />
                </div>
            </div>
        </section>
    );
};

function InfoCard({ title, content }) {
    return (
        <div className="bg-[#0b0f17] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
            <p className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold mb-3">{title}</p>
            <p className="text-[14px] text-[#f0ebe2]/80 leading-relaxed font-medium">
                {content}
            </p>
        </div>
    );
}

export default MusicTheory;