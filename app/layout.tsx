import type { Metadata } from "next";
import {
  Young_Serif,
  Bricolage_Grotesque,
  Noto_Serif_Devanagari,
} from "next/font/google";
import "./globals.css";

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-young",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const devanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drinkzyka.com"),
  title: {
    default: "Zyka — Protein, but make it lassi",
    template: "%s — Zyka",
  },
  description:
    "20g of complete protein and billions of live probiotic cultures in a real mango lassi. The 3,000-year-old drink, upgraded.",
  openGraph: {
    title: "Zyka — Protein, but make it lassi",
    description:
      "20g of complete protein and billions of live probiotic cultures in a real mango lassi.",
    url: "https://drinkzyka.com",
    siteName: "Zyka",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${youngSerif.variable} ${bricolage.variable} ${devanagari.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
