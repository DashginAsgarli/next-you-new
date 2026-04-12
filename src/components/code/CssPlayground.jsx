import { useState } from 'react';

function CssPlayground() {
    const [css, setCss] = useState(`@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.box {
  width: 80px;
  height: 80px;
  background: #378079;
  border-radius: 12px;
  animation: spin 2s linear infinite;
}`);

    const presets = [
        { label: 'Fırlan', css: '@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n.box {\n  width: 80px;\n  height: 80px;\n  background: #378079;\n  border-radius: 12px;\n  animation: spin 2s linear infinite;\n}' },
        { label: 'Titrə', css: '@keyframes shake {\n  0%, 100% { transform: translateX(0); }\n  25% { transform: translateX(-10px); }\n  75% { transform: translateX(10px); }\n}\n.box {\n  width: 80px;\n  height: 80px;\n  background: #7a3a9a;\n  border-radius: 50%;\n  animation: shake 0.5s infinite;\n}' },
        { label: 'Nəbz', css: '@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.3); }\n}\n.box {\n  width: 80px;\n  height: 80px;\n  background: #9a3a3a;\n  border-radius: 50%;\n  animation: pulse 1s ease-in-out infinite;\n}' },
    ];

    return (
        <section className="px-8 md:px-16 py-10 md:py-16">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#378079]" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Editor</span>
            </div>
            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[3rem] lg:text-[4rem] leading-tight tracking-tighter uppercase mb-8">
                CSS <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">ANİMASİYA</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <p className="text-[9px] text-white/20 uppercase tracking-[0.2em] mb-2">CSS yaz</p>
                    <textarea value={css} onChange={(e) => setCss(e.target.value)} className="w-full h-64 bg-[#0b0f17] border border-white/5 rounded-xl p-4 font-mono text-[12px] text-[#f0ebe2]/70 resize-none outline-none focus:border-[#378079]/30 transition-all scrollbar-hide" spellCheck="false" />
                    <div className="flex flex-wrap gap-2 mt-3">
                        {presets.map((p) => (
                            <button key={p.label} onClick={() => setCss(p.css)} className="px-3 py-1.5 text-[9px] font-bold tracking-[0.15em] uppercase border border-white/10 text-white/30 hover:border-[#378079]/40 hover:text-[#378079] transition-all rounded-lg active:scale-95">
                                {p.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="text-[9px] text-white/20 uppercase tracking-[0.2em] mb-2">Canlı önizləmə</p>
                    <div className="h-64 bg-[#0b0f17] border border-[#378079]/20 rounded-xl flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#378079 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                        <style dangerouslySetInnerHTML={{ __html: css }} />
                        <div className="box z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CssPlayground;