import React, { useState, useCallback } from 'react';


function SentenceBuilder() {

    const SENTENCES = [
        { words: ['The', 'cat', 'sat', 'on', 'the', 'mat'], correct: 'The cat sat on the mat' },
        { words: ['She', 'loves', 'reading', 'books', 'every', 'night'], correct: 'She loves reading books every night' },
        { words: ['Learning', 'a', 'new', 'language', 'is', 'fun'], correct: 'Learning a new language is fun' },
        { words: ['Technology', 'is', 'changing', 'the', 'world', 'rapidly'], correct: 'Technology is changing the world rapidly' },
        { words: ['Success', 'requires', 'hard', 'work', 'and', 'patience'], correct: 'Success requires hard work and patience' },
    ];

    function shuffleArray(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    const [sIdx, setSIdx] = useState(0);
    const currentIdx = sIdx % SENTENCES.length;
    const currentSentence = SENTENCES[currentIdx];

    const [pool, setPool] = useState(() => shuffleArray(currentSentence.words));
    const [built, setBuilt] = useState([]);
    const [result, setResult] = useState(null);
    const [score, setScore] = useState(0);

    function pickWord(word, poolIdx) {
        if (result) return;
        setPool(prev => prev.filter((_, i) => i !== poolIdx));
        setBuilt(prev => [...prev, word]);
    };

    function removeWord(word, bIdx) {
        if (result) return;
        setBuilt(prev => prev.filter((_, i) => i !== bIdx));
        setPool(prev => [...prev, word]);
    };

    function checkAnswer() {
        const answer = built.join(' ');
        const isCorrect = answer === currentSentence.correct;
        setResult(isCorrect ? 'correct' : 'wrong');
        if (isCorrect) setScore(prev => prev + 10);
    }

    function nextSentence() {
        const nextIdx = sIdx + 1;
        const nextSent = SENTENCES[nextIdx % SENTENCES.length];
        setSIdx(nextIdx);
        setPool(shuffleArray(nextSent.words));
        setBuilt([]);
        setResult(null);
    }

    return (
        <section className="px-8 md:px-16 py-16 border-t border-white/5 bg-[#06090f]">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#378079]" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Dil Laboratoriyası</span>
            </div>

            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] leading-tight tracking-tighter uppercase mb-12">
                CÜMLƏ <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">QURUCU</span>
            </h2>

            <div className="max-w-2xl">
                <div className="flex justify-between items-end mb-6">
                    <div className="space-y-1">
                        <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Tərəqqi</p>
                        <p className="text-sm font-mono text-[#f0ebe2]">{(currentIdx + 1).toString().padStart(2, '0')} / {SENTENCES.length.toString().padStart(2, '0')}</p>
                    </div>
                    <div className="text-right space-y-1">
                        <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Qazanc</p>
                        <p className="text-sm font-mono text-[#378079] font-bold">+{score} XP</p>
                    </div>
                </div>

                <div className={`min-h-[100px] bg-[#0d1117] border rounded-2xl p-6 mb-6 transition-all duration-500 ${result === 'correct' ? 'border-[#378079]/50 bg-[#378079]/5' :
                    result === 'wrong' ? 'border-red-500/30 bg-red-500/5' : 'border-white/5'
                    }`}>
                    <p className="text-[8px] text-white/20 uppercase tracking-[0.2em] mb-4">Sənin Versiyan</p>
                    <div className="flex flex-wrap gap-2">
                        {built.length === 0 && <span className="text-sm text-white/10 italic font-mono tracking-tight">Aşağıdakı sözləri seçərək cümləni tamamla...</span>}
                        {built.map((word, i) => (
                            <button key={i} onClick={() => removeWord(word, i)} className="px-4 py-2 bg-[#378079] text-[#06090f] text-[13px] font-bold rounded-lg hover:bg-red-500 hover:text-white transition-all transform active:scale-90">
                                {word}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-10 min-h-[40px]">
                    {pool.map((word, i) => (
                        <button key={i} onClick={() => pickWord(word, i)} className="px-4 py-2 bg-white/5 border border-white/10 text-[#f0ebe2]/80 text-[13px] font-medium rounded-lg hover:border-[#378079]/50 hover:text-white transition-all active:scale-95">
                            {word}
                        </button>
                    ))}
                </div>

                <div className="h-20 flex items-center justify-center">
                    {result ? (
                        <div className="w-full animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <p className={`text-[11px] font-black uppercase tracking-[0.2em] text-center mb-4 ${result === 'correct' ? 'text-[#378079]' : 'text-red-400'}`}>
                                {result === 'correct' ? 'MÜKƏMMƏL! +10 XP' : `XƏTA: ${currentSentence.correct}`}
                            </p>
                            <button onClick={nextSentence} className="w-full py-4 bg-[#f0ebe2] text-[#06090f] text-[10px] font-black tracking-[0.3em] uppercase hover:bg-[#378079] transition-all">
                                {sIdx + 1 >= SENTENCES.length ? 'YENİDƏN BAŞLA' : 'NÖVBƏTİ CÜMLƏ'}
                            </button>
                        </div>
                    ) : (
                        <button onClick={checkAnswer} disabled={built.length === 0} className="w-full py-4 border border-[#378079] text-[#378079] text-[10px] font-black tracking-[0.3em] uppercase hover:bg-[#378079] hover:text-black transition-all disabled:opacity-20 active:scale-[0.99]">
                            YOXLA
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default SentenceBuilder;