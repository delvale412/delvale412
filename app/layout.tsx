import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { social } from "@/data/social";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://delvale412.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Matheus do Vale | Software Developer",
    template: "%s | Matheus do Vale",
  },
  description:
    "Matheus do Vale — Desenvolvedor de Software, Full Stack e estudante de Engenharia de Software na Universidade de Brasília.",
  keywords: [
    "Matheus do Vale",
    "Software Developer",
    "Desenvolvedor Full Stack",
    "Engenharia de Software",
    "UnB",
    "Brasília",
  ],
  authors: [{ name: social.name }],
  creator: social.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Matheus do Vale | Software Developer",
    description:
      "Desenvolvedor de Software, Full Stack e estudante de Engenharia de Software na Universidade de Brasília.",
    siteName: "Matheus do Vale",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus do Vale | Software Developer",
    description:
      "Desenvolvedor de Software, Full Stack e estudante de Engenharia de Software na Universidade de Brasília.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: social.name,
    jobTitle: "Software Developer",
    url: siteUrl,
    email: `mailto:${social.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brasília",
      addressRegion: "DF",
      addressCountry: "BR",
    },
    sameAs: [social.github, social.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidade de Brasília",
    },
  };

  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-ink"
        >
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
