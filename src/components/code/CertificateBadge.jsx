import React from 'react';
import { HiCheckBadge, HiArrowSmallRight } from "react-icons/hi2";

function CertificateBadge() {
  return (
    <section className="relative px-6 md:px-16 py-24 bg-[#06090f] overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)`, 
          backgroundSize: '60px 60px' 
        }} 
      />

      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-80 pointer-events-none opacity-20 z-0" 
        style={{ background: 'radial-gradient(circle, rgba(55,128,121,0.2) 0%, transparent 70%)' }} 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="group relative bg-[#06090f]/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-[#378079]/40">
          
          <div className="absolute left-0 top-0 w-[2px] h-full bg-[#378079]/40 group-hover:bg-[#378079] transition-colors" />

          <div className="relative p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 border border-[#378079]/30 flex items-center justify-center text-white bg-[#378079]/5  rounded-[50%] transition-all group-hover:border-[#378079]">
                   <HiCheckBadge size={36} className="-rotate-45" />
                </div>
              </div>

              <div className="text-center md:text-left">
              
                <h3 className="text-[#f0ebe2] font-black text-3xl md:text-5xl tracking-tighter uppercase italic leading-[0.9]">
                  PROFESSİONAL <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: '1.2px #f0ebe2' }}>SERTİFİKAT</span>
                </h3>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-8">
               <p className="max-w-[320px] lg:text-right text-[10px] tracking-[0.2em] text-[#f0ebe2]/30 uppercase font-bold italic leading-relaxed">
                 NextYou platformasında qazandığın uğurları rəqəmsal dünyaya sübut et. Hər modul sonu rəsmi təsdiq.
               </p>
               
               <button className="flex items-center gap-4 px-10 py-4 bg-[#378079] text-[#06090f] text-[10px] font-black tracking-[3px] uppercase italic rounded-full transition-all hover:bg-white hover:scale-105 active:scale-95">
                  Sertifikat al <HiArrowSmallRight size={18} />
               </button>
            </div>

          </div>

        </div>

 

      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default CertificateBadge;