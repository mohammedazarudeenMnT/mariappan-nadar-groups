"use client";
import React from "react";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

interface AboutHeroSectionProps {
  title?: string;
  description?: string;
  breadcrumb?: string;
  logoText?: string;
  backgroundImage?: string;
}

export function AboutHeroSection({
  title = "Our Story",
  description = "A diversified business conglomerate with 100+ years of excellence. Building stronger foundations for a better tomorrow through Construction Materials, Technology Products, Health & Wellness, and community development initiatives.",
  breadcrumb = "Home ❯ Our Story",
  logoText = "MN",
  backgroundImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop",
}: AboutHeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern - Aurora Waves (Enhanced & Visible) */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/25 to-purple-500/30 dark:from-cyan-500/40 dark:via-blue-500/35 dark:to-purple-500/40 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(6,182,212,0.4)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.4)_0%,_transparent_50%)]" />

      {/* Animated Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] animate-float-slow">
          <div className="w-20 h-20 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <svg
              className="w-10 h-10 text-cyan-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
        </div>
        <div className="absolute top-40 right-[15%] animate-float-medium">
          <div className="w-24 h-24 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <svg
              className="w-12 h-12 text-purple-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-32 left-[20%] animate-float-fast">
          <div className="w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <svg
              className="w-8 h-8 text-blue-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>
        <div className="absolute top-1/2 right-[8%] animate-pulse-slow">
          <div className="w-18 h-18 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <svg
              className="w-9 h-9 text-cyan-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>
      {/* Spotlight Effect */}
      <Spotlight />
      {/* Particles */}
      <Particles className="absolute inset-0" quantity={100} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <BlurFade delay={0.2}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-10 flex justify-center"
          >
            <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 drop-shadow-2xl">
              <Image
                src="/Mariyappa Group-logo.png"
                alt="Mariappa Nadar Group Logo"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
                className="object-contain filter drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                priority
              />
            </div>
          </motion.div>
        </BlurFade>

        <BlurFade delay={0.4}>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {title}
          </motion.h1>
        </BlurFade>

        <BlurFade delay={0.6}>
          <motion.div
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p className="mb-4">{description}</p>
          </motion.div>
        </BlurFade>

        <BlurFade delay={0.8}>
          <motion.div
            className="mt-8 text-sm text-primary-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {breadcrumb}
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
}
