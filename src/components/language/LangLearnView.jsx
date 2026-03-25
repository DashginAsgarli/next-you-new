import { useState } from "react";
import { ArrowLeft, Lightbulb, AlertTriangle, PenTool, BookOpen, XCircle, ChevronRight, ChevronLeft, CheckCircle2, ListChecks, Info, RotateCcw } from 'lucide-react';

function LangLearnView({ lesson, onBack, onComplete, isCompleted }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  if (!lesson) return null;

  const practice = lesson.content.practice;
  const isLastQuestion = currentQuestionIndex === practice.length - 1;

  const handleAnswer = (value) => {
    if (showResult) return;
    setAnswers({ ...answers, [currentQuestionIndex]: value });
  };

  const nextQuestion = () => { if (!isLastQuestion) setCurrentQuestionIndex(p => p + 1); };
  const prevQuestion = () => { if (currentQuestionIndex > 0) setCurrentQuestionIndex(p => p - 1); };

  const checkFinalScore = () => {
    let count = 0;
    practice.forEach((q, idx) => { if (answers[idx] === q.correct) count++; });
    setScore(count);
    setShowResult(true);
    if (!isCompleted && count === practice.length) onComplete?.(lesson.id);
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen  text-[#f0ebe2] w-full px-6 md:px-10 lg:px-16 py-8">

      <button onClick={onBack} className="group mb-8 flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-[#378079]/20 text-[#378079] border border-[#378079]/30 rounded-xl transition-all font-bold text-xs uppercase tracking-widest">
        <ArrowLeft size={16} /> DƏRSLƏRƏ QAYIT
      </button>

      <div className="space-y-6 w-full">
        <div className="bg-[#0d1117] border border-white/5 rounded-3xl overflow-hidden w-full">
          <div className="h-1.5 bg-[#378079]" />
          <div className="p-6 sm:p-10">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-[#378079] text-[#06090f] rounded-lg text-[10px] font-black uppercase tracking-widest">{lesson.category}</span>
              <span className="px-3 py-1 bg-white/5 text-[#378079] border border-[#378079]/30 rounded-lg text-[10px] font-black uppercase tracking-widest">{lesson.level}</span>
            </div>
            <h1 className="text-3xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">{lesson.title}</h1>
            <div className="flex items-start gap-3 p-5 bg-white/2 rounded-2xl border border-white/5">
              <Info size={18} className="text-[#378079] shrink-0 mt-1" />
              <p className="text-base leading-relaxed text-slate-400 italic font-medium">{lesson.content.description}</p>
            </div>
          </div>
        </div>

        {!showResult && (
          <>
            <div className="p-6 rounded-3xl bg-[#0d1117] border-l-8 border-[#378079] shadow-lg w-full">
              <h3 className="flex items-center gap-2 text-xs font-black mb-3 text-[#378079] uppercase tracking-widest opacity-80">
                <Lightbulb size={18} /> Formula
              </h3>
              <div className="p-4 bg-white/3 rounded-2xl border border-white/5">
                <code className="text-lg sm:text-xl font-mono text-white font-black wrap-break-word tracking-tight">
                  {"> "} {lesson.content.formula}
                </code>
              </div>
            </div>

            <div className="p-8 bg-[#0d1117] border border-white/5 rounded-3xl w-full">
              <h3 className="flex items-center gap-2 text-lg font-black mb-6 text-white uppercase tracking-tight">
                <ListChecks size={22} className="text-[#378079]" /> Əsas Qaydalar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lesson.content.rules?.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white/2 rounded-2xl border border-white/5 text-slate-300 text-sm">
                    <div className="h-2 w-2 rounded-full bg-[#378079] shrink-0 mt-2 shadow-[0_0_8px_#378079]" />
                    <span className="font-medium leading-relaxed">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-[#0d1117] border border-white/5 rounded-3xl w-full">
              <h3 className="flex items-center gap-2 text-lg font-black mb-6 text-white uppercase tracking-tight">
                <BookOpen size={22} className="text-[#378079]" /> Praktik Nümunələr
              </h3>
              <div className="space-y-3">
                {lesson.content.examples.map((ex, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white/2 rounded-2xl border border-white/5 text-slate-400 italic text-base transition-colors hover:text-white group">
                    <CheckCircle2 size={18} className="text-[#378079] mt-0.5 shrink-0" />
                    <span className="font-medium">{ex}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-rose-950/20 border border-rose-900/30 rounded-3xl w-full">
              <h3 className="flex items-center gap-2 text-lg font-black mb-6 text-rose-500 uppercase tracking-tight">
                <AlertTriangle size={22} /> Diqqət yetirin
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lesson.content.commonMistakes.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-[#06090f] rounded-2xl border border-rose-900/20 text-slate-300 text-sm">
                    <XCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
                    <span className="font-medium italic leading-relaxed">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="p-6 sm:p-8 bg-[#0d1117] border-2 border-[#378079]/20 rounded-3xl shadow-2xl w-full">
          {!showResult ? (
            <>
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <h3 className="flex items-center gap-3 text-lg font-black text-white uppercase tracking-widest">
                  <PenTool size={20} className="text-[#378079]" /> Praktika
                </h3>
                <span className="text-[10px] font-black text-[#378079] bg-[#378079]/10 px-3 py-1 rounded-full uppercase">
                  {currentQuestionIndex + 1} / {practice.length}
                </span>
              </div>

              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-8">
                <div
                  className="h-full bg-[#378079] transition-all duration-700 shadow-[0_0_10px_#378079]"
                  style={{ width: `${((currentQuestionIndex + 1) / practice.length) * 100}%` }}
                />
              </div>

              <div className="min-h-40">
                <p className="text-xl sm:text-2xl font-bold text-white mb-6 leading-tight tracking-tight italic">
                  "{practice[currentQuestionIndex].question}"
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {practice[currentQuestionIndex].options.map((opt, oIdx) => {
                    const isSelected = answers[currentQuestionIndex] === opt;
                    return (
                      <button key={oIdx} onClick={() => handleAnswer(opt)} className={`w-full text-left p-4 rounded-xl border transition-all duration-300 text-sm font-bold ${isSelected ? "bg-[#378079] border-[#378079] text-[#06090f] scale-[1.01]" : "bg-white/2 border-white/5 text-slate-400 hover:border-[#378079]/30 hover:text-white"}`}>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-3 mt-8 pt-6 border-t border-white/5">
                <button onClick={prevQuestion} disabled={currentQuestionIndex === 0} className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white/5 text-slate-400 rounded-xl font-black text-[10px] tracking-widest disabled:opacity-10 transition-all hover:bg-white/10">
                  <ChevronLeft size={16} /> GERİ
                </button>
                {!isLastQuestion ? (
                  <button onClick={nextQuestion} disabled={!answers[currentQuestionIndex]} className="flex-2 flex items-center justify-center gap-2 py-3.5 bg-[#378079] text-[#06090f] rounded-xl font-black text-[10px] tracking-widest disabled:opacity-40 hover:brightness-110 transition-all">
                    NÖVBƏTİ <ChevronRight size={16} />
                  </button>
                ) : (
                  <button onClick={checkFinalScore} disabled={!answers[currentQuestionIndex]} className="flex-2 py-3.5 bg-white text-black rounded-xl font-black text-[10px] tracking-widest disabled:opacity-40 uppercase">
                    BİTİR_
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-4 w-full">
              <div className="text-5xl font-black text-white mb-6">
                {score}<span className="text-xl text-slate-600">/{practice.length}</span>
              </div>
              <div className="text-left space-y-3 mb-8 w-full">
                {practice.map((q, idx) => {
                  const correct = answers[idx] === q.correct;
                  return (
                    <div key={idx} className={`p-4 rounded-xl border w-full ${correct ? 'border-[#378079]/20 bg-[#378079]/5' : 'border-rose-900/20 bg-rose-900/10'}`}>
                      <p className="font-bold text-white text-base mb-1">{q.question}</p>
                      <p className="text-[10px] uppercase font-bold text-slate-500">
                        Düzgün Cavab: <span className="text-[#378079]">{q.correct}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={resetQuiz} className="flex-1 py-4 bg-white/5 text-[#378079] border border-[#378079]/30 rounded-xl font-black text-[10px] tracking-widest uppercase flex items-center justify-center gap-2">
                  <RotateCcw size={14} /> YENİDƏN BAŞLA
                </button>
                <button onClick={onBack} className="flex-2 py-4 bg-[#378079] text-[#06090f] rounded-xl font-black text-[10px] tracking-widest uppercase">
                  MODULU TAMAMLA
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LangLearnView;