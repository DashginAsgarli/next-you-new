import React, { useState, useRef } from 'react';
import { FaUsersViewfinder } from "react-icons/fa6";
function MockInterview() {
    const problems = [
        {
            id: 1,
            title: 'İki ədədin cəmi',
            difficulty: 'Easy',
            description: 'Tam ədədlər massivi və hədəf ədəd verilir. Cəmi hədəfə bərabər olan iki elementin indekslərini tap.',
            example: 'nums = [2,7,11,15], target = 9 → [0,1]',
            hints: ['Hash map istifadə et', 'target - nums[i] artıq görülübmü?', 'O(n) zamanla həll olunur'],
            optimal: `function twoSum(nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in seen) return [seen[complement], i];
    seen[nums[i]] = i;
  }
}`,
            testCases: [
                { input: '[2,7,11,15], 9', expected: '[0,1]' },
                { input: '[3,2,4], 6', expected: '[1,2]' }
            ],
        },
        {
            id: 2,
            title: 'Massivi tərsinə çevir',
            difficulty: 'Easy',
            description: 'Verilmiş massivin elementlərinin yerini tərsinə çevirin. Hazır .reverse() funksiyasından istifadə etməyin.',
            example: '[1, 2, 3, 4] → [4, 3, 2, 1]',
            hints: ['İki pointer (sol və sağ) istifadə et', 'Elementlərin yerini dəyişmək üçün müvəqqəti dəyişəndən istifadə et', 'Dövrü massivin yarısına qədər işlət'],
            optimal: `function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}`,
            testCases: [
                { input: '[1,2,3,4,5]', expected: '[5,4,3,2,1]' },
                { input: '["a","b","c"]', expected: '["c","b","a"]' }
            ],
        },
        {
            id: 3,
            title: 'Ən böyük ədədi tap',
            difficulty: 'Easy',
            description: 'Verilmiş ədədlər massivində ən böyük (maksimum) elementi tapın.',
            example: '[10, 5, 20, 8] → 20',
            hints: ['Bir dəyişən təyin et (məsələn, max) və ona massivin ilk elementini mənimsət', 'Massivi dövr ilə gəz', 'Hər element max-dan böyükdürsə, max-ı yenilə'],
            optimal: `function findMax(nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}`,
            testCases: [
                { input: '[1, 5, 3]', expected: '5' },
                { input: '[-1, -5, -2]', expected: '-1' }
            ],
        },
        {
            id: 4,
            title: 'Təkrarlananları sil',
            difficulty: 'Easy',
            description: 'Sıralanmış massiv verilir. Təkrarlanan elementləri silin və yalnız unikal elementlərdən ibarət yeni massiv qaytarın.',
            example: '[1, 1, 2, 2, 3] → [1, 2, 3]',
            hints: ['Yeni boş bir massiv yarat', 'Dövr daxilində cari elementin yeni massivdə olub-olmadığını yoxla', 'Və ya Set obyektindən istifadə et'],
            optimal: `function removeDuplicates(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!result.includes(nums[i])) {
      result.push(nums[i]);
    }
  }
  return result;
}`,
            testCases: [
                { input: '[1,1,2]', expected: '[1,2]' },
                { input: '[5,5,5,5]', expected: '[5]' }
            ],
        }
    ];

    const [problemIdx, setProblemIdx] = useState(0);
    const [code, setCode] = useState('');
    const [hintIdx, setHintIdx] = useState(-1);
    const [showOptimal, setShowOptimal] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const [output, setOutput] = useState('');

    const timerRef = useRef(null);
    const problem = problems[problemIdx];

    const startTimer = () => {
        if (timerRunning) return;
        setTimerRunning(true);
        timerRef.current = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
    };

    const stopTimer = () => { setTimerRunning(false); clearInterval(timerRef.current); };

    function resetProblem(idx) {
        stopTimer();
        setSeconds(0);
        setCode('');
        setHintIdx(-1);
        setShowOptimal(false);
        setOutput('');
        setProblemIdx(idx);
    };

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const timeColor = seconds > 900 ? '#e87a6a' : seconds > 600 ? '#e8c46a' : '#378079';
    const diffColor = { Easy: '#6ae890', Medium: '#e8c46a', Hard: '#e87a6a' };

    return (
        <section className="px-8 md:px-16 py-10 md:p-16">
            <div className="flex items-center gap-2 mb-2">
                <FaUsersViewfinder className="text-[#378079]" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">NextYou · Interview</span>
            </div>
            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[3rem] lg:text-[4rem] leading-tight tracking-tighter uppercase mb-6">
                MÜSAHIBƏ <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">SİMULYATOR</span>
            </h2>

            <div className="flex flex-wrap gap-2 mb-5">
                {problems.map((p, i) => (
                    <button key={p.id} onClick={() => resetProblem(i)}
                        className={`px-4 py-2 text-[10px] font-bold border transition-all ${problemIdx === i ? 'border-[#378079] text-[#378079] bg-[#378079]/10' : 'border-white/15 text-white/35 hover:border-white/30'}`}>
                        {p.title}
                        <span className="ml-2 text-[8px]" style={{ color: diffColor[p.difficulty] }}>{p.difficulty}</span>
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">

                <div className="flex flex-col gap-4">
                    <div className="bg-[#0b0f17] border border-white/5 rounded-2xl p-6 flex-1">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-[#f0ebe2] font-black text-lg uppercase">{problem.title}</h3>
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded" style={{ color: diffColor[problem.difficulty], background: diffColor[problem.difficulty] + '20' }}>
                                {problem.difficulty}
                            </span>
                        </div>
                        <p className="text-[13px] text-white/60 leading-relaxed mb-4">{problem.description}</p>
                        <div className="bg-[#030508] border border-white/5 rounded-lg p-3">
                            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Nümunə</p>
                            <code className="text-[11px] font-mono text-[#a3d9d4]">{problem.example}</code>
                        </div>

                        <div className="mt-4 space-y-2">
                            <p className="text-[9px] text-white/20 uppercase tracking-widest">Test halları</p>
                            {problem.testCases.map((tc, i) => (
                                <div key={i} className="flex gap-3 text-[10px] font-mono">
                                    <span className="text-white/30">{tc.input}</span>
                                    <span className="text-[#378079]">→ {tc.expected}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#0b0f17] border border-white/5 rounded-xl p-4 shrink-0">
                        <div className="flex justify-between items-center mb-3">
                            <p className="text-[9px] text-white/20 uppercase tracking-widest">İpuclar ({hintIdx + 1}/{problem.hints.length})</p>
                            <button onClick={() => setHintIdx(h => Math.min(h + 1, problem.hints.length - 1))} className="text-[9px] text-[#378079] uppercase tracking-widest hover:text-white transition-colors">
                                İpucu göstər (-5 XP)
                            </button>
                        </div>
                        {hintIdx >= 0 && (
                            <div className="space-y-1">
                                {problem.hints.slice(0, hintIdx + 1).map((h, i) => (
                                    <p key={i} className="text-[12px] text-white/50 flex gap-2"><span className="text-[#e8c46a]">→</span>{h}</p>
                                ))}
                            </div>
                        )}
                    </div>

                    {showOptimal && (
                        <div className="bg-[#030508] border border-[#378079]/30 rounded-xl p-4 shrink-0">
                            <p className="text-[9px] text-[#378079] uppercase tracking-widest mb-2">Optimal Həll (O(n))</p>
                            <pre className="text-[11px] font-mono text-[#a3d9d4] whitespace-pre-wrap">{problem.optimal}</pre>
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 bg-[#0b0f17] border border-white/5 rounded-xl p-4 shrink-0">
                        <span className="text-2xl font-black font-mono" style={{ color: timeColor }}>
                            {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
                        </span>
                        <button onClick={timerRunning ? stopTimer : startTimer} className="px-4 py-1.5 text-[9px] font-black uppercase border border-white/15 text-white/40 hover:border-[#378079]/50 hover:text-[#378079] transition-all">
                            {timerRunning ? 'Dayandır' : 'Başlat'}
                        </button>
                        <button onClick={() => { stopTimer(); setSeconds(0); }} className="px-4 py-1.5 text-[9px] font-black uppercase border border-white/10 text-white/25 hover:text-white/50 transition-all">
                            Sıfırla
                        </button>
                        <button onClick={() => setShowOptimal(true)} className="ml-auto px-4 py-1.5 text-[9px] font-black uppercase border border-white/10 text-white/25 hover:border-[#378079]/40 hover:text-[#378079] transition-all">
                            Həlli gör
                        </button>
                    </div>

                    <textarea value={code} onChange={e => setCode(e.target.value)} className="w-full flex-1 bg-[#030508] border border-white/5 p-4 font-mono text-[12px] text-[#f0ebe2] outline-none focus:border-[#378079]/30 resize-none rounded-xl leading-relaxed min-h-75" placeholder={`// Həllini bura yaz...`} />

                    {output && (
                        <div className="bg-[#030508] border border-white/5 rounded-xl p-3 shrink-0">
                            <code className="text-[11px] font-mono text-[#6ae890]">{output}</code>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default MockInterview;