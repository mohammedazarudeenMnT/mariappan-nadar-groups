import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/about/hero-section";
import { TabNavigation } from "@/components/about/tab-navigation";
import { WhoWeAreSection } from "@/components/about/who-we-are-section";
import { DivisionsShowcase } from "@/components/about/divisions-showcase";
import { MilestonesSection } from "@/components/about/milestones-section";
import { LeadershipSection } from "@/components/about/leadership-section";
import { MissionVisionSection } from "@/components/about/mission-vision-section";
import { PhilosophySection } from "@/components/about/philosophy-section";

export const metadata: Metadata = {
  title: "About Us | Mariappa Nadar Group - 100+ Years of Excellence",
  description:
    "Learn about Mariappa Nadar Group's journey since 1925. Four generations of expertise across Construction Materials, Technology Products, and Health & Wellness. Discover our mission, vision, leadership, and commitment to sustainability and community development in Madurai.",
  keywords: [
    "about Mariappa Nadar Group",
    "company history",
    "Madurai business legacy",
    "family business Madurai",
    "business leadership",
    "company mission vision",
  ],
  alternates: {
    canonical: "https://mariappanadargroup.com/about",
  },
  openGraph: {
    title: "About Us | Mariappa Nadar Group - Nearly 100 Years of Excellence",
    description:
      "Discover our journey since 1925, our mission, vision, and commitment to serving Madurai with excellence.",
    url: "https://mariappanadargroup.com/about",
    siteName: "Mariappa Nadar Group",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Mariappa Nadar Group",
    description: "Nearly 100 years of excellence serving Madurai since 1925.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Tab Navigation */}
      <TabNavigation />

      {/* Content Sections */}
      <WhoWeAreSection />
      <DivisionsShowcase />
      <MilestonesSection />
      <LeadershipSection />
      <MissionVisionSection />
      <PhilosophySection />
    </div>
  );
}
