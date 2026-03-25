import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiOutlineHome, HiOutlineMusicNote, HiOutlineBookOpen, HiOutlineTranslate, HiOutlineCode } from "react-icons/hi";

const Header = ({ onProfileClick }) => {
    const navLinks = [
        { to: "/", label: "Əsas Səhifə", icon: <HiOutlineHome size={16} /> },
        { to: "/music", label: "Musiqi", icon: <HiOutlineMusicNote size={16} /> },
        { to: "/library", label: "Kitabxana", icon: <HiOutlineBookOpen size={16} /> },
        { to: "/language", label: "Dillər", icon: <HiOutlineTranslate size={16} /> },
        { to: "/code", label: "Proqramlaşdırma", icon: <HiOutlineCode size={16} /> },
    ];

    return (
        <header className="h-20 bg-[#06090f] flex justify-between items-center px-[6%] sticky top-0 z-1000">
            <Link to="/" className="no-underline group">
                <div className="flex items-center gap-1.5 tracking-tighter">
                    <span className="text-2xl font-black text-[#378079] group-hover:text-[#f0ebe2] transition-colors duration-300">
                        NEXT
                    </span>
                    <span className="text-2xl font-black text-[#f0ebe2] group-hover:text-[#378079] transition-colors duration-300">
                        YOU
                    </span>
                </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/5">
                {navLinks.map((link) => (
                    <NavLink key={link.to} to={link.to} className={({ isActive }) => `        flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[1.5px] transition-all duration-400 rounded-full        ${isActive ? "text-[#378079] bg-[#378079]/10 shadow-[inset_0_0_10px_rgba(55,128,121,0.2)] font-bold" : "text-[#f0ebe2]/40 hover:text-[#f0ebe2] hover:bg-white/5"}    `}>
                        <span className="opacity-80">{link.icon}</span>
                        {link.label}
                    </NavLink>
                ))}
            </nav>

            <button onClick={onProfileClick} className="relative group p-2.5 rounded-xl bg-[#378079]/5 border border-[#378079]/20 hover:border-[#378079]/50 transition-all duration-300">
                <div className="absolute inset-0 bg-[#378079]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                <div className="flex items-center gap-2 relative z-10">
                    <span className="hidden lg:block text-[9px] text-[#378079] font-bold tracking-[2px] uppercase opacity-70">Menyu</span>
                    <HiMenuAlt3 size={26} className="text-[#378079]" />
                </div>
            </button>
        </header>
    );
};

export default Header;