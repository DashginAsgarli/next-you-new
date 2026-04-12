import React, { useState, useEffect } from 'react';
import { HiOutlinePlus, HiOutlineTrash, HiCheck, HiOutlineX } from 'react-icons/hi';

const  priorities = [
  { id: 'high', label: 'Yüksək', color: '#ef4444' },
  { id: 'medium', label: 'Orta', color: '#F97316' },
  { id: 'low', label: 'Aşağı', color: '#378079' },
];

function PlannerPage() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('medium');
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('nextyou-tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  function saveTasks(newTasks) {
    setTasks(newTasks);
    localStorage.setItem('nextyou-tasks', JSON.stringify(newTasks));
  }

  function addTask() {
    if (!input.trim()) return;
    const newTask = {
      id: Date.now(),
      text: input.trim(),
      priority,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    saveTasks([newTask, ...tasks]);
    setInput('');
    setShowForm(false);
  };

  function toggleComplete(id) {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    saveTasks(updatedTasks);
  }

  function deleteTask(id) {
    const filteredTasks = tasks.filter((t) => t.id !== id);
    saveTasks(filteredTasks);
  }

  function getFilteredTasks() {
    switch (filter) {
      case 'active': return tasks.filter((t) => !t.completed);
      case 'done': return tasks.filter((t) => t.completed);
      case 'high': return tasks.filter((t) => t.priority === 'high');
      default: return tasks;
    }
  };

  const filtered = getFilteredTasks();
  const completedCount = tasks.filter((t) => t.completed).length;
  const progress = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  return (
    <>
      <section className="w-full overflow-hidden relative">
        <div className='background-tor'></div>
        <div className='background-shadow'></div>
        <div className="px-8 md:px-16 py-16 min-h-screen">
          <div className="flex items-start justify-between mb-12 flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-[#378079]" />
                <span className="text-[10px] tracking-[0.3em] text-[#378079] uppercase font-bold">Zaman İdarəetmə</span>
              </div>
              <h1 className="text-[#f0ebe2] font-black text-[2.4rem] md:text-[4rem] leading-[1.07] tracking-[-0.01em] uppercase">
                SMART{' '}
                <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">PLANNER</span>
              </h1>
            </div>
            <button onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 px-6 py-3 bg-[#378079] text-[#06090f] font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all">
              <HiOutlinePlus size={16} />
              Yeni Task
            </button>
          </div>

          {tasks.length > 0 && (
            <div className="bg-[#06090f] border border-white/5 p-6 mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-mono text-[#f0ebe2]/30 uppercase tracking-wider">Gündəlik tərəqqi</span>
                <span className="text-[#378079] font-black text-sm">{progress}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#378079] transition-all duration-700" style={{ width: `${progress}%` }} />
              </div>
              <p className="text-[9px] text-[#f0ebe2]/20 font-mono mt-2">{completedCount}/{tasks.length} tamamlandı</p>
            </div>
          )}

          {showForm && (
            <div className="bg-[#06090f] border border-[#378079]/30 p-8 mb-8">
              <div className="grid grid-cols-1 gap-4 mb-4">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addTask()} placeholder="Task daxil edin..." className="custom-input w-full" />

                <div>
                  <label className="text-[8px] font-mono text-[#f0ebe2]/30 uppercase tracking-wider block mb-2">Prioritet</label>
                  <div className="flex gap-2">
                    {priorities.map((p) => (
                      <button key={p.id} onClick={() => setPriority(p.id)} className={`flex-1 py-2 text-[9px] font-black uppercase tracking-wider border transition-all ${priority === p.id ? 'text-[#06090f]' : 'bg-transparent text-[#f0ebe2]/30 border-white/10'}`} style={priority === p.id ? { backgroundColor: p.color, borderColor: p.color } : {}}>  {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={addTask}
                  className="flex items-center gap-2 px-6 py-3 bg-[#378079] text-[#06090f] font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all">
                  <HiOutlinePlus size={14} /> Əlavə Et
                </button>
                <button onClick={() => setShowForm(false)}
                  className="px-4 py-3 border border-white/10 text-[#f0ebe2]/30 hover:text-red-400 transition-colors">
                  <HiOutlineX size={14} />
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: 'all', label: `Hamısı (${tasks.length})` },
              { id: 'active', label: `Aktiv (${tasks.filter((t) => !t.completed).length})` },
              { id: 'done', label: `Bitdi (${completedCount})` },
              { id: 'high', label: 'Yüksək Prioritet' },
            ].map((f) => (
              <button key={f.id} onClick={() => setFilter(f.id)}
                className={`px-4 py-2 text-[9px] font-black uppercase tracking-widest border transition-all ${filter === f.id ? 'bg-[#378079]/20 border-[#378079]/50 text-[#378079]' : 'border-white/10 text-[#f0ebe2]/30 hover:border-white/30'}`}>
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24 opacity-10">
              <div className="w-12 h-px bg-white/40 mx-auto mb-4" />
              <p className="font-mono text-[9px] tracking-[0.5em] uppercase">Task yoxdur</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((task) => {
                const prColor = priorities.find((p) => p.id === task.priority)?.color || '#378079';
                return (
                  <div key={task.id}
                    className={`group flex items-center gap-4 p-5 border transition-all duration-300 ${task.completed ? 'opacity-40 border-white/5' : 'border-white/10 hover:border-white/20'}`}>
                    <button onClick={() => toggleComplete(task.id)}
                      className={`w-6 h-6 border flex items-center justify-center shrink-0 transition-all ${task.completed ? 'bg-[#378079] border-[#378079]' : 'border-white/20 hover:border-[#378079]'}`}>
                      {task.completed && <HiCheck size={14} className="text-[#06090f]" />}
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-[7px] w-2 h-2 rounded-full" style={{ backgroundColor: prColor }} />
                        <span className={`text-[13px] font-bold uppercase tracking-wide ${task.completed ? 'line-through text-[#f0ebe2]/20' : 'text-[#f0ebe2]/80'}`}>
                          {task.text}
                        </span>
                      </div>
                    </div>

                    <button onClick={() => deleteTask(task.id)} className="text-white/5 hover:text-red-500/60 transition-all p-2 opacity-0 group-hover:opacity-100">
                      <HiOutlineTrash size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PlannerPage;