import { useState } from 'react';

function HTTPStatusReference() {

    const httpCodes = [
        { code: 200, name: 'OK', desc: 'Sorğu uğurla tamamlandı. Ən çox istifadə olunan uğur statusudur.' },
        { code: 201, name: 'Created', desc: 'Resurs uğurla yaradıldı. Adətən POST sorğularından sonra gəlir.' },
        { code: 204, name: 'No Content', desc: 'Sorğu uğurludur, lakin geri göndəriləcək məzmun yoxdur.' },
        { code: 301, name: 'Moved Permanently', desc: 'Resurs daimi olaraq yeni URL-ə köçürülüb.' },
        { code: 304, name: 'Not Modified', desc: 'Resurs dəyişməyib, brauzer keşdəki nüsxəni istifadə edə bilər.' },
        { code: 400, name: 'Bad Request', desc: 'Server sorğunu başa düşə bilmir (sintaksis xətası).' },
        { code: 401, name: 'Unauthorized', desc: 'Giriş üçün autentifikasiya (loqin) lazımdır.' },
        { code: 403, name: 'Forbidden', desc: 'Server sorğunu başa düşür, lakin icra etməkdən imtina edir.' },
        { code: 404, name: 'Not Found', desc: 'İstənilən resurs serverdə tapılmadı.' },
        { code: 429, name: 'Too Many Requests', desc: 'İstifadəçi müəyyən vaxt ərzində həddindən çox sorğu göndərib.' },
        { code: 500, name: 'Internal Server Error', desc: 'Serverdə gözlənilməz bir xəta baş verdi.' },
        { code: 503, name: 'Service Unavailable', desc: 'Server müvəqqəti olaraq yüklənib və ya texniki xidmətdədir.' },
    ];
    const [selectedCode, setSelectedCode] = useState(httpCodes[0]);
    function getStatusColor(code) {
        const firstDigit = Math.floor(code / 100);
        const colors = { 2: '#6ae890', 3: '#a3d9d4', 4: '#e8c46a', 5: '#e87a6a' };
        return colors[firstDigit] || '#888';
    };

    return (
        <section className="px-8 md:px-16 py-10 md:py-16">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-px bg-[#378079]" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">C-12 · Encyclopedia</span>
            </div>

            <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[3rem] lg:text-[4rem] leading-tight tracking-tighter uppercase mb-8">
                HTTP STATUS <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">KODLARI</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

                <div className="grid grid-cols-2 gap-2 content-start">
                    {httpCodes.map((item) => (
                        <button key={item.code} onClick={() => setSelectedCode(item)} className={`flex items-center gap-3 p-3 border transition-all rounded-xl text-left ${selectedCode.code === item.code ? ' bg-[#378079]' : 'border-white/5 bg-[#0d1117] hover:border-white/10'}`}>
                            <span className="font-mono font-bold text-sm" style={{ color: getStatusColor(item.code) }}>
                                {item.code}
                            </span>
                            <span className="text-[11px] text-white/60 uppercase truncate font-bold tracking-wider">
                                {item.name}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="relative">
                    <div className="bg-[#0b0f17] border border-white/5 rounded-2xl p-8 sticky top-10 h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <h3 className="text-6xl font-black font-mono" style={{ color: getStatusColor(selectedCode.code) }}>
                                {selectedCode.code}
                            </h3>
                            <div className="h-12 w-px bg-white/10" />
                            <h4 className="text-xl font-bold text-[#f0ebe2] uppercase tracking-tighter">
                                {selectedCode.name}
                            </h4>
                        </div>

                        <p className="text-[#f0ebe2]/60 text-sm leading-relaxed mb-8 italic grow">
                            "{selectedCode.desc}"
                        </p>

                        <div className="pt-6 border-t border-white/5">
                            <p className="text-[9px] text-white/20 uppercase tracking-[0.2em] mb-4 font-bold">İstifadə sahəsi</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-white/40">REST API</span>
                                <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-white/40">Frontend Validation</span>
                                <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-white/40">Backend Responses</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HTTPStatusReference;