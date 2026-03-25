import React from 'react';
import { HiSearch } from "react-icons/hi";

const MusicHeader = ({ searchTerm, setSearchTerm, onSearch, activeTab, setActiveTab, isLoading }) => {
  const tabs = [
    { id: "all", label: "Qlobal", display: "Bütün Mahnılar" },
    { id: "favorites", label: "Sənin Seçimin", display: "Bəyəndiklərim" },
    { id: "recent", label: "Tarixçə", display: "Son Dinlənilənlər" }
  ];

  return (
    <div className="relative pt-24 pb-10 px-8 md:px-16 flex flex-col items-center text-center overflow-hidden">
      <div className="flex items-center gap-3 mb-8 relative z-10 animate-[fadeUp_0.7s_ease_both]">
        <div className="w-8 h-px bg-[#378079]/40" />
        <span className="text-[10px] tracking-[0.45em] text-[#378079] uppercase font-bold">
          BİR KLİKLƏ ANINDA İSTƏDİYİN MUSİQİNİ DİNLƏ
        </span>
        <div className="w-8 h-px bg-[#378079]/40" />
      </div>

      <h1 className="text-[#f0ebe2] font-black text-[2.4rem] md:text-[3.5rem] lg:text-[5rem] leading-[1.07] tracking-[-0.01em] mb-9 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
        MUSİQİ{" "}
        <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">
          PLAYER
        </span>
      </h1>

      <div className="relative w-full max-w-xl z-10 mb-20 md:mb-24 px-4 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.3s]">
        <div className="relative flex items-center bg-[#06090f] border border-white/10 rounded-full overflow-hidden transition-all focus-within:border-[#378079]/60">
          <input type="text" placeholder="MAHNI VƏ YA SƏNƏTKAR AXTAR..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && onSearch(searchTerm)} className="w-full bg-transparent py-4 md:py-5 px-6 md:px-10 text-[10px] md:text-[11px] tracking-[2px] text-white focus:outline-none placeholder:text-white/20 uppercase font-semibold italic" />
          <button onClick={() => onSearch(searchTerm)} disabled={isLoading} className="mr-2 px-6 md:px-10 h-9 md:h-11 bg-[#378079] text-[#06090f] text-[9px] md:text-[10px] font-black tracking-[2px] uppercase hover:bg-white hover:scale-105 active:scale-95 transition-all rounded-full disabled:opacity-50 flex items-center justify-center gap-2">
            <HiSearch size={14} />
            <span className="hidden md:inline">{isLoading ? "..." : "Axtar"}</span>
          </button>
        </div>
      </div>


      <div className="w-full relative z-10 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.45s]">
        <div className="font-['Bebas_Neue'] flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar pb-6 gap-2 md:gap-0 w-full px-4 md:px-0">
          {tabs.map((tab, i) => {
            const isActive = activeTab === tab.id;
            return (
              <div key={tab.id} onClick={() => setActiveTab(tab.id)} className={`relative cursor-pointer transition-all duration-500 flex flex-col items-center shrink-0 min-w-20 px-4 md:px-10 group ${i !== 0 ? 'md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-6 md:before:w-px md:before:bg-[#378079]/15' : ''}`}>
                <span className={`font-black text-[0.8rem] md:text-[1rem] leading-none tracking-[0.12em] transition-all uppercase ${isActive ? 'text-[#378079] scale-110' : 'text-white/20 group-hover:text-white/40'}`}>
                  {tab.display}
                </span>

                <span className={`text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.4em] uppercase mt-2 transition-colors whitespace-nowrap ${isActive ? 'text-[#f0ebe2]/80 font-bold' : 'text-[#f0ebe2]/20 group-hover:text-[#f0ebe2]/40'}`}>
                  {tab.label}
                </span>

                {isActive && (<div className="absolute -bottom-2 md:-bottom-6 w-1 h-1 bg-[#378079] rounded-full shadow-[0_0_12px_#378079] animate-pulse" />)}
              </div>
            );
          })}
        </div>
      </div>


    </div>
  );
};

export default MusicHeader;