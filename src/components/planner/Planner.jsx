import { useState } from 'react';
import { HiOutlineTrash, HiOutlinePlus, HiOutlineXMark, HiCheck } from "react-icons/hi2";

function Planner() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input.trim(), completed: false }]);
      setInput('');
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="relative min-h-screen bg-[#06090f] pt-24 pb-20 px-6 flex flex-col items-center overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)`, 
          backgroundSize: '60px 60px' 
        }} 
      />

      <div 
        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[80vw] h-[400px] pointer-events-none opacity-25 z-0" 
        style={{ background: 'radial-gradient(circle, rgba(55,128,121,0.2) 0%, transparent 70%)' }} 
      />

      <div className="flex items-center gap-3 mb-8 relative z-10 animate-[fadeUp_0.7s_ease_both]">
        <div className="w-8 h-px bg-[#378079]/40" />
        <span className="text-[10px] tracking-[0.45em] text-[#378079] uppercase font-bold text-nowrap">
          Task Terminal v2.0
        </span>
        <div className="w-8 h-px bg-[#378079]/40" />
      </div>

      <div className="relative z-10 mb-20 text-center animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
        <h1 className="text-[#f0ebe2] font-black text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.85] tracking-[-0.03em] uppercase italic">
          DAILY <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #f0ebe2' }}>PLANS</span>
        </h1>
      </div>

      <div className="relative w-full max-w-2xl z-10 mb-16 px-4 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.3s]">
        <div className="relative flex items-center bg-[#06090f]/80 backdrop-blur-md border border-white/10 rounded-full overflow-hidden transition-all focus-within:border-[#378079]/60 shadow-2xl">
          <input 
            type="text" 
            placeholder="BU GÜNKİ PLANI QEYD EDİN..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            className="w-full bg-transparent py-5 md:py-6 px-8 md:px-12 text-[10px] md:text-[11px] tracking-[2px] text-white focus:outline-none placeholder:text-white/10 uppercase font-semibold italic"
          />
          <div className="flex items-center pr-2 gap-2">
            {input && (
                <HiOutlineXMark 
                    onClick={() => setInput('')}
                    className="text-white/20 hover:text-white cursor-pointer transition-colors text-xl px-2" 
                />
            )}
            <button 
              onClick={addTask}
              className="px-6 md:px-10 h-10 md:h-12 bg-[#378079] text-[#06090f] text-[9px] md:text-[10px] font-black tracking-[2px] uppercase hover:bg-white hover:scale-105 active:scale-95 transition-all rounded-full flex items-center justify-center gap-2"
            >
              <HiOutlinePlus size={16} />
              <span className="hidden md:inline text-[9px]">ƏLAVƏ ET</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl space-y-3.5 relative z-10 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.45s]">
        {tasks.length === 0 ? (
          <div className="text-center py-24 opacity-10 flex flex-col items-center gap-4">
             <div className="w-12 h-px bg-white/40" />
             <p className="font-mono text-[9px] tracking-[0.5em] uppercase italic">No_Active_Missons</p>
          </div>
        ) : (
          tasks.map((task, index) => (
            <div 
              key={task.id} 
              className={`group flex items-center justify-between p-5 md:p-6 transition-all duration-500 rounded-2xl border
                ${task.completed ? 'bg-white/[0.01] border-white/5 opacity-40' : 'bg-white/[0.03] hover:bg-white/[0.05] border-white/10'}`}
            >
              <div className="flex items-center gap-5 md:gap-7 flex-1 cursor-pointer" onClick={() => toggleComplete(task.id)}>
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all shrink-0
                  ${task.completed ? 'bg-[#378079] border-[#378079]' : 'border-white/20 group-hover:border-[#378079]'}`}>
                  {task.completed && <HiCheck className="text-[#06090f] text-xs font-bold" />}
                </div>
                
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-[#378079] font-bold tracking-[0.2em] mb-1 opacity-60">
                    PROTOCOL_{String(index + 1).padStart(2, '0')}
                  </span>
                  <p className={`font-mono text-[13px] md:text-sm uppercase tracking-widest transition-all
                    ${task.completed ? 'line-through text-white/20 italic' : 'text-[#f0ebe2]'}`}>
                    {task.text}
                  </p>
                </div>
              </div>

              <button 
                onClick={() => deleteTask(task.id)}
                className="text-white/5 hover:text-red-500/60 transition-all p-2 transform group-hover:translate-x-0 translate-x-2 opacity-0 group-hover:opacity-100"
              >
                <HiOutlineTrash size={18} />
              </button>
            </div>
          ))
        )}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Planner;