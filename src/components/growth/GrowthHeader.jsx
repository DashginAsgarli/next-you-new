import React from 'react'

function GrowthHeader() {
    return (
        <>
            <div className="px-8 md:px-16 py-16 md:py-18">
                <div className="flex items-center gap-2.5 mb-8">
                    <div className="w-8 h-px bg-[#378079]" />
                    <span className="text-[10px] tracking-[0.3em] text-[#378079] uppercase font-bold">Şəxsi İnkişaf</span>
                </div>
                <h1 className="text-[#f0ebe2] font-black text-[2.4rem] md:text-[3.5rem] lg:text-[5rem] leading-[1.07] tracking-[-0.01em] uppercase">
                    GROWTH{' '}
                    <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">HUB</span>
                </h1>
                <p className="text-[13px] text-[#f0ebe2]/40 mt-4 max-w-lg leading-relaxed">
                    Hədəflərini qur, vərdişlərini izlə, güclü tərəflərini kəşf et. Hər gün özünün daha yaxşı versiyasına doğru addımla.
                </p>
            </div>
        </>
    )
}

export default GrowthHeader
