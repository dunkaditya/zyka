/* Flat packshot-style bottle, Koia-inspired: ribbed cap, square shoulders,
   full-wrap label — arch mark, wordmark + Devanagari, flavor band, badges. */

const BADGES: [string, string][] = [
  ["LIVE", "CULTURES"],
  ["REAL", "MANGO"],
  ["NO ADDED", "JUNK"],
];

export default function Bottle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 600"
      className={className}
      role="img"
      aria-label="Zyka mango lassi bottle"
    >
      {/* cap */}
      <rect x="100" y="8" width="80" height="46" rx="8" fill="#f7f1e3" />
      {Array.from({ length: 9 }).map((_, i) => (
        <rect
          key={i}
          x={106 + i * 8.5}
          y="12"
          width="2.5"
          height="38"
          rx="1.25"
          fill="#e2d7bd"
        />
      ))}
      <rect x="96" y="54" width="88" height="10" rx="5" fill="#ece2ca" />

      {/* bottle body — mango liquid showing above the label */}
      <path
        d="M112 64
           L168 64
           C176 96 236 104 242 148
           L242 534
           Q242 562 214 562
           L66 562
           Q38 562 38 534
           L38 148
           C44 104 104 96 112 64 Z"
        fill="#f6c75e"
      />
      {/* wrap label */}
      <path
        d="M38 168 L242 168 L242 534 Q242 562 214 562 L66 562 Q38 562 38 534 Z"
        fill="#fdf6e8"
      />

      {/* arch mark */}
      <path
        d="M108 262 L108 216 Q108 182 140 182 Q172 182 172 216 L172 262 Z"
        fill="#c33764"
      />
      <g fill="#fdf6e8" transform="translate(125 207) scale(0.3)">
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

      {/* wordmark + Devanagari */}
      <text
        x="140"
        y="320"
        textAnchor="middle"
        fill="#c33764"
        style={{ font: "400 58px var(--font-young), Georgia, serif" }}
      >
        zyka
      </text>
      <text
        x="140"
        y="352"
        textAnchor="middle"
        fill="#6d573a"
        style={{ font: "500 22px var(--font-devanagari), serif" }}
      >
        ज़ायका
      </text>

      {/* flavor band */}
      <rect x="38" y="372" width="204" height="92" fill="#c33764" />
      <rect x="38" y="378" width="204" height="2" fill="#fdf6e8" opacity="0.7" />
      <rect x="38" y="456" width="204" height="2" fill="#fdf6e8" opacity="0.7" />
      <text
        x="140"
        y="420"
        textAnchor="middle"
        fill="#fdf6e8"
        style={{
          font: "800 34px var(--font-bricolage), sans-serif",
          letterSpacing: "0.14em",
        }}
      >
        MANGO
      </text>
      <text
        x="140"
        y="446"
        textAnchor="middle"
        fill="#f6c75e"
        style={{
          font: "700 15px var(--font-bricolage), sans-serif",
          letterSpacing: "0.22em",
        }}
      >
        20G PROTEIN
      </text>

      {/* badge circles */}
      {BADGES.map(([top, bottom], i) => (
        <g key={top} transform={`translate(${74 + i * 66} 496)`}>
          <circle r="26" fill="none" stroke="#c33764" strokeWidth="2" />
          <text
            y="-2"
            textAnchor="middle"
            fill="#c33764"
            style={{
              font: "800 8px var(--font-bricolage), sans-serif",
                          }}
          >
            {top}
          </text>
          <text
            y="9"
            textAnchor="middle"
            fill="#c33764"
            style={{
              font: "800 8px var(--font-bricolage), sans-serif",
                          }}
          >
            {bottom}
          </text>
        </g>
      ))}

      {/* fine print */}
      <text
        x="140"
        y="546"
        textAnchor="middle"
        fill="#6d573a"
        style={{
          font: "700 10px var(--font-bricolage), sans-serif",
          letterSpacing: "0.18em",
        }}
      >
        PROTEIN LASSI · 12 FL OZ
      </text>

      {/* flat shading — right shadow, left highlight */}
      <path
        d="M214 96 C230 110 240 128 242 148 L242 534 Q242 562 214 562 L196 562 C222 560 226 542 226 520 L226 150 C224 126 218 108 206 94 Z"
        fill="#3c2a16"
        opacity="0.06"
      />
      <path
        d="M66 100 C52 112 44 130 40 150 L40 480 L52 480 L52 152 C56 130 62 114 74 100 Z"
        fill="#ffffff"
        opacity="0.35"
      />
    </svg>
  );
}
