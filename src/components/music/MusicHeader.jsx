import React from 'react';
import { HiSearch } from "react-icons/hi";

const MusicHeader = ({ searchTerm, setSearchTerm, onSearch, activeTab, setActiveTab, isLoading }) => {
  const tabs = [
    { id: "all", label: "Qlobal", display: "Bütün Mahnılar" },
    { id: "favorites", label: "Sənin Seçimin", display: "Bəyəndiklərim" },
    { id: "recent", label: "Tarixçə", display: "Son Dinlənilənlər" }
  ];

  return (
    <div className="relative pt-24 pb-20 mb-12 flex flex-col items-center text-center overflow-hidden">
      

      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)`, 
          backgroundSize: '60px 60px' 
        }} 
      />


      <div 
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-125 pointer-events-none opacity-30 z-0" 
        style={{ background: 'radial-gradient(circle, rgba(55,128,121,0.15) 0%, transparent 70%)' }} 
      />


      <div className="flex items-center gap-3 mb-8 relative z-10 animate-[fadeUp_0.7s_ease_both]">
        <div className="w-8 h-px bg-[#378079]/40" />
        <span className="text-[10px] tracking-[0.45em] text-[#378079] uppercase font-bold">
          Audio Terminal v2.0
        </span>
        <div className="w-8 h-px bg-[#378079]/40" />
      </div>


      <div className="relative z-10 mb-16 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
        <h1 className="text-[#f0ebe2] font-black text-[clamp(2.4rem,6vw,5rem)] leading-[0.85] tracking-[-0.03em] uppercase">
          SOUND <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #f0ebe2' }}>WAVE</span>
        </h1>
      </div>

      <div className="relative w-full max-w-xl z-10 mb-20 md:mb-24 px-4 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.3s]">
        <div className="relative flex items-center bg-[#06090f] border border-white/10 rounded-full overflow-hidden transition-all focus-within:border-[#378079]/60">
          <input 
            type="text" 
            placeholder="MAHNI VƏ YA SƏNƏTKAR AXTA..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onSearch(searchTerm)}
            className="w-full bg-transparent py-4 md:py-5 px-6 md:px-10 text-[10px] md:text-[11px] tracking-[2px] text-white focus:outline-none placeholder:text-white/20 uppercase font-semibold italic"
          />
          <button 
            onClick={() => onSearch(searchTerm)}
            disabled={isLoading}
            className="mr-2 px-6 md:px-10 h-9 md:h-11 bg-[#378079] text-[#06090f] text-[9px] md:text-[10px] font-black tracking-[2px] uppercase hover:bg-white hover:scale-105 active:scale-95 transition-all rounded-full disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <HiSearch size={14} />
            <span className="hidden md:inline">{isLoading ? "..." : "Axtar"}</span>
          </button>
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 w-full relative z-10 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.45s]">
        {tabs.map((tab, i) => {
          const isActive = activeTab === tab.id;
          return (
            <div 
              key={tab.id} 
              onClick={() => setActiveTab(tab.id)}
              className={`relative cursor-pointer transition-all duration-500 flex flex-col items-center px-5 md:px-10 group
                ${i !== 0 ? 'md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-6 md:before:w-px md:before:bg-[#378079]/15' : ''}`}
            >
              <span className={`font-black text-[1.2rem] md:text-[1.25rem] leading-none tracking-[0.12em] transition-all uppercase italic
                ${isActive ? 'text-[#378079] scale-105' : 'text-white/5 group-hover:text-white/20'}`}>
                {tab.display}
              </span>
              <span className={`text-[7px] tracking-[0.4em] uppercase mt-2 transition-colors 
                ${isActive ? 'text-[#f0ebe2]/60 font-bold' : 'text-[#f0ebe2]/10 group-hover:text-[#f0ebe2]/30'}`}>
                {tab.label}
              </span>
              
              {isActive && (
                <div className="absolute -bottom-4 md:-bottom-6 w-1 h-1 bg-[#378079] rounded-full shadow-[0_0_12px_#378079] animate-pulse" />
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default MusicHeader;