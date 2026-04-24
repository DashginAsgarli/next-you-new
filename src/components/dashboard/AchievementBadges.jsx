import React from 'react';
import { FaRocket, FaFire, FaGem, FaTrophy, FaBookOpen, FaGraduationCap, FaBolt, FaGlobe, FaMusic, FaCode, FaStar, FaBullseye } from 'react-icons/fa';

function AchievementBadges() {
  const badges = [
    { icon: <FaRocket />, name: 'İlk Addım', desc: 'İlk dərsi tamamla', earned: true },
    { icon: <FaFire />, name: 'Atəşli', desc: '7 gün ardıcıl', earned: true },
    { icon: <FaGem />, name: 'Almas', desc: '30 gün ardıcıl', earned: false },
    { icon: <FaTrophy />, name: 'Çempion', desc: 'Top 10-a gir', earned: false },
    { icon: <FaBookOpen />, name: 'Kitabxan', desc: '10 kitab oxu', earned: true },
    { icon: <FaGraduationCap />, name: 'Məzun', desc: 'İlk sertifikat', earned: true },
    { icon: <FaBolt />, name: 'Sürətli', desc: '1 həftədə kurs bitir', earned: false },
    { icon: <FaGlobe />, name: 'Poliqlot', desc: '3 dil öyrən', earned: false },
    { icon: <FaMusic />, name: 'Melodiya', desc: '100 mahnı dinlə', earned: true },
    { icon: <FaCode />, name: 'Hacker', desc: 'İlk kod yaz', earned: true },
    { icon: <FaStar />, name: 'Ulduz', desc: '1000 XP qazan', earned: true },
    { icon: <FaBullseye />, name: 'Hədəf', desc: 'Bütün challeng-lər', earned: false },
  ];
  const earnedCount = badges.filter((b) => b.earned).length;

  return (
    <div className="bg-[#06090f] border border-white/10 p-8 rounded-xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-[#f0ebe2] text-xl font-semibold mt-1">Sənin Yolun</h2>
        </div>
        <span className="text-[10px] font-mono px-3 py-1 bg-white/5 rounded-md text-[#f0ebe2]/40 border border-white/5">
          {earnedCount} / {badges.length} QAZANILDI
        </span>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
        {badges.map((badge, item) => (
          <div key={item} className={`group flex flex-col items-center gap-3 p-4 border rounded-lg transition-all duration-300 ${badge.earned ? 'border-[#378079]/40 bg-[#378079]/5 text-white hover:bg-[#378079]/10' : 'border-white/5 bg-white/2 text-white/10 opacity-30 grayscale'}`} title={`${badge.name}: ${badge.desc}`}>
            <div className="text-xl transition-transform group-hover:scale-110">
              {badge.icon}
            </div>

            <span className="text-[7px] font-black uppercase tracking-wider text-center hidden md:block leading-tight">
              {badge.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementBadges;