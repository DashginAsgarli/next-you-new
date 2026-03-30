import React, { useState, useEffect } from 'react';

function LifeGoalMap() {

    const areasItem = [
        { key: 'career', label: 'Karyera', color: '#378079' },
        { key: 'learn', label: 'Öyrənmə', color: '#3a6d9a' },
        { key: 'health', label: 'Sağlamlıq', color: '#4a9a3a' },
        { key: 'creative', label: 'Yaradıcılıq', color: '#9a7a2a' },
        { key: 'relations', label: 'Münasibətlər', color: '#7a3a9a' },
    ];

    const [goals, setGoals] = useState([]);
    const [area, setArea] = useState('career');
    const [text, setText] = useState('');
    const [deadline, setDeadline] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const saved = localStorage.getItem('life-goals');
        if (saved) setGoals(JSON.parse(saved));
    }, []);

    function updateAndSave(newList) {
        setGoals(newList);
        localStorage.setItem('life-goals', JSON.stringify(newList));
    }

    function addGoal() {
        if (!text.trim()) return;

        const newGoal = { id: Date.now(), area, text: text.trim(), deadline, done: false };

        updateAndSave([...goals, newGoal]);
        setText('');
        setDeadline('');
    };

    function toggleDone(id) {
        const next = goals.map(g =>
            g.id === id ? { ...g, done: !g.done } : g
        );
        updateAndSave(next);
    }

    function removeGoal(id) {
        const next = goals.filter(g => g.id !== id);
        updateAndSave(next);
    }

    const shownGoals = goals.filter(g => {
        if (filter === 'all') return true;
        if (filter === 'done') return g.done;
        if (filter === 'active') return !g.done;
        return g.area === filter;
    });

    const doneCount = goals.filter(g => g.done).length;
    const progressPercent = goals.length > 0 ? Math.round((doneCount / goals.length) * 100) : 0;

    return (
        <section className="px-8 md:px-16 py-10">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#378079]" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Hədəflər</span>
            </div>
            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] uppercase mb-8">
                HƏYAT <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">HƏDƏFLƏRİ</span>
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-8">
                {areasItem.map(a => (
                    <div key={a.key} className="bg-[#0b0f17] border border-white/5 rounded-xl p-4 text-center">
                        <div className="text-2xl font-black mb-1" style={{ color: a.color }}>
                            {goals.filter(g => g.area === a.key).length}
                        </div>
                        <div className="text-[9px] text-white/30 uppercase tracking-[0.2em]">{a.label}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#0b0f17] border border-white/5 rounded-2xl p-6">
                    <p className="text-[9px] font-bold uppercase text-white/20 mb-4 tracking-widest">Yeni hədəf əlavə et</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {areasItem.map(a => (
                            <button key={a.key} onClick={() => setArea(a.key)} className="px-3 py-1.5 text-[10px] font-bold uppercase border rounded-lg transition-all" style={{ borderColor: area === a.key ? a.color : 'rgba(255,255,255,0.08)', background: area === a.key ? a.color + '18' : 'transparent', color: area === a.key ? a.color : 'rgba(240,235,226,0.4)' }}>
                                {a.label}
                            </button>
                        ))}
                    </div>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addGoal()} placeholder="Hədəfini yaz..." className="custom-input w-full mb-3" />
                    <div className="flex gap-3">
                        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="custom-input flex-1" />
                        <button onClick={addGoal} className="beveled-box px-6 border border-white text-[10px] font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                            ƏLAVƏ ET
                        </button>
                    </div>
                </div>

                <div className="bg-[#0b0f17] border border-white/5 rounded-2xl p-6">
                    <p className="text-[9px] font-bold uppercase text-white/20 mb-4 tracking-widest">Ümumi irəliləyiş</p>
                    <div className="text-center mb-4">
                        <div className="text-4xl font-black text-[#378079]">{progressPercent}%</div>
                        <div className="text-[10px] text-white/30 mt-1">{doneCount} / {goals.length} hədəf</div>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-4">
                        <div className="h-full bg-[#378079] transition-all duration-700" style={{ width: `${progressPercent}%` }} />
                    </div>
                    <div className="space-y-2">
                        {areasItem.map(a => {
                            const aGoals = goals.filter(g => g.area === a.key);
                            const aDone = aGoals.filter(g => g.done).length;
                            const aPercent = aGoals.length > 0 ? (aDone / aGoals.length) * 100 : 0;
                            return (
                                <div key={a.key} className="flex items-center gap-3">
                                    <span className="text-[10px] text-white/30 w-24">{a.label}</span>
                                    <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full" style={{ width: `${aPercent}%`, background: a.color }} />
                                    </div>
                                    <span className="text-[9px] font-mono" style={{ color: a.color }}>{aDone}/{aGoals.length}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                {['all', 'active', 'done', ...areasItem.map(a => a.key)].map(f => {
                    const label = areasItem.find(a => a.key === f)?.label || (f === 'all' ? 'Hamısı' : f === 'active' ? 'Aktiv' : 'Tamamlandı');
                    return (
                        <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 text-[10px] font-bold uppercase border transition-all ${filter === f ? 'border-[#378079] text-[#378079] bg-[#378079]/10' : 'border-white/10 text-white/30'}`}>
                            {label}
                        </button>
                    );
                })}
            </div>

            <div className="space-y-3">
                {shownGoals.length === 0 && <p className="text-[11px] text-white/15 uppercase py-4">Hədəf yoxdur</p>}
                {shownGoals.map(g => {
                    const areaData = areasItem.find(a => a.key === g.area);
                    return (
                        <div key={g.id} className="flex items-center gap-4 p-4 bg-[#0b0f17] border border-white/5 rounded-2xl group">
                            <button onClick={() => toggleDone(g.id)} className="w-6 h-6 rounded-full border flex items-center justify-center transition-all" style={{ borderColor: g.done ? areaData.color : 'rgba(255,255,255,0.2)', background: g.done ? areaData.color : 'transparent' }}>
                                {g.done && <span className="text-black text-[10px] font-black">✓</span>}
                            </button>
                            <div className="flex-1">
                                <p className={`text-[13px] font-bold ${g.done ? 'line-through text-white/20' : 'text-[#f0ebe2]'}`}>{g.text}</p>
                                <div className="flex items-center gap-3 mt-1 text-[9px]">
                                    <span className="px-2 py-0.5 rounded font-bold" style={{ background: areaData.color + '20', color: areaData.color }}>
                                        {areaData.label}
                                    </span>
                                    {g.deadline && <span className="text-white/20 font-mono">{g.deadline}</span>}
                                </div>
                            </div>
                            <button onClick={() => removeGoal(g.id)} className="text-white/10 hover:text-red-400 text-lg transition-colors">×</button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default LifeGoalMap;