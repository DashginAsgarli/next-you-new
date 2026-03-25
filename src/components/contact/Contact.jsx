import React from 'react';
import { HiOutlineArrowUpRight, HiOutlineGlobeAlt, HiOutlineChatBubbleLeftRight, HiOutlineHashtag, HiOutlineUserGroup } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const socialLinks = [
    { name: "Github", icon: <FaGithub size={22} />, url: "https://github.com/", id: "01", label: "Open Source", tag: <HiOutlineGlobeAlt size={12} /> },
    { name: "Linkedin", icon: <FaLinkedinIn size={22} />, url: "https://www.linkedin.com/", id: "02", label: "Professional", tag: <HiOutlineChatBubbleLeftRight size={12} /> },
    { name: "Instagram", icon: <FaInstagram size={22} />, url: "https://instagram.com", id: "03", label: "Visual Feed", tag: <HiOutlineHashtag size={12} /> },
    { name: "Facebook", icon: <FaFacebookF size={22} />, url: "https://www.facebook.com/", id: "04", label: "Community", tag: <HiOutlineUserGroup size={12} /> },
];

function Contact() {
    const handleMouseMove = (e) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        currentTarget.style.setProperty("--mouse-x", `${x}px`);
        currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <section className="bg-[#06090f] w-full min-h-screen overflow-hidden relative border-t border-white/5 py-16 md:py-28">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 md:opacity-100"
                style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

            <div className="relative z-10 px-6 md:px-[6%]">
                {/* Header Tag */}
                <div className="flex items-center gap-2.5 mb-8 animate-[fadeUp_0.7s_ease_both]">
                    <div className="w-8 h-px bg-[#378079]" />
                    <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-[#378079] uppercase font-bold text-nowrap">Connect_Interface</span>
                </div>

                {/* Title */}
                <h1 className="font-black text-[clamp(2.4rem,6vw,5rem)] leading-none mb-16 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s] uppercase text-transparent italic"
                    style={{ WebkitTextStroke: '1px #f0ebe2' }}>ƏLAQƏ</h1>

                {/* Grid: Mobildə 1, Planşet və Desktopda 2 sütun */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.3s]">
                    {socialLinks.map((social, i) => (
                        <a
                            key={i}
                            href={social.url}
                            onMouseMove={handleMouseMove}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/card relative z-10 bg-[#06090f] border border-white/20 p-5 md:p-10 flex items-center justify-between transition-all duration-300 overflow-hidden active:scale-[0.98]"
                            style={{
                                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
                            }}
                        >
                            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition duration-300 z-0"
                                style={{
                                    background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 40%)`
                                }}
                            />

                            <div className="flex items-center gap-4 md:gap-6 relative z-10 overflow-hidden">
                                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center text-white/40 group-hover/card:border-white group-hover/card:text-white transition-all duration-500 bg-[#06090f]">
                                    {social.icon}
                                </div>

                                <div className="flex flex-col min-w-0">
                                    <div className="flex items-center gap-1.5 text-[7px] md:text-[9px] text-white/30 font-bold tracking-[0.15em] uppercase mb-0.5 md:mb-1">
                                        {social.tag}
                                        <span className="truncate">ID: {social.id} / {social.label}</span>
                                    </div>
                                    <h2 className="text-[#f0ebe2] text-lg md:text-3xl lg:text-4xl font-black italic tracking-tighter uppercase opacity-80 group-hover/card:opacity-100 transition-opacity truncate">
                                        {social.name}
                                    </h2>
                                </div>
                            </div>

                            <div className="relative z-10 flex items-center justify-center shrink-0 w-9 h-9 md:w-12 md:h-12 border border-white/20 rounded-lg md:rounded-xl group-hover/card:border-white text-white/40 group-hover/card:text-white transition-all duration-500 bg-[#06090f]">
                                <HiOutlineArrowUpRight className="text-lg md:text-2xl" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes fadeUp {
                  from { opacity: 0; transform: translateY(20px); }
                  to   { opacity: 1; transform: translateY(0); }
                }
            `}} />
        </section>
    );
}

export default Contact;