import React, { useState, useEffect } from 'react';

function ReflectionJournal() {

    const JOURNAL_QUESTIONS = [
        'Bu gün nə öyrəndim?',
        'Bu gün özümdən məmnunam, çünki...',
        'Sabah nə etmək istəyirəm?',
    ];

    const [entries, setEntries] = useState([]);
    const [currentAnswers, setCurrentAnswers] = useState(['', '', '']);
    const [isSaved, setIsSaved] = useState(false);

    const todayDate = new Date().toLocaleDateString('az-AZ');

    useEffect(() => {
        const savedJournal = localStorage.getItem('reflection-journal');
        const parsed = savedJournal && JSON.parse(savedJournal);

        if (parsed) { setEntries(parsed); }
    }, []);

    function handleAnswerChange(index, value) {
        const nextAnswers = [...currentAnswers];
        nextAnswers[index] = value;
        setCurrentAnswers(nextAnswers);
    };

    function saveJournalEntry() {
        if (!currentAnswers.some(answer => answer.trim())) return;
        const newEntry = { id: Date.now(), date: todayDate, answers: [...currentAnswers] };
        const updatedEntries = [newEntry, ...entries].slice(0, 30);
        setEntries(updatedEntries);
        localStorage.setItem('reflection-journal', JSON.stringify(updatedEntries));
        setCurrentAnswers(['', '', '']);
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 2000);
    };

    return (
        <section className="px-8 md:px-16 py-10 border-t border-white/5">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#378079]" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Jurnal</span>
            </div>

            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] leading-tight tracking-tighter uppercase mb-8">
                REFLEKSİYA <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">JURNALI</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#0b0f17] border border-white/5 rounded-2xl p-6 md:p-8">
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">{todayDate}</p>
                        {isSaved && (
                            <span className="text-[10px] text-[#378079] uppercase tracking-[0.2em] animate-pulse">
                                ✓ Saxlanıldı
                            </span>
                        )}
                    </div>

                    <div className="space-y-5">
                        {JOURNAL_QUESTIONS.map((question, index) => (
                            <div key={index}>
                                <label className="block text-[11px] font-bold text-[#378079] uppercase tracking-[0.2em] mb-2">
                                    {question}
                                </label>
                                <textarea value={currentAnswers[index]} onChange={(e) => handleAnswerChange(index, e.target.value)} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-[13px] text-white focus:outline-none focus:border-[#378079] transition-all resize-none" placeholder="Fikirlərini bura yaz..." />
                            </div>
                        ))}
                    </div>

                    <button onClick={saveJournalEntry} className="beveled-box w-full py-4 border border-white text-[11px] font-black tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all mt-6">
                        GÜNÜ YADDA SAXLA
                    </button>
                </div>

                <div>
                    <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/20 mb-4">
                        ƏVVƏLKİ GÜNLƏR ({entries.length})
                    </p>

                    {entries.length === 0 ? (
                        <div className="text-center py-12 text-[11px] text-white/10 uppercase tracking-[0.2em] border border-dashed border-white/5 rounded-2xl">
                            Hələ heç bir qeyd yoxdur
                        </div>
                    ) : (
                        <div className="space-y-3 max-h-125 overflow-y-auto pr-2 custom-scrollbar">
                            {entries.map((entry) => (
                                <div key={entry.id} className="bg-[#0b0f17] border border-white/5 rounded-xl p-4 transition-all hover:border-white/10">
                                    <p className="text-[10px] font-mono text-[#378079] mb-3 border-b border-[#378079]/10 pb-2">
                                        {entry.date}
                                    </p>
                                    {entry.answers.map((answer, qIndex) => (
                                        answer.trim() ? (
                                            <div key={qIndex} className="mb-3 last:mb-0">
                                                <p className="text-[9px] text-white/20 uppercase tracking-[0.15em] mb-1">
                                                    {JOURNAL_QUESTIONS[qIndex]}
                                                </p>
                                                <p className="text-[12px] text-[#f0ebe2]/60 leading-relaxed italic">
                                                    "{answer}"
                                                </p>
                                            </div>
                                        ) : null
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(55, 128, 121, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(55, 128, 121, 0.3);
                }
            `}</style>
        </section>
    );
}

export default ReflectionJournal;