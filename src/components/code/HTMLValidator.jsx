import { useState } from 'react';

function HTMLValidator() {
    const [htmlContent, setHtmlContent] = useState('<div>\n  <p>Salam</p\n  <img src="photo.jpg">\n  <button>Klik et</div>');
    const [validationIssues, setValidationIssues] = useState([]);
    const [isValidated, setIsValidated] = useState(false);

    function handleValidate() {
        const foundIssues = [];
        const lines = htmlContent.split('\n');

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();

            if (line.includes('<') && !line.includes('>')) {
                foundIssues.push({ type: 'error', msg: `Sətir ${i + 1}: Tag düzgün bağlanmayıb ( '>' çatışmır)` });
            }

            if (line.includes('<img') && !line.includes('alt=')) {
                foundIssues.push({ type: 'warning', msg: `Sətir ${i + 1}: <img> tagında 'alt' atributu yoxdur` });
            }

            if (line.includes('<button') && !line.includes('type=')) {
                foundIssues.push({ type: 'warning', msg: `Sətir ${i + 1}: <button> üçün 'type' təyin edilməyib` });
            }
        }

        const deprecatedTags = ['<font', '<center', '<marquee', '<blink'];
        for (const tag of deprecatedTags) {
            if (htmlContent.toLowerCase().includes(tag)) {
                foundIssues.push({ type: 'warning', msg: `${tag}> köhnəlmiş tagdır, CSS istifadə edin` });
            }
        }
        if (htmlContent.includes('href=""') || htmlContent.includes("href=''")) {
            foundIssues.push({ type: 'warning', msg: 'Boş href atributu tövsiyə edilmir' });
        }

        const openDivs = htmlContent.split('<div').length - 1;
        const closeDivs = htmlContent.split('</div>').length - 1;
        if (openDivs !== closeDivs) {
            foundIssues.push({ type: 'error', msg: `<div> və </div> sayı bərabər deyil` });
        }

        const openPars = htmlContent.split('<p').length - 1;
        const closePars = htmlContent.split('</p>').length - 1;
        if (openPars !== closePars) {
            foundIssues.push({ type: 'error', msg: `<p> və </p> sayı bərabər deyil` });
        }
        setValidationIssues(foundIssues);
        setIsValidated(true);
    };

    const errorList = validationIssues.filter((item) => item.type === 'error');
    const warningList = validationIssues.filter((item) => item.type === 'warning');

    return (
        <section className="px-4 md:px-16 py-10">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-px bg-[#378079]" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">NextYOU · VALIDATOR</span>
            </div>

            <h2 className="text-[#f0ebe2] font-black text-[1.8rem] md:text-[2.2rem] leading-tight tracking-tighter uppercase mb-6">
                HTML <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">VALIDATOR</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">

                <div className="flex flex-col">
                    <textarea value={htmlContent} onChange={(e) => { setHtmlContent(e.target.value); setIsValidated(false); }} className="w-full grow bg-[#030508] border border-white/5 p-4 font-mono text-[12px] text-[#f0ebe2] outline-none focus:border-[#378079]/30 resize-none rounded-xl leading-relaxed mb-3 min-h-88" />
                    <button onClick={handleValidate} className="beveled-box w-full py-3 border border-white text-[11px] font-black tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all">
                        YOXLA
                    </button>
                </div>
                <div className="flex flex-col h-full">
                    {isValidated ? (
                        <div className="bg-[#0b0f17] border border-white/5 rounded-2xl p-5 grow overflow-auto">
                            <div className={`flex items-center gap-3 p-4 rounded-xl mb-4 ${validationIssues.length === 0 ? 'bg-[#6ae890]/10 border border-[#6ae890]/30' : 'bg-[#e87a6a]/10 border border-[#e87a6a]/30'}`}>
                                <span className="text-2xl">{validationIssues.length === 0 ? '✓' : '✕'}</span>
                                <div>
                                    <p className="font-bold text-sm" style={{ color: validationIssues.length === 0 ? '#6ae890' : '#e87a6a' }}>
                                        {validationIssues.length === 0 ? 'Təmiz HTML!' : `${errorList.length} xəta, ${warningList.length} uyarı`}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                {errorList.map((err, index) => (
                                    <div key={index} className="flex gap-3 p-3 bg-[#e87a6a]/8 border border-[#e87a6a]/20 rounded-lg">
                                        <span className="text-[#e87a6a] text-sm shrink-0">✕</span>
                                        <p className="text-[12px] text-[#f0ebe2]/70">{err.msg}</p>
                                    </div>
                                ))}
                                {warningList.map((warn, index) => (
                                    <div key={index} className="flex gap-3 p-3 bg-[#e8c46a]/8 border border-[#e8c46a]/20 rounded-lg">
                                        <span className="text-[#e8c46a] text-sm shrink-0">⚠</span>
                                        <p className="text-[12px] text-[#f0ebe2]/70">{warn.msg}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center grow bg-[#0b0f17] border border-white/5 rounded-2xl min-h-88">
                            <p className="text-[10px] text-white/15 uppercase tracking-widest text-center px-4">HTML yoxlamaq üçün "YOXLA" düyməsini bas</p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}

export default HTMLValidator;