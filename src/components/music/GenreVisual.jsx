import { useState } from 'react';

function GenreVisual() {

  const genres = [
    { name: 'Techno', key: 'techno' },
    { name: 'Lofi', key: 'lofi' },
    { name: 'Jazz', key: 'jazz' },
    { name: 'Rock', key: 'rock' },
    { name: 'Classical', key: 'classical' },
    { name: 'Hip-Hop', key: 'hiphop' },
  ];

  const defaultValues = { techno: 7, lofi: 5, jazz: 4, rock: 6, classical: 3, hiphop: 8, };

  function getRadarPoints(values, cx, cy, radius) {
    const total = genres.length;
    return genres.map((g, i) => {
      const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
      const val = values[g.key] / 10;
      const x = cx + radius * val * Math.cos(angle);
      const y = cy + radius * val * Math.sin(angle);
      return [x, y];
    });
  }

  function getGridPoints(cx, cy, radius, fraction) {
    return genres.map((g, i) => {
      const angle = (Math.PI * 2 * i) / genres.length - Math.PI / 2;
      const x = cx + radius * fraction * Math.cos(angle);
      const y = cy + radius * fraction * Math.sin(angle);
      return [x, y];
    });
  }

  function pointsToPath(pts) {
    return pts.map((p, i) => { return (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ') + ' Z';
  }

  const [values, setValues] = useState(defaultValues);
  const [hovered, setHovered] = useState(null);

  const cx = 160, cy = 160, radius = 120;

  function handleChange(key, val) {
    setValues((prev) => {
      const next = {};
      Object.keys(prev).forEach((k) => { next[k] = prev[k]; });
      next[key] = Number(val);
      return next;
    });
  }

  const radarPts = getRadarPoints(values, cx, cy, radius);
  const gridFractions = [0.25, 0.5, 0.75, 1];

  return (
    <section className="px-8 md:px-16 py-10 relative overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-px bg-[#378079]" />
        <span className="text-[9px] tracking-[0.3em] text-[#378079] uppercase font-bold">Janr Analizi</span>
      </div>
      <h2 className="text-[#f0ebe2] font-black text-[2rem] md:text-[2.5rem] leading-tight tracking-tighter uppercase mb-10">
        JANR <span className="text-transparent [-webkit-text-stroke:1.5px_#f0ebe2]">PROFİLİN</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <svg width="320" height="320" viewBox="0 0 320 320">
            {gridFractions.map((f, fi) => {
              const gpts = getGridPoints(cx, cy, radius, f);
              return (
                <polygon
                  key={fi}
                  points={gpts.map((p) => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ')}
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />
              );
            })}

            {genres.map((g, i) => {
              const angle = (Math.PI * 2 * i) / genres.length - Math.PI / 2;
              const x2 = cx + radius * Math.cos(angle);
              const y2 = cy + radius * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={cx} y1={cy}
                  x2={x2.toFixed(1)} y2={y2.toFixed(1)}
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />
              );
            })}

            <path
              d={pointsToPath(radarPts)}
              fill="rgba(55,128,121,0.25)"
              stroke="#378079"
              strokeWidth="2"
            />

            {radarPts.map((p, i) => (
              <circle
                key={i}
                cx={p[0].toFixed(1)}
                cy={p[1].toFixed(1)}
                r="5"
                fill="#378079"
              />
            ))}

            {genres.map((g, i) => {
              const angle = (Math.PI * 2 * i) / genres.length - Math.PI / 2;
              const lx = cx + (radius + 22) * Math.cos(angle);
              const ly = cy + (radius + 22) * Math.sin(angle);
              return (
                <text
                  key={i}
                  x={lx.toFixed(1)}
                  y={ly.toFixed(1)}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={hovered === g.key ? '#378079' : 'rgba(240,235,226,0.6)'}
                  fontSize="10"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  style={{ textTransform: 'uppercase', letterSpacing: '1px' }}
                >
                  {g.name}
                </text>
              );
            })}
          </svg>
        </div>

        <div className="space-y-5">
          {genres.map((g) => (
            <div
              key={g.key}
              onMouseEnter={function () { setHovered(g.key); }}
              onMouseLeave={function () { setHovered(null); }}
              className="group"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#f0ebe2]/70 group-hover:text-[#378079] transition-colors">
                  {g.name}
                </span>
                <span className="text-[11px] font-mono text-[#378079]">{values[g.key]}/10</span>
              </div>
              <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-[#378079] transition-all duration-300 rounded-full"
                  style={{ width: (values[g.key] * 10) + '%' }}
                />
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={values[g.key]}
                onChange={function (e) { handleChange(g.key, e.target.value); }}
                className="w-full mt-1 opacity-0 h-4 cursor-pointer absolute"
                style={{ marginTop: '-22px', position: 'relative' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GenreVisual;