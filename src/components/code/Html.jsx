import { useState, useEffect } from "react";
import { 
  Clock, Star, Layout, ChevronRight, Search, 
  BarChart2, Grid, FileText, Type, Share2 
} from 'lucide-react';
import HtmlLessonView from "./HtmlLessonView";
import htmlLessons from "../../data/codeHtml.json";

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
    { id: "Formatlaşdırma", name: "Formatlaşdırma", icon: <Type size={16} />, count: lessons.filter(l => l.category === "Formatlaşdırma").length },
    { id: "Struktur", name: "Struktur", icon: <Layout size={16} />, count: lessons.filter(l => l.category === "Struktur").length },
    { id: "Formalar və Media", name: "Formalar & Media", icon: <Share2 size={16} />, count: lessons.filter(l => l.category === "Formalar və Media").length },
  ];

  if (activeLesson) {
    return <HtmlLessonView lesson={activeLesson} onBack={() => setActiveLesson(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#06090f] text-[#f0ebe2] px-6 md:px-10 lg:px-16 py-12">
      
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-5xl font-black mb-4">
          HTML <span className="text-transparent" style={{ WebkitTextStroke: '1px #f0ebe2' }}>DƏRSLİYİ</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-orange-400 transition-colors" size={20} />
          <input 
            type="text"
            placeholder="Dərs axtar..."
            className="w-full bg-[#1a1d23] border border-white/5 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-white/10 transition-all text-sm text-slate-300"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="md:w-64 relative">
            <select 
                className="w-full bg-[#1a1d23] border border-white/5 rounded-xl py-4 px-4 outline-none appearance-none text-sm text-slate-300 cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name} ({cat.count})</option>
                ))}
            </select>
            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-500 pointer-events-none" size={16} />
        </div>
      </div>

      <div className="bg-[#1a1d23] border border-white/5 rounded-2xl p-8 mb-10 relative overflow-hidden group">
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
                <BarChart2 className="text-slate-300" size={22} />
                <h3 className="text-xl font-bold tracking-tight text-white">Ümumi ilerləmə</h3>
            </div>
            <div className="w-14 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-[13px] font-black text-[#06090f]">
                {progress}%
            </div>
        </div>
        <div className="w-full h-3 bg-white/5 rounded-full mb-4 overflow-hidden">
            <div 
                className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
        <p className="text-slate-500 text-sm font-medium">{completedLessons.length} / {lessons.length} dərs tamamlandı</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 border ${
              selectedCategory === cat.id 
              ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-[#06090f] border-transparent' 
              : 'bg-[#1a1d23] border-white/5 text-slate-400 hover:border-white/10'
            }`}
          >
            {cat.icon}
            <span>{cat.name}</span>
            <span className={`ml-2 px-2 py-0.5 rounded-md text-[10px] ${
                selectedCategory === cat.id ? 'bg-black/10 text-black' : 'bg-white/5 text-slate-500'
            }`}>
                {cat.count}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => (
          <div 
            key={lesson.id} 
            onClick={() => setActiveLesson(lesson)} 
            className="group flex flex-col bg-[#0d1117] border border-white/5 rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:border-[#378079]/50 hover:bg-[#378079]/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#378079]/10 rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform"></div>

            <div className="flex gap-2 mb-6">
              <span className="bg-[#378079]/10 text-[#378079] border border-[#378079]/20 px-3 py-1 rounded-md text-[10px] font-black tracking-widest uppercase">
                {lesson.level}
              </span>
              <span className="bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-md text-[10px] font-bold uppercase">
                {lesson.category}
              </span>
            </div>

<div>{<lesson.icon/>}</div>
            <div className="flex-1 mb-6">
              <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#378079] transition-colors">
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
        ))}
      </div>
    </div>
  );
}

export default Html;