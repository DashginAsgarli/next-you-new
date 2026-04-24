import React, { useState } from 'react'

function XPProgress() {
    const [xp] = useState(3420)
    const [level] = useState(7)
    const nextLevelXp = 4000
    const prevLevelXp = 3000
    const progress = Math.round(((xp - prevLevelXp) / (nextLevelXp - prevLevelXp)) * 100)

    return (
        <div className="bg-[#06090f] z-10 border border-white/10 p-6 md:p-8 h-full w-full rounded-lg">

            <div className="flex items-start justify-between mb-8 gap-4">
                <div>
                    <p className="text-[10px] md:text-[9px] font-bold uppercase tracking-[3px] text-[#378079] mb-2">
                        Ümumi XP
                    </p>
                    <div className="flex items-baseline gap-2 md:gap-3">
                        <span className="font-bebas text-3xl md:text-[3.5rem] text-[#f0ebe2] leading-none">
                            {xp.toLocaleString()}
                        </span>
                        <span className="text-[#378079] font-black text-sm">XP</span>
                    </div>
                </div>

                <div className="flex flex-col items-center bg-[#378079]/10 border border-[#378079]/20 px-3 py-2 md:px-4 md:py-3 min-w-15 md:min-w-20 rounded-lg">
                    <span className="text-[10px] md:text-[8px] font-bold uppercase tracking-[2px] text-[#378079]/60">Səviyyə</span>
                    <span className="font-bebas text-3xl md:text-[2.5rem] text-[#378079] leading-none">{level}</span>
                </div>
            </div>

            <div>
                <div className="flex justify-between  text-[11px] md:text-[9px] font-mono mb-2">
                    <span className="text-[#f0ebe2]/30 uppercase tracking-wider">Növbəti səviyyə</span>
                    <span className="text-[#378079]  font-bold">{progress}%</span>
                </div>

                <div className="h-2 bg-white/5 rounded-2xl overflow-hidden">
                    <div className="h-full bg-[#378079] rounded-2xl transition-all duration-1000 shadow-[0_0_15px_rgba(55,128,121,0.5)]" style={{ width: `${progress}%` }} />
                </div>

                <div className="flex justify-between text-[10px] md:text-[8px] mt-1 text-[#f0ebe2]/20 font-mono">
                    <span>{xp} XP</span>
                    <span>{nextLevelXp} XP</span>
                </div>
            </div>
        </div>
    )
}

export default XPProgress