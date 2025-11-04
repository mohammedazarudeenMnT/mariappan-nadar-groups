import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/about/hero-section";
import BusinessCarousel from "@/components/business-carousel";

export const metadata: Metadata = {
  title: "Our Business Divisions | Mariappa Nadar Group",
  description:
    "Explore Mariappa Nadar Group's diverse business divisions: Steel & Construction Materials, Mathi Mobiles, and Himalaya Wellness. Multi-sector excellence serving Madurai since 1925.",
  keywords: [
    "business divisions",
    "Mariappa Nadar Group divisions",
    "construction materials",
    "mobile retail",
    "wellness products",
    "Madurai businesses",
  ],
  alternates: {
    canonical: "https://mariappanadargroup.com/group",
  },
  openGraph: {
    title: "Our Business Divisions | Mariappa Nadar Group",
    description:
      "Explore our diverse business divisions serving Madurai across construction, mobile retail, and wellness sectors.",
    url: "https://mariappanadargroup.com/group",
    siteName: "Mariappa Nadar Group",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Business Divisions | Mariappa Nadar Group",
    description: "Multi-sector excellence serving Madurai since 1925.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GroupPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutHeroSection
        title="Mariappa Nadar Group"
        description="A trusted multi-sector enterprise built on integrity, excellence, and community service across construction, technology, and wellness sectors. Nearly 100 years of serving our community with dedication."
        breadcrumb="Home ❯ Group"
        logoText="MN"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
      />

      {/* Business Divisions Progressive Carousel */}
      <BusinessCarousel />
    </div>
  );
}
