export default function Sun({
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
    </svg>
  );
}
