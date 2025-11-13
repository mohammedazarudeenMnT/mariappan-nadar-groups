"use client";

import {
  ProgressSlider,
  SliderContent,
  SliderWrapper,
  SliderBtnGroup,
  SliderBtn,
} from "@/components/ui/progress-slider";
import Link from "next/link";
import Image from "next/image";

const businesses = [
  {
    id: "construction",
    title: "Construction Materials",
    category: "Building & Construction",
    description:
      "Premium quality construction materials for residential and commercial projects. Trusted by contractors and builders across Tamil Nadu.",
    features: [
      "High-grade cement and steel",
      "Complete building materials",
      "Expert consultation",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop",
    logoImage: "/images/construction/MNBS Logo background erased.png",
    link: "/group/construction-materials",
  },
  {
    id: "mobile",
    title: "Mathi Mobiles",
    category: "Technology & Retail",
    description:
      "Latest smartphones, accessories, and mobile technology solutions. Authorized dealer for leading brands.",
    features: [
      "Latest smartphone models",
      "Expert guidance",
      "Warranty support",
    ],
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=800&fit=crop",
    logoImage: "/images/mathi-mobiles.png",
    link: "/group/mathi-mobiles",
  },
  {
    id: "wellness",
    title: "Himalaya Wellness",
    category: "Health & Wellness",
    description:
      "Trusted healthcare and wellness products from Himalaya. Committed to promoting health and well-being in our community.",
    features: [
      "Herbal healthcare products",
      "Personal care range",
      "Trusted quality",
    ],
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=800&fit=crop",
    logoImage: "/images/himalaya_wellness/himalaya.avif",
    link: "/group/himalaya-wellness",
  },
];

export default function BusinessCarousel() {
  return (
    <section className="relative py-16 md:py-24 bg-primary-50/10 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary-400/15 via-primary-300/8 to-transparent rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Explore Our Businesses
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Three distinct divisions, one unified commitment to excellence
          </p>
        </div>

        <ProgressSlider
          activeSlider="construction"
          duration={6000}
          className="w-full"
        >
          <SliderContent>
            {businesses.map((business) => (
              <SliderWrapper key={business.id} value={business.id}>
                <div
                  id={
                    business.id === "mobile"
                      ? "mathi-mobiles"
                      : business.id === "wellness"
                      ? "himalaya"
                      : business.id
                  }
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Image */}
                  <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={business.image}
                      alt={business.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md p-2">
                          <Image
                            src={business.logoImage}
                            alt={`${business.title} logo`}
                            width={56}
                            height={56}
                            className="object-contain"
                          />
                        </div>
                        <span className="inline-block px-4 py-1.5 bg-primary-500/10 text-primary-600 text-sm font-semibold rounded-full">
                          {business.category}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                        {business.title}
                      </h3>
                      <p className="text-lg text-neutral-600 leading-relaxed">
                        {business.description}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {business.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary-500" />
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={business.link} className="cursor-pointer">
                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer">
                        Learn More
                        <span>→</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SliderWrapper>
            ))}
          </SliderContent>

          {/* Navigation Buttons */}
          <SliderBtnGroup className="flex gap-4 mt-12 justify-center">
            {businesses.map((business) => (
              <SliderBtn
                key={business.id}
                value={business.id}
                className="px-6 py-3 rounded-lg border-2 border-primary-200 bg-white hover:border-primary-500 transition-all duration-300 font-medium"
                progressBarClass="bottom-0 h-1 bg-primary-500 transition-all duration-300"
              >
                {business.title}
              </SliderBtn>
            ))}
          </SliderBtnGroup>
        </ProgressSlider>
      </div>
    </section>
  );
}
