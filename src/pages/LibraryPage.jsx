import React, { useState, useEffect } from 'react';
import LibraryHeader from '../components/library/LibraryHeader';
import BookCard from '../components/library/BookCard';
import ReadingTracker from '../components/library/ReadingTracker';

const LibraryPage = () => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [activeView, setActiveView] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchBooks = async (q = "cyberpunk") => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(q)}&limit=12`);
      const data = await res.json();
      setBooks(data.docs.map(b => ({
        id: b.key.split('/').pop(),
        title: b.title,
        author: b.author_name?.[0] || "Unknown",
        cover: b.cover_i ? `https://covers.openlibrary.org/b/id/${b.cover_i}-L.jpg` : "https://via.placeholder.com/400x600/06090f/378079"
      })));
    } catch (e) { console.error(e); }
    setIsLoading(false);
  };

  useEffect(() => { fetchBooks(); }, []);

  const toggleFav = (id) => setFavorites(f => f.includes(id) ? f.filter(i => i !== id) : [...f, id]);

  const filteredBooks = activeView === "favorites" ? books.filter(b => favorites.includes(b.id)) : books;

  return (
    <div className="min-h-screen bg-[#06090f] text-[#f0ebe2] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <LibraryHeader 
          searchQuery={searchQuery} setSearchQuery={setSearchQuery}
          onSearch={fetchBooks} activeView={activeView}
          setActiveView={setActiveView} isLoading={isLoading}
        />

        {activeView === "rating" ? (
          <ReadingTracker books={books} />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-10">
            {filteredBooks.map(b => (
              <BookCard key={b.id} book={b} isFavorite={favorites.includes(b.id)} toggleFavorite={toggleFav} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LibraryPage;