import React, { useState, useEffect } from 'react';

function Stats() {

    const statsData = [
        { label: 'Aktiv Tələbə', value: 15420 },
        { label: 'Tamamlanmış Kurs', value: 98700 },
        { label: 'Sertifikat Verildi', value: 4320 },
        { label: 'Öyrənmə Saatı', value: 250000 },
    ];
    const [counts, setCounts] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounts((prev) => {
                const newValues = prev.map((num, i) => {
                    const step = Math.ceil(statsData[i].value / 50);
                    return num + step >= statsData[i].value ? statsData[i].value : num + step;
                });
                if (newValues[3] === statsData[3].value) clearInterval(timer);
                return newValues;
            });
        }, 30);

        return () => clearInterval(timer);
    }, []);

    return (
        <section>
            <div className="grid grid-cols-2 md:grid-cols-4 ">
                {statsData.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center py-3 border border-white/5 bg-[#378079] z-10">
                        <span className="font-bebas text-[1.8rem] md:text-[2.2rem] lg:text-[3rem] text-white">
                            {counts[index].toLocaleString()}+
                        </span>
                        <span className="text-[5px] md:text-[9px] tracking-[3px] uppercase text-white font-bold">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stats;