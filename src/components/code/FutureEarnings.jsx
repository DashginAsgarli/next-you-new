import React, { useState, useEffect } from 'react';
import { HiSparkles, HiCpuChip, HiGlobeAlt, HiClock } from "react-icons/hi2";

function FutureEarnings() {
  const [field, setField] = useState('frontend');
  const [hours, setHours] = useState(20);
  const [english, setEnglish] = useState('B1-B2');
  const [prediction, setPrediction] = useState({ min: 0, max: 0 });

  useEffect(() => {
    let baseSalary = 600;
    if (field === 'backend') baseSalary += 200;
    if (field === 'fullstack') baseSalary += 500;

    const langMultiplier = { 'A1-A2': 1, 'B1-B2': 1.5, 'C1-C2': 2.5 };
    const multiplier = langMultiplier[english] || 1;
    const experienceFactor = hours > 30 ? 1.3 : 1;

    let finalMin = baseSalary * multiplier * experienceFactor;
    let finalMax = finalMin * 1.8;

    setPrediction({
      min: Math.round(finalMin / 10) * 10,
      max: Math.round(finalMax / 10) * 10
    });
  }, [field, hours, english]);

  return (
    <section className="w-full py-20 px-4 md:px-16 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-16 animate-[fadeUp_0.7s_ease_both]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#378079]" />
            <span className="text-[10px] tracking-[0.4em] text-[#378079] uppercase font-black">AI_PREDICTOR_v1.0</span>
            <div className="w-8 h-px bg-[#378079]" />
          </div>
          <h2 className="text-[#f0ebe2] font-black text-[clamp(1.5rem,5vw,3.5rem)] leading-none tracking-tighter uppercase italic mb-4">
            Gələcək <span className="text-transparent" style={{ WebkitTextStroke: '1px #f0ebe2' }}>Qazancını</span> Hesabla
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch bg-white/2 border border-white/5 p-5 md:p-10 lg:p-12 rounded-[2.5rem] backdrop-blur-xl relative">
          
          <div className="space-y-10 relative z-10">
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#378079] font-black uppercase italic">
                <HiCpuChip size={14} /> İxtisas Sahəsi
              </label>
              <div className="grid grid-cols-3 gap-2 md:flex md:flex-wrap md:gap-3">
                {['Frontend', 'Backend', 'Fullstack'].map(f => (
                  <button 
                    key={f}
                    onClick={() => setField(f.toLowerCase())}
                    className={`py-3 rounded-xl text-[9px] md:text-[10px] font-black tracking-tighter md:tracking-widest uppercase transition-all duration-300 border text-center ${
                      field === f.toLowerCase() 
                      ? 'bg-[#378079] border-[#378079] text-white' 
                      : 'bg-white/5 border-white/5 text-white/30 hover:border-white/20'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#378079] font-black uppercase italic">
                <HiGlobeAlt size={14} /> İngilis Dili
              </label>
              <div className="relative">
                <select 
                  value={english} 
                  onChange={(e) => setEnglish(e.target.value)}
                  className="w-full bg-white/3 border border-white/10 rounded-xl py-4 px-4 text-white text-[10px] md:text-[11px] font-bold tracking-widest focus:outline-none focus:border-[#378079]/50 transition-all appearance-none cursor-pointer uppercase italic"
                >
                  <option className="bg-[#06090f]" value="A1-A2">A1 - A2</option>
                  <option className="bg-[#06090f]" value="B1-B2">B1 - B2</option>
                  <option className="bg-[#06090f]" value="C1-C2">C1 - C2 (REMOTE)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#378079] text-xs">▼</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#378079] font-black uppercase italic">
                  <HiClock size={14} /> Həftəlik Vaxt
                </label>
                <span className="text-[#378079] font-black text-xs tracking-widest">{hours} S.</span>
              </div>
              <input 
                type="range" min="10" max="60" 
                value={hours} 
                onChange={(e) => setHours(e.target.value)} 
                className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-[#378079]"
              />
            </div>
          </div>

          <div className="relative group flex items-center justify-center mt-6 md:mt-0">
            <div className="absolute inset-0 bg-[#378079]/5 blur-[60px] rounded-full" />
            
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 md:p-8 bg-linear-to-br from-white/3 to-transparent border border-white/5 rounded-4xl">
              <span className="text-[9px] tracking-[0.4em] text-[#378079] font-black uppercase mb-4 flex items-center gap-2">
                <HiSparkles /> Təxmini Gəlir
              </span>
              
              <div className="space-y-2 mb-6">
                <h3 className="text-[#f0ebe2] text-[1.8rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[3.5rem] font-black leading-none tracking-tighter italic">
                  {prediction.min}₼ <span className="text-[18px] align-middle opacity-20">/</span> {prediction.max}₼
                </h3>
                <div className="w-full h-px bg-linear-to-r from-transparent via-[#378079]/30 to-transparent mx-auto" />
              </div>

              <div className="py-2 px-4 bg-[#378079]/10 border border-[#378079]/20 rounded-full">
                <p className="text-[8px] md:text-[10px] text-[#378079] font-black tracking-widest uppercase italic">
                  {english === 'C1-C2' ? "🌍 Global Remote" : "📍 Yerli Bazar"}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: #378079;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}

export default FutureEarnings;