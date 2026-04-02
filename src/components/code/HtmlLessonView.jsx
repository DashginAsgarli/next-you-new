import React from 'react';
import { ArrowLeft, BookOpen, Code2, Info, Zap, AlertTriangle, ChevronRight, Terminal, ShieldCheck, XCircle, Clock, FileText } from 'lucide-react';

function HtmlLessonView({ lesson, onBack, onStartPractice }) {

  return (
    <section className=" w-full overflow-hidden relative">
      <div className='background-tor'></div>
      <div className='background-shadow'></div>

      <div className="font-sans  px-8 md:px-16 py-10">

        <div onClick={onBack} className="mb-10 animate-[fadeUp_0.7s_ease_both]">
          <div className="inline-flex items-center gap-2 mb-8 group text-[#378079]">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[9px] tracking-[0.4em] uppercase font-black">GERİ QAYIT</span>
          </div>
        </div>

        <div className="space-y-6">

          <div className="bg-[#0d1117] border border-white/5 rounded-xl md:rounded-2xl overflow-hidden w-full">
            <div className="h-1.5 bg-[#378079]" />
            <div className="p-5 md:p-10">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-[#378079] text-[#06090f] rounded-lg text-[10px] font-black uppercase tracking-widest">
                  {lesson.category || "HTML5"}
                </span>
                <span className="px-3 py-1 bg-white/5 text-[#378079] border border-[#378079]/30 rounded-lg text-[10px] font-black uppercase tracking-widest">
                  {lesson.level || "BEGINNER"}
                </span>
                <span className="px-3 py-1 bg-white/5 text-slate-400 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <Clock size={12} /> {lesson.duration}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-tight ">
                {lesson.title}
              </h1>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3 p-5 bg-white/2 rounded-xl md:rounded-2xl border border-white/5">
                  <Info size={18} className="text-[#378079] shrink-0 mt-1" />
                  <p className="text-base leading-relaxed text-slate-400 italic font-medium">
                    {lesson.content.description}
                  </p>
                </div>

                {lesson.content.theory && (
                  <div className="flex items-start gap-3 p-5 bg-[#378079]/5 rounded-xl md:rounded-2xl border border-[#378079]/10">
                    <FileText size={18} className="text-[#378079] shrink-0 mt-1" />
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-[#378079] uppercase tracking-widest">Nəzəri Bilgi</span>
                      <p className="text-sm leading-relaxed text-slate-300">
                        {lesson.content.theory}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="p-5 md:p-10 rounded-xl md:rounded-2xl bg-[#0d1117] border-l-8 border-[#378079] w-full">
            <h3 className="flex items-center gap-2 text-xs font-black mb-3 text-[#378079] uppercase tracking-widest opacity-80">
              <Terminal size={18} /> Sintaksis_Formula
            </h3>
            <div className="p-4 bg-black/40 rounded-xl md:rounded-2xl border border-white/5 font-mono overflow-x-auto">
              <code className="text-lg sm:text-xl text-white font-black whitespace-nowrap">
                <span className="text-[#378079]">{"> "}</span>
                {lesson.content.formula}
              </code>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-5 md:p-10 bg-[#0d1117] border border-white/5 rounded-xl md:rounded-2xl">
              <h3 className="flex items-center gap-2 text-lg font-black mb-6 text-white uppercase tracking-tight">
                <ShieldCheck size={22} className="text-[#378079]" /> Vacib Qaydalar
              </h3>
              <ul className="space-y-4">
                {lesson.content.rules?.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm italic">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#378079] mt-2 shrink-0" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 md:p-10 bg-[#0d1117] border border-red-500/10 rounded-xl md:rounded-2xl">
              <h3 className="flex items-center gap-2 text-lg font-black mb-6 text-red-500 uppercase tracking-tight">
                <AlertTriangle size={22} /> Səhvlər
              </h3>
              <div className="space-y-3">
                {lesson.content.commonMistakes?.map((mistake, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-red-500/5 rounded-xl md:rounded-2xl border border-red-500/10 text-red-200/70 text-sm italic">
                    <XCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                    {mistake}
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="p-5 md:p-10 bg-[#0d1117] border border-white/5 rounded-xl md:rounded-2xl w-full">
            <h3 className="flex items-center gap-2 text-lg font-black mb-6 text-white uppercase tracking-tight">
              <BookOpen size={22} className="text-[#378079]" /> Kod Nümunələri
            </h3>
            <div className="space-y-3">
              {lesson.content.examples?.map((ex, idx) => (
                <div key={idx} className="group flex items-center gap-4 p-4 bg-white/2 rounded-xl md:rounded-2xl border border-white/5 hover:border-[#378079]/30 transition-all">
                  <Code2 size={18} className="text-[#378079] shrink-0" />
                  <code className="text-[#378079] font-mono text-sm sm:text-base">{ex}</code>
                </div>
              ))}
            </div>
          </div>


          <div className="p-5 md:p-10 bg-[#0d1117] border border-white/5 rounded-xl md:rounded-2xl  w-full flex flex-col items-center text-center space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-[#378079] font-black">
                <Zap size={20} fill="currentColor" />
                <span className="text-2xl">+{lesson.points || 50} XP</span>
              </div>
            </div>
            <button onClick={() => onStartPractice(lesson)} className="group flex items-center justify-center gap-1 md:gap-3 px-4 py-2 md:px-12 md:py-5 bg-[#378079] text-[#06090f] rounded-xl font-bold text-[6px] md:text-sm tracking-[3px] transition-all  uppercase">
              DƏRSİ TAMAMLA <ChevronRight size={15} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HtmlLessonView;