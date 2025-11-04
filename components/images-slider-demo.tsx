"use client";
import { motion } from "motion/react";
import React, { useState } from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { Button } from "@/components/ui/button";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { TextShimmer } from "@/components/ui/text-shimmer";
import Link from "next/link";

export default function ImagesSliderDemo() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images for three divisions
  const images = [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop", // Steel & Construction
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1920&h=1080&fit=crop", // Mathi Mobiles
    "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1920&h=1080&fit=crop", // Himalaya Wellness
  ];

  // Content for each division
  const slideContent = [
    {
      title: "Steel & Construction Materials",
      subtitle: "Building Madurai's Future Since Generations",
      description:
        "Premium TMT bars, mild steel, cement, and construction materials. Trusted quality for contractors and builders.",
      buttonText: "Explore Materials",
      link: "/group/construction-materials",
    },
    {
      title: "Mathi Mobiles",
      subtitle: "Your Trusted Mobile & Electronics Partner",
      description:
        "Multi-brand smartphones, accessories, and expert repair services. Quality products with reliable after-sales support.",
      buttonText: "Browse Mobiles",
      link: "/group/mathi-mobiles",
    },
    {
      title: "Himalaya Wellness",
      subtitle: "Health & Wellness for Every Family",
      description:
        "From skincare to baby care and oral hygiene. Safe, effective, and trusted products for holistic well-being.",
      buttonText: "Shop Wellness",
      link: "/group/himalaya-wellness",
    },
  ];

  return (
    <ImagesSlider
      className="h-screen"
      images={images}
      onSlideChange={setCurrentSlide}
    >
      <motion.div
        key={currentSlide}
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="z-50 flex flex-col justify-center items-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <WordPullUp
            words={slideContent[currentSlide].title}
            className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-primary-200 to-neutral-400 py-2 sm:py-4 mb-2 leading-tight px-2"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: 0.5,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <TextShimmer className="font-semibold text-base sm:text-xl md:text-2xl lg:text-3xl text-center text-neutral-200 mb-3 sm:mb-4 max-w-4xl px-2">
            {slideContent[currentSlide].subtitle}
          </TextShimmer>
        </motion.div>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-center text-neutral-300 max-w-2xl mb-6 sm:mb-8 px-4"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: 0.8,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {slideContent[currentSlide].description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 1.1,
            duration: 0.6,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow: "0 10px 40px rgba(28, 168, 203, 0.4)",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href={slideContent[currentSlide].link}
            className="cursor-pointer"
          >
            <Button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base backdrop-blur-sm border bg-primary-500/20 border-primary-400/40 text-white mx-auto text-center rounded-full relative hover:bg-primary-500/30 shadow-xl transition-all duration-300 cursor-pointer">
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                {slideContent[currentSlide].buttonText} →
              </motion.span>
              <motion.div
                className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary-400 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
}
