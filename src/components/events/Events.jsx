import React from 'react';
import { TbRosetteDiscount } from "react-icons/tb";
function Events() {
    const events = [
        { id: 1, title: 'React Bootcamp — Sıfırdan İlk Layihəyə', date: '20 Fevral 2026', time: '18:00', type: 'Webinar', spots: 45, total: 100 },
        { id: 2, title: 'ML ilə Görüntü Tanıma Workshop\'u', date: '28 Fevral 2026', time: '15:00', type: 'Workshop', spots: 20, total: 30 },
        { id: 3, title: 'NextYou Tələbə Buluşması — Bakı', date: '5 Mart 2026', time: '13:00', type: 'Offline', spots: 80, total: 150 },
        { id: 4, title: 'İngilis Dili İnteraktiv Dərs — A2-B1', date: '10 Mart 2026', time: '19:00', type: 'Webinar', spots: 62, total: 80 },
    ];

    const typeColors = {
        Webinar: '#3B82F6',
        Workshop: '#F97316',
        Offline: '#378079',
        Hackathon: '#A855F7'
    };

    return (
        <section>
            <div className="px-8 md:px-16 py-16">
                <div className="flex items-center gap-2 mb-4 text-[#378079]">
                    <TbRosetteDiscount/>
                    <span className="text-[10px] tracking-[0.3em] uppercase font-bold">
                        Endirimlər
                    </span>
                </div>

                <h1 className="text-[#f0ebe2] font-black text-[2.4rem] md:text-[4rem] leading-[1.07] tracking-[-0.01em] mb-12 uppercase">
                    AKTİV <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">Kurslar</span>
                </h1>

                <div className="space-y-4">
                    {events.map((event) => {
                        const percentage = Math.round((event.spots / event.total) * 100);
                        const currentColor = typeColors[event.type];

                        return (
                            <div key={event.id} className="group bg-[#06090f] border border-white/10 hover:border-[#378079]/30 p-6 md:p-8 transition-all rounded-lg">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                                    <div className="flex-1">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className="text-[8px] font-black uppercase tracking-widest px-3 py-1 border rounded-sm" style={{ color: currentColor, borderColor: currentColor + '40', backgroundColor: currentColor + '10' }}>
                                                {event.type}
                                            </span>
                                        </div>

                                        <h3 className="text-[#f0ebe2] font-black text-xl uppercase tracking-tighter mb-2 group-hover:text-[#378079] transition-colors">
                                            {event.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-4 text-[9px] font-mono text-[#f0ebe2]/30">
                                            <span>📅 {event.date}</span>
                                            <span>🕕 {event.time}</span>
                                            <span className="text-[#378079]">👥 {event.spots}/{event.total} yer dolub</span>
                                        </div>

                                        <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden max-w-xs">
                                            <div className="h-full rounded-full transition-all duration-1000" style={{ width: percentage + "%", backgroundColor: currentColor }} />
                                        </div>
                                    </div>

                                    <button className="shrink-0 px-8 py-3 border border-white/10 text-[9px] font-black uppercase tracking-widest text-[#f0ebe2]/40 hover:bg-[#378079] hover:text-[#06090f] hover:border-transparent transition-all rounded-sm">
                                        Qeydiyyat
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Events;