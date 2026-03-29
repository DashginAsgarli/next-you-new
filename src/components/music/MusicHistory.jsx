import { useState } from 'react';

function MusicHistory() {
    const eras = [
        {
            period: '1920s–40s',
            name: 'Jazz & Blues dövrü',
            color: '#9a7a3a',
            artists: 'Louis Armstrong, Duke Ellington, Robert Johnson',
            desc: 'Amerika Cənubundan doğan blues və şəhər jazzı dünya musiqisini kökündən dəyişdirdi.',
            genres: ['Jazz', 'Blues', 'Swing'],
            playlist: [
                { title: "What a Wonderful World", artist: "Louis Armstrong", year: 1967, fact: "Əslində bu mahnı sülh üçün yazılmışdı." },
                { title: "Take the A Train", artist: "Duke Ellington", year: 1941, fact: "Jazzın ən məşhur standartlarından biridir." },
                { title: "Cross Road Blues", artist: "Robert Johnson", year: 1936, fact: "Blues əfsanəsinin təməl daşıdır." }
            ]
        },
        {
            period: '1950s–60s',
            name: 'Rock & Roll inqilabı',
            color: '#9a3a3a',
            artists: 'Elvis Presley, Chuck Berry, The Beatles',
            desc: 'Gənclər mədəniyyəti doğuldu. Rock & Roll siyasi, sosial dəyişikliklərin səsiydi.',
            genres: ['Rock & Roll', 'Soul', 'Motown'],
            playlist: [
                { title: "Johnny B. Goode", artist: "Chuck Berry", year: 1958, fact: "Kosmosa göndərilən qızıl valda bu mahnı da var." },
                { title: "Hey Jude", artist: "The Beatles", year: 1968, fact: "Paul McCartney tərəfindən John Lennonun oğlu üçün yazılıb." },
                { title: "Hound Dog", artist: "Elvis Presley", year: 1956, fact: "Rock and Roll-un ən ikonik səslərindən biridir." }
            ]
        },
        {
            period: '1970s',
            name: 'Funk, Disco & Punk',
            color: '#7a3a9a',
            artists: 'James Brown, Bee Gees, Sex Pistols',
            desc: 'Üç fərqli dünya paralel inkişaf etdi — dans məkanları və küçə üsyanı.',
            genres: ['Funk', 'Disco', 'Punk', 'Progressive Rock'],
            playlist: [
                { title: "Sex Machine", artist: "James Brown", year: 1970, fact: "Funk musiqisinin ritmik inqilabıdır." },
                { title: "Stayin' Alive", artist: "Bee Gees", year: 1977, fact: "Disco dövrünün simvolu sayılır." },
                { title: "Anarchy in the U.K.", artist: "Sex Pistols", year: 1976, fact: "Punk hərəkatının ən böyük manifestidir." }
            ]
        },
        {
            period: '1980s',
            name: 'Sintetik dalğa',
            color: '#3a5a9a',
            artists: 'Michael Jackson, Prince, New Order',
            desc: 'Synthesizer və drum machine musiqinin səsinə tamamilə yeni bir rəng qatdı.',
            genres: ['New Wave', 'Synth-pop', 'Hip-Hop', 'Heavy Metal'],
            playlist: [
                { title: "Billie Jean", artist: "Michael Jackson", year: 1982, fact: "MTV-də yayımlanan ilk qara dərili sənətçi klipi idi." },
                { title: "Purple Rain", artist: "Prince", year: 1984, fact: "Sənətçinin şah əsəridir." },
                { title: "Blue Monday", artist: "New Order", year: 1983, fact: "Ən çox satılan 12 düymlük vinil plastinkasıdır." }
            ]
        },
        {
            period: '1990s',
            name: 'Qrunge & Elektronika',
            color: '#3a7a5a',
            artists: 'Nirvana, Daft Punk, Tupac, Radiohead',
            desc: 'Alternativ rok mainstream-i fəth etdi, eyni zamanda elektronika öz rəqsini tapdı.',
            genres: ['Grunge', 'Techno', 'R&B', 'Britpop'],
            playlist: [
                { title: "Smells Like Teen Spirit", artist: "Nirvana", year: 1991, fact: "X nəslinin himni sayılır." },
                { title: "Around the World", artist: "Daft Punk", year: 1997, fact: "Mahnının sözləri cəmi 144 dəfə təkrar olunur." },
                { title: "California Love", artist: "2Pac", year: 1995, fact: "Hip-hop dünyasının ən böyük himnlərindəndir." }
            ]
        },
        {
            period: '2000s–10s',
            name: 'Digital çevriliş',
            color: '#378079',
            artists: 'Kanye West, Amy Winehouse, Adele, Skrillex',
            desc: 'Streaming platformalar musiqinin paylaşımını demokratikləşdirdi.',
            genres: ['Indie', 'EDM', 'K-Pop', 'Trap'],
            playlist: [
                { title: "Rehab", artist: "Amy Winehouse", year: 2006, fact: "Müasir soul musiqisinin yenidən doğuşudur." },
                { title: "Rolling in the Deep", artist: "Adele", year: 2010, fact: "Böyük rəqəmsal satış rekordları qırıb." },
                { title: "Stronger", artist: "Kanye West", year: 2007, fact: "Daft Punk-dan nümunə götürülərək hazırlanıb." }
            ]
        },
        {
            period: '2020s',
            name: 'Hiperlink dövr',
            color: '#608090',
            artists: 'Bad Bunny, Billie Eilish, The Weeknd, Burna Boy',
            desc: 'Janr sınırları tamamilə silindi. Beynəlxalq hitlər anında dünyaya yayıldı.',
            genres: ['Hyperpop', 'Afrobeats', 'Bedroom Pop', 'Lo-fi'],
            playlist: [
                { title: "Blinding Lights", artist: "The Weeknd", year: 2019, fact: "Billboard tarixində ən uzun müddət Top 10-da qalan mahnıdır." },
                { title: "Bad Guy", artist: "Billie Eilish", year: 2019, fact: "Yataq otağında (bedroom studio) yazılmışdır." },
                { title: "Dakiti", artist: "Bad Bunny", year: 2020, fact: "İspan dilli musiqinin qlobal gücünü göstərdi." }
            ]
        },
    ];
    const [active, setActive] = useState(0);
    const [selectedTrack, setSelectedTrack] = useState(null);
    const era = eras[active];

    return (
        <section className="px-8 md:px-16 py-10 border-t border-white/5">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#378079]" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Tarix</span>
            </div>
            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] leading-tight tracking-tighter uppercase mb-10">
                MUSİQİ <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">TARİXİ</span>
            </h2>

            <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
                {eras.map((e, i) => (
                    <button key={i} onClick={() => { setActive(i); setSelectedTrack(null); }}
                        className="shrink-0 px-4 py-3 border transition-all text-left"
                        style={{
                            borderColor: active === i ? e.color : 'rgba(255,255,255,0.08)',
                            background: active === i ? e.color + '18' : 'transparent',
                        }}
                    >
                        <div
                            className="text-[10px] font-black tracking-[0.2em] uppercase mb-1"
                            style={{ color: active === i ? e.color : 'rgba(240,235,226,0.3)' }}
                        >
                            {e.period}
                        </div>
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div
                    className="bg-[#0b0f17] rounded-2xl p-8 border transition-all"
                    style={{ borderColor: era.color + '40' }}
                >
                    <div
                        className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2"
                        style={{ color: era.color }}
                    >
                        {era.period}
                    </div>
                    <h3 className="text-[#f0ebe2] font-black text-xl md:text-2xl uppercase tracking-tight mb-4">{era.name}</h3>
                    <p className="text-[13px] text-[#f0ebe2]/50 leading-relaxed mb-6">{era.desc}</p>

                    <div className="mt-8 border-t border-white/5 pt-6">
                        <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/20 mb-4">Önə Çıxan Playlist</p>
                        <div className="space-y-2">
                            {era.playlist.map((track, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedTrack(track)}
                                    className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all flex justify-between items-center group"
                                >
                                    <div>
                                        <p className="text-[12px] font-bold text-[#f0ebe2]">{track.title}</p>
                                        <p className="text-[10px] text-white/40">{track.artist}</p>
                                    </div>
                                    <span className="text-[9px] tracking-widest text-white/20 group-hover:text-[#378079]">FAKT</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {selectedTrack ? (
                        <div className="bg-[#0b0f17] border border-[#378079]/30 rounded-2xl p-6 transition-all">
                            <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#378079] mb-3">Mahnı Haqqında</p>
                            <h4 className="text-[#f0ebe2] font-bold mb-1">{selectedTrack.title}</h4>
                            <p className="text-[11px] text-white/40 mb-4">{selectedTrack.year} — {selectedTrack.artist}</p>
                            <p className="text-[13px] text-[#f0ebe2]/70 italic">"{selectedTrack.fact}"</p>
                        </div>
                    ) : (
                        <div className="p-6 border border-dashed border-white/10 rounded-2xl flex items-center justify-center h-32">
                            <p className="text-[10px] text-white/20 uppercase tracking-widest">Məlumat üçün playlist-dən mahnı seçin</p>
                        </div>
                    )}

                    <div>
                        <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/20 mb-4">Janrlar</p>
                        <div className="space-y-3">
                            {era.genres.map((g) => (
                                <div
                                    key={g}
                                    className="flex items-center gap-4 p-4 bg-[#0b0f17] border border-white/5 rounded-xl"
                                >
                                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: era.color }} />
                                    <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#f0ebe2]/70">{g}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-0 mt-8 overflow-x-auto">
                {eras.map((e, i) => (
                    <div key={i} className="flex items-center">
                        <button
                            onClick={() => {
                                setActive(i);
                                setSelectedTrack(null);
                            }}
                            className="w-3 h-3 rounded-full transition-all shrink-0"
                            style={{
                                background: active === i ? e.color : 'rgba(255,255,255,0.1)',
                                transform: active === i ? 'scale(1.5)' : 'scale(1)',
                            }}
                        />
                        {i < eras.length - 1 && (
                            <div className="w-12 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MusicHistory;