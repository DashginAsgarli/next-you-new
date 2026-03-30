import React, { useState } from 'react';


function IdiomLearn() {

  const IDIOMS = [
    { idiom: 'Break a leg', meaning: 'Uğurlar dilə', example: 'Break a leg at the audition!', az: 'Teatr dünyasında uğur diləmək üçün işlədilir.' },
    { idiom: 'Bite the bullet', meaning: 'Dişini sıx, tab gətir', example: 'I had to bite the bullet and apologize.', az: 'Çətin bir şeyi qəbul etmək məcburiyyətində qalmaq.' },
    { idiom: 'Hit the nail on the head', meaning: 'Tam yerinə düşmək', example: 'You hit the nail on the head with that comment.', az: 'Bir şeyi tam dəqiq ifadə etmək.' },
    { idiom: 'Cost an arm and a leg', meaning: 'Çox bahalı olmaq', example: 'That car costs an arm and a leg.', az: 'Çox yüksək qiymətli bir şey üçün işlədilir.' },
    { idiom: 'Let the cat out of the bag', meaning: 'Sirri açıqlamaq', example: 'She let the cat out of the bag about the surprise.', az: 'Gizli bir şeyi yanlışlıqla açıqlamaq.' },
    { idiom: 'Under the weather', meaning: 'Özünü xəstə hiss etmək', example: 'I am feeling a bit under the weather today.', az: 'Halsızlıq və ya yüngül xəstəlik halı.' },
  ];

  const [idx, setIdx] = useState(0);
  const currentIdx = idx % IDIOMS.length;
  const idiom = IDIOMS[currentIdx];

  return (
    <section className="px-8 md:px-16 py-10">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-px bg-[#378079]" />
        <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Lüğət</span>
      </div>

      <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] leading-tight tracking-tighter uppercase mb-8">
        İDİOM <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">KARTLARI</span>
      </h2>

      <div className="max-w-xl">
        <div className="bg-[#0b0f17] border border-white/5 rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:border-[#378079]/30 transition-all duration-500">

          <div className="flex justify-between items-center mb-10">
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
              {(currentIdx + 1).toString().padStart(2, '0')} / {IDIOMS.length.toString().padStart(2, '0')}
            </span>
            <div className="w-12 h-px bg-[#378079]/30" />
          </div>

          <div className="mb-10">
            <h3 className="text-[#f0ebe2] font-black text-3xl md:text-4xl uppercase tracking-tighter mb-2">
              "{idiom.idiom}"
            </h3>
            <div className="inline-block px-3 py-1 bg-[#378079]/10 border border-[#378079]/20 rounded-lg">
              <p className="text-[#378079] text-[13px] font-bold tracking-tight">
                {idiom.meaning}
              </p>
            </div>
          </div>

          {/* Detallar Paneli */}
          <div className="space-y-6 pt-8 border-t border-white/5">
            <div>
              <p className="text-[9px] text-white/20 uppercase tracking-[0.2em] mb-2 font-bold">Nümunə Cümlə</p>
              <p className="text-[14px] italic text-[#f0ebe2]/70 font-serif leading-relaxed">
                "{idiom.example}"
              </p>
            </div>

            <div className="p-4 bg-white/2 border border-white/5 rounded-xl">
              <p className="text-[9px] text-white/20 uppercase tracking-[0.2em] mb-1">Kontekstual İzahat</p>
              <p className="text-[11px] text-[#f0ebe2]/40 leading-relaxed uppercase tracking-wider">
                {idiom.az}
              </p>
            </div>
          </div>

          <button onClick={() => setIdx(prev => prev + 1)} className="w-full mt-10 py-4 border border-[#378079] text-[#378079] text-[11px] font-black tracking-[0.4em] uppercase hover:bg-[#378079] hover:text-black transition-all active:scale-[0.98]">
            NÖVBƏTİ KART →
          </button>
        </div>

        <p className="mt-6 text-[9px] text-white/10 italic font-mono uppercase tracking-[0.2em]">
          * İngilis dili idiomları peşəkar kommunikasiyada kritik rol oynayır.
        </p>
      </div>
    </section>
  );
}

export default IdiomLearn;