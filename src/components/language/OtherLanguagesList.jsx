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
        <div className="one-beveled-box group relative bg-[#06090f] border border-white p-4 md:p-6 transition-all duration-300 ease-out  hover:bg-[#378079]/8 hover:border-[#378079] hover:translate-x-1.5 h-full flex items-center ">
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
        <section className=" px-8 md:px-16 py-20 md:py-22  lg:pb-20 border-b border-b-white overflow-x-hidden">
            <div>

                <div className="flex justify-center items-center gap-5 mb-10">
                    <h1 className=" text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-[1.07] tracking-[-0.01em] mb-9 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
                        DİGƏR{" "}
                        <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">
                            DİLLƏR
                        </span>
                    </h1>
                </div>

                <div className="md:hidden">
                    <Swiper modules={[Grid, Autoplay]} slidesPerView={1.1} grid={{ rows: 3, fill: 'row' }} spaceBetween={10} autoplay={{ delay: 4000 }} className="overflow-visible! h-70">
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