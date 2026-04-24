import React from 'react';
import { GrDocumentPerformance } from "react-icons/gr";

function GrowthChart() {
    const weeks = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'];

    const tracks = [
        { key: 'code', label: 'KOD', color: '#378079', data: [20, 35, 45, 60, 55, 70, 80, 90] },
        { key: 'books', label: 'KİTAB', color: '#3a6d9a', data: [15, 25, 30, 40, 50, 45, 65, 72] },
        { key: 'music', label: 'MUSİQİ', color: '#9a7a2a', data: [10, 18, 22, 28, 35, 40, 38, 50] },
        { key: 'language', label: 'DİL', color: '#7a3a9a', data: [5, 12, 20, 30, 35, 42, 50, 60] },
    ];

    const width = 600;
    const height = 220;
    const padding = { top: 20, bottom: 30, left: 35, right: 10 };

    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;
    const maxValue = 100;

    const getX = (index) => padding.left + (index / (weeks.length - 1)) * chartWidth;
    const getY = (value) => padding.top + chartHeight - (value / maxValue) * chartHeight;

    function generatePath(data) {
        return data.map((val, i) => `${i === 0 ? 'M' : 'L'}${getX(i).toFixed(1)},${getY(val).toFixed(1)}`).join(' ');
    };

    return (
        <section className="px-8 md:px-16 py-10">
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-2 text-[#378079]">
                    <GrDocumentPerformance/>
                    <span className="text-[10px] tracking-[0.4em]  uppercase font-black">Performance</span>
                </div>
                <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-black uppercase leading-none">
                    Growth <span className="text-transparent [-webkit-text-stroke:1px_#f0ebe2]">Chart</span>
                </h2>
            </div>

            <div className="bg-[#0b0f17] border border-white/5 rounded-2xl p-6 mb-6">
                <svg width="100%" viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
                    {[0, 50, 100].map(v => (
                        <g key={v}>
                            <line x1={padding.left} y1={getY(v)} x2={width - padding.right} y2={getY(v)} stroke="white" strokeOpacity="0.03" />
                            <text x={padding.left - 10} y={getY(v)} textAnchor="end" fill="white" fillOpacity="0.2" fontSize="9" dominantBaseline="middle">{v}</text>
                        </g>
                    ))}

                    {weeks.map((week, i) => (
                        <text key={week} x={getX(i)} y={height - 5} textAnchor="middle" fill="white" fillOpacity="0.2" fontSize="9">{week}</text>
                    ))}

                    {tracks.map(track => (
                        <g key={track.key}>
                            <path d={generatePath(track.data)} fill="none" stroke={track.color} strokeWidth="2.5" strokeLinecap="round" className="opacity-70" />
                            <circle cx={getX(track.data.length - 1)} cy={getY(track.data[track.data.length - 1])} r="4" fill={track.color} />
                        </g>
                    ))}
                </svg>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tracks.map(track => {
                    const lastValue = track.data[track.data.length - 1];
                    const prevValue = track.data[track.data.length - 2];
                    const diff = lastValue - prevValue;

                    return (
                        <div key={track.key} className="bg-[#0b101a] border border-white/5 p-5 rounded-xl hover:border-white/10 transition-colors">
                            <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2">{track.label}</p>
                            <div className="flex items-end justify-between">
                                <h3 className="text-3xl font-black leading-none" style={{ color: track.color }}>{lastValue}</h3>
                                <div className={`text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/5 ${diff >= 0 ? 'text-[#378079]' : 'text-red-400'}`}>
                                    {diff >= 0 ? `+${diff}` : diff}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default GrowthChart;