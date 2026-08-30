const ITEMS = [
  "20g complete protein",
  "billions of live cultures",
  "real alphonso mango",
  "no added junk",
  "the original smoothie",
];

export default function Marquee() {
  const row = (hidden: boolean) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden || undefined}
    >
      {ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center whitespace-nowrap font-bold uppercase tracking-[0.18em] text-cream text-sm"
        >
          <span className="px-6">{item}</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-turmeric" aria-hidden="true">
            <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden bg-chili py-3.5">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
