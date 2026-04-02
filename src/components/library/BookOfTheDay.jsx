import React, { useState, useEffect } from 'react';
import { HiOutlineSparkles, HiOutlineBookmark } from 'react-icons/hi';

function BookOfTheDay() {
    const [book, setBook] = useState(null);

    useEffect(() => {
        const queries = ['philosophy', 'science', 'history', 'technology', 'psychology', 'art'];
        const q = queries[new Date().getDate() % queries.length];

        fetch(`https://openlibrary.org/search.json?q=${q}&limit=10&fields=title,author_name,cover_i`)
            .then(res => res.json())
            .then(data => {
                const validBook = data.docs.find(b => b.cover_i);
                if (validBook) {
                    setBook({ title: validBook.title, author: validBook.author_name?.[0] || 'Naməlum Müəllif', cover: `https://covers.openlibrary.org/b/id/${validBook.cover_i}-L.jpg`, });
                }
            })
            .catch(err => console.error("Kitab gətirilərkən xəta yarandı:", err));
    }, []);

    if (!book) return null;

    return (
        <div className="px-8 md:px-16 py-10 md:py-16">
            <div className="flex items-center gap-2 mb-6">
                <HiOutlineSparkles size={16} className="text-[#378079]" />
                <span className="text-[9px] font-black uppercase tracking-[3px] text-[#378079]">Günün Kitabı</span>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8 max-w-3xl">
                <div className="relative shrink-0">
                    <img src={book.cover} alt={book.title} className="w-32 md:w-40 aspect-2/3 object-cover border border-white/10" />
                    <div className="absolute -bottom-3 -right-3 bg-[#378079] text-[#06090f] text-[8px] font-black px-2 py-1 uppercase tracking-wider">
                        Bugün
                    </div>
                </div>

                <div className="pt-2">
                    <p className="text-[10px] text-[#378079] font-black uppercase tracking-[3px] mb-2">
                        {book.author}
                    </p>
                    <h3 className="text-[#f0ebe2] font-black text-2xl md:text-3xl uppercase tracking-tighter leading-tight mb-4">
                        {book.title}
                    </h3>
                    <p className="text-[13px] text-[#f0ebe2]/40 leading-relaxed mb-6">
                        Bu kitab bu gün üçün seçilmişdir. Hər gün yeni bir kitabla tanış ol, bilik dünyanı genişlət.
                    </p>
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#378079] text-[#06090f] font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all active:scale-95">
                        <HiOutlineBookmark size={14} /> Siyahıya Əlavə Et
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookOfTheDay;