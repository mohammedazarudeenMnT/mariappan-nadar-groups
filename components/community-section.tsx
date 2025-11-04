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

      {/* Animated light beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scaleY: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent"
        animate={{
          opacity: [0.5, 0.2, 0.5],
          scaleY: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <BlurFade delay={0.1}>
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Community
            </motion.h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <motion.p
              className="text-2xl text-primary-100 font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <FadeInText text="Our purpose in action" delay={0.4} />
            </motion.p>
          </BlurFade>
          <BlurFade delay={0.3}>
            <motion.p
              className="text-lg text-primary-50 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
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
              <BlurFade key={stat.label} delay={0.3 + index * 0.1}>
                <CardSpotlight
                  spotlightColor="rgba(255, 255, 255, 0.15)"
                  className="h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/30 shadow-xl hover:shadow-2xl transition-all overflow-hidden group h-full"
                  >
                    {/* Animated background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <motion.div
                      className="flex justify-center mb-4 relative z-10"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.9 + index * 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <motion.div
                        className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center ring-2 ring-white/30 group-hover:ring-white/50 transition-all"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </motion.div>
                    <h3 className="text-5xl font-bold text-white mb-2 relative z-10">
                      <AnimatedCounter
                        to={stat.number}
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </h3>
                    <motion.p
                      className="text-primary-100 text-lg font-medium relative z-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 + index * 0.2 }}
                    >
                      {stat.label}
                    </motion.p>

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </CardSpotlight>
              </BlurFade>
            );
          })}
        </div>

        <BlurFade delay={0.6}>
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <div className="text-center">
              <motion.h3
                className="text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.7 }}
              >
                <FadeInText text="Engage. Uplift. Empower." delay={1.8} />
              </motion.h3>
              <motion.p
                className="text-xl text-primary-100 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.0 }}
              >
                Building stronger communities through responsible business
                practices
              </motion.p>
              <Link href="/highlights" className="cursor-pointer">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.2 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 40px rgba(255,255,255,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors shadow-lg cursor-pointer"
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
