import React from 'react';
import { HiCheckCircle, HiOutlineChevronRight } from "react-icons/hi2";
import { FaTrophy, FaGem, FaBolt, FaGift } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";

function DailyChallenges() {
    const challenges = [
        { title: "10 yeni söz", xp: "+50 XP", completed: true },
        { title: "Dinləmə Məşqi", xp: "+100 XP", completed: false },
        { title: "Danışıq Təcrübəsi", xp: "+150 XP", completed: false },
    ];

    return (
        <div className="w-full    px-6 md:px-10 lg:px-16 py-12 relative overflow-hidden">

            <div className="relative z-10  ">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h3 className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-black text-[#f0ebe2] uppercase tracking-tighter">
                            GÜNDƏLİK <span className="text-transparent" style={{ WebkitTextStroke: '1px #f0ebe2' }}>MÜCADİLƏ</span>
                        </h3>
                    </div>
                </div>
                <div className='bg-[#06090f] border border-white/5 rounded-2xl p-6 md:p-10'>
                    <div className="mb-6 md:mb-12">
                        <div className="flex justify-between items-end mb-3 font-mono">
                            <span className="text-[10px] font-bold uppercase tracking-[2px] opacity-60">Status</span>
                            <span className="text-xl font-black text-[#f0ebe2] italic tracking-tighter">58%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <div className="h-full bg-white shadow-[0_0_15px_rgba(55,128,121,0.5)] transition-all duration-1000" style={{ width: '58%' }}></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 mb-12">
                        {challenges.map((item, index) => (
                            <div key={index} className={`group flex items-center justify-between p-4 md:p-5 rounded-xl border transition-all duration-300 ${item.completed ? "bg-[#378079]/5 border-[#378079]/20 opacity-60" : "bg-[#06090f] border-white/5 "}`}>
                                <div className="flex items-center gap-5">
                                    <div className={item.completed ? "text-[#378079]" : "text-slate-700"}>
                                        {item.completed ? <HiCheckCircle size={26} /> : <div className="w-5 h-5 border border-current rounded-full" />}
                                    </div>
                                    <div>
                                        <h5 className={`text-sm md:text-base font-bold  ${item.completed ? "text-slate-400 line-through" : "text-[#f0ebe2]"}`}>
                                            {item.title}
                                        </h5>
                                        <span className="text-[9px] font-mono text-[#378079] uppercase tracking-widest font-black">{item.xp}</span>
                                    </div>
                                </div>

                                {!item.completed && (
                                    <button className="flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2.5 bg-[#378079] text-[#06090f] rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-[#45a098] transition-all active:scale-95">
                                        BAŞLA <HiOutlineChevronRight size={12} />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { day: "GÜN 1", label: "Kristal", icon: <FaGem /> },
                            { day: "GÜN 2", label: "2x XP", icon: <FaBolt /> },
                            { day: "GÜN 3", label: "Premium", icon: <FaGift />, active: true },
                        ].map((reward, i) => (
                            <div key={i} className={`p-3 md:p-5 rounded-xl border flex flex-col items-center justify-center transition-all ${reward.active ? "bg-[#378079]/20 border-[#378079]/40" : "bg-white/2 border-white/5 opacity-50"}`}>
                                <span className="text-[8px] font-black text-[#378079] mb-3 tracking-[0.2em] uppercase">{reward.day}</span>
                                <div className="text-[#f0ebe2] text-[15px] md:text-xl mb-2">{reward.icon}</div>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{reward.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DailyChallenges;