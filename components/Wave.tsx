/* Wavy section divider — the lassi swirl. `fill` is the color of the section BELOW. */
export default function Wave({
  fill,
  flip = false,
  className = "",
}: {
  fill: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-14 w-full sm:h-20 ${flip ? "rotate-180" : ""} ${className}`}
      style={{ marginBottom: "-1px", marginTop: "-1px" }}
    >
      <path
        d="M0,50 C180,90 360,10 540,40 C720,70 900,20 1080,45 C1260,70 1350,40 1440,55 L1440,90 L0,90 Z"
        fill={fill}
      />
    </svg>
  );
}
