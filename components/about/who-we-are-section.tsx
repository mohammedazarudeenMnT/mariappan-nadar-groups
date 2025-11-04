"use client";
import React from "react";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Building2, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Building2, number: 3, suffix: "", label: "Business Divisions" },
  { icon: Users, number: 50000, suffix: "+", label: "Happy Customers" },
  { icon: Award, number: 100, suffix: "+", label: "Years of Trust" },
  { icon: TrendingUp, number: 1000, suffix: "+", label: "Projects Completed" },
];

export function WhoWeAreSection() {
  return (
    <section
      id="who-we-are"
      className="relative py-24 bg-primary-50/10 dark:bg-neutral-900 scroll-mt-20 overflow-hidden"
    >
      {/* Aurora Background Effect */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-primary-300/15 via-primary-200/8 to-transparent rounded-full blur-3xl animate-pulse" />

      {/* Background Pattern - Dotted Grid (Top Right & Bottom Left) */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[radial-gradient(circle_at_2px_2px,oklch(0.64_0.15_210_/_0.15)_2px,transparent_0)] bg-[size:32px_32px] opacity-60" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[radial-gradient(circle_at_2px_2px,oklch(0.64_0.15_210_/_0.15)_2px,transparent_0)] bg-[size:32px_32px] opacity-60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <BlurFade delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-base-900 mb-4 sm:mb-6">
            Who We Are
          </h2>
          <p className="text-lg sm:text-xl text-center text-primary-600 mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            A trusted name in Madurai for nearly a century
          </p>
        </BlurFade>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
          <BlurFade delay={0.2}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                alt="Mariappa Nadar Group"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-base-900">
                Building Trust Since 1925
              </h3>
              <p className="text-base sm:text-lg text-base-600 leading-relaxed">
                The Mariappa Nadar Group stands as a testament to enduring
                values, unwavering commitment, and visionary leadership. Founded
                nearly a century ago by P.S.M. Mariappa Nadar, what began as a
                modest trading firm in Madurai has evolved into a trusted
                multi-sector enterprise.
              </p>
              <p className="text-base sm:text-lg text-base-600 leading-relaxed">
                Today, under the leadership of Rajalakshmi, we continue to
                uphold the founding principles of integrity, excellence, and
                community service. Our three core divisions—Construction
                Materials, Mathi Mobiles, and Himalaya Wellness—serve thousands
                of customers across Tamil Nadu.
              </p>
              <p className="text-base sm:text-lg text-base-600 leading-relaxed">
                We are more than a business; we are a part of the community
                fabric, committed to contributing to the growth and prosperity
                of the region we call home.
              </p>
            </motion.div>
          </BlurFade>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <BlurFade key={stat.label} delay={0.4 + index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-4 sm:p-6 text-center border border-primary-100 shadow-lg"
                >
                  <motion.div
                    className="flex justify-center mb-3 sm:mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">
                    <AnimatedCounter
                      to={stat.number}
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </h3>
                  <p className="text-sm sm:text-base text-base-600 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
