import React from 'react';

const LibraryHeader = ({ searchQuery, setSearchQuery, onSearch, activeView, setActiveView, isLoading }) => {
  const tabs = [
    { id: "all", label: "Arxiv", display: "Bütün kitablar" },
    { id: "favorites", label: "Sənin Seçimin", display: "Favorilər" },
    { id: "rating", label: "Analiz", display: "Dəyərləndirilmə" }
  ];

  return (
    <div className="relative pt-24 pb-20 mb-12 flex flex-col items-center text-center">
      
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />


      <div 
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-125 pointer-events-none opacity-30 z-0" 
        style={{ background: 'radial-gradient(circle, rgba(55,128,121,0.15) 0%, transparent 70%)' }} 
      />

      <div className="flex items-center gap-3 mb-8 relative z-10 animate-[fadeUp_0.7s_ease_both]">
        <div className="w-8 h-px bg-[#378079]/40" />
        <span className="text-[10px] tracking-[0.45em] text-[#378079] uppercase font-bold">
          Rəqəmsal Kolleksiya v2.0
        </span>
        <div className="w-8 h-px bg-[#378079]/40" />
      </div>

      <div className="relative z-10 mb-16 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
        <h1 className="text-[#f0ebe2] font-black text-[clamp(2.4rem,6vw,5rem)] leading-[0.85] tracking-[-0.03em] uppercase">
          KİTAB<span className="text-transparent" style={{ WebkitTextStroke: '1.5px #f0ebe2' }}> XANA</span>
        </h1>
      </div>

      <div className="relative w-full max-w-xl z-10 mb-20 md:mb-24 px-4 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.3s]">
        <div className="relative flex items-center bg-[#06090f] border border-white/10 rounded-full overflow-hidden transition-all focus-within:border-[#378079]/60">
          <input 
            type="text" 
            placeholder="AXTAR..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onSearch(searchQuery)}
            className="w-full bg-transparent py-4 md:py-5 px-6 md:px-10 text-[10px] md:text-[11px] tracking-[2px] text-white focus:outline-none placeholder:text-white/20 uppercase font-semibold italic"
          />
          <button 
            onClick={() => onSearch(searchQuery)}
            disabled={isLoading}
            className="mr-2 px-6 md:px-10 h-9 md:h-11 bg-[#378079] text-[#06090f] text-[9px] md:text-[10px] font-black tracking-[2px] uppercase hover:bg-white transition-all rounded-full disabled:opacity-50"
          >
            {isLoading ? "..." : "Axtar"}
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 w-full relative z-10 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.45s]">
        {tabs.map((tab, i) => {
          const isActive = activeView === tab.id;
          return (
            <div 
              key={tab.id} 
              onClick={() => setActiveView(tab.id)}
              className={`relative cursor-pointer transition-all duration-500 flex flex-col items-center px-5 md:px-10 group
                ${i !== 0 ? 'md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-6 md:before:w-px md:before:bg-[#378079]/15' : ''}`}
            >
              <span className={`font-['Bebas_Neue'] text-[1.2rem] md:text-[1.25rem] leading-none tracking-[0.12em] transition-all uppercase
                ${isActive ? 'text-[#378079] scale-105' : 'text-white/5 group-hover:text-white/20'}`}>
                {tab.display}
              </span>
              <span className={`text-[7px] tracking-[0.4em] uppercase mt-2 transition-colors 
                ${isActive ? 'text-[#f0ebe2]/60 font-bold' : 'text-[#f0ebe2]/10 group-hover:text-[#f0ebe2]/30'}`}>
                {tab.label}
              </span>
              
              {isActive && (
                <div className="absolute -bottom-4 md:-bottom-6 w-1 h-1 bg-[#378079] rounded-full shadow-[0_0_12px_#378079]" />
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default LibraryHeader;