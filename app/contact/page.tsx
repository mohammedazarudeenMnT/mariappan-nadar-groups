import type { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us | Mariappa Nadar Group - Get in Touch",
  description:
    "Contact Mariappa Nadar Group for construction materials, mobile phones, or wellness products. Reach our divisions in Madurai - Steel & Construction, Mathi Mobiles, and Himalaya Wellness.",
  keywords: [
    "contact Mariappa Nadar Group",
    "Madurai contact",
    "construction materials contact",
    "Mathi Mobiles contact",
    "Himalaya Wellness contact",
    "business inquiry Madurai",
  ],
  alternates: {
    canonical: "https://mariappanadargroup.com/contact",
  },
  openGraph: {
    title: "Contact Us | Mariappa Nadar Group",
    description:
      "Get in touch with our expert teams across construction, mobile retail, and wellness divisions in Madurai.",
    url: "https://mariappanadargroup.com/contact",
    siteName: "Mariappa Nadar Group",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Mariappa Nadar Group",
    description: "Connect with our expert teams in Madurai.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
