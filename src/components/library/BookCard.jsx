import React from 'react';
import { HiOutlineHeart, HiHeart } from "react-icons/hi";

const BookCard = ({ book, isFavorite, toggleFavorite }) => {
  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    currentTarget.style.setProperty("--mouse-x", `${clientX - left}px`);
    currentTarget.style.setProperty("--mouse-y", `${clientY - top}px`);
  };

  return (
    <div onMouseMove={handleMouseMove} className="group relative bg-[#0a0e14] border border-white/5 hover:border-[#378079]/40 transition-all duration-500 overflow-hidden             [background:radial-gradient(300px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(55,128,121,0.05),transparent_80%)]">
      <div className="absolute top-0 right-0 w-6 h-6 bg-[#378079]/10 rotate-45 translate-x-3 -translate-y-3 border-b border-[#378079]/20 z-20" />

      <div className="relative z-10 p-2.5">
        <div className="relative aspect-[3/3.6] overflow-hidden border border-white/5 bg-black shadow-2xl">

          <img src={book.cover} alt={book.title} className="w-full h-full object-cover grayscale opacity-40 transition-all duration-700" />

          <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500             mask-[radial-gradient(120px_circle_at_var(--mouse-x)_var(--mouse-y),black_30%,transparent_100%)]             [-webkit-mask-image:radial-gradient(120px_circle_at_var(--mouse-x)_var(--mouse-y),black_30%,transparent_100%)]">
            <img src={book.cover} alt="" className="w-full h-full object-cover scale-105" />
          </div>

          <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.005),rgba(0,0,255,0.01))] bg-size-[100%_2px,3px_100%]" />

          <button onClick={(e) => { e.stopPropagation(); toggleFavorite(book.id); }} className={`absolute top-2 left-2 p-2 backdrop-blur-xl border transition-all duration-300 z-30   ${isFavorite ? 'bg-[#378079] border-[#378079] text-[#06090f] shadow-[0_0_10px_#378079]' : 'bg-white/5 border-white/10 text-white/30 hover:text-white'}`}>
            {isFavorite ? <HiHeart size={14} /> : <HiOutlineHeart size={14} />}
          </button>

          <div className="absolute bottom-0 right-0 px-2 py-0.5 bg-[#06090f]/90 backdrop-blur-md border-t border-l border-[#378079]/30 z-20">
            <span className="text-[7px] font-mono tracking-[1px] text-[#378079] font-bold uppercase">
              {`ID-${String(book.id).padStart(3, '0')}`}
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-1.5 px-1">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-[#378079] animate-pulse" />
            <span className="text-[8px] tracking-[0.3em] text-[#378079] font-black uppercase truncate">
              {book.author}
            </span>
          </div>

          <h3 className="text-[#f0ebe2] text-[12px] font-bold tracking-wide uppercase leading-tight line-clamp-1 group-hover:text-white transition-colors">
            {book.title}
          </h3>

          <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between relative">
            <div className="absolute top-0 left-0 w-0 h-px bg-[#378079] group-hover:w-full transition-all duration-700" />

            <div className="flex flex-col">
              <span className="text-[6px] text-white/20 uppercase tracking-[2px]">Status</span>
              <span className="text-[9px] font-mono text-white/40 italic">Online_v9</span>
            </div>

            <button className="group/btn relative px-3 py-1 border border-white/10 hover:border-[#378079]/50 transition-all duration-300">
              <span className="relative z-10 text-[9px] font-black tracking-[2px] text-white/30 group-hover/btn:text-[#378079] uppercase">
                READ
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#378079]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </div>
  );
};

export default BookCard;