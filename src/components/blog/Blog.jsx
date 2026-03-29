import React, { useState } from 'react';

function Blog() {
    const posts = [
        { id: 1, title: 'React 19-un Yeni Xüsusiyyətləri', category: 'Proqramlaşdırma', date: '15 Yan 2026', readTime: '5 dəq', author: 'Anar H.' },
        { id: 2, title: 'Dil Öyrənmənin 5 Effektiv Üsulu', category: 'Dillər', date: '12 Yan 2026', readTime: '8 dəq', author: 'Lalə Q.' },
        { id: 3, title: 'Gündəlik 30 Dəqiqə Oxumaqın Faydaları', category: 'Kitabxana', date: '10 Yan 2026', readTime: '4 dəq', author: 'Nigar Ə.' },
        { id: 4, title: 'Lofi Musiqi Konsentrasiyanı Artırır mı?', category: 'Musiqi', date: '8 Yan 2026', readTime: '6 dəq', author: 'Elvin C.' },
        { id: 5, title: 'Python vs JavaScript: 2026-cı ildə Hansını Seç?', category: 'Proqramlaşdırma', date: '5 Yan 2026', readTime: '10 dəq', author: 'Tural M.' },
        { id: 6, title: 'Pomodoro Texnikası ilə Verimlilik', category: 'Produktivlik', date: '2 Yan 2026', readTime: '7 dəq', author: 'Sevinc M.' },
    ];

    const [activeCategory, setActiveCategory] = useState('Hamısı');

    const uniqueCategories = posts.map(p => p.category);
    const categories = ['Hamısı', ...new Set(uniqueCategories)];

    const filteredPosts = activeCategory === 'Hamısı' ? posts : posts.filter(p => p.category === activeCategory);

    return (
        <section>
            <div className="px-8 md:px-16 py-16">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-[#378079]" />
                    <span className="text-[10px] tracking-[0.3em] text-[#378079] uppercase font-bold">
                        Yazılar
                    </span>
                </div>

                <h1 className="text-[#f0ebe2] font-black text-[2.4rem] md:text-[4rem] leading-[1.07] tracking-[-0.01em] mb-12 uppercase">
                    BLOG <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">YAZILARI</span>
                </h1>

                <div className="flex flex-wrap gap-3 mb-10">
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 text-[9px] font-black uppercase tracking-widest border transition-all rounded-sm ${activeCategory === cat ? 'bg-[#378079]/20 border-[#378079]/50 text-[#378079]' : 'border-white/10 text-[#f0ebe2]/30 hover:border-white/30'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map(post => (
                        <div key={post.id} className="group bg-[#06090f] border border-white/10 hover:border-[#378079]/30 p-6 transition-all cursor-pointer rounded-lg">
                            <div className="flex gap-2 mb-4">
                                <span className="bg-[#378079]/10 text-[#378079] border border-[#378079]/20 px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-full">
                                    {post.category}
                                </span>
                            </div>

                            <h3 className="text-[#f0ebe2] font-black text-lg uppercase tracking-tight leading-tight mb-4 group-hover:text-[#378079] transition-colors">
                                {post.title}
                            </h3>

                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                                <div>
                                    <p className="text-[8px] font-mono text-[#f0ebe2]/20">{post.author}</p>
                                    <p className="text-[8px] font-mono text-[#f0ebe2]/20">{post.date}</p>
                                </div>
                                <span className="text-[9px] text-[#378079] font-bold">
                                    {post.readTime} oxunuş
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-[#f0ebe2]/20 text-center py-20 font-mono text-xs uppercase tracking-widest">
                        Bu kateqoriyada yazı tapılmadı.
                    </div>
                )}
            </div>
        </section>
    );
}

export default Blog;