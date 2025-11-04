import type { Metadata } from "next";
import ImagesSliderDemo from "@/components/images-slider-demo";
import { AboutGroupSection } from "@/components/about-group-section";
import { LegacySection } from "@/components/legacy-section";
import { BusinessDivisionsSection } from "@/components/business-divisions-section";
import { MediaSection } from "@/components/media-section";
import { CommunitySection } from "@/components/community-section";

export const metadata: Metadata = {
  title: "Mariappa Nadar Group | Building Excellence Since 1925",
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
  alternates: {
    canonical: "https://mariappanadargroup.com",
  },
  openGraph: {
    title: "Mariappa Nadar Group | Building Excellence Since 1925",
    description:
      "A trusted multi-sector enterprise serving Madurai since 1925 with construction materials, mobile retail, and wellness products.",
    url: "https://mariappanadargroup.com",
    siteName: "Mariappa Nadar Group",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariappa Nadar Group | Building Excellence Since 1925",
    description:
      "A trusted multi-sector enterprise serving Madurai since 1925.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Page Image Slider */}
      <ImagesSliderDemo />

      {/* Legacy & Leadership Section */}
      <LegacySection />

      {/* About the Group Section */}
      <AboutGroupSection />

      {/* Business Divisions Section */}
      <BusinessDivisionsSection />

      {/* Media & News Section */}
      <MediaSection />

      {/* Community Impact Section */}
      <CommunitySection />
    </div>
  );
}
