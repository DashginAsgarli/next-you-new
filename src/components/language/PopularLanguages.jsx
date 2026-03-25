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
        <section className=" py-24 px-6 md:px-10 lg:px-16 text-[#f0ebe2]  font-sans selection:bg-[#378079]/30 overflow-x-hidden">

            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-3px] m-0 uppercase leading-[0.9]">
                    POPULYAR <span className="text-transparent [-webkit-text-stroke:1px_rgba(240,235,226,0.8)]">DİLLƏR</span>
                </h2>
            </div>

            <div className="max-w-325 mx-auto">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1.2} 
                    centeredSlides={false}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2.5, spaceBetween: 20 },
                        1024: { slidesPerView: 3.2, spaceBetween: 24 },
                        1280: { 
                            slidesPerView: 4, 
                            spaceBetween: 24,
                            allowTouchMove: false,
                            autoplay: false 
                        }
                    }}
                    className="overflow-visible! cursor-grab active:cursor-grabbing">
                    {topLang.map((lang) => (
                        <SwiperSlide key={lang.id} className="h-auto py-4">
                            <div className="group relative bg-[#ffffff03] border border-white/5 p-8 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] F                hover:bg-[#378079]/8 hover:border-[#378079]/50 hover:-translate-y-3 h-full flex flex-col F                [clip-path:polygon(0_0,100%_0,100%_calc(100%-30px),calc(100%-20px)_100%,0_100%)]">
                                
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
                                    <div className="text-2xl md:text-3xl font-black text-[#f0ebe2] tabular-nums group-hover:text-[#378079] transition-colors duration-500">
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