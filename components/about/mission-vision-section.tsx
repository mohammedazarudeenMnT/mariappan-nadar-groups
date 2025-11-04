"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Target, Eye, Sparkles, TrendingUp, Users, Award } from "lucide-react";

export function MissionVisionSection() {
  return (
    <section
      id="mission-vision"
      className="relative py-24 bg-gradient-to-br from-white via-primary-50/20 to-white dark:bg-neutral-900 scroll-mt-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4"
            >
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">
                Our Purpose
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-base-900 mb-4">
              Mission & Vision
            </h2>
            <p className="text-xl text-base-600 max-w-3xl mx-auto">
              Guiding principles that drive our journey forward
            </p>
          </div>
        </BlurFade>

        {/* New Layout: Large Mission Card + Stacked Vision Cards */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Large Mission Card */}
          <BlurFade delay={0.2} className="lg:flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-full"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-primary-100/50 overflow-hidden"
              >
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-3xl" />

                <div className="relative z-10">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 mb-6 shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Target className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-bold text-base-900 mb-6">
                    Our Mission
                  </h3>

                  <div className="space-y-4 mb-8">
                    <p className="text-lg text-base-700 leading-relaxed">
                      To deliver exceptional quality products and services
                      across construction, technology, and wellness sectors
                      while maintaining the highest standards of integrity and
                      customer satisfaction.
                    </p>
                    <p className="text-base text-base-600 leading-relaxed">
                      We strive to be the most trusted partner for our
                      customers, providing reliable solutions that enhance their
                      lives and contribute to the development of our community.
                    </p>
                  </div>

                  {/* Key Points with Icons */}
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-primary-50/50 hover:bg-primary-50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                        <Award className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base-900 mb-1">
                          Excellence in Every Product
                        </h4>
                        <p className="text-sm text-base-600">
                          Maintaining highest quality standards across all
                          sectors
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-primary-50/50 hover:bg-primary-50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base-900 mb-1">
                          Building Lasting Relationships
                        </h4>
                        <p className="text-sm text-base-600">
                          Creating trust and value for our customers
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-primary-50/50 hover:bg-primary-50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base-900 mb-1">
                          Community Growth
                        </h4>
                        <p className="text-sm text-base-600">
                          Contributing to the development of our community
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </BlurFade>

          {/* Right: Vision Card with Image Overlay */}
          <BlurFade delay={0.3} className="lg:flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-full min-h-[600px]"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1200&fit=crop"
                    alt="Vision"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-primary-700/85" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10 text-white">
                  <div>
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md mb-6 shadow-lg"
                      whileHover={{ rotate: -360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Eye className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                      Our Vision
                    </h3>

                    <div className="space-y-4 mb-8">
                      <p className="text-lg text-white/95 leading-relaxed">
                        To be the most respected and trusted multi-sector
                        enterprise in Tamil Nadu, recognized for our commitment
                        to quality, innovation, and community welfare.
                      </p>
                      <p className="text-base text-white/85 leading-relaxed">
                        We envision a future where the Mariappa Nadar Group
                        continues to grow while staying true to our founding
                        values, expanding our reach while deepening our impact
                        on the communities we serve.
                      </p>
                    </div>
                  </div>

                  {/* Vision Points */}
                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                    >
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <p className="text-white/95 font-medium">
                        Leading through innovation and quality
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                    >
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <p className="text-white/95 font-medium">
                        Expanding while maintaining our values
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                    >
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <p className="text-white/95 font-medium">
                        Creating lasting positive impact
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
