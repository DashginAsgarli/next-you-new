import React, { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import { TbBookmarkEdit } from "react-icons/tb";
function ListeningJournal() {
    const [song, setSong] = useState('');
    const [artist, setArtist] = useState('');
    const [feeling, setFeeling] = useState('');
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const savedData = localStorage.getItem('listening-journal');
        if (savedData) { setEntries(JSON.parse(savedData)); }
    }, []);

    function handleSave() {
        if (song.trim() === "") return;

        const newEntry = { id: Date.now(), song, artist, feeling, date: new Date().toLocaleDateString('az-AZ') };

        const updatedEntries = [newEntry, ...entries].slice(0, 20);
        setEntries(updatedEntries);
        localStorage.setItem('listening-journal', JSON.stringify(updatedEntries));
        setSong(''); setArtist(''); setFeeling('');
    };

    function handleDelete(id) {
        const filteredEntries = entries.filter(item => item.id !== id);
        setEntries(filteredEntries);
        localStorage.setItem('listening-journal', JSON.stringify(filteredEntries));
    };

    return (
        <section className="px-8 md:px-16 py-10 md:py-16">
            <div className="flex items-center gap-2 mb-4">
                <TbBookmarkEdit className='text-[#378079]' />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Jurnal</span>
            </div>

            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[3rem] lg:text-[4rem] leading-tight tracking-tighter uppercase mb-8">
                DİNLƏMƏ <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">JURNALI</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#0b0f17] border border-white/5 rounded-2xl p-6">
                    <div className="space-y-3 mb-4">
                        <input type="text" value={song} onChange={(e) => setSong(e.target.value)} placeholder="Mahnı adı..." className="custom-input w-full" />
                        <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Sənətkar..." className="custom-input w-full" />
                        <textarea value={feeling} onChange={(e) => setFeeling(e.target.value)} rows={4} className="custom-input resize-none w-full" placeholder="Bu mahnı mənə nə hiss etdirdi?..." />
                    </div>
                    <button onClick={handleSave} className="beveled-box w-full py-3 border border-white text-[10px] font-black tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all">
                        SAXLA
                    </button>
                </div>

                <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                    {entries.map((item) => (
                        <div key={item.id} className="bg-[#0b0f17] border border-white/5 rounded-xl p-4 relative group hover:border-[#378079]/30 transition-colors">
                            <div className="flex justify-between items-start mb-1">
                                <div className="pr-8">
                                    <p className="text-[12px] font-bold text-[#f0ebe2] leading-tight">{item.song}</p>
                                    {item.artist && <p className="text-[10px] text-[#378079] mt-1">{item.artist}</p>}
                                </div>

                                <div className="flex flex-col items-end gap-2">
                                    <span className="text-[9px] font-mono text-white/20">{item.date}</span>

                                    <button onClick={() => handleDelete(item.id)} className="text-white/20 hover:text-red-500 transition-colors p-1" title="Sil">
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>

                            {item.feeling && (
                                <p className="text-[11px] text-[#f0ebe2]/50 italic mt-2 border-l border-white/10 pl-2">
                                    "{item.feeling}"
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ListeningJournal;