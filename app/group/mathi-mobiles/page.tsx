import type { Metadata } from "next";
import { MobilesHeroGeometric } from "@/components/group/mobiles/hero-geometric";
import { MobilesAboutSection } from "@/components/group/mobiles/about-section";
import { ProductsSection } from "@/components/group/mobiles/products-section";
import { BrandsSection } from "@/components/group/mobiles/brands-section";
import { MobilesCTASection } from "@/components/group/mobiles/cta-section";

export const metadata: Metadata = {
  title: "Mathi Mobiles | Samsung Exclusive Showroom - Madurai",
  description:
    "Mathi Mobiles - Samsung Exclusive Showroom & Official SmartCafé Partner in Madurai. Complete range of Samsung mobiles, laptops, smartwatches, and original accessories with genuine warranty.",
  keywords: [
    "Mathi Mobiles",
    "Samsung Exclusive Showroom Madurai",
    "Samsung SmartCafé",
    "Samsung mobiles Madurai",
    "Samsung laptops",
    "Samsung smartwatches",
    "Samsung accessories",
    "Samsung service center Madurai",
  ],
  alternates: {
    canonical: "https://mariappanadargroup.com/group/mathi-mobiles",
  },
  openGraph: {
    title: "Mathi Mobiles | Samsung Exclusive Showroom",
    description:
      "Samsung Exclusive Showroom & Official SmartCafé Partner in Madurai. Complete Samsung product range with genuine warranty.",
    url: "https://mariappanadargroup.com/group/mathi-mobiles",
    siteName: "Mariappa Nadar Group",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathi Mobiles | Samsung Exclusive Showroom",
    description: "Samsung Exclusive Showroom in Madurai.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MathiMobilesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Geometric Animated Hero */}
      <MobilesHeroGeometric />

      {/* About Mathi Mobiles */}
      <MobilesAboutSection />

      {/* What We Offer - Products & Services */}
      <ProductsSection />

      {/* Popular Brands We Deal */}
      <BrandsSection />

      {/* Visit Our Website - CTA Section */}
      <MobilesCTASection />
    </div>
  );
}
