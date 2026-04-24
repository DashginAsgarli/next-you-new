import { HiOutlineSparkles } from "react-icons/hi";

function WordOfTheDayStatic() {
    return (
        <>
            <section className="px-8 md:px-16 py-14">
                <div className="flex items-center gap-2 mb-6">
                    <HiOutlineSparkles size={16} className="text-[#378079]" />
                    <span className="text-[9px] font-black uppercase tracking-[3px] text-[#378079]">
                        Günün Sözü
                    </span>
                </div>

                <div className=" bg-[#06090f] border border-white/10 p-8 md:p-12 relative overflow-hidden group">
                    <div className="absolute -right-8 -bottom-8 font-serif text-[8rem] text-white/3 select-none uppercase leading-none pointer-events-none">
                        SERE
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-[#f0ebe2] font-black text-4xl md:text-5xl lowercase tracking-tighter mb-2">
                                    Serendipity
                                </h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-[#378079] font-mono text-lg">
                                        /ˌser.ənˈdɪp.ɪ.ti/
                                    </span>
                                    <span className="bg-[#378079]/10 text-[#378079] border border-[#378079]/20 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest">
                                        noun
                                    </span>
                                </div>
                            </div>

                        </div>

                        <p className="text-[#f0ebe2]/70 text-base leading-relaxed mb-3">
                            The occurrence of events by chance in a happy or beneficial way.
                        </p>
                        <p className="text-[#378079] italic text-sm border-l-2 border-[#378079]/30 pl-4">
                            "It was pure serendipity that we met."
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WordOfTheDayStatic;