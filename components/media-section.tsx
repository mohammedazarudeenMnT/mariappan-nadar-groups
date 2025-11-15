"use client";
import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "motion/react";
import GridPattern from "@/components/ui/grid-pattern";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Link from "next/link";

const mediaItems = [
  {
    title: "Building Excellence: Our Journey in Steel Manufacturing",
    category: "Stories",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    date: "March 15, 2025",
  },
  {
    title: "Mathi Mobiles Expands Service Network Across Tamil Nadu",
    category: "Press Release",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
    date: "March 10, 2025",
  },
  {
    title: "Wellness for Every Family: Himalaya Product Launch",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop",
    date: "March 5, 2025",
  },
];

export function MediaSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-base-50 via-primary-50/30 to-base-50 overflow-hidden">
      {/* Grid Pattern Background */}
      <GridPattern
        width={60}
        height={60}
        className="absolute inset-0 opacity-10"
      />

      {/* Simplified background elements */}
      <motion.div
        className="absolute top-20 left-1/4 w-80 h-80 bg-gradient-to-br from-primary-300/15 to-primary-500/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "opacity" }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-tl from-primary-400/15 to-primary-600/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "opacity" }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <BlurFade delay={0.05}>
            <h2 className="text-5xl md:text-6xl font-bold text-base-900 mb-6">
              Media
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="text-xl text-base-600">From our newsroom</p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-base text-base-500 max-w-3xl mx-auto mt-4">
              Stay connected with our latest stories, press releases, and events
            </p>
          </BlurFade>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {mediaItems.map((item, index) => (
            <BlurFade key={item.title} delay={0.1 + index * 0.05}>
              <Link href="/highlights#news" className="cursor-pointer">
                <CardSpotlight
                  spotlightColor="rgba(28, 168, 203, 0.12)"
                  className="h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-200 group border border-gray-100 h-full"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1.5 bg-primary-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-base-500 mb-3">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-base-900 mb-4 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-primary-600 font-semibold text-sm gap-2 group-hover:gap-3 transition-all duration-200">
                        <span>Read More</span>
                        <svg
                          width="20"
                          height="12"
                          viewBox="0 0 22 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-3"
                        >
                          <path
                            d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </CardSpotlight>
              </Link>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.3}>
          <div className="text-center">
            <Link href="/highlights#news" className="cursor-pointer">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4,
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg cursor-pointer"
              >
                View All News & Updates
              </motion.button>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
