import type { Metadata } from "next";
import { ConstructionHeroImageGrid } from "@/components/group/construction/hero-image-grid";
import { AboutSection } from "@/components/group/construction/about-section";
import { ServicesSection } from "@/components/group/construction/services-section";
import { IndustriesSection } from "@/components/group/construction/industries-section";
import { LegacyBanner } from "@/components/group/construction/legacy-section";
import { CTASection } from "@/components/group/construction/cta-section";

export const metadata: Metadata = {
  title: "Steel & Construction Materials | MM Firms - Mariappa Nadar Group",
  description:
    "Premium TMT bars, mild steel, cement, and construction materials in Madurai. MM Firms offers quality building materials with expert guidance for residential and commercial projects.",
  keywords: [
    "TMT bars Madurai",
    "construction materials Madurai",
    "steel supplier Madurai",
    "cement Madurai",
    "building materials",
    "MM Firms",
    "construction supplier",
  ],
  alternates: {
    canonical: "https://mariappanadargroup.com/group/construction-materials",
  },
  openGraph: {
    title: "Steel & Construction Materials | MM Firms",
    description:
      "Premium TMT bars, mild steel, cement, and construction materials in Madurai with expert guidance.",
    url: "https://mariappanadargroup.com/group/construction-materials",
    siteName: "Mariappa Nadar Group",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel & Construction Materials | MM Firms",
    description: "Quality building materials in Madurai.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ConstructionMaterialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Image Grid with Product Showcase */}
      <ConstructionHeroImageGrid />

      {/* About MM Firms Constructions */}
      <AboutSection />

      {/* Industries We Serve - Horizontal Scroll Carousel */}
      <IndustriesSection />
      {/* Our Services - Comprehensive Construction Solutions */}
      <ServicesSection />
      {/* Our Legacy of Trust & CTA - Wrapped together to remove gap */}
      <div className="-mb-1">
        <LegacyBanner />
        <CTASection />
      </div>
    </div>
  );
}
