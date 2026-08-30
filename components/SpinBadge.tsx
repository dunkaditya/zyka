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
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            cx="50"
            cy="28"
            rx="9.5"
            ry="14"
            transform={`rotate(${i * 45} 50 50)`}
          />
        ))}
        <path
          fillRule="evenodd"
          d="M50 42 a8 8 0 1 0 0 16 a8 8 0 1 0 0 -16 Z M50 46 a4 4 0 1 1 0 8 a4 4 0 1 1 0 -8 Z"
        />
      </g>
    </svg>
  );
}
