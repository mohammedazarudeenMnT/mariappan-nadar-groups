import type { Metadata } from "next";

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

import { MaatramHeroSection } from "@/components/maatram/hero-section";
import { MissionVisionSection } from "@/components/maatram/mission-vision-section";
import { InitiativesSection } from "@/components/maatram/initiatives-section";
import { TestimonialsSection } from "@/components/maatram/testimonials-section";
import { CTASection } from "@/components/maatram/cta-section";

export default function MaatramPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <MaatramHeroSection />

      {/* Mission & Vision */}
      <MissionVisionSection />

      {/* Our Initiatives */}
      <InitiativesSection />

      {/* Success Stories */}
      <TestimonialsSection />

      {/* Call to Action */}
      <CTASection />
    </div>
  );
}
