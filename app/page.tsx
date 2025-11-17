import type { Metadata } from "next";
import ImagesSliderDemo from "@/components/images-slider-demo";
import { AboutGroupSection } from "@/components/about-group-section";
import { LegacySection } from "@/components/legacy-section";
import { BusinessDivisionsSection } from "@/components/business-divisions-section";
import { MaatramHomeSection } from "@/components/maatram-home-section";
import { MediaSection } from "@/components/media-section";
import { CommunitySection } from "@/components/community-section";

export const metadata: Metadata = {
  title: "Mariappa Nadar Group | Building Trust. Building Futures.",
  description:
    "Mariappa Nadar Group - Building stronger foundations for a better tomorrow. A diversified business conglomerate with 100+ years of excellence across Construction Materials, Technology Products, Health & Wellness, and community development initiatives in Madurai, Tamil Nadu.",
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
    title: "Mariappa Nadar Group | Building Trust. Building Futures.",
    description:
      "Building stronger foundations for a better tomorrow. 100+ years of excellence across Construction, Technology, and Wellness sectors in Madurai.",
    url: "https://mariappanadargroup.com",
    siteName: "Mariappa Nadar Group",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariappa Nadar Group | Building Trust. Building Futures.",
    description:
      "100+ years of excellence. Building stronger foundations for a better tomorrow.",
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

      {/* MaatRaM Trust Section */}
      <MaatramHomeSection />

      {/* Media & News Section */}
      <MediaSection />

      {/* Community Impact Section */}
      <CommunitySection />
    </div>
  );
}
