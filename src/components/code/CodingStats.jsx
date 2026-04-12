import React from 'react';
import { HiOutlineTrophy, HiOutlinePencilSquare, HiOutlineCheckBadge, HiOutlineFire, HiOutlineCalendarDays } from "react-icons/hi2";

function CodingStats() {
    const stats = [
        { label: 'Yazdığım Kod Sətri', val: '2,847', trend: '+12%', icon: <HiOutlinePencilSquare /> },
        { label: 'Tamamlanan Modul', val: '14/22', trend: '63%', icon: <HiOutlineCheckBadge /> },
        { label: 'Həll Edilən Challenge', val: '23', trend: '+5 bu həftə', icon: <HiOutlineFire /> },
        { label: 'Öyrənmə Günləri', val: '34', trend: '🔥 streak', icon: <HiOutlineCalendarDays /> },
    ];

    return (
        <div className="px-8 md:px-16 py-10 md:py-16">
            <div className="flex items-center gap-2 mb-8">
                <HiOutlineTrophy size={16} className="text-[#378079] animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[3px] text-[#378079]">
                    Kodlaşma Statistikası
                </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <div key={index} className="group bg-[#06090f] border border-white beveled-box hover:border-[#378079]/30 p-4 lg:p-6 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-[#378079]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <span className="text-[1.5rem] lg:text-[2.6rem] block mb-4 group-hover:scale-110 transition-transform duration-300 origin-left text-[#378079]">
                            {stat.icon}
                        </span>

                        <div className="relative z-10">
                            <span className="font-bebas text-[1.5rem] lg:text-[2.6rem] text-[#f0ebe2] leading-none block tracking-wider">
                                {stat.val}
                            </span>
                            <span className="text-[8px] font-mono text-[#f0ebe2]/20 uppercase tracking-[1px] block mt-2 group-hover:text-[#f0ebe2]/40 transition-colors">
                                {stat.label}
                            </span>
                            <span className="text-[9px] font-black text-[#378079] block mt-3 items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-[#378079]" /> {stat.trend}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CodingStats;