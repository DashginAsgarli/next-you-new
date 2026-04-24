import React from 'react';

function SkillRadar() {

  const skills = [
    { name: 'HTML/CSS', value: 90 },
    { name: 'JavaScript', value: 65 },
    { name: 'React', value: 50 },
    { name: 'Node.js', value: 30 },
    { name: 'Python', value: 20 },
    { name: 'İngilis', value: 75 },
  ];

  return (
    <div className="bg-[#06090f] border border-white/10 p-8 h-full flex flex-col rounded-lg">
      <p className="text-[9px] font-bold uppercase tracking-[3px] text-[#378079] mb-6">Bacarıq Xəritəsi</p>
      <div className="space-y-4 flex-1">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1.5">
              <span className="text-[10px] font-bold text-[#f0ebe2]/60 uppercase tracking-wide">{skill.name}</span>
              <span className="text-[10px] font-mono text-[#378079]">{skill.value}%</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-[#378079] rounded-full transition-all duration-1000" style={{ width: `${skill.value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-white/5">
        <p className="text-[9px] text-[#f0ebe2]/20 font-mono uppercase tracking-wider">Ümumi Səviyyə</p>
        <p className="text-[#378079] font-black text-2xl mt-1">Junior Developer</p>
      </div>
    </div>
  );
}

export default SkillRadar