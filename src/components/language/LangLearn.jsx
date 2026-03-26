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
    <div className="  px-6 md:px-10 lg:px-16 py-12">

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div key={lesson.id} onClick={() => setActiveLesson(lesson)} className="group flex flex-col bg-[#0d1117] border border-white/5 rounded-2xl p-6 cursor-pointer group transition-all duration-700 hover:transform-[perspective(500px)_rotateY(10deg)_rotateX(5deg)_translateY(-10px)]  relative overflow-hidden">
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
        ))}
      </div>
    </div>
  );
}

export default LangLearn;