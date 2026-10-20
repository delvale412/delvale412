import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParticleField } from "@/components/ui/ParticleField";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { social } from "@/data/social";
import { siteUrl } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vale Desenvolvimentos | Seu negócio encontrado e clientes no WhatsApp",
    template: "%s | Vale Desenvolvimentos",
  },
  description:
    "Criação de sites, páginas de vendas, lojas online e sistemas para pequenos negócios serem encontrados e receberem contatos pelo WhatsApp. 8 anos de experiência em desenvolvimento e atendimento direto com o Matheus.",
  keywords: [
    "Vale Desenvolvimentos",
    "Matheus do Vale",
    "criação de sites",
    "site para pequenos negócios",
    "página de vendas",
    "loja online",
    "site com WhatsApp",
    "Brasília",
  ],
  authors: [{ name: social.name }],
  creator: social.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Vale Desenvolvimentos | Seu negócio encontrado e clientes no WhatsApp",
    description:
      "Seu site pronto em poucos dias, feito para o seu negócio ser encontrado e receber contatos direto no WhatsApp.",
    siteName: "Vale Desenvolvimentos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vale Desenvolvimentos | Seu negócio encontrado e clientes no WhatsApp",
    description:
      "Seu site pronto em poucos dias, feito para o seu negócio ser encontrado e receber contatos direto no WhatsApp.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: social.brand,
    description:
      "Criação de sites, páginas de vendas, lojas online e sistemas para pequenos negócios, com atendimento direto pelo WhatsApp.",
    url: siteUrl,
    email: social.email,
    telephone: "+5561999298384",
    areaServed: "BR",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brasília",
      addressRegion: "DF",
      addressCountry: "BR",
    },
    founder: {
      "@type": "Person",
      name: social.name,
      jobTitle: "Desenvolvedor de sites e sistemas",
    },
    sameAs: [social.instagram, social.linkedin],
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
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                window.gtag = gtag;`}
            </Script>
          </>
        ) : null}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-ink"
        >
          Pular para o conteúdo
        </a>
        <ParticleField variant="global" className="fixed inset-0 -z-10 h-full w-full" />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
