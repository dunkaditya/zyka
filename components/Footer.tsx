import Link from "next/link";
import Anise from "./Anise";

export default function Footer() {
  return (
    <footer className="bg-masala text-cream">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-8">
        <div className="flex flex-col gap-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Anise className="h-10 w-10 text-chili" />
            <p className="wordmark mt-3 text-6xl text-turmeric sm:text-7xl">
              zyka
            </p>
            <p className="devanagari mt-2 text-2xl text-cream/80">ज़ायका</p>
            <p className="eyebrow mt-4 text-cream/70">
              Protein, but make it lassi
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div className="flex flex-col gap-3">
              <p className="eyebrow text-turmeric">Explore</p>
              <Link href="/#why-lassi" className="hover:text-turmeric">
                Why lassi
              </Link>
              <Link href="/about" className="hover:text-turmeric">
                Our story
              </Link>
              <Link href="/#find-us" className="hover:text-turmeric">
                Find us
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="eyebrow text-turmeric">Say hi</p>
              <a href="mailto:hello@drinkzyka.com" className="hover:text-turmeric">
                hello@drinkzyka.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-turmeric"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-turmeric"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 flex items-center gap-3 border-t border-cream/15 pt-6 text-xs text-cream/50">
          <Anise className="h-4 w-4 text-turmeric" />
          <p>
            © {new Date().getFullYear()} Zyka. These statements have not been
            evaluated by the FDA. This product is not intended to diagnose,
            treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
