import type { Metadata } from "next";
import { MaatramHeroSection } from "@/components/csr/maatram/hero-section";
import { MaatramAboutSection } from "@/components/csr/maatram/about-section";
import { InitiativesSection } from "@/components/csr/maatram/initiatives-section";
import { ImpactSection } from "@/components/csr/maatram/impact-section";
import { MaatramCTASection } from "@/components/csr/maatram/cta-section";

export const metadata: Metadata = {
  title: "MaatRaM Trust | Educational & Medical Trust - Mariappa Nadar Group",
  description:
    "MaatRaM - Educational and Medical Trust dedicated to community welfare through education and healthcare initiatives in Madurai. Making a difference in people's lives.",
  keywords: [
    "MaatRaM Trust",
    "Educational Trust Madurai",
    "Medical Trust Madurai",
    "CSR activities",
    "community welfare",
    "education initiatives",
    "healthcare initiatives",
    "Mariappa Nadar Group CSR",
  ],
  alternates: {
    canonical: "https://mariappanadargroup.com/csr/maatram",
  },
  openGraph: {
    title: "MaatRaM Trust | Educational & Medical Trust",
    description:
      "Dedicated to community welfare through education and healthcare initiatives in Madurai.",
    url: "https://mariappanadargroup.com/csr/maatram",
    siteName: "Mariappa Nadar Group",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaatRaM Trust | Educational & Medical Trust",
    description: "Community welfare through education and healthcare.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MaatramPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MaatramHeroSection />

      {/* About MaatRaM Trust */}
      <MaatramAboutSection />

      {/* Our Initiatives */}
      <InitiativesSection />

      {/* Impact & Statistics */}
      <ImpactSection />

      {/* CTA Section */}
      <MaatramCTASection />
    </div>
  );
}
