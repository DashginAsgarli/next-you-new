import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { BsQuestionSquare } from "react-icons/bs";

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    function handleMouseMove(e) {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        currentTarget.style.setProperty("--mouse-x", `${x}px`);
        currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };

    const faqData = [
        { question: "NextYou-da hansı kitabları axtara bilərəm?", answer: "Kitabxanamızda proqramlaşdırma, texnologiya, elm, romanlar, tarix və psixologiya kimi 20+ kateqoriyada 1000-dən çox kitab mövcuddur." },
        { question: "Kitabları necə şərh yaza bilərəm?", answer: "Hər kitabın səhifəsində 1-5 ulduz arası qiymətləndirmə və rəy yazma bölməsi var." },
        { question: "Kod öyrənmə bölməsi necə işləyir?", answer: "Python, JavaScript, React kimi dillər üzrə interaktiv dərslər, canlı kod editoru və AI köməkçisi mövcuddur." },
        { question: "Mobil cihazlarda istifadə etmək olar?", answer: "Bəli, bütün mobil cihazlarda (iOS və Android) işləyən tam responsiv dizayna malikdir." }
    ];

    return (
        <section >

            <div className="relative z-10 px-8 md:px-16 py-10 md:py-16">

                <div className="flex items-center gap-2.5 mb-8 animate-[fadeUp_0.7s_ease_both] text-[#378079]">
                    <BsQuestionSquare/>
                    <span className="text-[9px] md:text-[10px] tracking-[0.3em]  uppercase font-bold">Tez-tez verilən suallar</span>
                </div>

                <h1 className="font-black text-[2rem] md:text-[3rem] lg:text-[4rem] leading-none mb-6 md:mb-10 lg:mb-12 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s] uppercase text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">
                    SUALLAR
                </h1>

                <div className="space-y-4 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.3s]">
                    {faqData.map((item, index) => (
                        <div key={index} onMouseMove={handleMouseMove} className=" beveled-box group/card relative bg-[#06090f] border border-white/10 overflow-hidden transition-all duration-300">
                            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition duration-300 z-0             bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.08),transparent_40%)]" />

                            <button onClick={() => setActiveIndex(activeIndex === index ? null : index)} className="w-full relative z-10 flex items-center justify-between p-6 md:p-8 text-left">
                                <div className="flex items-center gap-5">
                                    <div className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'border-white text-white' : 'border-white/10 text-white/20'}`}>
                                        <HiOutlineQuestionMarkCircle size={16} />
                                    </div>
                                    <span className={`text-[12px] md:text-lg font-bold tracking-tight italic transition-colors ${activeIndex === index ? 'text-white' : 'text-[#f0ebe2]/40'}`}>
                                        {item.question}
                                    </span>
                                </div>
                                <div className={`w-8 h-8 border border-white/10 rounded-lg flex items-center justify-center transition-all ${activeIndex === index ? 'rotate-180 border-white text-white' : 'text-white/20'}`}>
                                    <HiOutlineChevronDown />
                                </div>
                            </button>

                            <div className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-6 pb-8 md:px-24">
                                    <p className="text-[#f0ebe2]/40 text-[12px] md:text-base leading-relaxed font-light border-l border-white/10 pl-6">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default FAQ;