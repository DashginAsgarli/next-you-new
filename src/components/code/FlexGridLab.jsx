import { useState } from 'react';

function FlexGridLab() {

    const flexProps = {
        flexDirection: { values: ['row', 'row-reverse', 'column', 'column-reverse'], label: 'flex-direction' },
        justifyContent: { values: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'], label: 'justify-content' },
        alignItems: { values: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'], label: 'align-items' },
        flexWrap: { values: ['nowrap', 'wrap', 'wrap-reverse'], label: 'flex-wrap' },
        gap: { values: ['0px', '4px', '8px', '12px', '16px', '24px'], label: 'gap' },
    };

    const gridProps = {
        gridTemplateColumns: { values: ['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', '1fr 2fr', '2fr 1fr 1fr'], label: 'grid-template-columns' },
        gridTemplateRows: { values: ['auto', 'repeat(2, 80px)', 'repeat(3, 60px)', '80px auto'], label: 'grid-template-rows' },
        gap: { values: ['0px', '4px', '8px', '16px', '24px'], label: 'gap' },
        justifyItems: { values: ['start', 'center', 'end', 'stretch'], label: 'justify-items' },
        alignItems: { values: ['start', 'center', 'end', 'stretch'], label: 'align-items' },
    };

    const boxCount = 6;
    const itemNumbers = Array.from({ length: boxCount }, (_, i) => i + 1);
    const itemColors = ['#378079', '#3a6d9a', '#9a7a2a', '#7a3a9a', '#e87a6a', '#6ae890'];
    const [viewMode, setViewMode] = useState('flex');

    const [flexState, setFlexState] = useState({
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        gap: '8px'
    });

    const [gridState, setGridState] = useState({
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'auto',
        gap: '8px',
        justifyItems: 'stretch',
        alignItems: 'stretch'
    });

    const activeState = viewMode === 'flex' ? flexState : gridState;
    const activeSetter = viewMode === 'flex' ? setFlexState : setGridState;
    const activeProps = viewMode === 'flex' ? flexProps : gridProps;

    const containerStyle = viewMode === 'flex' ? { display: 'flex', ...flexState, minHeight: '160px' } : { display: 'grid', ...gridState, minHeight: '160px' };

    let cssProperties = "";
    const stateKeys = Object.keys(activeState);

    stateKeys.forEach((key) => {
        const value = activeState[key];
        const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        cssProperties += `  ${cssKey}: ${value};\n`;
    });

    const finalCssCode = `.container {\n  display: ${viewMode};\n${cssProperties}}`;

    return (
        <section className="px-8 md:px-16 py-10 border-t border-white/5">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-px bg-[#378079]" />
                <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">C-07 · CSS Lab</span>
            </div>

            <h2 className="text-[#f0ebe2] font-black text-[1.8rem] md:text-[2.2rem] leading-tight tracking-tighter uppercase mb-6">
                FLEXBOX / GRID <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">LAB</span>
            </h2>

            <div className="flex gap-3 mb-5">
                {['flex', 'grid'].map((option) => (
                    <button key={option} onClick={() => setViewMode(option)} className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-widest border transition-all ${viewMode === option ? 'border-[#378079] text-[#378079] bg-[#378079]/10' : 'border-white/15 text-white/35 hover:border-white/30'}`}>
                        {option}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-2 bg-[#0b0f17] border border-white/5 rounded-2xl p-5 space-y-4">
                    {Object.keys(activeProps).map((propKey) => {
                        const config = activeProps[propKey];
                        return (
                            <div key={propKey}>
                                <label className="block text-[9px] font-bold text-[#378079] uppercase tracking-[0.2em] mb-2">
                                    {config.label}
                                </label>
                                <div className="flex flex-wrap gap-1.5">
                                    {config.values.map((val) => (
                                        <button key={val} onClick={() => activeSetter({ ...activeState, [propKey]: val })} className={`px-2.5 py-1 text-[9px] font-mono border transition-all ${activeState[propKey] === val ? 'border-[#378079] text-[#378079] bg-[#378079]/10' : 'border-white/10 text-white/30 hover:border-white/25'}`}>
                                            {val}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="lg:col-span-3 space-y-4">
                    <div className="bg-[#0b0f17] border border-white/5 rounded-2xl p-5">
                        <p className="text-[9px] text-white/20 uppercase tracking-widest mb-3">Canlı Nəticə</p>
                        <div className=" border border-dashed border-[rgba(55,128,121,0.3)] rounded-lg  p-3 bg-[rgba(55,128,121,0.06)]" style={{ ...containerStyle }}>
                            {itemNumbers.map((num) => (
                                <div key={num} className=" flex items-center justify-center rounded-md min-w-10 min-h-10 p-2 font-bold text-[11px] " style={{ background: itemColors[num - 1] + '30', border: `1px solid ${itemColors[num - 1]}50`, color: itemColors[num - 1], }}>
                                    {num}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#030508] border border-white/5 rounded-xl p-4 relative">
                        <button onClick={() => navigator.clipboard.writeText(finalCssCode)} className="absolute top-3 right-3 text-[9px] text-[#378079] uppercase tracking-widest hover:text-white transition-colors">
                            Kopyala
                        </button>
                        <pre className="text-[11px] font-mono text-[#a3d9d4] whitespace-pre-wrap">
                            {finalCssCode}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FlexGridLab;