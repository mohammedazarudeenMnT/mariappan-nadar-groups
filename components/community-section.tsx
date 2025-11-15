"use client";
import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "motion/react";
import { Users, Heart, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { FadeInText } from "@/components/ui/animated-text";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Link from "next/link";

const stats = [
  { number: 100, suffix: "+", label: "Years of Trust", icon: Sparkles },
  { number: 50000, suffix: "+", label: "Happy Customers", icon: Users },
  { number: 3, suffix: "", label: "Business Divisions", icon: Heart },
];

export function CommunitySection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
      {/* Gradient Color Overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Gradient */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-white/10 via-primary-400/10 to-transparent rounded-full blur-3xl" />

        {/* Top Right Gradient */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary-300/15 via-white/5 to-transparent rounded-full blur-3xl" />

        {/* Bottom Center Gradient */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-primary-500/20 via-white/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Animated pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
      </div>

      {/* Simplified light beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-white/15 via-white/5 to-transparent"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "opacity" }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-white/15 via-white/5 to-transparent"
        animate={{
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "opacity" }}
      />

      {/* Simplified floating orbs */}
      <motion.div
        className="absolute top-1/4 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"
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
        className="absolute bottom-1/4 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <BlurFade delay={0.05}>
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Community
            </motion.h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <motion.p
              className="text-2xl text-primary-100 font-semibold mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <FadeInText text="Our purpose in action" delay={0.25} />
            </motion.p>
          </BlurFade>
          <BlurFade delay={0.25}>
            <motion.p
              className="text-lg text-primary-50 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              At Mariappa Nadar Group, we believe that success goes beyond
              business. It encompasses our shared responsibility to enable a
              sustainable way of life for all sections of society.
            </motion.p>
          </BlurFade>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <BlurFade key={stat.label} delay={0.15 + index * 0.05}>
                <CardSpotlight
                  spotlightColor="rgba(255, 255, 255, 0.15)"
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
                    whileHover={{ y: -6 }}
                    className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-200 overflow-hidden group h-full"
                  >
                    {/* Animated background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                    <div className="flex justify-center mb-4 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center ring-2 ring-white/30 group-hover:ring-white/50 transition-all duration-200">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-5xl font-bold text-white mb-2 relative z-10">
                      <AnimatedCounter
                        to={stat.number}
                        suffix={stat.suffix}
                        duration={2}
                      />
                    </h3>
                    <p className="text-primary-100 text-lg font-medium relative z-10">
                      {stat.label}
                    </p>

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </CardSpotlight>
              </BlurFade>
            );
          })}
        </div>

        <BlurFade delay={0.4}>
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                <FadeInText text="Engage. Uplift. Empower." delay={0.6} />
              </h3>
              <p className="text-xl text-primary-100 mb-8">
                Building stronger communities through responsible business
                practices
              </p>
              <Link href="/highlights" className="cursor-pointer">
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.7,
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-200 shadow-lg cursor-pointer"
                >
                  Learn About Our Impact
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
}
