import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

function PopularLanguages() {
    const topLang = [
        { id: 1, name: "İNGİLİS DİLİ", students: "8.53 MLN", rank: "01" },
        { id: 2, name: "ALMAN DİLİ", students: "1.82 MLN", rank: "02" },
        { id: 3, name: "RUS DİLİ", students: "979 K", rank: "03" },
        { id: 4, name: "İSPAN DİLİ", students: "304 K", rank: "04" }
    ];

    return (
        <section className="px-8 md:px-16 pt-16 md:py-20   font-sans selection:bg-[#378079]/30 overflow-x-hidden ">

            <div className="text-center mb-10 md:mb-18 lg:mb-20">
                <h1 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-[1.07] tracking-[-0.01em] mb-9 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
                    POPULYAR{" "}
                    <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">
                        DİLLƏR
                    </span>
                </h1>
            </div>


            <div className="max-w-325 mx-auto">
                <Swiper modules={[Autoplay]} spaceBetween={16} slidesPerView={1.2} centeredSlides={false} autoplay={{ delay: 5000, disableOnInteraction: false }} breakpoints={{ 640: { slidesPerView: 2.5, spaceBetween: 20 }, 1024: { slidesPerView: 3.2, spaceBetween: 24 }, 1280: { slidesPerView: 4, spaceBetween: 24, allowTouchMove: false, autoplay: false } }} className="overflow-visible! cursor-grab active:cursor-grabbing">
                    {topLang.map((lang) => (
                        <SwiperSlide key={lang.id} className="h-auto pt-4">
                            <div className="beveled-box group relative bg-[#06090f] border border-white p-8 transition-all duration-700  ease-[cubic-bezier(0.23,1,0.32,1)] hover:transform-[perspective(500px)_rotateY(10deg)_rotateX(5deg)_translateY(-10px)] h-full flex flex-col ">

                                <div className="flex items-center gap-4 mb-10 relative z-10">
                                    <span className="text-[14px] font-black text-[#378079] font-mono leading-none">
                                        // {lang.rank}
                                    </span>
                                    <div className="flex-1 h-px bg-linear-to-r from-[#378079]/40 to-transparent"></div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-black mb-8 tracking-tighter leading-tight relative z-10 group-hover:text-white transition-colors">
                                    {lang.name}
                                </h3>

                                <div className="border-t border-white/10 pt-8 mt-auto relative z-10">
                                    <span className="text-[10px] tracking-[3px] text-[#f0ebe2]/30 block mb-2 font-bold uppercase">
                                        AKTİV TƏLƏBƏLƏR
                                    </span>
                                    <div className="text-2xl md:text-3xl font-black text-[#f0ebe2] tabular-nums">
                                        {lang.students}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default PopularLanguages;