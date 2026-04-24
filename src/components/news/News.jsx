import React, { useState, useEffect } from 'react';

function News() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('https://dev.to/api/articles?tag=programming&per_page=12&state=rising')
    //         .then(res => res.json())
    //         .then(data => {
    //             setArticles(data);
    //             setLoading(false);
    //         })
    //         .catch(err => {
    //             console.error("Xəta:", err);
    //             setLoading(false);
    //         });
    // }, []);

    return (
        <section>
            <div className="px-8 md:px-16 py-16">

                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-[#378079]" />
                    <span className="text-[10px] tracking-[0.3em] text-[#378079] uppercase font-bold">
                        Canlı Akış
                    </span>
                </div>

                <h1 className="text-[2.4rem] md:text-[4rem] font-black leading-[1.07] tracking-tighter mb-12 uppercase">
                    NEXTYOU <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">XƏBƏRLƏR</span>
                </h1>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map(n => (
                            <div key={n} className="h-64 bg-white/5 animate-pulse border border-white/5 rounded-lg" />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map(art => (
                            <a key={art.id} href={art.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col h-full bg-[#06090f] border border-white/10 hover:border-[#378079]/40 transition-all p-5 rounded-lg">
                                {art.cover_image && (
                                    <div className="mb-4 overflow-hidden rounded-md h-40">
                                        <img src={art.cover_image} alt="" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {art.tag_list?.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-[9px] font-mono text-[#378079] bg-[#378079]/5 px-2 py-0.5 border border-[#378079]/20">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="font-bold text-base leading-snug mb-6 group-hover:text-[#378079] transition-colors line-clamp-2">
                                    {art.title}
                                </h3>

                                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/20">
                                    <span className="font-bold text-[#378079]/80">{art.user.name}</span>
                                    <div className="flex gap-3">
                                        <span>❤️ {art.public_reactions_count}</span>
                                        <span>💬 {art.comments_count}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default News;