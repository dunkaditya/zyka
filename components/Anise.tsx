/* Star anise flower — spice-rack iconography that doubles as a starburst */
export default function Anise({
  className = "",
  spin = false,
}: {
  className?: string;
  spin?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${spin ? "sun-spin " : ""}${className}`}
      aria-hidden="true"
      fill="currentColor"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="26"
          rx="10.5"
          ry="15.5"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
      <path
        fillRule="evenodd"
        d="M50 41.5 a8.5 8.5 0 1 0 0 17 a8.5 8.5 0 1 0 0 -17 Z M50 46 a4 4 0 1 1 0 8 a4 4 0 1 1 0 -8 Z"
      />
      <circle cx="50" cy="50" r="1.8" />
    </svg>
  );
}
