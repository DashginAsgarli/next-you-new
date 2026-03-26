import { useState } from 'react';
import { HiOutlineTrash, HiOutlinePlus, HiOutlineXMark, HiCheck } from "react-icons/hi2";

function Planner() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  function addTask() {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input.trim(), completed: false }]);
      setInput('');
    }
  };

  function toggleComplete(id) { setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)); };
  function deleteTask(id) { setTasks(tasks.filter(t => t.id !== id)); };

  return (
    <div className="h-screen relative  px-8 md:px-16  py-10 flex flex-col items-center overflow-hidden">

      <div className="flex items-center gap-3 mb-8 relative z-10 animate-[fadeUp_0.7s_ease_both]">
        <div className="w-8 h-px bg-[#378079]/40" />
        <span className="text-[10px] tracking-[0.45em] text-[#378079] uppercase font-bold text-nowrap">
          PLANINI QUR
        </span>
        <div className="w-8 h-px bg-[#378079]/40" />
      </div>
      <div className="text-center mb-10">
        <h1 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-[1.07] tracking-[-0.01em] mb-9 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
          GÜNLÜK{" "}
          <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">
            PLANLAR
          </span>
        </h1>
      </div>

      <div className="relative w-full max-w-2xl z-10 mb-16 px-4 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.3s]">
        <div className="relative flex items-center bg-[#06090f]/80 backdrop-blur-md border border-white/10 rounded-full overflow-hidden transition-all focus-within:border-[#378079]/60 ">
          <input type="text" placeholder="BU GÜNKİ PLANI QEYD EDİN..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addTask()} className="w-full bg-transparent py-5 md:py-6 px-8 md:px-12 text-[10px] md:text-[11px] tracking-[2px] text-white focus:outline-none placeholder:text-white/10 uppercase font-semibold italic" />
          <div className="flex items-center pr-2 gap-2">
            {input && (
              <HiOutlineXMark onClick={() => setInput('')} className="text-white/20 hover:text-white cursor-pointer transition-colors text-xl px-2" />
            )}
            <button onClick={addTask} className="px-6 md:px-10 h-10 md:h-12 bg-[#378079] text-[#06090f] text-[9px] md:text-[10px] font-black tracking-[2px] uppercase hover:bg-white hover:scale-105 active:scale-95 transition-all rounded-full flex items-center justify-center gap-2">
              <HiOutlinePlus size={16} />
              <span className="hidden md:inline text-[9px]">ƏLAVƏ ET</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full  space-y-3.5 relative z-10 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.45s]">
        {tasks.length === 0 ? (
          <div className="text-center py-24 opacity-10 flex flex-col items-center gap-4">
            <div className="w-12 h-px bg-white/40" />
            <p className="font-mono text-[9px] tracking-[0.5em] uppercase ">AKTİV TASK YOXDUR</p>
          </div>
        ) : (
          tasks.map((task, index) => (
            <div key={task.id} className={`group flex items-center justify-between p-5 md:p-6 transition-all duration-500 rounded-2xl border    ${task.completed ? 'bg-white/1 border-white/5 opacity-40' : 'bg-white/3 hover:bg-white/5 border-white/10'}`}>
              <div className="flex items-center gap-5 md:gap-7 flex-1 cursor-pointer" onClick={() => toggleComplete(task.id)}>
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all shrink-0
                  ${task.completed ? 'bg-[#378079] border-[#378079]' : 'border-white/20 group-hover:border-[#378079]'}`}>
                  {task.completed && <HiCheck className="text-[#06090f] text-xs font-bold" />}
                </div>

                <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-[#378079] font-bold tracking-[0.2em] mb-1 opacity-60">
                    TASK_{String(index + 1).padStart(2, '0')}
                  </span>
                  <p className={`font-mono text-[13px] md:text-sm uppercase tracking-widest transition-all
                    ${task.completed ? 'line-through text-white/20 italic' : 'text-[#f0ebe2]'}`}>
                    {task.text}
                  </p>
                </div>
              </div>

              <button onClick={() => deleteTask(task.id)} className="text-white/5 hover:text-red-500/60 transition-all p-2 transform group-hover:translate-x-0 translate-x-2 opacity-0 group-hover:opacity-100">
                <HiOutlineTrash size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Planner;