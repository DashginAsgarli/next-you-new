import React, { useState, useEffect } from 'react';
import LibraryHeader from "./LibraryHeader";
import BookCard from "./BookCard";
import ReadingTracker from "./ReadingTracker";

function Library() {
    const [books, setBooks] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [activeView, setActiveView] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchBooks = (q = "cyberpunk") => {
        setIsLoading(true);

        fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(q)}&limit=12`)
            .then(res => res.json())
            .then(data => {
                const formattedBooks = data.docs.map(b => ({
                    id: b.key.split('/').pop(),
                    title: b.title,
                    author: b.author_name?.[0] || "Unknown",
                    cover: b.cover_i
                        ? `https://covers.openlibrary.org/b/id/${b.cover_i}-L.jpg`
                        : "https://via.placeholder.com/400x600/06090f/378079"
                }));
                setBooks(formattedBooks);
                setIsLoading(false);
            })
            .catch(e => {
                console.error("Xəta baş verdi:", e);
                setIsLoading(false);
            });
    };

    useEffect(() => fetchBooks(), []);

    const toggleFav = (id) => setFavorites(f => f.includes(id) ? f.filter(i => i !== id) : [...f, id]);
    const filteredBooks = activeView === "favorites" ? books.filter(b => favorites.includes(b.id)) : books;

    return (
        <div className="text-[#f0ebe2] px-8 md:px-16 py-6">
            <div>
                <LibraryHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={fetchBooks} activeView={activeView} setActiveView={setActiveView} isLoading={isLoading} />
                {activeView === "rating" ? (<ReadingTracker books={books} />) : (<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-10">        {filteredBooks.map(b => (<BookCard key={b.id} book={b} isFavorite={favorites.includes(b.id)} toggleFavorite={toggleFav} />))}    </div>)}
            </div>
        </div>
    );
};

export default Library;