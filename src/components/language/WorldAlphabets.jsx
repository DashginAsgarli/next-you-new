import React, { useState } from 'react';
import { TbAlphabetGreek } from "react-icons/tb";
function WorldAlphabets() {
    const alphabetsData = [
        {
            name: 'Latin',
            letters: ['A a', 'B b', 'C c', 'D d', 'E e', 'F f', 'G g', 'H h', 'I i', 'J j', 'K k', 'L l', 'M m', 'N n', 'O o', 'P p', 'Q q', 'R r', 'S s', 'T t', 'U u', 'V v', 'W w', 'X x', 'Y y', 'Z z'],
            color: '#378079'
        },
        {
            name: 'Yunan',
            letters: ['Α α', 'Β β', 'Γ γ', 'Δ δ', 'Ε ε', 'Ζ ζ', 'Η η', 'Θ θ', 'Ι ι', 'Κ κ', 'Λ λ', 'Μ μ', 'Ν ν', 'Ξ ξ', 'Ο ο', 'Π π', 'Ρ ρ', 'Σ σ', 'Τ τ', 'Υ υ', 'Φ φ', 'Χ χ', 'Ψ ψ', 'Ω ω'],
            color: '#3a4a9a'
        },
        {
            name: 'Kiril',
            letters: ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'],
            color: '#9a3a3a'
        },
        {
            name: 'Ərəb',
            letters: ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'],
            color: '#3a7a4a'
        },
        {
            name: 'İvrit',
            letters: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'],
            color: '#9a7a2a'
        },
        {
            name: 'Hind (Devanagari)',
            letters: ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ', 'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ'],
            color: '#d45d2a'
        },
        {
            name: 'Koreya (Hangul)',
            letters: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', 'ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'],
            color: '#6d3a4a'
        },
        {
            name: 'Gürcü',
            letters: ['ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 'ლ', 'მ', 'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ'],
            color: '#7a3a9a'
        },
        {
            name: 'Tay (Thailand)',
            letters: ['ก', 'ข', 'ค', 'ง', 'ज', 'ฉ', 'ช', 'ซ', 'ญ', 'ฎ', 'ฏ', 'ฐ', 'ฑ', 'ฒ', 'ณ', 'ด', 'ต', 'ถ', 'ท', 'ธ', 'น'],
            color: '#d42a5b'
        },
        {
            name: 'Tibet',
            letters: ['ཀ', 'ཁ', 'ག', 'ང', 'ཅ', 'ཆ', 'ཇ', 'ཉ', 'ཏ', 'ཐ', 'ད', 'ན', 'པ', 'ཕ', 'բ', 'མ', 'ཙ', 'ཚ', 'ཛ', 'ཝ'],
            color: '#ffcc00'
        },
        {
            name: 'Qədim Finikiya',
            letters: ['𐤀', '𐤁', '𐤂', '𐤃', '𐤄', '𐤅', '𐤆', '𐤇', '𐤈', '𐤉', '𐤊', '𐤋', '𐤌', '𐤍', '𐤎', '𐤏', '𐤐', '𐤑', '𐤒', '𐤓', '𐤔', '𐤕'],
            color: '#7a7a7a'
        }
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const activeAlphabet = alphabetsData[selectedIndex];

    return (
        <section className="px-8 md:px-16 py-10 md:py-16">
            <div className="flex items-center gap-2 mb-4">
                <TbAlphabetGreek className="text-[#378079] text-xl" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Linqvistik Arxiv</span>
            </div>

            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-tight tracking-tighter uppercase mb-10">
                Qlobal <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">Əlifbalar</span>
            </h2>

            <div className="flex flex-wrap gap-2 mb-10">
                {alphabetsData.map((alphabet, index) => {
                    const isActive = selectedIndex === index;
                    return (
                        <button key={index} onClick={() => setSelectedIndex(index)} className={`px-4 py-2 text-[10px] font-black tracking-[0.1em] uppercase border transition-all duration-300 rounded-lg ${isActive ? 'border-[#378079] text-[#06090f] bg-[#378079]' : 'border-white/5 text-white/30 hover:border-white/20 hover:text-white/60'}`}>
                            {alphabet.name}
                        </button>
                    );
                })}
            </div>

            <div className="bg-[#0b0f17] border border-white/5 p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 blur-[100px] opacity-10" style={{ backgroundColor: activeAlphabet.color }} />

                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3 relative z-10">
                    {activeAlphabet.letters.map((letter) => (
                        <div key={letter} className="aspect-square rounded-xl flex items-center justify-center text-lg font-black transition-all hover:scale-110 border group cursor-default" style={{ backgroundColor: activeAlphabet.color + '05', borderColor: activeAlphabet.color + '20', color: activeAlphabet.color }}>
                            <span >
                                {letter}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorldAlphabets;