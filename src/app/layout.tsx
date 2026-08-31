import type { Metadata } from "next";
import { Outfit, Playfair_Display, Gotu } from "next/font/google";
import "./globals.css";
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const gotu = Gotu({
  variable: "--font-gotu",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "MUREC — Madhusudan Urban Real Estate Collection",
  description:
    "MUREC offers luxury apartments with premium amenities, modern design, and a prime location. 78+ years of legacy in building trust, quality, and innovation.",
  keywords: [
    "MUREC",
    "luxury apartments",
    "premium real estate",
    "Madhusudan",
    "urban living",
    "IGBC certified",
    "Noida",
  ],
  openGraph: {
    title: "MUREC — Madhusudan Urban Real Estate Collection",
    description:
      "Luxury apartments with premium amenities, modern design, and a prime location.",
    type: "website",
    locale: "en_IN",
    siteName: "MUREC",
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} ${gotu.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
