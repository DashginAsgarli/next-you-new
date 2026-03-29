import React, { useState } from 'react';
import { HiOutlineColorSwatch, HiCheck } from 'react-icons/hi';

function ColorPickerTool() {
    const [color, setColor] = useState('#378079');
    const [copied, setCopied] = useState('');

    function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
    }

    function hexToHsl(hex) {
        let { r, g, b } = hexToRgb(hex);
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
            else if (max === g) h = (b - r) / d + 2;
            else if (max === b) h = (r - g) / d + 4;
            h /= 6;
        }
        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100)
        };
    };

    function copyToClipboard(text, label) {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(''), 1500);
    };

    const { r, g, b } = hexToRgb(color);
    const { h, s, l } = hexToHsl(color);

    const formats = [
        { label: 'HEX', value: color.toUpperCase() },
        { label: 'RGB', value: `rgb(${r}, ${g}, ${b})` },
        { label: 'HSL', value: `hsl(${h}, ${s}%, ${l}%)` },
    ];

    return (
        <div className="bg-[#06090f] border border-white/10 p-6 rounded-lg ">
            <div className="flex items-center gap-3 mb-6">
                <HiOutlineColorSwatch size={18} className="text-[#378079]" />
                <h3 className="font-black text-[#f0ebe2] uppercase tracking-tight text-sm">
                    Rəng Seçici
                </h3>
            </div>

            <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 border-2 border-white/10 rounded-lg transition-colors duration-300" style={{ backgroundColor: color }} />
                <div className="flex flex-col gap-2">
                    <span className="text-[10px] text-[#f0ebe2]/40 font-mono uppercase">Rəngi Dəyiş:</span>
                    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-12 h-12 cursor-pointer bg-transparent border-0 p-0" />
                </div>
            </div>

            <div className="space-y-3">
                {formats.map((fmt) => (
                    <div key={fmt.label} className="flex items-center justify-between bg-[#0a0e14] border border-white/5 px-4 py-3 rounded group hover:border-[#378079]/30 transition-all">
                        <div>
                            <span className="text-[8px] font-mono text-[#378079] uppercase tracking-wider block mb-1">
                                {fmt.label}
                            </span>
                            <span className="text-[12px] font-mono text-[#f0ebe2]/80">
                                {fmt.value}
                            </span>
                        </div>

                        <button onClick={() => copyToClipboard(fmt.value, fmt.label)} className="p-2 text-[#f0ebe2]/30 hover:text-[#378079] transition-all">
                            {copied === fmt.label ? (
                                <HiCheck size={16} className="text-[#378079] animate-bounce" />
                            ) : (
                                <span className="text-lg opacity-50 hover:opacity-100">⧉</span>
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorPickerTool;