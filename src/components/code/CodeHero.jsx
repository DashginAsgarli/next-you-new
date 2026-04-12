import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineRocketLaunch, HiOutlinePlay } from "react-icons/hi2";

function CodeHero() {
    const [typedText, setTypedText] = useState('');
    const lines = [
        'const dev = new Developer();',
        'dev.learn("HTML", "CSS", "JS");',
        'dev.build("NextYou Platform");',
        'dev.deploy(); // 🚀'
    ];
    const fullText = lines.join('\n');
    const idxRef = useRef(0);

    useEffect(() => {
        idxRef.current = 0;
        setTypedText('');

        const interval = setInterval(() => {
            if (idxRef.current < fullText.length) {
                setTypedText(fullText.slice(0, idxRef.current + 1));
                idxRef.current++;
            } else {
                clearInterval(interval);
            }
        }, 40);

        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <div className="px-8 md:px-16 py-10 md:py-16">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-7xl mx-auto">

                <div className="flex-1 w-full">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-px bg-[#378079]" />
                        <span className="text-[9px] font-black uppercase tracking-[3px] text-[#378079]">Proqramlaşdırma</span>
                    </div>
                    <h1 className="text-[#f0ebe2] font-black text-[2.4rem] md:text-[3.5rem] lg:text-[5rem] leading-[1.07] tracking-[-0.01em] mb-6 uppercase">
                        KOD YAZ.<br />
                        <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">DEV OL</span>
                    </h1>
                    <p className="text-[14px] text-[#f0ebe2]/50 leading-relaxed mb-10 max-w-md">
                        Sıfırdan fullstack developera. Strukturlaşdırılmış kurslar, canlı kod redaktoru, real layihələr.
                    </p>
                    <div className="flex  gap-3">
                        <Link to="/code/fullstack" className="flex items-center gap-2 px-4 py-3 lg:px-6 lg:py-4 bg-[#378079] text-[#06090f] font-bold  text-[11px] lg:text-[16px]   hover:bg-white transition-all active:scale-95">
                            <HiOutlineRocketLaunch size={16} /> Kursları Kəşfet
                        </Link>
                        <Link to="/code/html" className="flex items-center gap-2 px-4 py-3 lg:px-6 lg:py-4 border border-white/20 bg-[#06090f]  font-bold text-[11px] lg:text-[16px] hover:border-white hover:text-white transition-all active:scale-95">
                            <HiOutlinePlay size={16} /> HTML-dən Başla
                        </Link>
                    </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-125 shrink-0">
                    <div className="bg-[#0d1117] border border-white/10 rounded-2xl overflow-hidden">
                        <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-[#06090f]">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            <span className="ml-3 text-[9px] font-mono text-white/20  tracking-widest">main.js</span>
                        </div>
                        <div className="p-6 min-h-55">
                            <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
                                {typedText.split('\n').map((line, i) => (
                                    <div key={i} className="flex gap-4">
                                        <span className="text-white/15 w-4 text-right shrink-0 select-none">{i + 1}</span>
                                        <span className="text-[#f0ebe2]/80">{line}</span>
                                    </div>
                                ))}
                                <span className="inline-block w-2 h-4 bg-[#378079] animate-pulse ml-1 align-middle" />
                            </pre>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CodeHero;