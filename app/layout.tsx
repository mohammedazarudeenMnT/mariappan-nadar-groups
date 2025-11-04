import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DropdownNavbarDemo from "@/components/dropdown-navbar-demo";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mariappanadargroup.com"),
  title: {
    default: "Mariappa Nadar Group | Building Excellence Since 1925",
    template: "%s | Mariappa Nadar Group",
  },
  description:
    "Mariappa Nadar Group - A trusted multi-sector enterprise spanning Steel & Construction Materials, Mobile Retail (Mathi Mobiles), and Himalaya Wellness Products. Serving Madurai with quality, innovation, and integrity since 1925.",
  keywords: [
    "Mariappa Nadar Group",
    "Madurai business",
    "construction materials Madurai",
    "Mathi Mobiles",
    "Himalaya Wellness",
    "TMT bars Madurai",
    "mobile store Madurai",
    "wellness products Madurai",
  ],
  authors: [{ name: "Mariappa Nadar Group" }],
  creator: "Mariappa Nadar Group",
  publisher: "Mariappa Nadar Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mariappanadargroup.com",
    siteName: "Mariappa Nadar Group",
    title: "Mariappa Nadar Group | Building Excellence Since 1925",
    description:
      "A trusted multi-sector enterprise serving Madurai since 1925 with construction materials, mobile retail, and wellness products.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mariappa Nadar Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariappa Nadar Group | Building Excellence Since 1925",
    description:
      "A trusted multi-sector enterprise serving Madurai since 1925.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mariappa Nadar Group",
    url: "https://mariappanadargroup.com",
    logo: "https://mariappanadargroup.com/Mariyappa Group.png",
    description:
      "A trusted multi-sector enterprise spanning Steel & Construction Materials, Mobile Retail, and Himalaya Wellness Products. Serving Madurai since 1925.",
    foundingDate: "1925",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madurai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["en", "ta"],
    },
    sameAs: [
      "https://www.facebook.com/mariappanadargroup",
      "https://www.linkedin.com/company/mariappanadargroup",
      "https://twitter.com/mariappanadargroup",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DropdownNavbarDemo />
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
