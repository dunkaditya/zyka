import Link from "next/link";
import Anise from "./Anise";

export default function Nav({ onCream = false }: { onCream?: boolean }) {
  return (
    <header className={onCream ? "bg-cream" : "bg-turmeric"}>
      <Link
        href="/#find-us"
        className="block bg-chili px-4 py-2.5 text-center text-cream transition-colors hover:bg-chili-deep"
      >
        <span className="eyebrow sm:hidden">Get on the list&nbsp;→</span>
        <span className="eyebrow hidden sm:inline">
          First sips land soon — get on the list&nbsp;→
        </span>
      </Link>
      <nav className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 py-4 sm:px-8 sm:py-5">
        <div className="flex items-center gap-5 sm:gap-8">
          <Link
            href="/#why-lassi"
            className="eyebrow hidden text-masala hover:text-chili sm:block"
          >
            Why lassi
          </Link>
          <Link href="/about" className="eyebrow text-masala hover:text-chili">
            Our story
          </Link>
        </div>
        <Link
          href="/"
          className="flex flex-col items-center leading-none"
          aria-label="Zyka home"
        >
          <span className="wordmark text-4xl text-chili sm:text-6xl">zyka</span>
          <span className="devanagari mt-1 text-xs font-medium text-masala/70 sm:mt-1.5 sm:text-base">
            ज़ायका
          </span>
        </Link>
        <div className="flex justify-end">
          <Link
            href="/#find-us"
            className="eyebrow flex items-center gap-2 whitespace-nowrap rounded-full bg-chili px-4 py-2 text-cream transition-transform hover:-translate-y-0.5 sm:px-5 sm:py-2.5"
          >
            <Anise className="hidden h-3.5 w-3.5 sm:block" />
            Find us
          </Link>
        </div>
      </nav>
    </header>
  );
}
