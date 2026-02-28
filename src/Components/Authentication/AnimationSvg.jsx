const AnimationSvg=()=>{
  return (
    <svg viewBox="0 0 480 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
        </linearGradient>
        <filter id="lineGlow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Horizontal grid lines */}
      {[60, 100, 140, 180, 220, 260].map((y) => (
        <line key={y} x1="50" y1={y} x2="460" y2={y}
          stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5 7" />
      ))}

      {/* Y-axis price labels */}
      {[[60,"$540"],[100,"$500"],[140,"$460"],[180,"$420"],[220,"$380"],[260,"$340"]].map(([y, label]) => (
        <text key={y} x="44" y={+y + 4} fill="rgba(255,255,255,0.28)"
          fontSize="8.5" textAnchor="end" fontFamily="monospace">{label}</text>
      ))}

      {/* Gradient fill under the line */}
      <path
        d="M60,215 C95,195 130,178 170,155 C210,132 230,148 270,118 C310,88 340,102 375,72 C405,48 435,56 460,38 L460,272 L60,272 Z"
        fill="url(#chartFill)"
        style={{ opacity: 0, animation: "fadeIn 1s ease 3s forwards" }}
      />

      {/* Chart line — draws itself left to right */}
      <polyline
        fill="none" stroke="#93c5fd" strokeWidth="2.8"
        strokeLinecap="round" strokeLinejoin="round" filter="url(#lineGlow)"
        points="60,215 105,195 150,178 190,155 230,148 270,118 310,102 345,85 380,72 420,54 460,38"
        style={{ strokeDasharray: 850, strokeDashoffset: 850, animation: "drawLine 3s cubic-bezier(0.4,0,0.2,1) 0.5s forwards" }}
      />

      {/* Data point dots */}
      {[[60,215],[150,178],[230,148],[310,102],[380,72],[460,38]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4.5" fill="#3b82f6" stroke="white" strokeWidth="1.8"
          style={{ opacity: 0, animation: `fadeIn 0.4s ease ${3.1 + i * 0.1}s forwards` }} />
      ))}

      {/* Price tooltip */}
      <g style={{ opacity: 0, animation: "fadeIn 0.5s ease 3.8s forwards" }}>
        <rect x="388" y="22" width="68" height="30" rx="7"
          fill="rgba(30,58,138,0.92)" stroke="rgba(147,197,253,0.4)" strokeWidth="1" />
        <text x="422" y="34" fill="#93c5fd" fontSize="7.5" textAnchor="middle" fontFamily="monospace">AAPL</text>
        <text x="422" y="47" fill="white" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">$182.64</text>
      </g>

      {/* LIVE badge */}
      <g style={{ opacity: 0, animation: "fadeIn 0.4s ease 3.5s forwards" }}>
        <rect x="58" y="22" width="44" height="17" rx="8.5" fill="#ef4444" />
        <text x="80" y="34" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">● LIVE</text>
      </g>

      {/* Candlestick bars */}
      {[[75,16,"up"],[105,22,"down"],[135,18,"up"],[165,26,"up"],[195,14,"down"],
        [225,20,"up"],[255,28,"up"],[285,12,"down"],[315,24,"up"],[345,16,"down"],
        [375,22,"up"],[405,18,"up"],[435,26,"down"]
      ].map(([x, h, dir], i) => (
        <g key={i} style={{ opacity: 0, animation: `fadeIn 0.3s ease ${1.8 + i * 0.07}s forwards` }}>
          <line x1={x} y1={280} x2={x} y2={280 - h - 7}
            stroke={dir === "up" ? "#4ade80" : "#f87171"} strokeWidth="1.5" />
          <rect x={x - 5} y={280 - h} width="10" height={h} rx="2"
            fill={dir === "up" ? "#4ade80" : "#f87171"} opacity="0.85" />
        </g>
      ))}

      {/* Volume bars */}
      {[70,95,120,145,170,195,220,245,270,295,320,345,370,395,420,445].map((x, i) => (
        <rect key={i} x={x - 5} y={292} width="10"
          height={[8,12,6,14,10,8,16,6,12,10,14,8,10,12,6,10][i]}
          rx="1.5" fill="rgba(147,197,253,0.22)"
          style={{ opacity: 0, animation: `fadeIn 0.3s ease ${1.3 + i * 0.05}s forwards` }}
        />
      ))}

      {/* X-axis time labels */}
      {[[65,"9AM"],[165,"11AM"],[265,"1PM"],[365,"3PM"],[455,"5PM"]].map(([x, label]) => (
        <text key={label} x={x} y={310} fill="rgba(255,255,255,0.22)"
          fontSize="8" textAnchor="middle" fontFamily="monospace">{label}</text>
      ))}

      <style>{`
        @keyframes drawLine { to { stroke-dashoffset: 0; } }
        @keyframes fadeIn   { to { opacity: 1; } }
      `}</style>
    </svg>
  );
}
export default AnimationSvg;