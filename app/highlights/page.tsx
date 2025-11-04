import type { Metadata } from "next";
import { HeroSection } from "@/components/highlights/hero-section";
import { TabNavigation } from "@/components/highlights/tab-navigation";
import { AchievementsSection } from "@/components/highlights/achievements-section";
import { EventsSection } from "@/components/highlights/events-section";
import { GallerySection } from "@/components/highlights/gallery-section";
import { NewsSection } from "@/components/highlights/news-section";
import { InspiringStoriesSection } from "@/components/highlights/inspiring-stories-section";

export const metadata: Metadata = {
  title: "Highlights & Achievements | Mariappa Nadar Group",
  description:
    "Explore Mariappa Nadar Group's achievements, events, news, and inspiring stories. Celebrating milestones and community impact in Madurai since 1925.",
  keywords: [
    "achievements",
    "company highlights",
    "business events",
    "news updates",
    "success stories",
    "Madurai business news",
  ],
  alternates: {
    canonical: "https://mariappanadargroup.com/highlights",
  },
  openGraph: {
    title: "Highlights & Achievements | Mariappa Nadar Group",
    description:
      "Celebrating our achievements, events, and community impact in Madurai.",
    url: "https://mariappanadargroup.com/highlights",
    siteName: "Mariappa Nadar Group",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Highlights & Achievements | Mariappa Nadar Group",
    description: "Celebrating milestones and community impact since 1925.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HighlightsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Tab Navigation */}
      <TabNavigation />

      {/* Content Sections */}
      <div id="achievements">
        <AchievementsSection />
      </div>
      <div id="events">
        <EventsSection />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>
      <div id="news">
        <NewsSection />
      </div>
      <div id="stories">
        <InspiringStoriesSection />
      </div>
    </div>
  );
}
