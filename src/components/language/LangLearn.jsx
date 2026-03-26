import { useState } from "react";
import { Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Grid as SwiperGrid } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import LangLearnView from "./LangLearnView";
import langData from "../../data/languages.json";

function LangLearn() {
  const [lessons] = useState(langData.grammarLessons);
  const [activeLesson, setActiveLesson] = useState(null);

  if (activeLesson) {
    return <LangLearnView lesson={activeLesson} onBack={() => setActiveLesson(null)} />;
  }

  return (
    <div className=" px-6 md:px-10 lg:px-16 py-12">
      <div className=" mb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-px w-10 bg-[#378079]"></span>
          <span className="text-[#378079] font-mono text-xs tracking-[0.3em] uppercase">Qramatikaya Başla</span>
          <span className="h-px w-10 bg-[#378079]"></span>
        </div>
        <h1 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-[1.07] tracking-[-0.01em] mb-9 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
          İNGİLİS{" "}
          <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">
            QRAMMATİKASI
          </span>
        </h1>
      </div>

      <div className="relative pb-20">
        <Swiper modules={[SwiperGrid, Pagination, Navigation]} slidesPerView={1} grid={{ rows: 2, fill: 'row' }} spaceBetween={24} pagination={{ el: '.lang-pagination', clickable: true }} navigation={{ nextEl: '.lang-next', prevEl: '.lang-prev' }} breakpoints={{ 768: { slidesPerView: 2, grid: { rows: 2 } }, 1024: { slidesPerView: 3, grid: { rows: 2 } }, }} className="mySwiper">
          {lessons.map((lesson) => (
            <SwiperSlide key={lesson.id} className="h-auto!">
              <div onClick={() => setActiveLesson(lesson)} className="group flex flex-col bg-[#0d1117] border border-white/5 rounded-2xl p-6 cursor-pointer transition-all duration-700 hover:transform-[perspective(500px)_rotateY(10deg)_rotateX(5deg)_translateY(-10px)] relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#378079]/10 rounded-bl-full translate-x-6 -translate-y-6 transition-transform"></div>

                <div className="flex gap-2 mb-6">
                  <span className="bg-[#378079]/10 text-[#378079] border border-[#378079]/20 px-3 py-1 rounded-md text-[10px] font-black tracking-widest uppercase">
                    {lesson.level}
                  </span>
                  <span className="bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-md text-[10px] font-bold uppercase">
                    {lesson.category}
                  </span>
                </div>

                <div className="flex-1 mb-6">
                  <h3 className="text-white text-xl font-bold mb-3">
                    {lesson.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {lesson.content.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-slate-400 text-xs font-mono mb-6">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#378079]" /> {lesson.duration} MIN
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star size={14} className="text-[#378079]" /> {lesson.points} XP
                  </span>
                </div>

                <button className="w-full py-3 bg-[#378079] text-[#06090f] rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#45a098] transition-all active:scale-95">
                  Dərsə Başla
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 z-20 w-max">
          <button className="lang-prev text-[#378079] hover:text-white transition-colors cursor-pointer disabled:opacity-20 shrink-0">
            <ChevronLeft size={24} strokeWidth={3} />
          </button>

          <div className="lang-pagination static! w-max! flex items-center gap-1 px-2 shrink-0"></div>

          <button className="lang-next text-[#378079] hover:text-white transition-colors cursor-pointer disabled:opacity-20 shrink-0">
            <ChevronRight size={24} strokeWidth={3} />
          </button>
        </div>
      </div>

      <style>{`
        .swiper-grid-column .swiper-slide { margin-bottom: 24px !important; margin-top: 0 !important; }
        .lang-pagination .swiper-pagination-bullet {   background: #378079 !important;   opacity: 0.3;   width: 8px;   height: 8px;   margin: 0 !important;  flex-shrink: 0;}
        .lang-pagination .swiper-pagination-bullet-active { opacity: 1; width: 20px; border-radius: 4px; }
      `}</style>
    </div>
  );
}

export default LangLearn;