import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fitbreak.id"),
  title: {
    default: "Fitbreak-in Aja! — Cemilan Sehat Tinggi Serat",
    template: "%s — Fitbreak-in Aja!",
  },
  description:
    "Diet nggak bisa ngemil enak? Bisa! Fitbreak hadir dengan cereal oats tinggi serat, protein oatmeal, dan fit cookie — cemilan sehat yang lezat dan praktis.",
  keywords: [
    "fitbreak",
    "cemilan sehat",
    "oatmeal",
    "protein oatmeal",
    "fit cookie",
    "cereal oats",
    "high fiber",
    "snack sehat Indonesia",
  ],
  openGraph: {
    title: "Fitbreak-in Aja! — Cemilan Sehat Tinggi Serat",
    description:
      "Makan sehat ga harus ribet. Cereal oats, protein oatmeal, dan fit cookie tinggi serat untuk hidup lebih sehat.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
