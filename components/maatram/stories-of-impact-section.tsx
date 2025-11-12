"use client";

import { motion } from "motion/react";
import { Sparkles, Heart, Users, Award } from "lucide-react";
import DomeGallery from "./DomeGallery";

const impactStories = [
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    alt: "Students in classroom learning",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    alt: "Children reading books together",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    alt: "Healthcare workers providing medical care",
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    alt: "Community health camp",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    alt: "Vocational training session",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    alt: "Youth learning new skills",
  },
  {
    src: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=800&q=80",
    alt: "Community gathering and celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    alt: "Women empowerment program",
  },
  {
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80",
    alt: "Digital learning center",
  },
  {
    src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80",
    alt: "Happy children at school",
  },
];

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Lives Transformed",
    color: "from-primary via-primary to-primary/70",
  },
  {
    icon: Heart,
    value: "50+",
    label: "Communities Served",
    color: "from-primary/90 via-primary/80 to-primary/60",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years of Impact",
    color: "from-primary/80 via-primary/70 to-primary/50",
  },
];

export function StoriesOfImpactSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* VISIBLE Background: Hexagon Pattern */}
      <div className="absolute inset-0 -z-10">
        {/* VISIBLE Hexagon Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="hexagons-visible"
                x="0"
                y="0"
                width="50"
                height="43.4"
                patternUnits="userSpaceOnUse"
              >
                <polygon
                  points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons-visible)" />
          </svg>
        </div>

        {/* Strong Gradient Orbs */}
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium tracking-wide text-primary">
              MaatRaM - Real Stories, Real Impact
            </span>
          </motion.div>

          <h2 className="relative mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Stories of Impact
          </h2>
          <p className="relative mx-auto max-w-2xl text-balance text-base text-muted-foreground/80 md:text-lg">
            Explore the lives we&apos;ve touched and the communities we&apos;ve
            transformed through our programs.
          </p>
        </motion.div>

        {/* 3D Dome Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative mx-auto h-[400px] w-full max-w-6xl overflow-hidden rounded-3xl border-2 border-border/50 bg-gradient-to-br from-card via-card to-primary/5 shadow-2xl md:h-[500px] lg:h-[600px]"
        >
          {/* Enhanced Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.03]" />

          {/* Glow Effect on Hover */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-primary/15" />
          </div>

          {/* Animated Border Glow */}
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary via-primary/50 to-primary opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-30" />

          {/* Corner Decorations */}
          <span className="absolute -left-px -top-px block h-3 w-3 border-l-2 border-t-2 border-primary opacity-60" />
          <span className="absolute -right-px -top-px block h-3 w-3 border-r-2 border-t-2 border-primary opacity-60" />
          <span className="absolute -bottom-px -left-px block h-3 w-3 border-b-2 border-l-2 border-primary opacity-60" />
          <span className="absolute -bottom-px -right-px block h-3 w-3 border-b-2 border-r-2 border-primary opacity-60" />

          <DomeGallery
            images={impactStories}
            fit={0.55}
            fitBasis="auto"
            minRadius={500}
            maxRadius={900}
            padFactor={0.2}
            overlayBlurColor="hsl(var(--background))"
            maxVerticalRotationDeg={8}
            dragSensitivity={18}
            enlargeTransitionMs={350}
            segments={35}
            dragDampening={2}
            openedImageWidth="500px"
            openedImageHeight="500px"
            imageBorderRadius="16px"
            openedImageBorderRadius="20px"
            grayscale={false}
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border-2 border-border bg-gradient-to-br from-card via-card to-primary/5 p-6 text-center shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-primary/80 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-25" />

                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 space-y-3">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto inline-flex rounded-xl bg-gradient-to-br from-primary to-primary/80 p-3 shadow-lg shadow-primary/30"
                  >
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </motion.div>
                  <div
                    className={`bg-gradient-to-r ${stat.color} bg-clip-text text-4xl font-bold text-transparent md:text-5xl`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {stat.label}
                  </div>
                </div>

                {/* Corner Decorations */}
                <span className="absolute -left-px -top-px block h-2 w-2 border-l-2 border-t-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute -right-px -top-px block h-2 w-2 border-r-2 border-t-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute -bottom-px -left-px block h-2 w-2 border-b-2 border-l-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute -bottom-px -right-px block h-2 w-2 border-b-2 border-r-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl space-y-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto inline-flex rounded-full bg-gradient-to-r from-primary/20 to-primary/30 p-3 shadow-lg shadow-primary/20"
            >
              <Heart className="h-5 w-5 text-primary" />
            </motion.div>
            <h3 className="text-xl font-bold text-foreground md:text-2xl">
              Every Image Tells a Story
            </h3>
            <p className="mx-auto max-w-xl text-balance text-sm text-muted-foreground/80 md:text-base">
              These are the faces of change, the voices of progress, and the
              hearts we&apos;ve touched through our commitment to making a
              difference.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
