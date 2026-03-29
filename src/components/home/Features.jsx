import React from 'react'
import { HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineAcademicCap, HiOutlineGlobeAlt } from 'react-icons/hi'

function Features() {
    const features = [
        { icon: <HiOutlineLightningBolt size={24} />, title: 'Sürətli Öyrənmə', desc: 'Ağıllı alqoritm sənin öyrənmə sürətinə uyğunlaşır, heç bir vaxtı boşa vermirsən.', },
        { icon: <HiOutlineAcademicCap size={24} />, title: 'Sertifikat', desc: 'İşəgötürənlər tərəfindən tanınan professional sertifikatlar.', },
        { icon: <HiOutlineShieldCheck size={24} />, title: 'Keyfiyyətli Kontent', desc: 'Ekspertlər tərəfindən hazırlanmış, daima yenilənən kurs materialları.', },
        { icon: <HiOutlineGlobeAlt size={24} />, title: 'Global İcma', desc: '15,000+ tələbədən ibarət aktiv icmanın bir parçası ol.', },
    ]

    return (
        <section className="px-8 md:px-16 py-10 md:py-18 lg:py-20">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-[#378079]" />
                <span className="text-[10px] tracking-[0.3em] text-[#378079] uppercase font-bold">Xüsusiyyətlər</span>
            </div>
            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[1.07] tracking-[-0.01em] uppercase">
                NİYƏ{' '}<span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">NEXTYOU</span>
            </h2>

            <div className=" my-5 md:my-5 lg:my-8 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.3s]">
                <p className="text-[10px] md:text-[16px] lg:text-[20px] font-light tracking-wide leading-[1.8]">
                    NextYou rəqəmsal dünyanın yeni mərhələsidir. Texnologiya, incəsənət və biliyin vahid bir ekosistemdə birləşməsi. Bizim məqsədimiz intellektual inkişafı daha futuristik və əlçatan etməkdir. Biz innovasiya və yaradıcılığı dəstəkləyən, istifadəçilərin potensialını tam üzə çıxarmağa kömək edən alətlər təqdim edirik. NextYou ilə gələcəyin rəqəmsal təcrübəsini bu gündən yaşayın.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {features.map(function (feat, i) {
                    return (
                        <div key={i} className=" beveled-box group p-5 md:py-5 md:px-4 lg:p-8 border border-white bg-[#06090f] transition-all duration-500 hover:transform-[perspective(500px)_rotateY(10deg)_rotateX(5deg)_translateY(-10px)] relative overflow-hidden">
                            <div className="text-white mb-4 ">{feat.icon}</div>
                            <h3 className=" font-black text-md md:text-lg uppercase tracking-tight mb-3">{feat.title}</h3>
                            <p className="text-[10px] md:text-[13px] lg:text-[15px] text-[#f0ebe2]/40 leading-relaxed">{feat.desc}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Features