import React from 'react';
import { HiSparkles } from "react-icons/hi2";
import { LuGraduationCap } from "react-icons/lu";
const stats = [
  { label: "Kateqoriya", value: "4+" },
  { label: "Sənin tempinlə", value: "100%" },
  { label: "İmkan", value: "∞" },
];

function Hero() {
  return (
    <>
      <section >
        <div className="relative z-10 px-8 md:px-16 py-14 md:py-20">
          <div className="flex items-center gap-2.5 mb-8 md:mb-10 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.05s]">
            <LuGraduationCap className='text-[#378079]' />
            <span className="text-[10px] md:text-[11px] tracking-[0.22em] text-[#378079] uppercase font-semibold">
              Öyrən. Yarat. İrələ.
            </span>
          </div>

          <h1 className="text-[#f0ebe2] font-black text-[2.4rem] md:text-[3.5rem] lg:text-[5rem] leading-[1.07] tracking-[-0.01em] mb-9 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
            ÖZ{" "}
            <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">
              TEMPİNDƏ
            </span><br />
            <span className="text-[#378079]">İRƏLİLƏ</span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mb-10  md:mb-14 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.3s]">
            <button className="beveled-box flex items-center justify-center gap-2.5 px-9 h-14 border border-white text-white text-[10px] font-bold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer hover:translate-x-2   w-fit relative overflow-hidden">
              <HiSparkles size={16} />Kəşfetməyə başla
            </button>

            <p className="text-[10px] md:text-[11px] font-light tracking-[0.18em] uppercase leading-loose border-l border-[rgba(55,128,121,0.3)] pl-5">
              KİTAB • MUSİQİ • KOD • DİL<br />
              Hər sahədə özünü kəşf et
            </p>
          </div>

          <div className="flex items-stretch gap-0 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.45s]">
            {stats.map((stat, index) => (
              <div key={index} className={`relative ${index !== 0 ? 'pl-7 ml-7 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-px before:bg-[rgba(55,128,121,0.2)]' : ''}`}>
                <span className="font-['Bebas_Neue'] text-[1.7rem] md:text-[2.2rem] text-[#378079] leading-none block tracking-wide">
                  {stat.value}
                </span>
                <span className="text-[7px] tracking-[0.2em] text-[rgba(240,235,226,0.28)] uppercase block mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </section>
    </>
  );
}

export default Hero