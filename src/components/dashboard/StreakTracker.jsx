import React, { useState } from 'react'
import { HiLightningBolt } from 'react-icons/hi'

function StreakTracker() {
    const [streak] = useState(14)
    const [longestStreak] = useState(21)

    const last28Days = Array.from({ length: 28 }, (_, i) => {
        return {
            active: Math.random() > 0.3, 
            day: i + 1,
        }
    })

    return (
        <div className="bg-[#06090f] border border-white/10 p-8 h-full flex flex-col rounded-lg">
            <p className="text-[9px] font-bold uppercase tracking-[3px] text-[#378079] mb-6">
                Ardıcıllıq
            </p>

            <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col">
                    <span className="font-bebas text-[4rem] text-[#f0ebe2] leading-none">
                        {streak}
                    </span>
                    <span className="text-[9px] text-[#f0ebe2]/30 uppercase tracking-widest font-bold">
                        Gün ardıcıllıq
                    </span>
                </div>
                {/* İldırım İkonu */}
                <div className="w-16 h-16 border border-[#378079]/30 bg-[#378079]/10 flex items-center justify-center text-[#378079] animate-pulse">
                    <HiLightningBolt size={28} />
                </div>
            </div>

            <div className="mb-6">
                <p className="text-[8px] font-mono text-[#f0ebe2]/20 uppercase tracking-widest mb-3">
                    Son 28 gün
                </p>
                <div className="grid grid-cols-7 gap-1">
                    {last28Days.map((day, i) => (
                        <div 
                            key={i}
                            className={`aspect-square rounded-sm transition-all ${day.active ? 'bg-[#378079]' : 'bg-white/5'}`}
                            title={"Gün " + day.day} 
                        />
                    ))}
                </div>
            </div>

            <div className="mt-auto pt-6 border-t border-white/5">
                <div className="flex justify-between">
                    <div>
                        <span className="text-[8px] font-mono text-[#f0ebe2]/20 uppercase tracking-wider block">
                            Rekord
                        </span>
                        <span className="font-black text-[#378079] text-lg">
                            {longestStreak} gün
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="text-[8px] font-mono text-[#f0ebe2]/20 uppercase tracking-wider block">
                            Bu ay
                        </span>
                        <span className="font-black text-[#f0ebe2] text-lg">
                            18 gün
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StreakTracker