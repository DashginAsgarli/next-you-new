import React, { useState } from 'react';
import { HiOutlinePuzzlePiece } from "react-icons/hi2";

function CodeChallenge() {
    
    const CHALLENGES = [
        { id: 1, title: 'FizzBuzz', difficulty: 'Asan', xp: 50, desc: '1-dən 100-ə qədər: 3-ə bölünürsə Fizz, 5-ə bölünürsə Buzz yaz.', tag: 'Loop' },
        { id: 2, title: 'Palindrome Yoxlayıcı', difficulty: 'Asan', xp: 75, desc: 'Verilmiş sözün palindrome olub olmadığını yoxla.', tag: 'String' },
        { id: 3, title: 'Fibonacci Ardıcıllığı', difficulty: 'Orta', xp: 120, desc: 'N-ci Fibonacci ədədini tapan funksiya yaz.', tag: 'Rekursiya' },
        { id: 4, title: 'Anagram Yoxlama', difficulty: 'Orta', xp: 150, desc: 'İki sözün anagram olub olmadığını müəyyən et.', tag: 'String/Object' },
        { id: 5, title: 'Binary Search', difficulty: 'Çətin', xp: 200, desc: 'Sıralanmış massivdə ikili axtarış alqoritmi.', tag: 'Alqoritm' },
        { id: 6, title: 'Flatten Nested Array', difficulty: 'Çətin', xp: 250, desc: 'İçiçə massivi bir ölçülü massivə çevir.', tag: 'Rekursiya' },
    ];

    const DIFF_COLORS = {
        'Asan': { main: '#22C55E', bg: 'rgba(34, 197, 94, 0.1)', border: 'rgba(34, 197, 94, 0.25)' },
        'Orta': { main: '#F97316', bg: 'rgba(249, 115, 22, 0.1)', border: 'rgba(249, 115, 22, 0.25)' },
        'Çətin': { main: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)', border: 'rgba(239, 68, 68, 0.25)' }
    };
    const [solved, setSolved] = useState([]);

    function toggleSolve(id) {
        setSolved(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
    };

    return (
        <div className="px-8 md:px-16 py-16 border-b border-white/10 bg-[#06090f] min-h-screen">
            <div className="flex items-center gap-2 mb-4">
                <HiOutlinePuzzlePiece size={16} className="text-[#378079]" />
                <span className="text-[9px] font-black uppercase tracking-[3px] text-[#378079]">Günlük Challenge</span>
            </div>

            <div className="flex items-center justify-between mb-12">
                <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[3rem] leading-tight tracking-tighter uppercase">
                    KOD <span className="text-transparent [-webkit-text-stroke:1px_#f0ebe2]">MÜBADİLƏSİ</span>
                </h2>
                <div className="text-right">
                    <span className="font-mono text-3xl text-[#378079] font-bold">
                        {solved.length.toString().padStart(2, '0')}/{CHALLENGES.length.toString().padStart(2, '0')}
                    </span>
                    <p className="text-[8px] font-mono text-white/20 uppercase tracking-wider">Həll edildi</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CHALLENGES.map((ch) => {
                    const isSolved = solved.includes(ch.id);
                    const colors = DIFF_COLORS[ch.difficulty];

                    return (
                        <div
                            key={ch.id}
                            className={`group p-6 border transition-all duration-500 relative overflow-hidden ${isSolved
                                ? 'border-[#378079]/40 bg-[#378079]/5'
                                : 'border-white/5 bg-[#0d1117] hover:border-white/20'
                                }`}
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#378079]/5 blur-[50px] pointer-events-none group-hover:bg-[#378079]/10 transition-all" />

                            <div className="flex items-start justify-between mb-6">
                                <span
                                    className="text-[8px] font-black uppercase tracking-widest px-2 py-1 border rounded-sm"
                                    style={{
                                        color: colors.main,
                                        borderColor: colors.border,
                                        backgroundColor: colors.bg
                                    }}
                                >
                                    {ch.difficulty}
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[9px] font-mono text-[#378079] font-black">+{ch.xp} XP</span>
                                    {isSolved && <span className="text-[#378079] animate-pulse">✓</span>}
                                </div>
                            </div>

                            <h3 className="font-black text-[#f0ebe2] uppercase text-base tracking-tight mb-2">
                                {ch.title}
                            </h3>

                            <span className="text-[8px] bg-white/5 text-white/40 px-2 py-0.5 font-mono uppercase tracking-wider rounded-sm">
                                {ch.tag}
                            </span>

                            <p className="text-[12px] text-white/40 mt-4 mb-6 leading-relaxed min-h-[40px]">
                                {ch.desc}
                            </p>

                            <button
                                onClick={() => toggleSolve(ch.id)}
                                className={`w-full py-3 text-[9px] font-black uppercase tracking-widest border transition-all duration-300 active:scale-[0.98]
                                ${isSolved
                                        ? 'bg-[#378079] border-[#378079] text-[#06090f]'
                                        : 'border-white/10 text-white/30 hover:border-[#378079] hover:text-[#378079]'}`}
                            >
                                {isSolved ? '✓ Tamamlandı' : 'Həllini Yaz'}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CodeChallenge;