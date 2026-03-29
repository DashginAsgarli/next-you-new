import React, { useState } from 'react';

function PasswordGenerator() {
    const [length, setLength] = useState(16);
    const [opts, setOpts] = useState({ upper: true, lower: true, numbers: true, symbols: true });
    const [password, setPassword] = useState('');
    const [copied, setCopied] = useState(false);

    function generate() {
        let chars = '';
        if (opts.upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (opts.lower) chars += 'abcdefghijklmnopqrstuvwxyz';
        if (opts.numbers) chars += '0123456789';
        if (opts.symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

        if (!chars) { setPassword('Ən az 1 seçim et'); return; }

        let pw = '';
        for (let i = 0; i < length; i++) { pw += chars[Math.floor(Math.random() * chars.length)]; }

        setPassword(pw);
        setCopied(false);
    };

    function getStrength() {
        const activeOptsCount = Object.values(opts).filter(Boolean).length;

        if (length < 8 || activeOptsCount < 2)
            return { label: 'Zəif', color: '#ef4444', w: '25%' };
        if (length < 12 || activeOptsCount < 3)
            return { label: 'Orta', color: '#f97316', w: '50%' };
        if (length < 16 || activeOptsCount < 4)
            return { label: 'Güclü', color: '#3a7a4a', w: '75%' };

        return { label: 'Çox güclü', color: '#378079', w: '100%' };
    };

    const strength = getStrength();

    function toggleOpt(key) { setOpts(prev => ({ ...prev, [key]: !prev[key] })); }

    function copyToClipboard() {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="px-8 md:px-16 py-10 border border-white/5 bg-[#06090f] rounded-2xl shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#378079]" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">
                    Təhlükəsizlik Aləti
                </span>
            </div>

            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] leading-tight tracking-tighter uppercase mb-8">
                ŞİFRƏ <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">GENERATORU</span>
            </h2>

            <div className="max-w-lg space-y-6">
                {password && (
                    <div className="space-y-3">
                        <div className="bg-[#0b0f17] border border-[#378079]/20 rounded-xl p-4 flex items-center justify-between gap-4 group transition-all">
                            <p className="font-mono text-[#378079] text-sm break-all flex-1 select-all">
                                {password}
                            </p>
                            <button onClick={copyToClipboard} className={`shrink-0 px-4 py-2 border text-[9px] font-black tracking-[0.2em] uppercase transition-all rounded ${copied ? 'border-[#378079] text-[#378079]' : 'border-white/10 text-white/30 hover:text-[#378079]'}`}>
                                {copied ? 'KOPYALANDI' : 'KOPİ'}
                            </button>
                        </div>

                        <div className="animate-fade-in">
                            <div className="flex justify-between mb-1">
                                <span className="text-[9px] text-white/20 uppercase tracking-[0.2em]">Təhlükəsizlik Səviyyəsi</span>
                                <span className="text-[9px] font-bold uppercase" style={{ color: strength.color }}>{strength.label}</span>
                            </div>
                            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full rounded-full transition-all duration-700 ease-out" style={{ width: strength.w, background: strength.color }} />
                            </div>
                        </div>
                    </div>
                )}

                <div className="bg-[#0b0f17]/50 p-4 rounded-xl border border-white/5">
                    <div className="flex justify-between mb-4">
                        <span className="text-[11px] text-white/40 uppercase tracking-[0.15em]">Simvol sayı</span>
                        <span className="text-[#378079] font-mono font-black text-lg">{length}</span>
                    </div>
                    <input type="range" min="8" max="32" value={length} onChange={(e) => setLength(Number(e.target.value))} className="w-full accent-[#378079] cursor-pointer" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {[
                        { key: 'upper', label: 'Böyük (A-Z)' },
                        { key: 'lower', label: 'Kiçik (a-z)' },
                        { key: 'numbers', label: 'Rəqəm (0-9)' },
                        { key: 'symbols', label: 'Simvol (!@#)' },
                    ].map((o) => (
                        <button key={o.key} onClick={() => toggleOpt(o.key)} className={`p-4 border rounded-xl text-left transition-all duration-300 ${opts[o.key] ? 'border-[#378079] bg-[#378079]/10 text-[#378079]' : 'border-white/10 text-white/30 hover:border-white/30'}`}>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black tracking-[0.1em] uppercase">{o.label}</span>
                                <div className={`w-2 h-2 rounded-full ${opts[o.key] ? 'bg-[#378079] shadow-[0_0_8px_#378079]' : 'bg-white/10'}`} />
                            </div>
                        </button>
                    ))}
                </div>

                <button onClick={generate} className="w-full py-5 bg-[#378079] text-[#06090f] font-black text-[12px] tracking-[0.4em] uppercase hover:bg-white transition-all rounded-xl shadow-lg active:scale-95">
                    ŞİFRƏ YARAT
                </button>
            </div>
        </section>
    );
};

export default PasswordGenerator;