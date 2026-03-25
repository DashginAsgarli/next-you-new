import React from 'react';

const stats = [
  { label: "İnnovativ", value: "100%" },
  { label: "Dəstək", value: "24/7" },
  { label: "Resurs", value: "∞" },
];

function About() {
  return (
    <section>
      <div className="relative z-10 px-8 md:px-16 py-14 md:py-20">

        <div className="flex items-center gap-2.5 mb-6 md:mb-10 lg:mb-12 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.05s]">
          <div className="w-7 md:w-9 h-px bg-[#378079]" />
          <span className="text-[10px] md:text-[11px] tracking-[0.22em] text-[#378079] uppercase font-semibold">
            Platforma Haqqında
          </span>
        </div>

        <h1 className="text-[#f0ebe2] font-black text-[2.4rem] md:text-[3.5rem] lg:text-[5rem] leading-[0.9] tracking-[-0.02em] mb-6 md:mb-10 lg:mb-12 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s]">
          NEXT{" "}
          <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">
            YOU
          </span>
        </h1>

        <div className=" mb-6 md:mb-10 lg:mb-12 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.3s]">
          <p className="text-[12px] md:text-[20px] lg:text-[22px] font-light text-[#f0ebe2]/70 tracking-wide leading-[1.8]">
            NextYou rəqəmsal dünyanın yeni mərhələsidir. Texnologiya, incəsənət və biliyin vahid bir ekosistemdə birləşməsi. Bizim məqsədimiz intellektual inkişafı daha futuristik və əlçatan etməkdir. Biz innovasiya və yaradıcılığı dəstəkləyən, istifadəçilərin potensialını tam üzə çıxarmağa kömək edən alətlər təqdim edirik. NextYou ilə gələcəyin rəqəmsal təcrübəsini bu gündən yaşayın.
          </p>
        </div>
        <div className="flex items-stretch gap-0 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.45s]">
          {stats.map((stat, i) => (
            <div key={i} className={`relative ${i !== 0 ? 'pl-7 ml-7 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-px before:bg-[rgba(55,128,121,0.2)]' : ''}`}>
              <span className="font-['Bebas_Neue'] text-[1.7rem] md:text-[2.2rem] text-[#378079] leading-none block tracking-wide">
                {stat.value}
              </span>
              <span className="text-[7px] tracking-[0.2em] text-[rgba(240,235,226,0.28)] uppercase block mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default About;