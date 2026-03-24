import { useState } from "react";
import { Clock, Star, Terminal } from 'lucide-react';
import LangLearnView from "./LangLearnView";
import langData from "../../data/languages.json";

function LangLearn() {
  const [lessons] = useState(langData.grammarLessons);
  const [activeLesson, setActiveLesson] = useState(null);

  if (activeLesson) {
    return <LangLearnView lesson={activeLesson} onBack={() => setActiveLesson(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#06090f] text-[#f0ebe2]  px-6 md:px-10 lg:px-16 py-12">

      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="h-px w-12 bg-[#378079]"></span>
          <span className="text-[#378079] font-mono text-xs tracking-[0.3em] uppercase">Learning_Modules</span>
          <span className="h-px w-12 bg-[#378079]"></span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black flex items-center justify-center gap-4 mb-4">
          İNGİLİS <span className="text-transparent" style={{ WebkitTextStroke: '1px #f0ebe2' }}>QRAMMATİKASI</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div key={lesson.id} onClick={() => setActiveLesson(lesson)} className="group flex flex-col bg-[#0d1117] border border-white/5 rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:border-[#378079]/50 hover:bg-[#378079]/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#378079]/10 rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform"></div>

            <div className="flex gap-2 mb-6">
              <span className="bg-[#378079]/10 text-[#378079] border border-[#378079]/20 px-3 py-1 rounded-md text-[10px] font-black tracking-widest uppercase">
                {lesson.level}
              </span>
              <span className="bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-md text-[10px] font-bold uppercase">
                {lesson.category}
              </span>
            </div>

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
                <Clock size={14} className="text-[#378079]" /> {lesson.duration} MIN
              </span>
              <span className="flex items-center gap-1.5">
                <Star size={14} className="text-[#378079]" /> {lesson.points} XP
              </span>
            </div>

            <button className="w-full py-3 bg-[#378079] text-[#06090f] rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#45a098] transition-all active:scale-95 shadow-lg shadow-[#378079]/10">
              MODULU YÜKLƏ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LangLearn;