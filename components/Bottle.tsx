export default function Bottle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 340"
      className={className}
      role="img"
      aria-label="Zyka mango lassi bottle"
    >
      {/* cap */}
      <rect x="68" y="14" width="64" height="36" rx="10" fill="#23644b" />
      <rect x="68" y="38" width="64" height="6" fill="#1b503b" />
      {/* neck ring */}
      <rect x="72" y="52" width="56" height="10" rx="5" fill="#f3e2bd" />
      {/* body */}
      <path
        d="M78 62 C78 76 38 82 38 116 L38 296 Q38 326 70 326 L130 326 Q162 326 162 296 L162 116 C162 82 122 76 122 62 Z"
        fill="#f6c75e"
      />
      {/* lassi swirl highlight */}
      <path
        d="M52 116 C52 96 78 88 84 76 L92 76 C86 94 62 100 62 118 L62 300 Q62 310 72 312 L64 312 Q52 310 52 298 Z"
        fill="#fbd98a"
      />
      {/* sun mark */}
      <g fill="#c33764" transform="translate(86 88) scale(0.28)">
        <circle cx="50" cy="50" r="13" />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            x="47.5"
            y="8"
            width="5"
            height="16"
            rx="2.5"
            transform={`rotate(${i * 45} 50 50)`}
          />
        ))}
      </g>
      {/* label */}
      <rect x="50" y="140" width="100" height="98" rx="20" fill="#c33764" />
      <text
        x="100"
        y="192"
        textAnchor="middle"
        fill="#fdf6e8"
        style={{
          font: "900 40px var(--font-fraunces), serif",
          fontVariationSettings: "'SOFT' 100, 'WONK' 1",
        }}
      >
        zyka
      </text>
      <text
        x="100"
        y="218"
        textAnchor="middle"
        fill="#fdf6e8"
        style={{
          font: "700 11px var(--font-archivo), sans-serif",
          letterSpacing: "0.18em",
        }}
      >
        MANGO · 20G
      </text>
      {/* base shadow line */}
      <rect x="56" y="314" width="88" height="4" rx="2" fill="#e0ae45" />
    </svg>
  );
}
