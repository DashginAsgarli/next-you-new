import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { HiOutlineStar, HiOutlineCalendar, HiOutlineLink, HiOutlineLogout, HiX, HiOutlineHome, HiOutlineMusicNote, HiOutlineBookOpen, HiOutlineAcademicCap, HiOutlineCode } from "react-icons/hi";

const Sidebar = ({ isOpen, onClose }) => {
    const sidebarRef = useRef(null);

    const mobileNavLinks = [
        { to: "/", label: "Əsas Səhifə", icon: <HiOutlineHome size={18} /> },
        { to: "/music", label: "Musiqi", icon: <HiOutlineMusicNote size={18} /> },
        { to: "/library", label: "Kitabxana", icon: <HiOutlineBookOpen size={18} /> },
        { to: "/language", label: "Dillər", icon: <HiOutlineAcademicCap size={18} /> },
        { to: "/code", label: "Proqramlaşdırma", icon: <HiOutlineCode size={18} /> },
    ];

    useEffect(() => { isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset' }, [isOpen]);

    return (
        <>
            <div className={`fixed inset-0 bg-black/85 backdrop-blur-sm z-1999 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />

            <div ref={sidebarRef} className={`fixed top-0 right-0 w-70 h-screen bg-[#06090f] border-l border-[#378079]/10 z-2000 p-7 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'}`}>
                <button onClick={onClose} className="self-end text-[#378079]/50 hover:text-[#378079] transition-all mb-8 p-1">
                    <HiX size={26} />
                </button>

                <div className="md:hidden mb-8">
                    <p className="text-[#378079] text-[8px] font-bold tracking-[4px] uppercase mb-4 opacity-40 px-2">Menyu</p>
                    <div className="flex flex-col gap-1">
                        {mobileNavLinks.map((item) => (
                            <NavLink key={item.to} to={item.to} onClick={onClose} className={({ isActive }) => `        flex items-center gap-3 p-3 rounded-lg transition-all text-[11px] uppercase tracking-widest        ${isActive ? "bg-[#378079]/10 text-[#378079] font-bold" : "text-[#f0ebe2]/30 hover:text-[#378079] hover:bg-white/5"}    `}>
                                {item.icon} {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <p className="text-[#378079] text-[8px] font-bold tracking-[4px] uppercase mb-4 opacity-40 px-2">Panel</p>
                    <div className="flex flex-col gap-1">
                        {[
                            { to: "/parameters", label: "Xüsusiyyətlər", icon: <HiOutlineStar size={18} /> },
                            { to: "/planner", label: "Planlayıcı", icon: <HiOutlineCalendar size={18} /> },
                            { to: "/contact", label: "Əlaqə", icon: <HiOutlineLink size={18} /> },
                        ].map((item) => (
                            <NavLink key={item.to} to={item.to} onClick={onClose} className="flex items-center gap-3 p-3 text-[11px] uppercase tracking-widest text-[#f0ebe2]/30 hover:text-[#378079] hover:bg-[#378079]/5 rounded-lg transition-all">
                                {item.icon} {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>

                <div className="mt-auto pb-4">
                    <Link to="/login" onClick={onClose} className="group relative flex items-center justify-center gap-3 w-full py-4 rounded-xl overflow-hidden transition-all duration-300">
                        <div className="absolute inset-0 border border-[#378079]/30 rounded-xl group-hover:bg-[#378079] transition-all duration-300" />

                        <span className="relative flex items-center gap-2 text-[#378079] group-hover:text-[#06090f] font-black text-[11px] uppercase tracking-[3px] transition-colors duration-300">
                            <HiOutlineLogout size={18} />
                            Daxil ol
                        </span>
                    </Link>

                    <p className="mt-6 text-[7px] text-center text-[#378079]/30 tracking-[4px] uppercase">
                        Next You • 2024
                    </p>
                </div>
            </div>
        </>
    );
};

export default Sidebar;