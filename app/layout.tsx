import type { Metadata } from "next";
import { Fraunces, Archivo } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
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
      <body className={`${fraunces.variable} ${archivo.variable}`}>
        {children}
      </body>
    </html>
  );
}
