import type { Metadata } from "next";
import { NewsListingPage } from "@/components/highlights/news-listing-page";

export const metadata: Metadata = {
  title: "News & Press Releases | Mariappa Nadar Group",
  description:
    "Stay updated with the latest news, press releases, and announcements from Mariappa Nadar Group. Discover our achievements, expansions, and community initiatives.",
  keywords: [
    "news",
    "press releases",
    "announcements",
    "business updates",
    "Mariappa Nadar Group news",
    "Madurai business news",
  ],
  alternates: {
    canonical: "https://mariappanadargroup.com/highlights/news",
  },
  openGraph: {
    title: "News & Press Releases | Mariappa Nadar Group",
    description:
      "Latest news, press releases, and announcements from Mariappa Nadar Group.",
    url: "https://mariappanadargroup.com/highlights/news",
    siteName: "Mariappa Nadar Group",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Press Releases | Mariappa Nadar Group",
    description: "Latest updates and announcements from Mariappa Nadar Group.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NewsListingPageRoute() {
  return <NewsListingPage />;
}
