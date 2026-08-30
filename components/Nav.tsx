import Link from "next/link";
import Sun from "./Sun";

export default function Nav({ onCream = false }: { onCream?: boolean }) {
  return (
    <header
      className={`sticky top-0 z-50 ${
        onCream ? "bg-cream/90" : "bg-turmeric/90"
      } backdrop-blur-sm`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex flex-col items-center leading-none"
          aria-label="Zyka home"
        >
          <span className="wordmark text-3xl text-chili">zyka</span>
          <span className="devanagari text-[11px] font-medium text-masala/70">
            ज़ायका
          </span>
        </Link>
        <div className="flex items-center gap-5 sm:gap-8">
          <Link
            href="/#why-lassi"
            className="eyebrow hidden text-masala hover:text-chili sm:block"
          >
            Why lassi
          </Link>
          <Link
            href="/about"
            className="eyebrow text-masala hover:text-chili"
          >
            Our story
          </Link>
          <Link
            href="/#find-us"
            className="eyebrow flex items-center gap-2 rounded-full bg-chili px-5 py-2.5 text-cream transition-transform hover:-translate-y-0.5"
          >
            <Sun className="h-3.5 w-3.5" />
            Find us
          </Link>
        </div>
      </nav>
    </header>
  );
}
