import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Sun from "@/components/Sun";
import Wave from "@/components/Wave";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "Zyka started in Riya's family kitchen — with the drink her parents already loved and the protein their diet was missing.",
};

export default function About() {
  return (
    <>
      <Nav onCream />
      <main>
        {/* ————— Hero ————— */}
        <section className="bg-cream pb-16 pt-16 sm:pt-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="eyebrow rise rise-1 text-chili">Our story</p>
            <h1 className="display rise rise-2 mt-5 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)] text-masala">
              Protein, but make it{" "}
              <span className="text-chili">personal.</span>
            </h1>
          </div>
        </section>

        {/* ————— Photo + letter ————— */}
        <section className="bg-cream">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 sm:px-8 lg:grid-cols-[2fr_3fr] lg:gap-16">
            <Reveal>
              <figure
                className="sticker overflow-hidden rounded-3xl bg-turmeric shadow-[6px_6px_0_rgba(60,42,22,0.2)]"
                style={{ transform: "rotate(-1.5deg)" }}
              >
                <Image
                  src="/images/family.jpg"
                  alt="Riya with her mom and dad"
                  width={1106}
                  height={1400}
                  priority
                  className="w-full object-cover"
                />
                <figcaption className="bg-chili px-6 py-4 text-center font-bold text-cream">
                  The reason Zyka exists
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-6 text-lg leading-relaxed text-masala">
                <p className="display text-2xl text-masala sm:text-3xl">
                  Hi, I&rsquo;m Riya. Zyka started at my parents&rsquo; dinner
                  table.
                </p>
                <p>
                  My mom and dad have been vegetarian their whole lives, like a
                  lot of Indian families. And like a lot of Indian families,
                  their plates were full but their protein wasn&rsquo;t. Per the
                  Indian Dietetic Association, 84% of Indian vegetarian diets
                  fall short on protein — and most people have no idea how much
                  they actually need.
                </p>
                <p>
                  I tried the obvious fix. The chalky vanilla shake lasted about
                  a week on our counter before it was quietly pushed behind the
                  atta. It wasn&rsquo;t food to them. It didn&rsquo;t taste like
                  anything they loved.
                </p>
                <p>
                  But you know what was already on the table? Lassi.
                  Punjab&rsquo;s been drinking it for 3,000 years — yogurt,
                  whisked, alive with cultures, poured after meals as a
                  digestif. The original probiotic drink. It just never carried
                  serious protein.
                </p>
                <p>
                  So I stopped trying to change what my parents ate and
                  upgraded it instead. Zyka is the mango lassi they already
                  loved — real Alphonso mango, real live cultures — now with
                  20g of complete protein in every bottle. My dad drinks it
                  without being reminded. That&rsquo;s the whole quality bar.
                </p>
                <p>
                  <em>Zyka</em> means flavor, by the way. Taste was never
                  optional.
                </p>
                <p className="wordmark text-3xl text-chili">— Riya</p>
              </div>
            </Reveal>
          </div>
          <Wave fill="var(--palm)" />
        </section>

        {/* ————— What we believe ————— */}
        <section className="bg-palm pb-24 pt-6 text-cream">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow text-turmeric">What we believe</p>
            </Reveal>
            <div className="mt-10 grid gap-10 sm:grid-cols-3">
              {[
                {
                  title: "Tradition isn't a gimmick",
                  body: "Lassi didn't need reinventing — it needed respecting. We start from the real recipe and add only what's missing.",
                },
                {
                  title: "Protein should taste like home",
                  body: "The best nutrition is the kind people actually finish. If it doesn't beat the restaurant lassi, it doesn't ship.",
                },
                {
                  title: "Labels you can read out loud",
                  body: "Real mango, real cultures, real protein, and nothing you'd have to google. Zero added junk.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 120}>
                  <div>
                    <Sun className="h-8 w-8 text-turmeric" />
                    <h2 className="display mt-4 text-2xl">{item.title}</h2>
                    <p className="mt-3 leading-relaxed text-cream/85">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ————— CTA ————— */}
        <section className="bg-turmeric py-24 text-center">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <h2 className="display text-[clamp(2.2rem,5vw,4rem)] text-masala">
                Come find us in the cold case.
              </h2>
              <Link
                href="/#find-us"
                className="mt-9 inline-block rounded-full bg-chili px-8 py-4 font-bold text-cream shadow-[4px_4px_0_var(--masala)] transition-transform hover:-translate-y-1"
              >
                See where we&rsquo;re landing
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
