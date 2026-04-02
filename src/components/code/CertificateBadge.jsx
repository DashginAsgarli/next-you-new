import React from 'react';
import { HiCheckBadge, HiArrowSmallRight } from "react-icons/hi2";

function CertificateBadge() {
  return (
    <section className="relative px-8 md:px-16 py-10 md:py-16 overflow-hidden">
      <div className="relative z-10">

        <div className="group relative bg-[#06090f]/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-[#378079]/40">

          <div className="absolute left-0 top-0 w-1 md:w-1.5 h-full bg-[#378079]/40 group-hover:bg-[#378079] transition-colors" />

          <div className="relative p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">

              <div className="relative shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 border border-white/20 flex items-center justify-center text-white bg-[#378079]/10 rounded-full transition-all group-hover:scale-110">
                  <HiCheckBadge size={35} className="-rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>

              <div className="flex flex-col gap-3 md:gap-4 max-w-md">
                <h3 className="text-[#f0ebe2] font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase leading-[1.1]">
                  PROFESSİONAL{" "}
                  <span className="block sm:inline text-transparent [-webkit-text-stroke:1px_#f0ebe2] md:[-webkit-text-stroke:1.5px_#f0ebe2]">
                    SERTİFİKAT
                  </span>
                </h3>
                <p className="text-[10px] md:text-[14px] text-[#f0ebe2]/50 ">
                  NextYou platformasında qazandığın uğurları rəqəmsal dünyaya sübut et. Hər modul sonu rəsmi təsdiq.
                </p>
              </div>
            </div>

            <button className="whitespace-nowrap flex items-center gap-3 px-5 py-2 lg:px-8 lg:py-4 bg-[#378079] text-[#06090f] text-[10px] sm:text-xs font-bold tracking-[2px] uppercase rounded-full transition-all hover:bg-white hover:scale-105 active:scale-95">
              SERTİFİKAT AL <HiArrowSmallRight size={20} />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CertificateBadge;