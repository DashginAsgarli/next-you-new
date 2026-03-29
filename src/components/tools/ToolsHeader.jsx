import React, { useState } from 'react'

function ToolsHeader() {
    return (
        <>
            <section className="w-full overflow-hidden relative">
                <div className='background-tor'></div>
                <div className='background-shadow'></div>
                <div className="px-8 md:px-16 py-16">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-px bg-[#378079]" />
                        <span className="text-[10px] tracking-[0.3em] text-[#378079] uppercase font-bold">Utilitlər</span>
                    </div>
                    <h1 className="text-[#f0ebe2] font-black text-[2.4rem] md:text-[4rem] leading-[1.07] tracking-[-0.01em] mb-4 uppercase">
                        SMART{' '}
                        <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">ALƏTLƏR</span>
                    </h1>
                    <p className="text-[14px] text-[#f0ebe2]/40 mb-12 max-w-xl">Gündəlik həyatı asanlaşdıran praktik alətlər kolleksiyası.</p>

                </div>
            </section>
        </>
    )
}

export default ToolsHeader