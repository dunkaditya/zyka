export default function SpinBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <path
          id="badge-circle"
          d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
        />
      </defs>
      <circle cx="60" cy="60" r="58" fill="#c33764" />
      <g className="sun-spin" style={{ transformOrigin: "60px 60px" }}>
        <text
          fill="#fdf6e8"
          style={{ font: "700 13px var(--font-bricolage), sans-serif" }}
        >
          <textPath
            href="#badge-circle"
            textLength="276"
            lengthAdjust="spacingAndGlyphs"
          >
            20G PROTEIN · GUT LOVE · 20G PROTEIN ·&nbsp;
          </textPath>
        </text>
      </g>
      <g fill="#fdf6e8" transform="translate(35 35) scale(0.5)">
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
    </svg>
  );
}
