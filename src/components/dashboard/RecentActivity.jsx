import React from 'react';
import { HiCode, HiAcademicCap, HiBookOpen, HiMusicNote, HiLightningBolt } from 'react-icons/hi';

function RecentActivity() {
  const activities = [
    { icon: <HiCode size={14} />, text: 'HTML Kursu tamamlandı', time: '2 saat əvvəl', xp: '+50 XP', type: 'success' },
    { icon: <HiAcademicCap size={14} />, text: 'İngilis dili testi — 8/10', time: '5 saat əvvəl', xp: '+80 XP', type: 'info' },
    { icon: <HiBookOpen size={14} />, text: '"Clean Code" oxundu', time: 'Dünən', xp: '+20 XP', type: 'default' },
    { icon: <HiMusicNote size={14} />, text: 'Lofi playlist dinləndi', time: 'Dünən', xp: '+5 XP', type: 'default' },
    { icon: <HiLightningBolt size={14} />, text: 'Günlük challenge tamamlandı', time: '2 gün əvvəl', xp: '+100 XP', type: 'success' },
    { icon: <HiCode size={14} />, text: 'JavaScript modulu başladı', time: '3 gün əvvəl', xp: '+10 XP', type: 'info' },
  ];

  function getStyleByType(type) {
    if (type === 'success') { return 'text-[#378079] bg-[#378079]/10'; }
    if (type === 'info') { return 'text-blue-400 bg-blue-400/10'; }
    return 'text-[#f0ebe2]/40 bg-white/5';
  }

  return (
    <div className="bg-[#06090f] border border-white/10 p-8 rounded-lg">
      <p className="text-[9px] font-bold uppercase tracking-[3px] text-[#378079] mb-8">Son Fəaliyyət</p>

      <div className="space-y-4">
        {activities.map((act, index) => {
          const currentStyle = getStyleByType(act.type);

          return (
            <div key={index} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0 group hover:bg-white/5 px-2 transition-all rounded">

              <div className="flex items-center gap-4">
                <div className={"w-8 h-8 flex items-center justify-center rounded " + currentStyle}>{act.icon}</div>
                <div>
                  <p className="text-[12px] font-bold text-[#f0ebe2]/80 uppercase tracking-wide"> {act.text}</p>
                  <p className="text-[9px] text-[#f0ebe2]/20 font-mono mt-0.5"> {act.time}</p>
                </div>
              </div>
              <span className="text-[11px] font-black text-[#378079] shrink-0">{act.xp}</span>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentActivity;