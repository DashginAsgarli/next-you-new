import React, { useState } from 'react';
import { Volume2, Mic, BookText, Play, Loader2, UserRound, Zap } from 'lucide-react';

function AudioPractice() {

  const longText = "Language is the roadmap of a culture. It tells you where its people come from and where they are going. While AI accelerates your pace, your persistence defines your reach. Each word you master is a seed planted for a forest of opportunities.";
  const [wordData, setWordData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);

  const words = longText.split(" ");

  function fetchWordDefinition(word) {
    const cleanWord = word.replace(/[.,:;]/g, "");
    setIsLoading(true);
    setWordData(null);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cleanWord}`)
      .then(res => res.json())
      .then(data => {
        if (data && !data.title) {
          setWordData({
            word: data[0].word,
            phonetic: data[0].phonetic || "/.../",
            definition: data[0].meanings[0].definitions[0].definition,
            partOfSpeech: data[0].meanings[0].partOfSpeech,
            audio: data[0].phonetics.find(p => p.audio)?.audio,
          });
        } else setWordData({ error: "Söz tapılmadı" });
      })
      .catch(() => setWordData({ error: "Xəta!" }))
      .finally(() => setIsLoading(false));
  }

  function handleSpeakText() {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(longText);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.onboundary = (e) => {
      if (e.name === 'word') {
        setActiveWordIndex(textUpToChar ? textUpToChar.split(/\s+/).length : 0);
      }
    };
    utterance.onend = () => setActiveWordIndex(-1);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="w-full px-8 md:px-16 py-10 md:py-22  lg:py-16 relative overflow-hidden">


      <div className="relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-2 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap size={14} className="text-[#378079]" />
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-[#378079]">Audio Processor </span>
            </div>
            <h1 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-[1.07] tracking-[-0.01em] mb-9 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
              READING{" "}
              <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">
                TERMİNAL
              </span>
            </h1>
          </div>
          <div className="h-px flex-1 bg-white/5 mx-4 hidden md:block mb-4"></div>
        </div>

        <div className="bg-[#0d1117] border border-white/5 rounded-2xl grid grid-cols-1 lg:grid-cols-12 ">

          <div className="beveled-box lg:col-span-8  p-6 md:p-8">

            <div className=" rounded-xl flex items-center justify-between mb-8 bg-[#06090f] p-4 border border-white/5">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${activeWordIndex !== -1 ? 'bg-[#378079] text-[#06090f]' : 'bg-white/5 text-slate-600'}`}>
                  <UserRound size={18} className={activeWordIndex !== -1 ? "animate-pulse" : ""} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-bold">AI Assistant</span>
                    {activeWordIndex !== -1 && <span className="flex gap-0.5"><span className="w-1 h-3 bg-[#378079] animate-bounce"></span><span className="w-1 h-3 bg-[#378079] animate-[bounce_1.2s_infinite]"></span></span>}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#06090f] p-4 border border-white/5 rounded-xl min-h-45 mb-8">
              <div className="flex flex-wrap">
                {words.map((word, index) => (
                  <span key={index} onClick={() => fetchWordDefinition(word)} className={`text-lg md:text-xl font-medium cursor-pointer px-2 py-1 rounded-md transition-all duration-200 border ${activeWordIndex === index ? "text-[#06090f] bg-[#378079] border-[#378079] scale-110 z-10" : "text-[#f0ebe2]/80 border-transparent hover:border-white/10 hover:bg-white/5"}`}>
                    {word}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 md:pt-6 border-t border-white/5">
              <button onClick={handleSpeakText} className="flex items-center justify-center gap-2 px-6 py-3 md:py-4 bg-[#378079] text-[#06090f] rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#45a098] transition-all active:scale-95">
                <Volume2 size={16} /> Dinlə
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 md:py-4 bg-white/5 text-[#f0ebe2] border border-white/10 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">
                <Mic size={16} /> Tələffüz
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className=" flex-1 flex flex-col overflow-hidden ">
              <div className="bg-[#06090f] m-8 rounded-xl border border-white/5 flex-1 p-6 flex flex-col">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center h-full gap-4">
                    <Loader2 size={30} className="animate-spin text-[#378079] opacity-50" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse">Söz Axtarılır...</span>
                  </div>
                ) : wordData ? (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    {wordData.error ? (
                      <div className="bg-rose-500/5 border border-rose-500/20 p-4 rounded-xl text-rose-400 text-center text-xs font-bold">
                        {wordData.error}
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="text-2xl font-black text-[#378079] lowercase tracking-tight">{wordData.word}</h4>
                            {wordData.audio && (
                              <button onClick={() => new Audio(wordData.audio).play()} className="w-8 h-8 flex items-center justify-center bg-[#378079]/10 text-[#378079] rounded-lg hover:bg-[#378079] hover:text-[#06090f] transition-all">
                                <Play size={12} fill="currentColor" />
                              </button>
                            )}
                          </div>
                          <p className="text-slate-500 font-mono text-sm tracking-tighter">{wordData.phonetic}</p>
                        </div>

                        <div className="space-y-2">
                          <span className="text-[9px] font-black text-[#378079] uppercase tracking-widest bg-[#378079]/10 px-2 py-0.5 rounded border border-[#378079]/20">
                            {wordData.partOfSpeech}
                          </span>
                          <div className="p-4 bg-[#06090f] rounded-xl border border-white/5">
                            <p className="text-[#f0ebe2]/80 text-sm leading-relaxed italic">
                              "{wordData.definition}"
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center group">
                    <div className="w-16 h-16 rounded-full border border-dashed border-white/10 flex items-center justify-center mb-4 group-hover:border-[#378079]/30 transition-colors">
                      <BookText size={24} className="text-slate-800 group-hover:text-[#378079]/50 transition-colors" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-relaxed">
                      Analiz üçün<br />mətndən söz seçin
                    </p>
                  </div>
                )}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioPractice;