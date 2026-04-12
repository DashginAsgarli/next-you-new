import React, { useState, useEffect } from 'react';
import { HiOutlineGlobeAlt } from "react-icons/hi2";

function GithubTrending() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://dev.to/api/articles?tag=github&top=7&per_page=6')
            .then(r => r.ok ? r.json() : Promise.reject())
            .then(data => {
                setRepos(data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <div className="px-8 md:px-16 py-10 md:py-16">
            <div className="flex items-center gap-2 mb-4">
                <HiOutlineGlobeAlt size={16} className="text-[#378079]" />
                <span className="text-[9px] font-black uppercase tracking-[3px] text-[#378079]">Kommuniti Xəbərləri</span>
            </div>

            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[3rem] lg:text-[4rem] leading-tight tracking-tighter mb-10 uppercase">
                İT <span className="text-transparent [-webkit-text-stroke:1px_#f0ebe2]">XƏBƏRLƏRİ</span>
            </h2>

            {error ? (
                <div className="text-white/20 font-mono text-xs border border-dashed border-white/10 p-10 text-center">
                    Xəbərləri yükləmək mümkün olmadı. Zəhmət olmasa internet bağlantınızı yoxlayın.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {loading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="h-44 bg-white/5 border border-white/5 animate-pulse rounded-lg p-5">
                                <div className="flex gap-2 mb-4">
                                    <div className="h-3 w-10 bg-white/10 rounded" />
                                    <div className="h-3 w-10 bg-white/10 rounded" />
                                </div>
                                <div className="h-4 w-full bg-white/10 mb-2 rounded" />
                                <div className="h-4 w-2/3 bg-white/10 rounded" />
                                <div className="mt-8 flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-white/10" />
                                    <div className="h-3 w-20 bg-white/10 rounded" />
                                </div>
                            </div>
                        ))
                    ) : (
                        repos.map((repo) => (
                            <a key={repo.id} href={repo.url} target="_blank" rel="noopener noreferrer" className="group relative block bg-[#0d1117] border border-white/5 hover:border-[#378079]/40 p-5 transition-all duration-500 rounded-lg overflow-hidden">
                                <div className="absolute -inset-1 bg-linear-to-r from-[#378079]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {repo.tag_list?.slice(0, 3).map((tag) => (
                                            <span key={tag} className="text-[7px] text-[#378079] font-black uppercase tracking-widest bg-[#378079]/5 px-2 py-0.5 border border-[#378079]/10 rounded-sm">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-[#f0ebe2]/80 font-bold text-sm leading-snug mb-6 group-hover:text-white transition-colors line-clamp-2 h-10">
                                        {repo.title}
                                    </h3>

                                    <div className="flex items-center justify-between text-[8px] font-mono text-white/20 pt-4 border-t border-white/5">
                                        <div className="flex items-center gap-2">
                                            <img src={repo.user.profile_image_90} className="w-5 h-5 rounded-full border border-white/10 filter grayscale group-hover:grayscale-0 transition-all" alt={repo.user.name} />
                                            <span className="group-hover:text-[#f0ebe2]/60 transition-colors uppercase">{repo.user?.name}</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <span className="flex items-center gap-1 group-hover:text-red-500/50 transition-colors">❤ {repo.public_reactions_count}</span>
                                            <span className="flex items-center gap-1 group-hover:text-[#378079] transition-colors">💬 {repo.comments_count}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default GithubTrending;