import { useState } from 'react';

function LangDictionary() {
    const [searchTerm, setSearchTerm] = useState('');
    const [wordData, setWordData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function searchWord(word) {
        setLoading(true);
        setError('');
        setWordData(null);

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Söz tapılmadı');
            })
            .then(data => {
                setWordData(data[0]);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) searchWord(searchTerm);
    };

    return (
        <div className="w-full  px-8 md:px-16 py-16 md:py-20  lg:py-24 relative overflow-hidden">

            <div className="relative z-10">

                <div className="text-center mb-12">
                    <h1 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-[1.07] tracking-[-0.01em] mb-9 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
                        SMART{" "}
                        <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">
                            DİCTİONARY
                        </span>
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="mb-16 md:max-w-xl lg:max-w-4xl mx-auto">
                    <div className="flex flex-row items-center gap-2 bg-[#06090f] border border-white/10 p-2 rounded-2xl focus-within:border-[#378079]/50 transition-all duration-300">
                        <input className="flex-1 bg-transparent border-none px-4 py-3 text-[#f0ebe2] text-base md:text-xl outline-none placeholder:text-slate-700 min-w-20" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Söz..." />
                        <button type="submit" className="bg-[#378079] hover:bg-[#45a098] text-[#06090f] px-6 md:px-12 py-3 md:py-4 rounded-xl font-black uppercase text-[10px] md:text-xs tracking-widest transition-all active:scale-95 disabled:opacity-50 whitespace-nowrap" disabled={loading}>
                            {loading ? '...' : 'Axtar'}
                        </button>
                    </div>
                </form>

                {error && (
                    <div className="max-w-4xl mx-auto bg-red-500/5 border border-red-500/20 text-red-400 p-4 rounded-xl mb-8 text-center font-bold animate-pulse">
                        {error}
                    </div>
                )}

                {wordData && (
                    <div className=" animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="border-b border-white pb-6 mb-6">
                            <div className="flex items-baseline gap-4">
                                <h3 className="text-3xl md:text-5xl font-black text-[#f0ebe2] lowercase tracking-tighter">
                                    {wordData.word}
                                </h3>
                                <span className="text-[#378079] text-xl md:text-3xl italic font-mono opacity-80">
                                    {wordData.phonetic}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {wordData.meanings.map((meaning, i) => (
                                <div key={i} className="bg-[#06090f] border border-white/5 p-3 md:p-6 rounded-2xl border-l-4 border-l-[#378079]">
                                    <div className="mb-6">
                                        <span className="bg-[#378079]/10 text-[#378079] px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-[#378079]/20">
                                            {meaning.partOfSpeech}
                                        </span>
                                    </div>

                                    <div className="space-y-3">
                                        {meaning.definitions.slice(0, 3).map((def, j) => (
                                            <div key={j} className="bg-white/2 p-5 rounded-xl border border-white/5 group hover:border-white/10 transition-colors">
                                                <p className="text-[#f0ebe2]/90 text-[12px] md:text-[20px]  mb-2 font-light">
                                                    {def.definition}
                                                </p>
                                                {def.example && (
                                                    <p className="text-[#378079] italic text-[12px] md:text-[18px] pl-2 border-l-2 border-[#378079]/20 py-1">
                                                        "{def.example}"
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LangDictionary;