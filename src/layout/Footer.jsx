import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

function Footer() {
    const currentYear = new Date().getFullYear()

    const columns = [
        {
            title: 'Öyrən',
            links: [
                { to: '/code', label: 'Proqramlaşdırma' },
                { to: '/language', label: 'Dillər' },
                { to: '/library', label: 'Kitabxana' },
                { to: '/music', label: 'Musiqi' },
            ]
        },
        {
            title: 'Kəşf Et',
            links: [
                { to: '/explore', label: 'Kəşfet' },
                { to: '/news', label: 'Xəbərlər' },
                { to: '/events', label: 'Tədbirlər' },
            ]
        },
        {
            title: 'Alətlər',
            links: [
                { to: '/planner', label: 'Planlayıcı' },
                { to: '/quiz', label: 'Quiz' },
            ]
        },
        {
            title: 'Hesab',
            links: [
                { to: '/dashboard', label: 'Dashboard' },
                { to: '/leaderboard', label: 'Liderboard' },
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/contact', label: 'Əlaqə' },
            ]
        }
    ]

    return (
        <footer className="bg-[#06090f] border-t border-white/10 px-[6%] py-16">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
                <div className="col-span-2 md:col-span-1">
                    <Link to="/" className="flex items-center gap-1.5 tracking-tighter mb-4">
                        <span className="text-xl font-black text-[#378079]">NEXT</span>
                        <span className="text-xl font-black text-[#f0ebe2]">YOU</span>
                    </Link>
                    <p className="text-[11px] text-[#f0ebe2]/30 leading-relaxed tracking-wide mb-6">
                        Rəqəmsal dünyanın yeni mərhələsi. Öyrən. Yarat. İrələ.
                    </p>
                    <div className="flex gap-3">
                        {[
                            { icon: <FaGithub size={16} />, url: 'https://github.com' },
                            { icon: <FaLinkedinIn size={16} />, url: 'https://linkedin.com' },
                            { icon: <FaInstagram size={16} />, url: 'https://instagram.com' },
                        ].map(function (social, i) {
                            return (
                                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer"
                                    className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:border-[#378079] hover:text-[#378079] transition-all">
                                    {social.icon}
                                </a>
                            )
                        })}
                    </div>
                </div>

                {columns.map(function (col, i) {
                    return (
                        <div key={i}>
                            <p className="text-[9px] font-black uppercase tracking-[3px] text-[#378079] mb-5">{col.title}</p>
                            <div className="flex flex-col gap-3">
                                {col.links.map(function (link) {
                                    return (
                                        <Link key={link.to} to={link.to}
                                            className="text-[11px] text-[#f0ebe2]/30 hover:text-[#378079] transition-colors tracking-wide uppercase font-medium">
                                            {link.label}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-[9px] text-[#f0ebe2]/20 tracking-[3px] uppercase">
                    © {currentYear} NextYou. Bütün hüquqlar qorunur.
                </p>
                <div className="flex items-center gap-6">
                    {['Məxfilik', 'Şərtlər', 'Kukilər'].map(function (item) {
                        return (
                            <span key={item} className="text-[9px] text-[#f0ebe2]/20 tracking-wide uppercase hover:text-[#378079] cursor-pointer transition-colors">
                                {item}
                            </span>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer