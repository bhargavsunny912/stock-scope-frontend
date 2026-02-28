import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

// // ─── Animated SVG Stock Chart ───
function StockIllustration() {
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

// ─── Main Auth Page ───
export default function StockScopeAuth() {
  const [tab, setTab] = useState("login");

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh", fontFamily: "'Segoe UI', system-ui, sans-serif", overflow: "hidden" }}>

      {/* ══════════════════════════════════════
          LEFT — 60% | Blue panel with chart
      ══════════════════════════════════════ */}
      <div style={{
        width: "60%",
        flexShrink: 0,
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Dot grid background */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(147,197,253,0.18) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />

        {/* Glow blob top-left */}
        <div style={{
          position: "absolute", top: -80, left: -80, width: 380, height: 380,
          borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(96,165,250,0.22), transparent 70%)",
        }} />

        {/* Glow blob bottom-right */}
        <div style={{
          position: "absolute", bottom: -60, right: -60, width: 300, height: 300,
          borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)",
        }} />

        {/* Logo — top left */}
        <Link to="/" style={{ position: "absolute", top: 28, left: 28, display: "flex", alignItems: "center", gap: 10, zIndex: 10 }}>
          <div style={{ width: 36, height: 36, background: "white", borderRadius: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
            <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
              <polyline points="2,14 7,8 11,11 18,4" stroke="#1d4ed8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="18" cy="4" r="2" fill="#1d4ed8" />
            </svg>
          </div>
          <span style={{ color: "white", fontSize: 20, fontWeight: 700, letterSpacing: "0.04em" }}>StockScope</span>
        </Link>

        {/* Chart — fully centered */}
        <div style={{ width: "85%", maxWidth: 460, zIndex: 2 }}>
          <StockIllustration />
        </div>

        {/* Tagline below the chart */}
        <div style={{ textAlign: "center", marginTop: 24, zIndex: 2 }}>
          <p style={{ color: "white", fontSize: 20, fontWeight: 700, margin: 0 }}>
            Trade with Clarity
          </p>
          <p style={{ color: "rgba(147,197,253,0.8)", fontSize: 13, marginTop: 6, fontWeight: 300 }}>
            Real-time insights for smarter investing
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════
          RIGHT — 40% | White auth form
      ══════════════════════════════════════ */}
      <div className="right-container">
        <div style={{ width: "100%", maxWidth: 340 }}>

          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <div style={{ width: 36, height: 36, background: "#2563eb", borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 12px rgba(37,99,235,0.35)" }}>
              <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
                <polyline points="2,14 7,8 11,11 18,4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="18" cy="4" r="2" fill="white" />
              </svg>
            </div>
            <span style={{ color: "#1e3a8a", fontSize: 20, fontWeight: 700 }}>StockScope</span>
          </Link>

          {/* Tab switcher */}
          <div style={{ display: "flex", background: "#f1f5f9", borderRadius: 12, padding: 4, marginBottom: 28, gap: 4 }}>
            {["login", "signup"].map((t) => (
              <button key={t} onClick={() => setTab(t)} style={{
                flex: 1, padding: "10px 0", border: "none", borderRadius: 9,
                cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 600,
                transition: "all 0.2s",
                background: tab === t ? "#2563eb" : "transparent",
                color: tab === t ? "white" : "#64748b",
                boxShadow: tab === t ? "0 2px 8px rgba(37,99,235,0.3)" : "none",
              }}>
                {t === "login" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>

          {/* LOGIN FORM */}
        <AnimatePresence>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {tab === "login" && <Login setTab={setTab}/>}
          </motion.div>
        </AnimatePresence>


          {/* SIGNUP FORM */}
          {tab === "signup" && <Signup setTab={setTab} />}

        </div>
      </div>

    </div>
  );
}
