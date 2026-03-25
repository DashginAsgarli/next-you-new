import React from 'react';
import { HiOutlineHeart, HiHeart } from "react-icons/hi";

const BookCard = ({ book, isFavorite, toggleFavorite }) => {
  return (
    <div className="group relative bg-[#0a0e14] border border-white/4 hover:border-[#378079]/40 transition-all duration-500 overflow-hidden">
      
      <div className="absolute top-0 right-0 w-6 h-6 bg-[#378079]/10 rotate-45 translate-x-3 -translate-y-3 border-b border-[#378079]/20 z-20" />

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] transition-opacity bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="relative z-10 p-2.5">
        
        <div className="relative aspect-[3/3.6] overflow-hidden border border-white/5 bg-black shadow-2xl">
          
          <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-size-[100%_2px,3px_100%]" />

          <img 
            src={book.cover} 
            alt={book.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.2s] ease-in-out opacity-80 group-hover:opacity-100" 
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(book.id);
            }}
            className={`absolute top-2 left-2 p-2 backdrop-blur-xl border transition-all duration-300 z-30 ${
              isFavorite 
                ? 'bg-[#378079] border-[#378079] text-[#06090f] shadow-[0_0_10px_#378079]' 
                : 'bg-white/3 border-white/10 text-white/30 hover:text-white'
            }`}
          >
            {isFavorite ? <HiHeart size={12} /> : <HiOutlineHeart size={12} />}
          </button>

          <div className="absolute bottom-0 right-0 px-2 py-0.5 bg-[#06090f]/80 backdrop-blur-md border-t border-l border-white/10 z-20">
            <span className="text-[6px] font-mono tracking-[2px] text-[#378079] font-bold uppercase">
              {book.id ? `ID-${book.id.toString().padStart(3, '0')}` : 'DATA_01'}
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-1.5 px-1">
          
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-[#378079]" />
            <span className="text-[7px] tracking-[0.4em] text-[#378079] font-black uppercase line-clamp-1">
              {book.author}
            </span>
          </div>

          <h3 className="text-[#f0ebe2] text-[11px] font-bold tracking-wide uppercase leading-tight line-clamp-1 group-hover:text-white transition-colors">
            {book.title}
          </h3>
          
          <div className="mt-3 pt-3 border-t border-white/8 flex items-center justify-between relative">
             <div className="absolute top-0 left-0 w-0 h-px bg-[#378079] group-hover:w-1/2 transition-all duration-500" />

             <div className="flex flex-col">
                <span className="text-[5px] text-white/10 uppercase tracking-[3px] mb-0.5">Category</span>
                <span className="text-[8px] font-mono text-white/30 uppercase tracking-tighter italic">Source: Lib_v2</span>
             </div>

             <button className="group/btn relative px-3 py-1.5 overflow-hidden border border-white/5 hover:border-[#378079]/50 transition-all duration-300">
                <span className="relative z-10 text-[8px] font-black tracking-[3px] text-white/40 group-hover/btn:text-[#378079] uppercase italic">
                  Aç
                </span>
                <div className="absolute inset-0 bg-[#378079]/5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
             </button>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#378079]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
};

export default BookCard;