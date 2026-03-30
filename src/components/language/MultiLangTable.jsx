import React, { useState } from 'react';

const wordComparisons = [
  { english: 'Love', az: 'Sevgi', tr: 'Sevgi', de: 'Liebe', fr: 'Amour', es: 'Amor', it: 'Amore', ru: 'Любовь' },
  { english: 'Water', az: 'Su', tr: 'Su', de: 'Wasser', fr: 'Eau', es: 'Agua', it: 'Acqua', ru: 'Вода' },
  { english: 'Book', az: 'Kitab', tr: 'Kitap', de: 'Buch', fr: 'Livre', es: 'Libro', it: 'Libro', ru: 'Книга' },
  { english: 'House', az: 'Ev', tr: 'Ev', de: 'Haus', fr: 'Maison', es: 'Casa', it: 'Casa', ru: 'Дом' },
  { english: 'Day', az: 'Gün', tr: 'Gün', de: 'Tag', fr: 'Jour', es: 'Día', it: 'Giorno', ru: 'День' },
  { english: 'Friend', az: 'Dost', tr: 'Arkadaş', de: 'Freund', fr: 'Ami', es: 'Amigo', it: 'Amico', ru: 'Друг' },
  { english: 'Life', az: 'Həyat', tr: 'Hayat', de: 'Leben', fr: 'Vie', es: 'Vida', it: 'Vita', ru: 'Жişn' },
  { english: 'Sky', az: 'Səma', tr: 'Gökyüzü', de: 'Himmel', fr: 'Ciel', es: 'Cielo', it: 'Cielo', ru: 'Небо' },
  { english: 'Moon', az: 'Ay', tr: 'Ay', de: 'Mond', fr: 'Lune', es: 'Luna', it: 'Luna', ru: 'Луна' },
  { english: 'Sun', az: 'Günəş', tr: 'Güneş', de: 'Sonne', fr: 'Soleil', es: 'Sol', it: 'Sole', ru: 'Солнце' },
  { english: 'Heart', az: 'Ürək', tr: 'Kalp', de: 'Herz', fr: 'Cœur', es: 'Corazón', it: 'Cuore', ru: 'Сердце' },
  { english: 'Sea', az: 'Dəniz', tr: 'Deniz', de: 'Meer', fr: 'Mer', es: 'Mar', it: 'Mare', ru: 'Море' },
];

export function MultiLangTable() {
  const [searchTerm, setSearchTerm] = useState('');

  // Yazılan sözə görə bazadan axtarış edirik (böyük/kiçik hərf həssaslığı olmadan)
  const activeWord = wordComparisons.find(
    (item) => item.english.toLowerCase() === searchTerm.toLowerCase()
  );

  const languageList = [
    { code: 'az', name: '🇦🇿 AZ' },
    { code: 'tr', name: '🇹🇷 TR' },
    { code: 'de', name: '🇩🇪 DE' },
    { code: 'fr', name: '🇫🇷 FR' },
    { code: 'es', name: '🇪🇸 ES' },
    { code: 'it', name: '🇮🇹 IT' },
    { code: 'ru', name: '🇷🇺 RU' },
  ];

  return (
    <section className="px-8 md:px-16 py-16 border-t border-white/5 bg-[#06090f] min-h-[500px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-px bg-[#378079]" />
        <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Linguistic Search</span>
      </div>

      <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] leading-tight tracking-tighter uppercase mb-10">
        WORD <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">EXPLORER</span>
      </h2>

      {/* Search Input Section */}
      <div className="max-w-md mb-12">
        <input
          type="text"
          placeholder="Type a word (e.g. Love, Sea, Book)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#0b0f17] border border-white/10 rounded-2xl px-6 py-4 text-[#f0ebe2] placeholder:text-white/20 focus:outline-none focus:border-[#378079] transition-all duration-300 font-medium"
        />
      </div>

      {/* Results Section */}
      {activeWord ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 animate-in fade-in duration-500">
          {languageList.map((lang) => (
            <div 
              key={lang.code} 
              className="group bg-[#0b0f17] border border-[#378079]/30 rounded-2xl p-6 text-center bg-gradient-to-b from-[#378079]/5 to-transparent transition-all duration-500"
            >
              <p className="text-[9px] text-[#378079] mb-3 uppercase tracking-widest font-bold">
                {lang.name}
              </p>
              <p className="text-lg font-black text-[#f0ebe2] tracking-tight">
                {activeWord[lang.code]}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-10 border border-dashed border-white/5 rounded-3xl text-center">
          <p className="text-white/20 text-xs uppercase tracking-widest">
            {searchTerm.length > 0 
              ? `"${searchTerm}" not found in our database` 
              : "Start typing to see comparisons"}
          </p>
        </div>
      )}

      {/* Quick Suggestions Tags */}
      <div className="mt-10 flex flex-wrap gap-3">
        <span className="text-[9px] text-white/20 uppercase font-bold self-center">Try:</span>
        {['Love', 'Sea', 'Moon', 'Water'].map((tag) => (
          <button
            key={tag}
            onClick={() => setSearchTerm(tag)}
            className="text-[9px] text-white/40 hover:text-[#378079] transition-colors uppercase tracking-widest font-bold"
          >
            #{tag}
          </button>
        ))}
      </div>
    </section>
  );
}

export default MultiLangTable;