import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import HeroBottle from "@/components/HeroBottle";
import Sun from "@/components/Sun";
import SpinBadge from "@/components/SpinBadge";
import Wave from "@/components/Wave";
import Reveal from "@/components/Reveal";
import EmailForm from "@/components/EmailForm";

const STATS = [
  { big: "20g", small: "complete dairy protein", tilt: "-2deg" },
  { big: "Billions", small: "of live probiotic cultures", tilt: "1.5deg" },
  { big: "3,000", small: "years of lassi tradition", tilt: "-1deg" },
  { big: "Zero", small: "added junk", tilt: "2deg" },
];

const RETAILERS = ["Whole Foods", "Sprouts", "Target", "Costco", "H-E-B"];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* ————— Hero ————— */}
        <section className="relative overflow-hidden bg-turmeric">
          <Sun
            spin
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 text-turmeric-deep/60"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-14 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:pb-20 lg:pt-20">
            <div className="relative z-10">
              <p className="eyebrow rise rise-1 text-chili">
                The original smoothie, upgraded
              </p>
              <h1 className="display rise rise-2 mt-5 text-[clamp(3.2rem,9vw,7.5rem)] text-masala">
                Protein,
                <br />
                but make it{" "}
                <span className="text-chili">lassi.</span>
              </h1>
              <p className="rise rise-3 mt-6 max-w-md text-lg text-masala/80">
                20g of complete protein and billions of live cultures, blended
                into the mango lassi your favorite restaurant wishes it made.
              </p>
              <div className="rise rise-4 mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#find-us"
                  className="rounded-full bg-chili px-8 py-4 font-bold text-cream shadow-[4px_4px_0_var(--masala)] transition-transform hover:-translate-y-1"
                >
                  Find a store
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border-2 border-masala px-8 py-4 font-bold text-masala transition-transform hover:-translate-y-1"
                >
                  Why we made it
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <HeroBottle />
              <SpinBadge className="absolute bottom-14 left-0 z-20 h-28 w-28 drop-shadow-[3px_3px_0_rgba(60,42,22,0.3)] sm:-left-6 sm:h-32 sm:w-32" />
            </div>
          </div>
        </section>

        {/* ————— Ticker ————— */}
        <Marquee />

        {/* ————— Why lassi ————— */}
        <section id="why-lassi" className="bg-cream pt-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow text-palm">Why lassi</p>
              <h2 className="display mt-4 max-w-3xl text-[clamp(2.2rem,5vw,4rem)] text-masala">
                Punjab was blending probiotic drinks{" "}
                <span className="text-chili">3,000 years</span> before it was a
                trend.
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-masala-soft">
                Lassi is yogurt, whisked. Born in Punjab around 1000 BC, poured
                after meals as a digestif, served in clay cups long before
                anyone said &ldquo;gut health.&rdquo; Historians call it the
                original smoothie. We just gave it a protein upgrade.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Cultured, actually",
                  body: "Real yogurt cultures, alive in every bottle. Billions of them, supporting your gut the way lassi always has.",
                  bg: "bg-turmeric",
                  text: "text-masala",
                },
                {
                  title: "20g complete protein",
                  body: "All nine essential amino acids from dairy protein — the amount research links to muscle maintenance and staying full.",
                  bg: "bg-chili",
                  text: "text-cream",
                },
                {
                  title: "Real mango",
                  body: "Alphonso mango — India's national fruit, the king of fruits. No candy-mango flavoring pretending to be the real thing.",
                  bg: "bg-palm",
                  text: "text-cream",
                },
              ].map((card, i) => (
                <Reveal key={card.title} delay={i * 120}>
                  <div
                    className={`sticker h-full rounded-3xl ${card.bg} ${card.text} p-8 shadow-[5px_5px_0_rgba(60,42,22,0.2)]`}
                    style={{ transform: `rotate(${(i - 1) * 1.2}deg)` }}
                  >
                    <Sun className="h-8 w-8 opacity-80" />
                    <h3 className="display mt-5 text-2xl">{card.title}</h3>
                    <p className="mt-3 leading-relaxed opacity-90">
                      {card.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Wave fill="var(--palm)" className="mt-20" />
        </section>

        {/* ————— Stats band ————— */}
        <section className="bg-palm pb-20 pt-8 text-cream">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow text-turmeric">On the label</p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
              {STATS.map((stat, i) => (
                <Reveal key={stat.big} delay={i * 100}>
                  <div style={{ transform: `rotate(${stat.tilt})` }}>
                    <p className="display text-[clamp(2.6rem,6vw,4.5rem)] text-turmeric">
                      {stat.big}
                    </p>
                    <p className="eyebrow mt-2 text-cream/80">{stat.small}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ————— Story teaser ————— */}
        <section className="relative overflow-hidden bg-chili py-24 text-cream">
          <Sun
            spin
            className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 text-chili-deep/60"
          />
          <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
            <Reveal>
              <p className="eyebrow text-turmeric">Our story</p>
              <h2 className="display mt-5 text-[clamp(2.2rem,5vw,4rem)]">
                84% of Indian vegetarian diets don&rsquo;t get enough protein.
                Two of them belonged to my parents.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-cream/85">
                Zyka started in Riya&rsquo;s family kitchen, with the drink her
                parents already loved and the protein their diet was missing.
              </p>
              <Link
                href="/about"
                className="mt-9 inline-block rounded-full bg-cream px-8 py-4 font-bold text-chili shadow-[4px_4px_0_var(--chili-deep)] transition-transform hover:-translate-y-1"
              >
                Meet Riya
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ————— Find us ————— */}
        <section id="find-us" className="bg-cream py-24">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
            <Reveal>
              <p className="eyebrow text-chili">Find us</p>
              <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4rem)] text-masala">
                Coming to a cold case near you.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-masala-soft">
                We&rsquo;re launching with major retailers first — no checkout
                here yet, just shelves. Drop your email and we&rsquo;ll tell you
                the moment Zyka lands nearby.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                {RETAILERS.map((name) => (
                  <span
                    key={name}
                    className="display text-2xl text-masala/35 sm:text-3xl"
                  >
                    {name}
                  </span>
                ))}
              </div>
              <p className="eyebrow mt-4 text-masala-soft/60">
                In conversation — watch this space
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-12 flex justify-center">
                <EmailForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
