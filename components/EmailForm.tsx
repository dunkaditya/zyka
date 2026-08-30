"use client";

import { useState } from "react";

export default function EmailForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="rounded-full bg-palm px-8 py-4 text-center font-bold text-cream">
        You&apos;re on the list. First sip news coming your way.
      </p>
    );
  }

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <form
        className="flex w-full flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: wire to email provider (Resend/Klaviyo) before launch
          setDone(true);
        }}
      >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        placeholder="you@email.com"
        className="w-full rounded-full border-2 border-masala/20 bg-white px-6 py-3.5 text-masala placeholder:text-masala-soft/60 focus:border-chili focus:outline-none"
      />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-chili px-8 py-3.5 font-bold text-cream transition-transform hover:-translate-y-0.5"
        >
          Keep me posted
        </button>
      </form>
      <p className="text-sm text-masala-soft/70">
        No spam — just first sips and store drops.
      </p>
    </div>
  );
}
