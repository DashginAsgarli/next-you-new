import React, { useState } from 'react';
import { ArrowRight, Loader2, Copy, RotateCcw, Languages, ArrowLeftRight } from 'lucide-react';
import { RiTranslate2 } from "react-icons/ri";
function QuickTranslate() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEnToAz, setIsEnToAz] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleTranslate = () => {
    if (!text.trim()) return;

    setLoading(true);
    const langPair = isEnToAz ? "en|az" : "az|en";

    fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langPair}`)
      .then(res => res.json())
      .then(data => {
        if (data.responseData) {
          setResult(data.responseData.translatedText);
        } else {
          setResult("Tərcümə tapılmadı.");
        }
      })
      .catch(err => {
        console.error("Tərcümə xətası:", err);
        setResult("Xəta baş verdi!");
      })
      .finally(() => setLoading(false));
  };

  const toggleDirection = () => {
    setIsEnToAz(prev => !prev);
    setText("");
    setResult("");
  };

  function handleCopy() {
    if (!result) return;

    navigator.clipboard.writeText(result)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
  };

  return (
    <section className="w-full px-8 md:px-16 py-16 md:py-22  lg:pt-23  relative overflow-hidden">

      <div className="relative z-10">

        <div className=" mb-10">
          <div className="flex items-center gap-3 mb-4 text-[#378079] opacity-80">
            <RiTranslate2/>
            <span className="text-[10px] tracking-[0.5em] font-mono font-black uppercase">HƏR GÜN BİR SÖZ ÖYRƏN</span>
          </div>

          <h1 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-[1.07] tracking-[-0.01em] mb-9 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
            SÜRƏTLİ{" "}
            <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">
              TƏRCÜMƏ
            </span>
          </h1>
        </div>

        <div className=" bg-[#0d1117] border border-white/5 rounded-2xl p-6 md:p-8 relative">
          <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-[#378079] uppercase mb-1 tracking-widest">Mənbə</span>
                <span className="text-white font-bold">{isEnToAz ? "ENGLISH" : "AZERBAIJAN"}</span>
              </div>

              <button onClick={toggleDirection} className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#378079]/10 border border-[#378079]/30 text-[#378079] hover:bg-[#378079] hover:text-[#06090f] transition-all duration-300 active:rotate-180">
                <ArrowLeftRight size={18} />
              </button>

              <div className="flex flex-col">
                <span className="text-[10px] font-black text-[#378079] uppercase mb-1 tracking-widest">Hədəf</span>
                <span className="text-white font-bold">{isEnToAz ? "AZERBAIJAN" : "ENGLISH"}</span>
              </div>
            </div>

            {text && (
              <button onClick={() => { setText(""); setResult(""); }} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-rose-500 transition-colors">
                <RotateCcw size={14} /> Təmizlə
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="relative group">
              <textarea value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleTranslate(); } }} placeholder="Mətni daxil edin..." className="w-full h-40 bg-[#06090f] border border-white/10 rounded-xl p-5 text-[#f0ebe2] text-lg outline-none focus:border-[#378079]/50 transition-all resize-none font-light placeholder:text-slate-800" />
              <button onClick={handleTranslate} disabled={loading || !text.trim()} className="absolute bottom-4 right-4 bg-[#378079] hover:bg-[#45a098] text-[#06090f] p-3 rounded-lg transition-all active:scale-95 disabled:opacity-20">
                {loading ? <Loader2 size={20} className="animate-spin" /> : <ArrowRight size={20} />}
              </button>
            </div>

            <div className={`relative h-40 rounded-xl border transition-all duration-500 flex flex-col ${result ? 'bg-[#378079]/5 border-[#378079]/20' : 'bg-[#06090f] border-dashed border-white/5'
              }`}>
              {result ? (
                <div className="p-5 overflow-y-auto h-full scrollbar-thin scrollbar-thumb-[#378079]/20">
                  <p className="text-[#f0ebe2] text-lg font-medium leading-relaxed">{result}</p>
                  <div className="absolute top-4 right-4 flex items-center gap-3">
                    {copied && <span className="text-[9px] font-black text-emerald-500 uppercase tracking-tighter bg-emerald-500/10 px-2 py-1 rounded">Kopyalandı</span>}
                    <button onClick={handleCopy} className="p-2 text-slate-500 hover:text-[#378079] transition-colors bg-[#0d1117] rounded-md border border-white/5">
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-700 opacity-40">
                  <Languages size={32} className="mb-2" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Sistem Hazırdır</span>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default QuickTranslate;