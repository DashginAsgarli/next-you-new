import { useState } from 'react';

import { MdOutlineSupervisedUserCircle } from "react-icons/md";
function AuthorBio() {

    const popular = ['Fyodor Dostoevsky', 'Leo Tolstoy', 'Franz Kafka', 'Gabriel Garcia Marquez', 'Haruki Murakami', 'George Orwell'];

    const [search, setSearch] = useState('');
    const [author, setAuthor] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function fetchAuthor(name) {
        setLoading(true);
        setError('');
        setAuthor(null);

        fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(name))
            .then(r => {
                if (!r.ok) throw new Error('Tapılmadı');
                return r.json();
            })
            .then(d => {
                setAuthor({
                    name: d.title,
                    extract: d.extract,
                    thumbnail: d.thumbnail ? d.thumbnail.source : null,
                    url: d.content_urls ? d.content_urls.desktop.page : null,
                });
                setLoading(false);
            })
            .catch(() => {
                setError('Müəllif tapılmadı. İngilis adını yaz.');
                setLoading(false);
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (search.trim()) fetchAuthor(search.trim());
    }

    return (
        <section className="px-8 md:px-16 py-10 md:py-16">
            <div className="flex items-center gap-2 mb-4">
                <MdOutlineSupervisedUserCircle className="text-[#378079] text-xl" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Bioqrafiya</span>
            </div>
            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-tight tracking-tighter uppercase mb-8">
                MÜƏLLİF <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">BİOQRAFİYASI</span>
            </h2>

            <form onSubmit={handleSubmit} className="flex gap-3 mb-4 max-w-xl">
                <input type="text" value={search} onChange={(e) => { setSearch(e.target.value); }} placeholder="MÜƏLLİF ADI (İNGİLİSCƏ)..." className="custom-input flex-1" />
                <button type="submit" disabled={loading} className="beveled-box px-6 py-3 border border-white text-[10px] font-black tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all disabled:opacity-40">
                    {loading ? '...' : 'AXTAR'}
                </button>
            </form>

            <div className="flex flex-wrap gap-2 mb-8">
                {popular.map(p => (
                    <button key={p} onClick={() => { setSearch(p); fetchAuthor(p); }} className="px-3 py-1.5 text-[9px] font-bold tracking-[0.15em] uppercase border border-white/10 text-white/30 hover:border-[#378079]/40 hover:text-[#378079] transition-all rounded-lg">
                        {p}
                    </button>
                ))}
            </div>

            {error && (
                <div className="max-w-xl bg-red-500/5 border border-red-500/20 text-red-400 p-4 rounded-xl mb-6 text-[12px]">
                    {error}
                </div>
            )}

            {loading && (
                <div className="text-center py-12">
                    <div className="text-[10px] tracking-[0.4em] uppercase text-[#378079] animate-pulse">Axtarılır...</div>
                </div>
            )}

            {author && (
                <div className="max-w-3xl bg-[#0b0f17] border border-white/5 rounded-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-0">
                        {author.thumbnail && (
                            <div className="md:w-48 shrink-0">
                                <img src={author.thumbnail} alt={author.name} className="w-full h-full object-cover max-h-64 md:max-h-none" />
                            </div>
                        )}
                        <div className="p-6 md:p-8">
                            <h3 className="text-[#f0ebe2] font-black text-xl md:text-2xl uppercase tracking-tight mb-2">{author.name}</h3>
                            <div className="w-8 h-px bg-[#378079] mb-4" />
                            <p className="text-[13px] text-[#f0ebe2]/50 leading-relaxed">    {author.extract && author.extract.length > 400 ? author.extract.slice(0, 400) + '...' : author.extract}</p>
                            {author.url && (
                                <a href={author.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#378079] hover:text-[#4dbdb1] transition-colors">
                                    Wikipedia-da daha ətraflı →
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default AuthorBio;