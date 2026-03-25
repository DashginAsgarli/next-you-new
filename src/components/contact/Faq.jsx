import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineQuestionMarkCircle } from "react-icons/hi2";



function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    // Mouse işıq effekti funksiyası
    const handleMouseMove = (e) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        currentTarget.style.setProperty("--mouse-x", `${x}px`);
        currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };


    const faqData = [
        {
            question: "NextYou-da hansı kitabları axtara bilərəm?",
            answer: "Kitabxanamızda proqramlaşdırma, texnologiya, elm, romanlar, tarix və psixologiya kimi 20+ kateqoriyada 1000-dən çox kitab mövcuddur."
        },
        {
            question: "Kitabları necə şərh yaza bilərəm?",
            answer: "Hər kitabın səhifəsində 1-5 ulduz arası qiymətləndirmə və rəy yazma bölməsi var."
        },
        {
            question: "Kod öyrənmə bölməsi necə işləyir?",
            answer: "Python, JavaScript, React kimi dillər üzrə interaktiv dərslər, canlı kod editoru və AI köməkçisi mövcuddur."
        },
        {
            question: "Mobil cihazlarda istifadə etmək olar?",
            answer: "Bəli, bütün mobil cihazlarda (iOS və Android) işləyən tam responsiv dizayna malikdir."
        }
    ];


    return (
        <section className="bg-[#06090f] w-full py-20 px-6 md:px-[6%] relative overflow-hidden border-t border-white/5">

            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
                style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

            <div className="relative z-10 ">

                <div className="flex items-center gap-2.5 mb-8 animate-[fadeUp_0.7s_ease_both]">
                    <div className="w-8 h-px bg-[#378079]" />
                    <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-[#378079] uppercase font-bold">Query_Database</span>
                </div>

                <h1 className="font-black text-[clamp(2.4rem,6vw,5rem)] leading-none mb-16 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s] uppercase text-transparent italic"
                    style={{ WebkitTextStroke: '1px #f0ebe2' }}>
                    SUALLAR
                </h1>

                <div className="space-y-4 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.3s]">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            onMouseMove={handleMouseMove}
                            className="group/card relative bg-[#06090f] border border-white/10 overflow-hidden transition-all duration-300"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}
                        >
                            <div
                                className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition duration-300 z-0"
                                style={{
                                    background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`
                                }}
                            />

                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full relative z-10 flex items-center justify-between p-6 md:p-8 text-left"
                            >
                                <div className="flex items-center gap-5">
                                    <div className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'border-white text-white' : 'border-white/10 text-white/20'}`}>
                                        <HiOutlineQuestionMarkCircle size={20} />
                                    </div>
                                    <span className={`text-sm md:text-lg font-bold tracking-tight uppercase italic transition-colors ${activeIndex === index ? 'text-white' : 'text-[#f0ebe2]/40'}`}>
                                        {item.question}
                                    </span>
                                </div>
                                <div className={`w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center transition-all ${activeIndex === index ? 'rotate-180 border-white text-white' : 'text-white/20'}`}>
                                    <HiOutlineChevronDown />
                                </div>
                            </button>

                            <div className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-6 pb-8 md:px-24">
                                    <p className="text-[#f0ebe2]/40 text-sm md:text-base leading-relaxed font-light border-l border-white/10 pl-6">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
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

export default FAQ;