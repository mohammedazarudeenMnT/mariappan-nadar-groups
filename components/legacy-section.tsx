"use client";
import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "motion/react";
import { AnimatedText, GradientText } from "@/components/ui/animated-text";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export function LegacySection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 overflow-hidden">
      {/* Sophisticated mesh gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent" />

      {/* Gradient Color Overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Gradient */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-200/20 via-primary-300/10 to-transparent rounded-full blur-3xl" />

        {/* Top Right Gradient */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-200/25 via-indigo-200/15 to-transparent rounded-full blur-3xl" />

        {/* Bottom Center Gradient */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-purple-200/20 via-primary-200/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid Patterns in Bottom Corners */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Bottom Left Corner */}
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-30"
          style={{
            maskImage:
              "radial-gradient(ellipse at bottom left, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at bottom left, black 30%, transparent 70%)",
          }}
        >
          <AnimatedGridPattern
            numSquares={25}
            maxOpacity={0.35}
            duration={4}
            className="absolute inset-0"
          />
        </div>

        {/* Bottom Right Corner */}
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-30"
          style={{
            maskImage:
              "radial-gradient(ellipse at bottom right, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at bottom right, black 30%, transparent 70%)",
          }}
        >
          <AnimatedGridPattern
            numSquares={25}
            maxOpacity={0.35}
            duration={4}
            className="absolute inset-0"
          />
        </div>
      </div>

      {/* Enhanced animated background blobs with better colors */}
      <motion.div
        className="absolute top-20 left-0 sm:left-10 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] bg-gradient-to-br from-blue-200/30 via-indigo-200/20 to-purple-200/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, 40, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-0 sm:right-10 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] bg-gradient-to-tl from-cyan-200/30 via-blue-200/20 to-indigo-200/10 rounded-full blur-3xl"
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.6, 0.4, 0.6],
          x: [0, -40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-to-br from-violet-200/20 via-purple-200/15 to-pink-200/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16 relative">
          {/* Grid Pattern Behind Header */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                maskImage:
                  "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              }}
            >
              <AnimatedGridPattern
                numSquares={35}
                maxOpacity={0.4}
                duration={3}
                className="absolute inset-0"
              />
            </div>
          </div>

          <BlurFade delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-base-900 mb-4 sm:mb-6 relative">
              <AnimatedText text="Legacy &" delay={0.2} />{" "}
              <GradientText text="Leadership" delay={0.6} />
            </h2>
          </BlurFade>
          <BlurFade delay={0.4}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-primary-600 font-semibold relative"
            >
              Our force of success
            </motion.p>
          </BlurFade>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <BlurFade delay={0.3}>
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden group cursor-pointer shadow-xl"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                alt="Establishing a foundation of success"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <motion.h3
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  Establishing a foundation of success
                </motion.h3>
                <motion.p
                  className="text-primary-300 font-semibold text-sm sm:text-base md:text-lg"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  Since 1925
                </motion.p>
              </motion.div>
            </motion.div>
          </BlurFade>

          <BlurFade delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden group cursor-pointer shadow-xl"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop"
                alt="Leadership Vision"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.h3
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  Visionary Leadership
                </motion.h3>
                <motion.p
                  className="text-primary-300 font-semibold text-sm sm:text-base"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  Guided by values, driven by excellence
                </motion.p>
              </motion.div>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
