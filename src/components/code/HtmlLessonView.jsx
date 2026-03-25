import React from 'react';
import { 
  ArrowLeft, BookOpen, Code2, Info, Zap, 
  AlertTriangle, ChevronRight, Terminal, 
  ShieldCheck, XCircle, Clock, FileText
} from 'lucide-react';

function HtmlLessonView({ lesson, onBack, onStartPractice }) {
  if (!lesson || !lesson.content) {
    return (
      <div className="min-h-screen bg-[#06090f] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#378079] font-black tracking-widest animate-pulse">MƏLUMAT YÜKLƏNİR_</p>
          <button onClick={onBack} className="mt-4 text-xs text-slate-500 underline uppercase">Geri qayıt</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#06090f] text-[#f0ebe2] w-full px-6 md:px-10 lg:px-16 py-8 font-sans">
      
      <button 
        onClick={onBack} 
        className="group mb-8 flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-[#378079]/20 text-[#378079] border border-[#378079]/30 rounded-xl transition-all font-bold text-xs uppercase tracking-widest"
      >
        <ArrowLeft size={16} /> DƏRSLƏRƏ QAYIT
      </button>

      <div className="space-y-6 w-full max-w-5xl mx-auto">
        
        <div className="bg-[#0d1117] border border-white/5 rounded-3xl overflow-hidden w-full">
          <div className="h-1.5 bg-[#378079]" />
          <div className="p-6 sm:p-10">
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
            
            <h1 className="text-3xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight italic">
              {lesson.title}
            </h1>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-3 p-5 bg-white/2 rounded-2xl border border-white/5">
                <Info size={18} className="text-[#378079] shrink-0 mt-1" />
                <p className="text-base leading-relaxed text-slate-400 italic font-medium">
                  {lesson.content.description}
                </p>
              </div>

              {lesson.content.theory && (
                <div className="flex items-start gap-3 p-5 bg-[#378079]/5 rounded-2xl border border-[#378079]/10">
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

        <div className="p-6 rounded-3xl bg-[#0d1117] border-l-8 border-[#378079] shadow-lg w-full">
          <h3 className="flex items-center gap-2 text-xs font-black mb-3 text-[#378079] uppercase tracking-widest opacity-80">
            <Terminal size={18} /> Sintaksis_Formula
          </h3>
          <div className="p-4 bg-black/40 rounded-2xl border border-white/5 font-mono overflow-x-auto">
            <code className="text-lg sm:text-xl text-white font-black whitespace-nowrap">
              <span className="text-[#378079]">{"> "}</span>
              {lesson.content.formula}
            </code>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-8 bg-[#0d1117] border border-white/5 rounded-3xl">
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

          <div className="p-8 bg-[#0d1117] border border-red-500/10 rounded-3xl">
            <h3 className="flex items-center gap-2 text-lg font-black mb-6 text-red-500 uppercase tracking-tight">
              <AlertTriangle size={22} /> Səhvlər
            </h3>
            <div className="space-y-3">
              {lesson.content.commonMistakes?.map((mistake, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-red-500/5 rounded-xl border border-red-500/10 text-red-200/70 text-sm italic">
                  <XCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                  {mistake}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 bg-[#0d1117] border border-white/5 rounded-3xl w-full">
          <h3 className="flex items-center gap-2 text-lg font-black mb-6 text-white uppercase tracking-tight">
            <BookOpen size={22} className="text-[#378079]" /> Kod Nümunələri
          </h3>
          <div className="space-y-3">
            {lesson.content.examples?.map((ex, idx) => (
              <div key={idx} className="group flex items-center gap-4 p-4 bg-white/2 rounded-2xl border border-white/5 hover:border-[#378079]/30 transition-all">
                <Code2 size={18} className="text-[#378079] shrink-0" />
                <code className="text-[#378079] font-mono text-sm sm:text-base">{ex}</code>
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 bg-[#0d1117] border-2 border-[#378079]/20 rounded-3xl shadow-2xl w-full flex flex-col items-center text-center space-y-6">
          <div className="space-y-2">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[5px]">Simulyasiya Hazırdır</p>
            <div className="flex items-center justify-center gap-2 text-[#378079] font-black">
              <Zap size={20} fill="currentColor" />
              <span className="text-2xl">+{lesson.points || 50} XP</span>
            </div>
          </div>
          <button 
            onClick={() => onStartPractice(lesson)}
            className="group flex items-center justify-center gap-3 px-12 py-5 bg-[#378079] text-[#06090f] rounded-2xl font-black text-sm tracking-[3px] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(55,128,121,0.3)] active:scale-95 uppercase"
          >
            Təcrübəyə Başla <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </div>
  );
}

export default HtmlLessonView;