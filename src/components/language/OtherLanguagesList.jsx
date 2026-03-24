import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';

function OtherLanguages() {
    const otherLang = [
        { name: 'FRANSIZ DİLİ', students: '283 K', code: 'FR' },
        { name: 'KOREYA DİLİ', students: '168 K', code: 'KR' },
        { name: 'İTALYAN DİLİ', students: '147 K', code: 'IT' },
        { name: 'YAPON DİLİ', students: '109 K', code: 'JP' },
        { name: 'ÇİN DİLİ', students: '98 K', code: 'CN' },
        { name: 'PORTUQAL DİLİ', students: '76 K', code: 'PT' },
        { name: 'ƏRƏB DİLİ', students: '65 K', code: 'AR' },
        { name: 'TÜRK DİLİ', students: '54 K', code: 'TR' }
    ];

    const LangCard = ({ lang }) => (
        <div className="group relative bg-white/2 border border-white/5 p-4 md:p-6 transition-all duration-300 ease-out 
                        hover:bg-[#378079]/8 hover:border-[#378079] hover:translate-x-1.5 h-full flex items-center
                        [clip-path:polygon(0_0,100%_0,100%_calc(100%-15px),calc(100%-15px)_100%,0_100%)]">
            <div className="flex items-center gap-4 md:gap-5">
                <div className="w-8 md:w-9 md:h-9 bg-[#378079] text-[#06090f] text-[9px] md:text-[10px] font-black flex items-center justify-center tracking-wider shrink-0">
                    {lang.code}
                </div>
                
                <div className="flex flex-col">
                    <h4 className="text-[0.8rem] md:text-[0.9rem] font-extrabold tracking-wider leading-none m-0 text-[#f0ebe2]">
                        {lang.name}
                    </h4>
                    <div className="text-[9px] md:text-[11px] text-[#f0ebe2]/40 mt-1.5 flex items-center gap-2 tracking-[1px] md:tracking-[2px] font-bold uppercase">
                        <span className="w-1 h-1 bg-[#378079] rounded-full"></span>
                        {lang.students} İSTİFADƏÇİ
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-r border-b border-[#378079] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
    );

    return (
        <section className="bg-[#06090f] py-16 px-6 md:px-10 lg:px-16 overflow-x-hidden">
            <div className="max-w-300 mx-auto">
                
                <div className="flex items-center gap-5 mb-10">
                    <div className="w-10 md:w-15 h-px bg-[#378079]"></div>
                    <h3 className="text-[1rem] md:text-[1.2rem] font-black tracking-[3px] md:tracking-[5px] uppercase text-[#f0ebe2]">
                        DİGƏR <span className="text-transparent [-webkit-text-stroke:1px_rgba(240,235,226,0.5)]">DİLLƏR</span>
                    </h3>
                </div>

                <div className="md:hidden">
                    <Swiper
                        modules={[Grid, Autoplay]}
                        slidesPerView={1.1}
                        grid={{ rows: 3, fill: 'row' }}
                        spaceBetween={10}
                        autoplay={{ delay: 4000 }}
                        className="overflow-visible! h-70"
                    >
                        {otherLang.map((lang, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <LangCard lang={lang} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {otherLang.map((lang, index) => (
                        <LangCard key={index} lang={lang} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default OtherLanguages;