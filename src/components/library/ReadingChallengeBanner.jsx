import React, { useState } from 'react';
import { HiOutlineClock } from 'react-icons/hi';

function ReadingChallengeBanner() {
    const [joined, setJoined] = useState(false);

    return (
        <div className="mx-8 md:mx-16 my-10 border border-[#378079]/20 bg-[#378079]/5 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <HiOutlineClock size={14} className="text-[#378079]" />
                    <span className="text-[8px] font-black uppercase tracking-[3px] text-[#378079]">
                        2026 Oxuma Meydan Oxuması
                    </span>
                </div>
                <h3 className="text-[#f0ebe2] font-black text-xl md:text-2xl uppercase tracking-tighter mb-1">
                    12 Kitab × 12 Ay
                </h3>
                <p className="text-[12px] text-[#f0ebe2]/40">
                    Hər ay 1 kitab oxu, ildə 12 kitabı tamamla. 847 nəfər qoşulub.
                </p>
            </div>

            <button onClick={() => setJoined(!joined)} className={`shrink-0 px-8 py-4 font-black text-[10px] uppercase tracking-widest transition-all    ${joined ? 'bg-[#378079] text-[#06090f] border border-[#378079]' : 'border border-[#378079]/50 text-[#378079] hover:bg-[#378079] hover:text-[#06090f]'}`}>
                {joined ? '✓ Qoşuldun!' : 'Meydan Oxumaya Qoşul'}
            </button>
        </div>
    );
}

export default ReadingChallengeBanner;