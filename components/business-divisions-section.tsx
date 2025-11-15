"use client";
import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Link from "next/link";
import Image from "next/image";

const divisions = [
  {
    icon: null,
    logoImage: "/images/construction/MNBS Logo background erased.png",
    title: "Steel & Construction",
    description:
      "Premium TMT bars, mild steel, cement, and construction materials for building Madurai's future.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    color: "from-primary-500 to-primary-600",
    link: "/group/construction-materials",
  },
  {
    icon: null,
    logoImage: "/images/mathi-mobiles.png",
    title: "Mathi Mobiles",
    description:
      "Multi-brand smartphones, accessories, and expert repair services with reliable after-sales support.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop",
    color: "from-primary-600 to-primary-700",
    link: "/group/mathi-mobiles",
  },
  {
    icon: null,
    logoImage: "/images/himalaya_wellness/himalaya.avif",
    title: "Himalaya Wellness",
    description:
      "Health and wellness products for every family - from skincare to baby care and oral hygiene.",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop",
    color: "from-primary-400 to-primary-500",
    link: "/group/himalaya-wellness",
  },
];

export function BusinessDivisionsSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white via-base-50/50 to-white overflow-hidden">
      {/* Gradient Color Overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Gradient */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-200/25 via-blue-200/15 to-transparent rounded-full blur-3xl" />

        {/* Top Right Gradient */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-200/20 via-primary-300/10 to-transparent rounded-full blur-3xl" />

        {/* Bottom Center Gradient */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-cyan-200/15 via-primary-200/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Dot Pattern - Specific Corners */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Corner */}
        <div
          className="absolute top-0 left-0 w-[450px] h-[450px]"
          style={{
            maskImage:
              "radial-gradient(ellipse at top left, black 35%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at top left, black 35%, transparent 70%)",
          }}
        >
          <DotPattern
            width={24}
            height={24}
            cx={2}
            cy={2}
            cr={1.5}
            className="fill-primary-400/35"
          />
        </div>

        {/* Bottom Right Corner */}
        <div
          className="absolute bottom-0 right-0 w-[450px] h-[450px]"
          style={{
            maskImage:
              "radial-gradient(ellipse at bottom right, black 35%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at bottom right, black 35%, transparent 70%)",
          }}
        >
          <DotPattern
            width={24}
            height={24}
            cx={2}
            cy={2}
            cr={1.5}
            className="fill-primary-400/35"
          />
        </div>
      </div>

      {/* Simplified corner accents */}
      <motion.div
        className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-bl from-primary-400/10 to-transparent rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "opacity" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-tr from-primary-500/10 to-transparent rounded-full blur-3xl"
        animate={{
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "opacity" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16 relative">
          {/* Dot Pattern Behind Header */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] pointer-events-none">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                maskImage:
                  "radial-gradient(ellipse at center, black 45%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 45%, transparent 80%)",
              }}
            >
              <DotPattern
                width={24}
                height={24}
                cx={2}
                cy={2}
                cr={1.5}
                className="fill-primary-500/50"
              />
            </div>
          </div>

          <BlurFade delay={0.05}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-base-900 mb-4 sm:mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                Businesses
              </span>
            </motion.h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-base-600 max-w-3xl mx-auto px-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              Three trusted divisions serving Madurai with{" "}
              <span className="text-primary-600 font-semibold">quality</span>,{" "}
              <span className="text-primary-600 font-semibold">innovation</span>
              , and{" "}
              <span className="text-primary-600 font-semibold">
                holistic care
              </span>{" "}
              since generations
            </motion.p>
          </BlurFade>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {divisions.map((division, index) => {
            return (
              <BlurFade key={division.title} delay={0.1 + index * 0.05}>
                <Link href={division.link} className="cursor-pointer">
                  <CardSpotlight
                    spotlightColor="rgba(28, 168, 203, 0.15)"
                    className="h-[400px] sm:h-[450px] md:h-[500px]"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      whileHover={{ y: -6 }}
                      className="group relative h-full rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-200 border border-gray-100 backdrop-blur-sm"
                    >
                      <motion.img
                        src={division.image}
                        alt={division.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                      {/* Hover effect gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${division.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
                        <motion.div
                          className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl ${
                            division.logoImage
                              ? "bg-white"
                              : `bg-gradient-to-br ${division.color}`
                          } flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-200`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.2 + index * 0.1,
                            duration: 0.3,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                        >
                          {division.logoImage ? (
                            <div className="relative w-full h-full p-1.5">
                              <Image
                                src={division.logoImage}
                                alt={`${division.title} logo`}
                                fill
                                sizes="64px"
                                className="object-contain"
                              />
                            </div>
                          ) : division.icon ? (
                            React.createElement(division.icon, {
                              className:
                                "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white",
                            })
                          ) : null}
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-primary-300 transition-colors duration-200">
                          {division.title}
                        </h3>
                        <p className="text-base-200 text-xs sm:text-sm leading-relaxed mb-3">
                          {division.description}
                        </p>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="mt-auto text-primary-400 text-sm sm:text-base font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                        >
                          <span>Explore More</span>
                          <svg
                            width="20"
                            height="12"
                            viewBox="0 0 22 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-3 transition-transform group-hover:translate-x-1"
                          >
                            <path
                              d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                              fill="currentColor"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.div>
                  </CardSpotlight>
                </Link>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
