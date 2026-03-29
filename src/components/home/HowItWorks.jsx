import React, { useState } from 'react'

function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0)

    const steps = [
        { num: '01', title: 'Sahə Seç', desc: 'Proqramlaşdırma, dil, musiqi və ya kitab — öyrənmək istədiyin sahəni seç.', detail: 'Hədəflərinə çatmaq üçün ilk addımı düzgün atmaq vacibdir. İstər sıfırdan Python öyrənmək, istərsə də dünya klassiklərini orijinal dildə oxumaq istə - hər sahə üçün xüsusi olaraq hazırlanmış strukturlaşdırılmış tədris planları, interaktiv dərslər və real dünya layihələri səni gözləyir. Sənin öyrənmə sürətinə uyğunlaşan fərdi yol xəritəsi ilə hər gün nə öyrənəcəyini dəqiqliklə biləcəksən.', },
        { num: '02', title: 'Öyrən & Məşq Et', desc: 'İnteraktiv dərslər, kod redaktoru, audio praktika ilə öyrən.', detail: 'Passiv öyrənməyə son! Bizim ekosistemdə nəzəriyyə dərhal praktikaya çevrilir. Proqramlaşdırma dərslərində brauzerdən çıxmadan canlı kod redaktorunda məşq edə, dil öyrənərkən nitq tanıma sistemi ilə tələffüzünü təkmilləşdirə bilərsən. İnteraktiv qrammatika testləri, audio praktikalar və geniş kitabxanamız sayəsində öyrənmə prosesi darıxdırıcı dərsdən maraqlı bir hobbiye çevrilir.', },
        { num: '03', title: 'XP Qazanıb İrəlilə', desc: 'Hər tamamlanmış dərs üçün XP nöqtəsi qazan, liderboarda çıx.', detail: 'Sənin hər bir uğurun bizim üçün dəyərlidir. Tamamladığın hər dərs, həll etdiyin hər bir tapşırıq sənə Təcrübə Xalları (XP) qazandırır. Bu xallar sənin qlobal liderlər cədvəlindəki mövqeyini müəyyən edir və yeni səviyyələrin qapısını açır. Bu rəqabət dolu, lakin dəstəkləyici mühit sənin motivasiyanı hər zaman pik həddə saxlayacaq və öyrənmə vərdişini davamlı edəcək.', },
        { num: '04', title: 'Sertifikat Al', desc: 'Hər kurs sonunda professional sertifikat qazanıb portfolio-na əlavə et.', detail: 'Kursu uğurla başa vurduqdan sonra əldə edəcəyin rəsmi sertifikat sənin peşəkar bacarıqlarının təsdiqi olacaq. Bu sertifikatlar sənaye standartlarına uyğun hazırlanmışdır və işəgötürənlər tərəfindən yüksək qiymətləndirilir. Bir kliklə sertifikatını LinkedIn profilinə əlavə edə, portfolio-nu zənginləşdirə və karyera pillələrində sürətlə irəliləyə bilərsən.', },
    ]

    return (
        <section className="px-8 md:px-16 py-10 md:py-12 lg:py-16 ">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-[#378079]" />
                <span className="text-[10px] tracking-[0.3em] text-[#378079] uppercase font-bold">Necə İşləyir</span>
            </div>
            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[1.07] tracking-[-0.01em] mb-10 lg::mb-16 uppercase">
                4 ADDIMDA{' '}
                <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">UĞUR</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="flex flex-col gap-3">
                    {steps.map((step, i) => {
                        return (
                            <button key={i} onClick={() => setActiveStep(i)} className={`text-left p-4 md:p-6 border transition-all duration-300 z-10 ${activeStep === i ? 'border-[#378079] bg-[#378079]' : 'border-white bg-[#06090f] hover:border-white/30'}`}>
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="font-bebas text-[1.5rem]">{step.num}</span>
                                    <h3 className="font-black text-lg  uppercase tracking-tight">{step.title}</h3>
                                </div>
                                <p className="text-[12px] text-[#f0ebe2]/40 leading-relaxed">{step.desc}</p>
                            </button>
                        )
                    })}
                </div>

                <div className="bg-[#06090f] z-10 border border-white p-5 md:p-8 flex flex-col justify-center">
                    <span className="font-bebas text-[6rem] text-[#378079]/10 leading-none block">{steps[activeStep].num}</span>
                    <h3 className="font-black text-3xl md:text-4xl text-[#f0ebe2] uppercase tracking-tighter mb-6">{steps[activeStep].title}</h3>
                    <p className="text-[15px] text-[#f0ebe2]/60 leading-relaxed">{steps[activeStep].detail}</p>
                    <div className="flex items-center gap-2 mt-8">
                        {steps.map((_, i) => {
                            return (
                                <button key={i} onClick={() => setActiveStep(i)} className={`h-1 transition-all duration-300 ${activeStep === i ? 'w-8 bg-[#378079]' : 'w-2 bg-white/10'}`} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks