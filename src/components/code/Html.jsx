import { useState, useEffect } from "react";
import { Clock, Star, Layout, ChevronRight, Search, BarChart2, Grid, FileText, Type, Share2, ChevronLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Grid as SwiperGrid } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import HtmlLessonView from "./HtmlLessonView";
import htmlLessons from "../../data/codeHtml.json";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import CodeEditor from "./CodeEditor";

function Html() {
  const [lessons] = useState(htmlLessons);
  const [activeLesson, setActiveLesson] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("completed_html_lessons") || "[]");
    setCompletedLessons(saved);
  }, []);

  const progress = Math.round((completedLessons.length / lessons.length) * 100);

  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || lesson.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: "all", name: "Hamısı", icon: <Grid size={16} />, count: lessons.length },
    { id: "Əsaslar", name: "Əsaslar", icon: <FileText size={16} />, count: lessons.filter(l => l.category === "Əsaslar").length },
    { id: "Format", name: "Format", icon: <Type size={16} />, count: lessons.filter(l => l.category === "Format").length },
    { id: "Struktur", name: "Struktur", icon: <Layout size={16} />, count: lessons.filter(l => l.category === "Struktur").length },
  ];

  if (activeLesson) {
    return <HtmlLessonView lesson={activeLesson} onBack={() => setActiveLesson(null)} />;
  }

  return (
    <section className=" w-full overflow-hidden relative">
      <div className='background-tor'></div>
      <div className='background-shadow'></div>

      <div className="px-8 md:px-16 py-10 ">
        <div className="mb-10 animate-[fadeUp_0.7s_ease_both]">
          <Link to="/code" className="inline-flex items-center gap-2 mb-8 group text-[#378079]">
            <HiArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[9px] tracking-[0.4em] uppercase font-black">GERİ Qayıt</span>
          </Link>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-[1.07] tracking-[-0.01em] mb-9 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
            HTML{" "}
            <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">
              KURSU
            </span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#378079] transition-colors" size={20} />
            <input type="text" placeholder="Dərs axtar..." className="w-full bg-[#1a1d23] border border-white/5 rounded-xl py-4 pl-12 pr-28 outline-none focus:border-[#378079]/30 transition-all text-sm text-slate-300" onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#378079] text-[#06090f] px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-[#45a098] transition-all">
              AXTAR
            </button>
          </div>
        </div>

        <div className="bg-[#1a1d23] border border-white/5 rounded-xl md:rounded-2xl p-5 md:p-8 mb-10 relative overflow-hidden group">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <BarChart2 className="text-[#378079]" size={22} />
              <h3 className="text-xl font-bold tracking-tight text-white">Ümumi ilerləmə</h3>
            </div>
            <div className="w-14 h-8 bg-[#378079] rounded-full flex items-center justify-center text-[13px] font-black text-[#06090f]">
              {progress}%
            </div>
          </div>
          <div className="w-full h-3 bg-white/5 rounded-full mb-4 overflow-hidden">
            <div className="h-full bg-[#378079] transition-all duration-1000 ease-out" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-slate-500 text-sm font-medium">{completedLessons.length} / {lessons.length} dərs tamamlandı</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 border ${selectedCategory === cat.id ? 'bg-[#378079] text-[#06090f] border-transparent' : 'bg-[#1a1d23] border-white/5 text-slate-400 hover:border-white/10'}`}>
              {cat.icon}
              <span>{cat.name}</span>
              <span className={`ml-2 px-2 py-0.5 rounded-md text-[10px] ${selectedCategory === cat.id ? 'bg-black/10 text-[#06090f]' : 'bg-white/5 text-[#378079]'
                }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        <div className="relative pb-20">
          <Swiper modules={[SwiperGrid, Pagination, Navigation]} slidesPerView={1} grid={{ rows: 2, fill: 'row' }} spaceBetween={24} pagination={{ el: '.custom-pagination', clickable: true }} navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }} breakpoints={{ 768: { slidesPerView: 2, grid: { rows: 2 } }, 1024: { slidesPerView: 3, grid: { rows: 2 } }, }} className="mySwiper">
            {filteredLessons.map((lesson) => (
              <SwiperSlide key={lesson.id} className="h-auto!">
                <div onClick={() => setActiveLesson(lesson)} className="group flex flex-col bg-[#0d1117] border border-white/5 rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:transform-[perspective(500px)_rotateY(7deg)_rotateX(5deg)_translateY(-7px)] relative overflow-hidden h-full">
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
                      <Clock size={14} className="text-[#378079]" /> {lesson.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Star size={14} className="text-[#378079]" /> {lesson.points} XP
                    </span>
                  </div>

                  <button className="w-full py-3 bg-[#378079] text-[#06090f] rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#45a098] transition-all active:scale-95 flex items-center justify-center gap-2">
                    DƏRSƏ BAŞLA <ChevronRight size={14} />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 z-20 w-max">
            <button className="prev-btn text-[#378079] hover:text-white transition-colors cursor-pointer disabled:opacity-20 shrink-0">
              <ChevronLeft size={24} strokeWidth={3} />
            </button>
            <div className="custom-pagination static! w-max! flex items-center gap-1 px-2 shrink-0"></div>
            <button className="next-btn text-[#378079] hover:text-white transition-colors cursor-pointer disabled:opacity-20 shrink-0">
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>

      <CodeEditor />

      <style>{`
        .swiper-grid-column .swiper-slide { margin-bottom: 24px !important; margin-top: 0 !important; }
        .custom-pagination .swiper-pagination-bullet {  background: #378079 !important;  opacity: 0.3;  width: 8px;  height: 8px;  margin: 0 !important  flex-shrink: 0}
        .custom-pagination .swiper-pagination-bullet-active { opacity: 1; width: 20px; border-radius: 4px; }
      `}</style>
    </section>
  );
}

export default Html;