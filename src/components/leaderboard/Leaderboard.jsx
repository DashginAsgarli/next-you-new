import React, { useState } from 'react'
import { HiLightningBolt, HiStar, HiFire } from 'react-icons/hi'

function Leaderboard() {
    const allUsers = [
        { rank: 1, name: 'Anar Həsənov', xp: 15420, streak: 45, badge: '🏆', level: 24, courses: 8 },
        { rank: 2, name: 'Lalə Quliyeva', xp: 13280, streak: 32, badge: '🥈', level: 21, courses: 6 },
        { rank: 3, name: 'Tural Məmmədov', xp: 11900, streak: 28, badge: '🥉', level: 19, courses: 7 },
        { rank: 4, name: 'Nigar Əliyeva', xp: 10200, streak: 21, badge: '⭐', level: 17, courses: 5 },
        { rank: 5, name: 'Elvin Cəfərov', xp: 9800, streak: 18, badge: '⭐', level: 16, courses: 4 },
    ]

    const [selectedCategory, setSelectedCategory] = useState('xp')

    const categoryTabs = [
        { id: 'xp', label: 'XP', icon: <HiLightningBolt size={14} /> },
        { id: 'streak', label: 'Ardıcıllıq', icon: <HiFire size={14} /> },
        { id: 'courses', label: 'Kurslar', icon: <HiStar size={14} /> },
    ]

    const sortedUsers = [...allUsers].sort((a, b) => {
        if (b[selectedCategory] > a[selectedCategory]) return 1
        if (b[selectedCategory] < a[selectedCategory]) return -1
        return 0
    }).map((user, index) => {
        return { ...user, rank: index + 1 }
    })

    const firstPlace = sortedUsers[0]
    const secondPlace = sortedUsers[1]
    const thirdPlace = sortedUsers[2]

    const podiumDisplay = [secondPlace, firstPlace, thirdPlace]

    return (
        <section >
            <div className="px-8 md:px-16 py-16">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-[#378079]" />
                    <span className="text-[10px] tracking-[0.3em] text-[#378079] uppercase font-bold">Rəqabət</span>
                </div>
                <h1 className="text-[#f0ebe2] font-black text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[1.07] tracking-[-0.01em] mb-12 uppercase">
                    LİDER <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">BOARD</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {podiumDisplay.map((user) => {
                        if (!user) return null

                        let cardColor = '#94A3B8'
                        let ptClass = 'md:pt-8'

                        if (user.rank === 1) {
                            cardColor = '#F59E0B'
                            ptClass = 'md:pt-0'
                        } else if (user.rank === 3) {
                            cardColor = '#CD7F32'
                        }

                        return (
                            <div key={user.name} className={ptClass}>
                                <div className="bg-[#06090f] border p-8 text-center transition-all hover:-translate-y-1" style={{ borderColor: `${cardColor}40` }}>
                                    <div className="text-4xl mb-3">{user.badge}</div>
                                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center font-black text-sm border uppercase" style={{ borderColor: cardColor, color: cardColor, backgroundColor: `${cardColor}15` }}>
                                        {user.name.substring(0, 2)}
                                    </div>
                                    <h3 className="font-black text-[#f0ebe2] tracking-tight text-sm mb-1">{user.name}</h3>
                                    <p className="text-[9px] text-[#f0ebe2]/30 uppercase tracking-widest mb-4">Səviyyə {user.level}</p>
                                    <span className="text-2xl font-bold" style={{ color: cardColor }}>
                                        {user[selectedCategory].toLocaleString()}
                                    </span>
                                    <span className="text-[#f0ebe2]/30 text-xs ml-1 uppercase">{selectedCategory}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="flex justify-end mb-8">
                    <div className="flex gap-2">
                        {categoryTabs.map((tab) => (
                            <button key={tab.id} onClick={() => setSelectedCategory(tab.id)} className={`flex items-center gap-2 px-4 py-2 text-[9px] font-black uppercase tracking-widest border transition-all         ${selectedCategory === tab.id ? 'bg-[#378079]/20 border-[#378079]/50 text-[#378079]' : 'border-white/10 text-[#f0ebe2]/30'}`}>
                                {tab.icon} {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    {sortedUsers.map((user) => {
                        const isTopThree = user.rank <= 3
                        return (
                            <div key={user.rank} className={`flex items-center gap-4 p-5 border transition-all hover:border-[#378079]/20     ${isTopThree ? 'bg-[#378079]/5 border-[#378079]/20' : 'bg-[#06090f] border-white/5'}`}>

                                <span className={`text-[1.5rem] w-8 text-center font-bold ${isTopThree ? 'text-[#378079]' : 'text-[#f0ebe2]/20'}`}>
                                    {user.rank}
                                </span>

                                <div className="w-10 h-10 flex items-center justify-center font-black text-xs border border-white/10 text-[#f0ebe2]/50 shrink-0 uppercase">
                                    {user.name.substring(0, 2)}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="font-black text-[#f0ebe2]/80 tracking-wide text-sm">{user.name}</p>
                                    <p className="text-[9px] text-[#f0ebe2]/20">Səviyyə {user.level} • {user.courses} Kurs</p>
                                </div>

                                <div className="flex items-center gap-6 shrink-0">
                                    <div className="text-right hidden md:block">
                                        <p className="text-[8px] text-[#f0ebe2]/20 uppercase">Ardıcıllıq</p>
                                        <p className="font-black text-orange-400 text-sm">{user.streak}🔥</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[8px] text-[#f0ebe2]/20 uppercase">XP</p>
                                        <p className="font-black text-[#378079] text-sm">{user.xp.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Leaderboard