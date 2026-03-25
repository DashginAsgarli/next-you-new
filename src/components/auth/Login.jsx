import { Routes, Route, NavLink } from "react-router-dom";
import { 
  HiOutlineBookOpen, 
  HiOutlineCpuChip, 
  HiOutlineSquaresPlus, 
  HiOutlinePuzzlePiece,
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiArrowRightOnRectangle,
  HiUserPlus 
} from "react-icons/hi2";


function Login() {
    const features = [
        { icon: <HiOutlineBookOpen />, title: "Kurslar", desc: "Proqramlaşdırma / Musiqi / Kitab / Dil" },
        { icon: <HiOutlineCpuChip />, title: "Süni İntellekt", desc: "Güclü öyrənmə", sub: "Fərdiləşdirilmiş öyrənmə yolu" },
        { icon: <HiOutlineSquaresPlus />, title: "Ağıllı Planlayıcı", desc: "Ağıllı planlayıcı", sub: "Optimallaşdırılmış cədvəl" },
        { icon: <HiOutlinePuzzlePiece />, title: "Oyunlaşdırma", desc: "Oyunlaşdırma", sub: "Əyləncəli nailiyyət sistemi" }
    ];

    return (
        <div className="min-h-screen bg-[#06090f] flex items-center justify-center p-4 font-sans uppercase italic">
            <div className="w-full max-w-6xl flex  flex-wrap rounded-[2.5rem] bg-white/[0.02] border border-white/10 overflow-hidden backdrop-blur-md">
                
                <div className="w-full lg:w-[45%] p-8 md:p-10 bg-gradient-to-br from-[#378079]/20 to-transparent relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5 pointer-events-none" 
                         style={{ backgroundImage: `linear-gradient(#378079 1px, transparent 1px), linear-gradient(90deg, #378079 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
                    
              

                    <div className="relative z-10 space-y-6">
                        {features.map((item, index) => (
                            <div key={index} 
                                 className="flex items-center gap-5 p-5 bg-[#378079] rounded-[1.25rem] animate-[float_6s_ease-in-out_infinite]"
                                 style={{ animationDelay: `${index * -1.5}s` }}>
                                <div className="text-3xl text-white">
                                    {item.icon}
                                </div>
                                <div className="text-white">
                                    <p className="text-sm md:text-lg font-black tracking-tighter leading-tight">{item.desc}</p>
                                    {item.sub && <p className="text-[10px] md:text-xs opacity-70 tracking-[0.2em] mt-1 not-italic font-bold">{item.sub}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-[55%] p-8 md:p-20 flex flex-col justify-center bg-[#080c14]/40">
                    
                    <div className="flex bg-white/5 border border-white/10 p-1.5 rounded-full gap-2 justify-center mb-16 max-w-md mx-auto w-full">
                        <NavLink to="/login" className={({isActive}) => `flex flex-1 items-center justify-center gap-2 px-6 py-3 rounded-full text-[10px] font-black tracking-[0.2em] transition-all duration-300 ${isActive ? 'bg-[#378079] text-black' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
                            <HiArrowRightOnRectangle size={18} /> Daxil ol
                        </NavLink>
                        <NavLink to="/logup" className={({isActive}) => `flex flex-1 items-center justify-center gap-2 px-6 py-3 rounded-full text-[10px] font-black tracking-[0.2em] transition-all duration-300 ${isActive ? 'bg-[#378079] text-black' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
                            <HiUserPlus size={18} /> Qeydiyyat
                        </NavLink>
                    </div>

                    <div className="max-w-md mx-auto w-full">
                        <h2 className="text-white text-3xl font-black mb-10 text-center tracking-[0.3em]">Daxil ol</h2>
                        
                        <form className="space-y-5">
                            <div className="relative group">
                                <HiOutlineEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#378079] transition-colors text-xl" />
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white text-[11px] focus:outline-none focus:border-[#378079]/50 transition-all placeholder:text-white/5 font-bold tracking-[0.2em]"
                                    required 
                                />
                            </div>

                            <div className="relative group">
                                <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#378079] transition-colors text-xl" />
                                <input 
                                    type="password" 
                                    placeholder="Şifrə" 
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white text-[11px] focus:outline-none focus:border-[#378079]/50 transition-all placeholder:text-white/5 font-bold tracking-[0.2em]"
                                    required 
                                />
                            </div>

                            <div className="flex items-center gap-3 px-2">
                                <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 checked:bg-[#378079] cursor-pointer appearance-none checked:border-transparent relative checked:before:content-['✓'] checked:before:absolute checked:before:text-black checked:before:text-[10px] checked:before:font-bold checked:before:left-1/2 checked:before:top-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2" />
                                <span className="text-white/30 text-[9px] font-black tracking-widest">Sessiyanı saxla</span>
                            </div>

                            <button className="w-full bg-[#378079] hover:bg-white text-black font-black py-5 rounded-2xl text-[11px] tracking-[0.4em] transition-all duration-300 active:scale-[0.98] mt-6 border border-transparent hover:border-[#378079]">
                               Daxil ol
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-12px); }
                }
            `}</style>
            
        </div>
    );
}

export default Login;