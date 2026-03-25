import React from 'react';
import { HiOutlineLightBulb, HiOutlinePaperAirplane } from "react-icons/hi2";

function Feedback() {
    const inputStyle = "w-full bg-[#06090f] border border-white/20 p-3 md:p-4 text-[#f0ebe2] outline-none focus:border-white transition-all font-mono text-[12px] md:text-[13px] uppercase tracking-widest placeholder:text-white/10 hover:border-white/30";

    return (
        <section className="bg-[#06090f] w-full py-12 md:py-20 px-6 md:px-[6%] relative overflow-hidden border-t border-white/5">
            
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
                 style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

            <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-20 max-w-7xl mx-auto">
                
                <div className="flex-1 animate-[fadeUp_0.7s_ease_both]">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-px bg-[#378079]" />
                        <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Feedback_Hub</span>
                    </div>

                    <h2 className="font-black text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.1] mb-6 uppercase text-transparent"
                        style={{ WebkitTextStroke: '1px #f0ebe2' }}>
                        FİKİR VƏ <br /> <span className="text-[#f0ebe2] not-italic opacity-90">TÖVSİYƏLƏR</span>
                    </h2>

                    <p className="text-[#f0ebe2]/40 text-xs md:text-sm lg:text-base max-w-sm mb-8 leading-relaxed font-light italic border-l border-white/5 pl-5">
                        Platformamızı təkmilləşdirmək üçün sizin rəyiniz çox önəmlidir. Təkliflərinizi bizə göndərin.
                    </p>

                    <div className="flex items-center gap-3 text-[#378079]">
                        <HiOutlineLightBulb className="text-xl" />
                        <span className="text-[9px] uppercase font-bold tracking-[0.2em]">Yeni ideyalarınızı gözləyirik</span>
                    </div>
                </div>

                <div className="w-full md:flex-[1.2] lg:max-w-[500px] animate-[fadeUp_0.7s_ease_both] [animation-delay:0.2s]">
                    <div 
                        className="relative bg-[#06090f] border border-white/20 p-6 md:p-8 lg:p-10 transition-all duration-300"
                        style={{ 
                            clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' 
                        }}
                    >
                        <div className="relative z-10 space-y-4">
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <input type="text" placeholder="AD" className={inputStyle} 
                                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }} />
                                <input type="text" placeholder="SOYAD" className={inputStyle} 
                                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }} />
                            </div>

                            <input type="email" placeholder="GMAIL ÜNVANINIZ" className={inputStyle} 
                                style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }} />

                            <textarea placeholder="MESAJINIZ..." rows="3" className={`${inputStyle} resize-none`} 
                                style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }} />

                            <button type="button" 
                                className="group/btn relative w-full bg-[#f0ebe2] text-black font-black py-4 tracking-[0.4em] text-[10px] uppercase transition-all hover:bg-white active:scale-[0.98] flex items-center justify-center gap-2 overflow-hidden"
                                style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    GÖNDƏR <HiOutlinePaperAirplane className="text-base group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}

export default Feedback;