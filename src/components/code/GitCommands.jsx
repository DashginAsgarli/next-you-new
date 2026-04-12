import { useState } from 'react';

function GitCommands() {

    const catagories = [
        {
            name: 'Başlamaq',
            cmds: [
                { cmd: 'git init', desc: 'Yeni repo yarat' },
                { cmd: 'git clone [url]', desc: 'Mövcud reponu kopyala' },
                { cmd: 'git status', desc: 'Fayl vəziyyətini gör' },
            ],
        },
        {
            name: 'Commit',
            cmds: [
                { cmd: 'git add .', desc: 'Bütün dəyişiklikləri hazırla' },
                { cmd: 'git commit -m "msg"', desc: 'Dəyişiklikləri qeydə al' },
                { cmd: 'git log --oneline', desc: 'Commit tarixçəsini gör' },
            ],
        },
        {
            name: 'Branch',
            cmds: [
                { cmd: 'git branch [name]', desc: 'Yeni branch yarat' },
                { cmd: 'git checkout [branch]', desc: 'Branch-ı dəyiş' },
                { cmd: 'git merge [branch]', desc: 'Branch-ları birləşdir' },
            ],
        },
        {
            name: 'Remote',
            cmds: [
                { cmd: 'git push origin main', desc: 'Dəyişiklikləri göndər' },
                { cmd: 'git pull', desc: 'Dəyişiklikləri al' },
                { cmd: 'git fetch', desc: 'Uzaqdan məlumat çək' },
            ],
        },
    ];

    const [active, setActive] = useState(0);
    const [copied, setCopied] = useState('');

    function handleCopy(cmd) {
        navigator.clipboard.writeText(cmd);
        setCopied(cmd);
        setTimeout(() => setCopied(''), 1500);
    };

    return (
        <section className="px-8 md:px-16 py-10 md:p-16">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#378079]" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Terminal</span>
            </div>

            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[3rem] lg:text-[4rem] leading-tight tracking-tighter uppercase mb-8">
                GIT <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">KOMANDALAR</span>
            </h2>

            <div className="flex flex-wrap gap-2 mb-8">
                {catagories.map((cat, i) => (
                    <button key={i} onClick={() => setActive(i)} className={`px-5 py-2.5 text-[10px] font-black tracking-[0.15em] uppercase border transition-all duration-300 rounded-sm ${active === i ? 'border-[#378079] text-[#378079] bg-[#378079]/10' : 'border-white/5 text-white/20 hover:border-white/20 hover:text-white/50'}`}>
                        {cat.name}
                    </button>
                ))}
            </div>

            <div className="max-w-xl space-y-3">
                {catagories[active].cmds.map((c) => (
                    <div key={c.cmd} className="group flex items-center justify-between bg-[#0b0f17] border border-white/5 p-4 hover:border-[#378079]/30 transition-all duration-500 rounded-lg">
                        <div className="flex flex-col gap-1">
                            <code className="font-mono text-[#378079] text-sm font-bold tracking-tight">
                                <span className="text-white/20 mr-2">$</span>{c.cmd}
                            </code>
                            <p className="text-[11px] text-white/30 font-medium">{c.desc}</p>
                        </div>

                        <button onClick={() => handleCopy(c.cmd)} className={`shrink-0 ml-4 px-4 py-2 text-[9px] font-black tracking-[0.15em] uppercase border transition-all duration-300 ${copied === c.cmd ? 'border-[#378079] text-[#378079] bg-[#378079]/10' : 'border-white/5 text-white/20 hover:border-white/20 hover:text-white/60'}`}>
                            {copied === c.cmd ? 'KOPYALANDI' : 'KOPİ'}
                        </button>
                    </div>
                ))}
            </div>

            <p className="mt-8 text-[10px] text-white/10 italic font-mono">
                * İpucu: Dəyişiklikləri geri qaytarmaq üçün 'git reset' istifadə edə bilərsiniz.
            </p>
        </section>
    );
}

export default GitCommands;