"use client";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  IconShield,
  IconLeaf,
  IconClock,
  IconUsers,
} from "@tabler/icons-react";
import { ModernGridBg } from "@/components/ui/modern-grid-bg";

const values = [
  {
    icon: IconShield,
    title: "Quality Construction",
    description: "Premium materials meeting international standards",
  },
  {
    icon: IconLeaf,
    title: "Eco-Friendly Practices",
    description: "Sustainable solutions for a better tomorrow",
  },
  {
    icon: IconClock,
    title: "Timely Delivery",
    description: "On-time supply chain you can depend on",
  },
  {
    icon: IconUsers,
    title: "Client-Centric Approach",
    description: "Your success is our priority",
  },
];

export function AboutSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="relative text-center mb-20">
            {/* Background Pattern - Header Only */}
            <div className="absolute inset-0 opacity-5 -mx-4 -my-8">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative inline-block mb-4"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-primary-500/10 to-primary-600/10 text-primary-600 rounded-full text-sm font-bold border border-primary-200">
                About MM Firms Constructions
              </span>
            </motion.div>
            <h2 className="relative text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Where Innovation Meets{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                Integrity
              </span>
            </h2>
            <p className="relative text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              MM Firms Constructions, a flagship of the Mariappa Nadar Group,
              has been a cornerstone in Tamil Nadu&apos;s infrastructure and
              development journey. With decades of experience, we bring
              world-class materials, precise engineering, and sustainable
              solutions to every project.
            </p>
          </div>
        </BlurFade>

        {/* Key Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 rounded-2xl transform group-hover:scale-105 transition-transform" />
                  <div className="relative p-8 text-center h-full flex flex-col min-h-[280px]">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed flex-grow">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* Stats Section */}
        <BlurFade delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <ModernGridBg />

            <div className="relative z-10 py-16 px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "70+", label: "Years of Excellence" },
                  { value: "1500+", label: "Projects Delivered" },
                  { value: "50+", label: "Product Categories" },
                  { value: "100%", label: "Quality Assured" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-300 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
}
