"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Shield,
  Heart,
  Users,
  Lightbulb,
  Target,
  Handshake,
} from "lucide-react";
import GridPattern from "@/components/ui/grid-pattern";

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Upholding the highest standards of honesty and ethical conduct in all our dealings",
  },
  {
    icon: Heart,
    title: "Commitment",
    description:
      "Dedicated to excellence and going above and beyond for our customers",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building lasting relationships and contributing to societal growth",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Embracing change and continuously improving our products and services",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Striving for the best in quality, service, and customer satisfaction",
  },
  {
    icon: Handshake,
    title: "Trust",
    description:
      "Building confidence through reliability, transparency, and consistent delivery",
  },
];

export function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <>
      {/* Parallax Banner Section */}
      <section
        ref={containerRef}
        id="philosophy"
        className="relative pt-32 pb-32 overflow-hidden bg-slate-900 scroll-mt-20"
      >
        {/* Parallax Background Image */}
        <motion.div style={{ y }} className="absolute inset-0 -bottom-32">
          <div
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-primary-900/80 to-slate-900/90" />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 flex items-center justify-center px-4"
        >
          <div className="max-w-5xl mx-auto text-center">
            <BlurFade delay={0.2}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Quote Mark */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <svg
                    className="w-16 h-16 mx-auto text-primary-400 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </motion.div>

                {/* Main Text */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  Group Purpose &{" "}
                  <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                    Philosophy
                  </span>
                </h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl md:text-3xl text-slate-200 mb-6 leading-relaxed font-light"
                >
                  To enrich lives and build stronger communities by delivering
                  quality products and services with integrity.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light"
                >
                  Our success goes beyond business metrics — it encompasses our
                  shared responsibility to enable a sustainable way of life for
                  all sections of society.
                </motion.p>

                {/* Decorative Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="w-32 h-1 bg-gradient-to-r from-primary-400 to-primary-500 mx-auto mt-12"
                />
              </motion.div>
            </BlurFade>
          </div>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-24 bg-white dark:bg-neutral-950 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,oklch(0.64_0.15_210_/_0.4)_0px,oklch(0.64_0.15_210_/_0.4)_1px,transparent_1px,transparent_4px),repeating-linear-gradient(90deg,oklch(0.64_0.15_210_/_0.4)_0px,oklch(0.64_0.15_210_/_0.4)_1px,transparent_1px,transparent_4px),repeating-linear-gradient(0deg,oklch(0.64_0.15_210_/_0.2)_0px,oklch(0.64_0.15_210_/_0.2)_2px,transparent_2px,transparent_8px),repeating-linear-gradient(90deg,oklch(0.64_0.15_210_/_0.2)_0px,oklch(0.64_0.15_210_/_0.2)_2px,transparent_2px,transparent_8px)]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,7,18,0.8)_100%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Core Values */}
          <div className="mb-12">
            <BlurFade delay={0.3}>
              <h3 className="text-3xl font-bold text-center text-base-900 mb-12">
                Our Core Values
              </h3>
            </BlurFade>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <BlurFade key={value.title} delay={0.4 + index * 0.1}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-primary-100"
                    >
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-4"
                        initial={{ rotate: -180, scale: 0 }}
                        whileInView={{ rotate: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                        }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h4 className="text-xl font-bold text-base-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-base-600">{value.description}</p>
                    </motion.div>
                  </BlurFade>
                );
              })}
            </div>
          </div>

          {/* Philosophy Pillars */}
          <BlurFade delay={0.8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-primary-100"
            >
              <h3 className="text-3xl font-bold text-center text-base-900 mb-8">
                Our Guiding Principles
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-3">
                    01
                  </div>
                  <h4 className="text-xl font-bold text-base-900 mb-2">
                    Customer First
                  </h4>
                  <p className="text-base-600">
                    Every decision we make is guided by what&apos;s best for our
                    customers and their needs
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-3">
                    02
                  </div>
                  <h4 className="text-xl font-bold text-base-900 mb-2">
                    Quality Always
                  </h4>
                  <p className="text-base-600">
                    We never compromise on quality, ensuring excellence in every
                    product and service
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-3">
                    03
                  </div>
                  <h4 className="text-xl font-bold text-base-900 mb-2">
                    Community Impact
                  </h4>
                  <p className="text-base-600">
                    We measure success by the positive impact we create in our
                    community
                  </p>
                </div>
              </div>
            </motion.div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
