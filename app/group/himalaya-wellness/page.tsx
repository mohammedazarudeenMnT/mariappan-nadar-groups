import type { Metadata } from "next";
import { WellnessHeroSection } from "@/components/group/wellness/hero-section";
import { WellnessAboutSection } from "@/components/group/wellness/about-section";
import { ProductsSection } from "@/components/group/wellness/products-section";
import { WhyChooseSection } from "@/components/group/wellness/why-choose-section";
import { CommitmentSection } from "@/components/group/wellness/commitment-section";
import { WellnessCTASection } from "@/components/group/wellness/cta-section";

export const metadata: Metadata = {
  title: "Himalaya Wellness Products | Authorized Dealer - Madurai",
  description:
    "Authorized Himalaya Wellness dealer in Madurai. Trusted healthcare, personal care, and herbal wellness products. Genuine Himalaya products for your family's health and wellbeing.",
  keywords: [
    "Himalaya Wellness Madurai",
    "wellness products Madurai",
    "herbal products",
    "healthcare products",
    "Himalaya dealer",
    "personal care Madurai",
  ],
  alternates: {
    canonical: "https://mariappanadargroup.com/group/himalaya-wellness",
  },
  openGraph: {
    title: "Himalaya Wellness Products | Authorized Dealer",
    description:
      "Authorized Himalaya Wellness dealer in Madurai offering trusted healthcare and herbal wellness products.",
    url: "https://mariappanadargroup.com/group/himalaya-wellness",
    siteName: "Mariappa Nadar Group",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himalaya Wellness Products | Authorized Dealer",
    description: "Trusted wellness products in Madurai.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HimalayaWellnessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full-screen with floating herbal animations */}
      <WellnessHeroSection />

      {/* About Himalaya Wellness - Enhanced with decorative cards */}
      <WellnessAboutSection />

      {/* Product Categories - Enhanced Animated Tabs with Spring Physics */}
      <ProductsSection />

      {/* Our Commitment - Banner Section */}
      <CommitmentSection />
      {/* Why Choose Us */}
      <WhyChooseSection />
      {/* Visit Our Website - CTA Section */}
      <WellnessCTASection />
    </div>
  );
}
