import React, { useState } from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import { MdMarkEmailRead } from "react-icons/md";
function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit() {
        if (email.trim()) { setSubmitted(true); }
    };

    return (
        <section className="px-8 md:px-16 py-10 md:py-12 lg:py-16 ">
            <div >
                <div className="flex items-center gap-2 mb-6">
                    <MdMarkEmailRead className='text-[#378079]' />
                    <span className="text-[10px] tracking-[0.3em] text-[#378079] uppercase font-bold">Xəbərdarlıq</span>
                </div>

                <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[3rem] lg:text-[4rem]  max-w-2xl leading-[1.1] tracking-[-0.01em] mb-6 uppercase">
                    YENİLİKLƏRDƏN{' '}
                    <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">XƏBƏRDAR OL</span>
                </h2>
                <p className="text-[14px] text-[#f0ebe2]/40 mb-6 md:mb-10 leading-relaxed">
                    Yeni kurslar, tədbirlər və xüsusi təkliflər haqqında birinci ol.
                </p>

                {submitted ? (
                    <div className="flex items-center justify-center gap-3 text-[#378079]">
                        <HiCheckCircle size={24} />
                        <span className="font-black uppercase tracking-widest text-[13px]">Uğurla Abunə Oldunuz!</span>
                    </div>
                ) : (
                    <div className="flex  gap-3 max-w-xl">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="EMAIL ÜNVANINIZ..." className="custom-input flex-1" />
                        <button onClick={handleSubmit} className="one-beveled-box px-3 md:px-8 py-4 bg-[#378079] text-[#06090f] font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all whitespace-nowrap">
                            ABUNƏ OL
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}


export default NewsletterSignup