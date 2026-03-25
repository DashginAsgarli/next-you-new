import React from 'react';

const DevHeader = () => {
  return (
    <div className="bg-[#06090f] lg:h-screen relative pt-32 pb-24 flex flex-col items-center text-center overflow-hidden">
      
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

      <div className="flex items-center gap-3 mb-10 relative z-10 animate-[fadeUp_0.7s_ease_both]">
        <div className="w-8 h-px bg-[#378079]/40" />
        <span className="text-[10px] tracking-[0.6em] text-[#378079] uppercase font-bold">
          Hardan başlayacağınızdan əmin deyilsiniz?
        </span>
        <div className="w-8 h-px bg-[#378079]/40" />
      </div>

      <div className="relative z-10 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
        <h1 className="text-[#f0ebe2] font-black text-[clamp(2.4rem,6vw,5rem)] leading-[0.85] tracking-[-0.04em] uppercase">
          Kod<span className="text-transparent" style={{ WebkitTextStroke: '1.5px #f0ebe2' }}> öyrenin</span>
        </h1>
        

      </div>



      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default DevHeader;