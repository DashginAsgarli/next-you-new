import React from 'react';
import { HiOutlineLightBulb, HiOutlinePaperAirplane } from "react-icons/hi2";

function Feedback() {
    return (
        <section>
            <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-20 px-8 md:px-16 py-10 md:py-16">

                <div className="flex-1 animate-[fadeUp_0.7s_ease_both]">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">
                            <div className="flex items-center gap-3 text-[#378079]">
                                <HiOutlineLightBulb className="text-xl" />
                                <span className="text-[9px] uppercase font-bold tracking-[0.2em]">Yeni ideyalarınızı gözləyirik</span>
                            </div>
                        </span>
                    </div>

                    <h1 className="text-[#f0ebe2] font-black text-[2.4rem] md:text-[3.5rem] lg:text-[5rem] leading-[1.07] tracking-[-0.01em] mb-6 md:mb-10 lg:mb-12 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
                        FİKİR{" "}
                        <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">VƏ</span><br />
                        <span className="text-[#378079]">TÖVSİYƏLƏR</span>
                    </h1>


                </div>

                <div className="w-full md:flex-[1.2]  animate-[fadeUp_0.7s_ease_both] [animation-delay:0.2s]">
                    <div
                        className=" beveled-box relative bg-[#06090f] border border-white/20 p-6 md:p-8 lg:p-10 transition-all duration-300">
                        <div className="relative z-10 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <input type="text" placeholder="AD" className="custom-input" />
                                <input type="text" placeholder="SOYAD" className="custom-input" />
                            </div>
                            <input type="email" placeholder="GMAIL ÜNVANINIZ" className="custom-input" />
                            <textarea placeholder="MESAJINIZ..." rows="3" className="custom-input resize-none" />
                            <button type="button" className=" relative w-full bg-[#f0ebe2] text-black font-black py-4 tracking-[0.4em] text-[10px] uppercase transition-all hover:bg-white active:scale-[0.98] flex items-center justify-center gap-2 overflow-hidden custom-cut-box">
                                <span className="relative z-10 flex items-center gap-2">
                                    GÖNDƏR <HiOutlinePaperAirplane className="text-base group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Feedback;