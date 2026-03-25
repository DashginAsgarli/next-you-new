import React, { useState, useEffect, useRef, useCallback } from "react";
import { HiPlay, HiPause, HiFastForward, HiRewind, HiHeart, HiOutlineHeart, HiMusicNote, HiClock, HiLightningBolt } from "react-icons/hi";
import MusicHeader from "./MusicHeader";

function Music() {
    const [songs, setSongs] = useState([]);
    const [allSongs, setAllSongs] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [likedSongs, setLikedSongs] = useState([]);
    const [history, setHistory] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("all");
    const [isLoading, setIsLoading] = useState(false);

    const audioRef = useRef(new Audio());

    const randomGenres = ["techno", "lofi", "synthwave", "jazz", "phonk", "funk"];

    const fetchSongs = useCallback((search = null) => {
        setIsLoading(true);
        const isUserSearching = search && search.trim() !== "";
        const limit = isUserSearching ? 50 : 12;
        const finalSearch = search || randomGenres[Math.floor(Math.random() * randomGenres.length)];

        fetch(`https://itunes.apple.com/search?term=${finalSearch}&entity=song&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                const formattedSongs = data.results.map((song, index) => ({
                    id: song.trackId || index,
                    title: song.trackName || "Unknown Track",
                    artist: song.artistName || "Unknown Artist",
                    imageUrl: song.artworkUrl100?.replace('100x100', '600x600'),
                    audioUrl: song.previewUrl || "",
                    duration: Math.floor(song.trackTimeMillis / 1000) || 180,
                }));
                setAllSongs(formattedSongs);
                if (activeTab === "all") setSongs(formattedSongs);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [activeTab]);

    const addToHistory = (song) => {
        if (!song || !song.id) return;
        const savedHistory = JSON.parse(localStorage.getItem("music-history") || "[]");
        const filtered = savedHistory.filter(s => s.id !== song.id);
        const updated = [song, ...filtered].slice(0, 15);
        setHistory(updated);
        localStorage.setItem("music-history", JSON.stringify(updated));
    };

    const selectSong = useCallback((index) => {
        if (songs.length === 0) return;
        const safeIndex = (index + songs.length) % songs.length;
        const song = songs[safeIndex];
        setCurrentIndex(safeIndex);

        if (song.audioUrl) {
            audioRef.current.src = song.audioUrl;
            audioRef.current.play().catch(err => console.log("Playback error:", err));
            setIsPlaying(true);
            addToHistory(song);
        }
    }, [songs]);

    const togglePlay = () => {
        if (isPlaying) audioRef.current.pause();
        else audioRef.current.play().catch(err => console.log(err));
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const savedLikes = localStorage.getItem("music-likedSongs");
        const savedHistory = localStorage.getItem("music-history");
        if (savedLikes) setLikedSongs(JSON.parse(savedLikes));
        if (savedHistory) setHistory(JSON.parse(savedHistory));
        fetchSongs();
    }, [fetchSongs]);

    useEffect(() => {
        if (activeTab === "all") setSongs(allSongs);
        else if (activeTab === "favorites") setSongs(allSongs.filter(s => likedSongs.includes(s.id)));
        else if (activeTab === "recent") setSongs(history);
    }, [activeTab, likedSongs, history, allSongs]);

    useEffect(() => {
        const audio = audioRef.current;
        const update = () => {
            setCurrentTime(audio.currentTime);
            setProgress((audio.currentTime / audio.duration) * 100);
        };
        const onEnded = () => selectSong(currentIndex + 1);

        audio.addEventListener("timeupdate", update);
        audio.addEventListener("ended", onEnded);
        return () => {
            audio.removeEventListener("timeupdate", update);
            audio.removeEventListener("ended", onEnded);
        };
    }, [currentIndex, selectSong]);

    const currentSong = songs[currentIndex] || allSongs[0] || {};

    return (
        <div className="bg-[#06090f] min-h-screen text-[#f0ebe2] relative font-sans overflow-x-hidden">
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-40"
                style={{ backgroundImage: `linear-gradient(rgba(55, 128, 121, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(55, 128, 121, 0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }}
            />

            <div className="relative z-10">
                <MusicHeader
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    onSearch={fetchSongs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    isLoading={isLoading}
                />

                <div className="max-w-7xl mx-auto px-4 lg:px-6 mt-4 pb-24">
                    <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-start justify-center">

                        <div className="w-full md:w-87.5 lg:w-105 md:h-145 lg:h-155 shrink-0">
                            <div className="relative bg-[#0a0e14] p-6 lg:p-8 rounded-[40px] border border-white/5 h-full flex flex-col items-center justify-between shadow-2xl overflow-hidden group">
                                <img src={currentSong.imageUrl} className="absolute inset-0 w-full h-full object-cover opacity-10 blur-3xl scale-150 transition-all duration-1000" alt="" />

                                <div className="relative z-10 w-full flex flex-col items-center">
                                    <div className={`relative w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-[6px] lg:border-8 border-[#030509] shadow-2xl ${isPlaying ? 'animate-[spin_20s_linear_infinite]' : ''}`}>
                                        <img src={currentSong.imageUrl} className="w-full h-full object-cover" alt="art" />
                                    </div>
                                    <div className="mt-8 text-center px-2 w-full">
                                        <h2 className="text-xl lg:text-3xl font-black uppercase italic tracking-tighter truncate">{currentSong.title || "SOUNDWAVE"}</h2>
                                        <p className="text-[#378079] font-mono text-[9px] mt-2 tracking-[0.4em] uppercase font-bold flex items-center justify-center gap-2">
                                            <HiLightningBolt className={isPlaying ? "animate-pulse" : ""} /> {currentSong.artist || "SYSTEM READY"}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative z-10 w-full px-2">
                                    <div className="flex justify-between font-mono text-[9px] opacity-40 mb-4 tracking-tighter">
                                        <span>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</span>
                                        <span>{Math.floor((currentSong.duration || 0) / 60)}:{Math.floor((currentSong.duration || 0) % 60).toString().padStart(2, '0')}</span>
                                    </div>
                                    <div className="h-0.5 w-full bg-white/5 rounded-full relative mb-10">
                                        <div className="absolute h-full bg-[#378079] shadow-[0_0_15px_#378079]" style={{ width: `${progress}%` }} />
                                    </div>
                                    <div className="flex items-center justify-center gap-8 lg:gap-12 pb-4">
                                        <button onClick={() => selectSong(currentIndex - 1)} className="text-white/20 hover:text-[#378079] transition-all"><HiRewind size={32} /></button>
                                        <button onClick={togglePlay} className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#378079] flex items-center justify-center text-[#030509] hover:scale-105 active:scale-95 transition-all">
                                            {isPlaying ? <HiPause size={40} /> : <HiPlay size={40} className="ml-1" />}
                                        </button>
                                        <button onClick={() => selectSong(currentIndex + 1)} className="text-white/20 hover:text-[#378079] transition-all"><HiFastForward size={32} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex-1 md:h-145 lg:h-155 flex flex-col pt-2">
                            <div className="flex-1 relative overflow-y-auto pr-2 custom-scrollbar">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 pb-12">
                                    {songs.map((song, i) => (
                                        <div
                                            key={`${song.id}-${i}`}
                                            onClick={() => selectSong(i)}
                                            className={`group relative p-4 rounded-[25px] border transition-all duration-500 cursor-pointer overflow-hidden flex items-center
                                                ${i === currentIndex
                                                    ? 'bg-[#378079]/20 border-[#378079]/40 shadow-lg'
                                                    : 'bg-[#0a0e14] border-white/5 hover:border-white/20 hover:bg-[#11171f]'
                                                }`}
                                        >
                                            <div className="relative z-10 flex items-center gap-4 w-full">
                                                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                                                    <img src={song.imageUrl} className="w-full h-full object-cover" alt="" />
                                                    {i === currentIndex && isPlaying && (
                                                        <div className="absolute inset-0 bg-[#378079]/40 flex items-center justify-center">
                                                            <div className="flex gap-px items-end h-3">
                                                                {[1, 2, 3].map(b => (
                                                                    <div key={b} className="w-0.5 bg-black animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: `${b * 0.2}s` }} />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className={`text-[11px] font-bold uppercase truncate ${i === currentIndex ? 'text-[#378079]' : 'text-white/90'}`}>{song.title}</h4>
                                                    <p className="text-[9px] opacity-30 uppercase truncate font-mono mt-1 italic">{song.artist}</p>
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        const newLikes = likedSongs.includes(song.id) ? likedSongs.filter(id => id !== song.id) : [...likedSongs, song.id];
                                                        setLikedSongs(newLikes);
                                                        localStorage.setItem("music-likedSongs", JSON.stringify(newLikes));
                                                    }}
                                                    className={`p-2 rounded-xl transition-all ${likedSongs.includes(song.id) ? 'text-[#378079] bg-[#378079]/10' : 'text-white/5 group-hover:text-white/20'}`}
                                                >
                                                    {likedSongs.includes(song.id) ? <HiHeart size={18} /> : <HiOutlineHeart size={18} />}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar { width: 3px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(55, 128, 121, 0.4); border-radius: 10px; }
                @keyframes wave { 0%, 100% { height: 4px; } 50% { height: 12px; } }
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                `
            }} />
        </div>
    );
}

export default Music;