import { NavLink, Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { HiOutlineStar, HiOutlineCalendar, HiOutlineLink, HiOutlineLogout, HiX, HiOutlineHome, HiOutlineMusicNote, HiOutlineBookOpen, HiOutlineAcademicCap, HiOutlineCode, HiOutlineNewspaper, HiOutlineLightBulb, HiOutlineTrendingUp, HiOutlineGlobe, HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi"

const Sidebar = function ({ isOpen, onClose }) {
    const sidebarRef = useRef(null)

    const mobileNavLinks = [
        { to: "/", label: "Ana Səhifə", icon: <HiOutlineHome size={18} /> },
        { to: "/music", label: "Musiqi", icon: <HiOutlineMusicNote size={18} /> },
        { to: "/library", label: "Kitabxana", icon: <HiOutlineBookOpen size={18} /> },
        { to: "/language", label: "Dillər", icon: <HiOutlineAcademicCap size={18} /> },
        { to: "/code", label: "Proqramlaşdırma", icon: <HiOutlineCode size={18} /> },
    ]

    const toolLinks = [
        { to: "/dashboard", label: "Dashboard", icon: <HiOutlineChartBar size={18} /> },
        { to: "/planner", label: "Planlayıcı", icon: <HiOutlineCalendar size={18} /> },
        { to: "/leaderboard", label: "Liderboard", icon: <HiOutlineTrendingUp size={18} /> },
        { to: "/tools", label: "Alətlər", icon: <HiOutlineLightBulb size={18} /> },
        { to: "/portfolio", label: "Portfolio", icon: <HiOutlineBriefcase size={18} /> },
        { to: "/growth", label: "Böyümə", icon: <HiOutlineTrendingUp size={18} /> }
    ]

    const infoLinks = [
        { to: "/news", label: "Xəbərlər", icon: <HiOutlineNewspaper size={18} /> },
        { to: "/blog", label: "Blog", icon: <HiOutlineGlobe size={18} /> },
        { to: "/events", label: "Tədbirlər", icon: <HiOutlineStar size={18} /> },
        { to: "/contact", label: "Əlaqə", icon: <HiOutlineLink size={18} /> },
    ]

    useEffect(function () {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    function renderNavLink(item) {
        return (
            <NavLink key={item.to} to={item.to} onClick={onClose}
                className={function ({ isActive }) {
                    return `flex items-center gap-3 p-3 rounded-lg transition-all text-[11px] uppercase tracking-widest ${isActive ? "bg-[#378079]/10 text-[#378079] font-bold" : "text-[#f0ebe2]/30 hover:text-[#378079] hover:bg-white/5"}`
                }}>
                {item.icon} {item.label}
            </NavLink>
        )
    }

    return (
        <>
            <div className={`fixed inset-0 bg-black/75 backdrop-blur-sm z-1999 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />

            <div ref={sidebarRef} className={`fixed top-0 right-0 w-72 h-screen bg-[#06090f] border-l border-white/5 z-2000 p-6 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'} overflow-y-auto custom-scrollbar`}>
                <button onClick={onClose} className="self-end text-[#378079]/50 hover:text-[#378079] transition-all mb-6 p-1">
                    <HiX size={26} />
                </button>

                <div className="lg:hidden mb-6">
                    <p className="text-[#378079] text-[8px] font-bold tracking-[4px] uppercase mb-3 opacity-40 px-2">Naviqasiya</p>
                    <div className="flex flex-col gap-1">{mobileNavLinks.map(renderNavLink)}</div>
                </div>

                <div className="mb-6">
                    <p className="text-[#378079] text-[8px] font-bold tracking-[4px] uppercase mb-3 opacity-40 px-2">Alətlər</p>
                    <div className="flex flex-col gap-1">{toolLinks.map(renderNavLink)}</div>
                </div>

                <div className="mb-6">
                    <p className="text-[#378079] text-[8px] font-bold tracking-[4px] uppercase mb-3 opacity-40 px-2">Məlumat</p>
                    <div className="flex flex-col gap-1">{infoLinks.map(renderNavLink)}</div>
                </div>

                <div className="mt-auto pb-4">
                    <Link to="/login" onClick={onClose} className="group relative flex items-center justify-center gap-3 w-full py-4 rounded-xl overflow-hidden transition-all duration-300">
                        <div className="absolute inset-0 border border-white rounded-xl" />
                        <span className="relative flex items-center gap-2 font-black text-[11px] uppercase tracking-[3px]">
                            <HiOutlineLogout size={18} /> Daxil ol
                        </span>
                    </Link>
                    <p className="mt-4 text-[7px] text-center tracking-[4px] uppercase opacity-30">Next You • 2026</p>
                </div>
            </div>
        </>
    )
}

export default Sidebar