import React, { useState } from "react";
import { HiStar, HiSave, HiOutlineBookOpen, HiCheckCircle, HiBookmark } from "react-icons/hi";

function BookReadingTracker({ books, onUpdateBookStatus }) {
  const [statusMap, setStatusMap] = useState({});
  const [reviewMap, setReviewMap] = useState({});
  const [ratingMap, setRatingMap] = useState({});

  function updateStatus(id, status) {
    setStatusMap(prev => ({ ...prev, [id]: status }));
    onUpdateBookStatus?.(id, status);
  }

  function updateRating(id, stars) { setRatingMap(prev => ({ ...prev, [id]: stars })) }
  function updateReview(id, text) { setReviewMap(prev => ({ ...prev, [id]: text })) }

  const RatingStars = ({ bookId }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <HiStar 
          key={star} 
          className={`cursor-pointer transition-all duration-300 ${
            star <= (ratingMap[bookId] || 0) 
              ? 'text-[#378079] drop-shadow-[0_0_8px_rgba(55,128,121,0.6)]' 
              : 'text-white/10 hover:text-[#378079]/40'
          }`} 
          size={18}
          onClick={() => updateRating(bookId, star)}
        />
      ))}
    </div>
  );

  const statuses = [
    { key: "want-to-read", label: "İstək", icon: <HiBookmark size={14} /> },
    { key: "reading", label: "Oxuyuram", icon: <HiOutlineBookOpen size={14} /> },
    { key: "completed", label: "Bitdi", icon: <HiCheckCircle size={14} /> }
  ];

  return (
    <div className="relative py-12 px-4 md:px-0 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12 border-l-2 border-[#378079] pl-6">
        <h2 className="text-[#f0ebe2] font-black text-2xl md:text-3xl tracking-widest uppercase italic">
          KOLLEKSİYA <span className="text-[#378079]">ANALİZİ</span>
        </h2>
        <div className="h-px flex-1 bg-linear-to-r from-[#378079]/30 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {books.map(book => {
          const status = statusMap[book.id] || 'not-started';
          const review = reviewMap[book.id] || '';
          const rating = ratingMap[book.id] || 0;

          return (
            <div key={book.id} className="relative bg-[#0a0e14] border border-white/4 p-5 group hover:border-[#378079]/30 transition-all duration-500">
              
              <div className="absolute top-0 right-0 w-8 h-8 bg-[#378079]/5 rotate-45 translate-x-4 -translate-y-4 border-b border-[#378079]/20" />

              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <div className="w-full md:w-32">
                  <div className="relative aspect-[3/3.6] border border-white/5 overflow-hidden">
                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0e14] to-transparent opacity-60" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <span className="text-[8px] tracking-[0.4em] text-[#378079] font-black uppercase">{book.author}</span>
                    <h3 className="text-[#f0ebe2] text-lg font-bold tracking-tight uppercase leading-none mt-1">{book.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {statuses.map(s => (
                      <button
                        key={s.key}
                        onClick={() => updateStatus(book.id, s.key)}
                        className={`flex items-center gap-2 px-3 py-1.5 text-[9px] font-black tracking-widest uppercase transition-all duration-300 border ${
                          status === s.key 
                            ? 'bg-[#378079] border-[#378079] text-[#06090f]' 
                            : 'bg-transparent border-white/5 text-white/30 hover:border-[#378079]/40 hover:text-white'
                        }`}
                      >
                        {s.icon} {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-white/3 pt-6">
                
                <div className="md:col-span-4 flex flex-col gap-3">
                  <span className="text-[7px] font-mono text-white/20 uppercase tracking-[3px]">Sistem Reytinqi</span>
                  <div className="flex items-center gap-3">
                    <RatingStars bookId={book.id} />
                    <span className="text-[#378079] font-mono text-xs font-bold pt-1">{rating}/5</span>
                  </div>
                </div>

                <div className="md:col-span-8 flex flex-col gap-3">
                  <span className="text-[7px] font-mono text-white/20 uppercase tracking-[3px]">Fərdi Qeydlər</span>
                  <div className="relative">
                    <textarea
                      placeholder="ANALİZİ DAXİL EDİN..."
                      value={review}
                      onChange={e => updateReview(book.id, e.target.value)}
                      className="w-full bg-[#06090f] border border-white/5 p-3 text-[10px] text-white/70 focus:outline-none focus:border-[#378079]/40 min-h-20 tracking-wide placeholder:text-white/5 uppercase font-medium"
                    />
                    <button 
                      onClick={() => alert('Məlumat bazaya yazıldı!')}
                      className="absolute bottom-3 right-3 p-2 bg-[#378079]/10 text-[#378079] hover:bg-[#378079] hover:text-[#06090f] transition-all rounded-sm"
                    >
                      <HiSave size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {status === 'completed' && (
                <div className="mt-4 bg-[#378079]/5 border-l border-[#378079] py-2 px-4 flex justify-between items-center animate-[fadeIn_0.5s_ease_both]">
                  <span className="text-[7px] font-mono text-[#378079] tracking-[2px] uppercase">Status: Arxivə Göndərildi</span>
                  <span className="text-[7px] font-mono text-white/20 uppercase italic">Timestamp: {new Date().toLocaleDateString('az')}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookReadingTracker;