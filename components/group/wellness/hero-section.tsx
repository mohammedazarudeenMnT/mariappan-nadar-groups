"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import Link from "next/link";
import { Leaf, Sparkles, ArrowRight } from "lucide-react";
import VideoPlayer from "@/components/ui/video-player";

// Floating Glassmorphic Cards Background with Images
function GlassmorphicCards() {
  const cards = [
    {
      size: 300,
      top: "10%",
      left: "5%",
      delay: 0,
      duration: 20,
      image:
        "/images/himalaya_wellness/7918819-2_Himalaya-Purifying-Neem-Face-Wash-New-Design-50ml_FOP.webp",
      alt: "Himalaya Purifying Neem Face Wash",
    },
    {
      size: 250,
      top: "60%",
      left: "80%",
      delay: 2,
      duration: 25,
      image: "/images/himalaya_wellness/Anti-Hair-Fall-Hair-oil.webp",
      alt: "Himalaya Anti Hair Fall Hair Oil",
    },
    {
      size: 200,
      top: "30%",
      left: "70%",
      delay: 4,
      duration: 22,
      image: "/images/himalaya_wellness/Neem-_-Turmeric-Soap.webp",
      alt: "Himalaya Neem & Turmeric Soap",
    },
    {
      size: 350,
      top: "70%",
      left: "10%",
      delay: 1,
      duration: 28,
      image: "/images/himalaya_wellness/revitalizing-night-cream.webp",
      alt: "Himalaya Revitalizing Night Cream",
    },
    {
      size: 180,
      top: "15%",
      left: "85%",
      delay: 3,
      duration: 24,
      image:
        "/images/himalaya_wellness/REFRESHINGBABYSOAP75GFRONT2INDIAIMSRGB-n.webp",
      alt: "Himalaya Refreshing Baby Soap",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className="absolute rounded-3xl backdrop-blur-xl border border-primary-500/20 overflow-hidden shadow-2xl"
          style={{
            width: card.size,
            height: card.size,
            top: card.top,
            left: card.left,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: card.duration,
            repeat: Infinity,
            delay: card.delay,
            ease: "easeInOut",
          }}
        >
          {/* Image with overlay */}
          <div className="relative w-full h-full">
            <img
              src={card.image}
              alt={card.alt}
              className="w-full h-full object-contain p-4 bg-white"
            />
            {/* Color overlay without blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-primary-500/10 to-transparent" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function WellnessHeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 pt-32 sm:pt-24 md:pt-16 lg:pt-0 mt-12 sm:mt-8 md:mt-0">
      {/* Glassmorphic Cards Background */}
      <GlassmorphicCards />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border-primary-500/30 text-white/90"
            >
              <Leaf className="h-4 w-4 text-primary-400" />
              <span className="text-sm tracking-wide">
                Natural Wellness Solutions
              </span>
              <ArrowRight className="h-3 w-3" />
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none">
              <span className="block text-white mb-2">Caring for You</span>
              <span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                Naturally
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Premium wellness products built with nature&apos;s finest
            ingredients. Promoting wellness through purity, tradition, and
            science for your complete wellbeing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-400 hover:to-primary-500 shadow-lg hover:shadow-primary-500/50 transition-all group"
            >
              <Link href="#products" className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10"
            >
              <Link href="#about">Learn More</Link>
            </Button>
          </motion.div>

          {/* Hero Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 md:mt-20 relative"
          >
            <div className="relative">
              <VideoPlayer src="https://www.youtube.com/embed/QfFV2R9TRK0?si=PKNwEa0gAm3zfj98" />

              {/* BorderBeam Effect */}
              <BorderBeam
                size={300}
                duration={12}
                borderWidth={2}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary) / 0.3)"
                delay={0}
              />
            </div>

            {/* Subtle corner accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-400/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400/5 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
