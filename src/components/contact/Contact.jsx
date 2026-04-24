import React from 'react';
import { HiOutlineArrowUpRight, HiOutlineGlobeAlt, HiOutlineChatBubbleLeftRight, HiOutlineHashtag, HiOutlineUserGroup } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdOutlineContactEmergency } from "react-icons/md";
const socialLinks = [
    { name: "Github", icon: <FaGithub size={22} />, url: "https://github.com/", id: "01", label: "Open Source", tag: <HiOutlineGlobeAlt size={12} /> },
    { name: "Linkedin", icon: <FaLinkedinIn size={22} />, url: "https://www.linkedin.com/", id: "02", label: "Professional", tag: <HiOutlineChatBubbleLeftRight size={12} /> },
    { name: "Instagram", icon: <FaInstagram size={22} />, url: "https://instagram.com", id: "03", label: "Visual Feed", tag: <HiOutlineHashtag size={12} /> },
    { name: "Facebook", icon: <FaFacebookF size={22} />, url: "https://www.facebook.com/", id: "04", label: "Community", tag: <HiOutlineUserGroup size={12} /> },
];

function Contact() {
    function handleMouseMove(e) {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        currentTarget.style.setProperty("--mouse-x", `${x}px`);
        currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <section>
            <div className="relative z-10 px-8 md:px-16 py-10 md:py-16">
                <div className="flex items-center gap-2.5 mb-8 animate-[fadeUp_0.7s_ease_both] text-[#378079]">
                    <MdOutlineContactEmergency/>
                    <span className="text-[9px] md:text-[10px] tracking-[0.3em]  uppercase font-bold text-nowrap">Əlaqə Məlumatları</span>
                </div>

                <h1 className="font-black text-[2rem] md:text-[3rem] lg:text-[4rem] leading-none mb-6 md:mb-10 lg:mb-12 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.15s] uppercase text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">ƏLAQƏ</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 animate-[fadeUp_0.7s_ease_both] [animation-delay:0.3s]">
                    {socialLinks.map((social, index) => (
                        <a key={index} href={social.url} onMouseMove={handleMouseMove} target="_blank" rel="noopener noreferrer" className="beveled-box group/card relative z-10 bg-[#06090f] border border-white/20 p-5 md:p-10 flex items-center justify-between transition-all duration-300 overflow-hidden active:scale-[0.98]" >
                            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition duration-300 z-0             bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.08),transparent_40%)]" />
                            <div className="flex items-center gap-4 md:gap-6 relative z-10 overflow-hidden">
                                <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 shrink-0 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center text-white/40 group-hover/card:border-white group-hover/card:text-white transition-all duration-500 bg-[#06090f]">
                                    {social.icon}
                                </div>

                                <div className="flex flex-col min-w-0">
                                    <div className="flex items-center gap-1.5 text-[7px] md:text-[9px] text-white/30 font-bold tracking-[0.15em] uppercase mb-0.5 md:mb-1">
                                        {social.tag}
                                        <span className="truncate"> {social.label}</span>
                                    </div>
                                    <h2 className="text-[#f0ebe2] text-lg md:text-2xl lg:text-4xl font-black  tracking-tighter opacity-80 group-hover/card:opacity-100 transition-opacity truncate">
                                        {social.name}
                                    </h2>
                                </div>
                            </div>

                            <div className="relative z-10 flex items-center justify-center shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border border-white/20 rounded-lg md:rounded-xl group-hover/card:border-white text-white/40 group-hover/card:text-white transition-all duration-500 bg-[#06090f]">
                                <HiOutlineArrowUpRight className="text-lg md:text-2xl" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Contact;