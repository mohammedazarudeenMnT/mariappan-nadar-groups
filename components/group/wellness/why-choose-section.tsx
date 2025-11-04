"use client";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  IconLeaf,
  IconCertificate,
  IconHeart,
  IconShoppingCart,
} from "@tabler/icons-react";

const reasons = [
  {
    icon: IconLeaf,
    title: "100% Natural & Herbal Ingredients",
    description:
      "Every product is crafted with pure, natural ingredients sourced from nature",
  },
  {
    icon: IconCertificate,
    title: "Certified Wellness Experts",
    description: "Backed by Ayurvedic wisdom and modern scientific research",
  },
  {
    icon: IconHeart,
    title: "Long-standing Trust from Generations",
    description: "Decades of delivering quality wellness products to families",
  },
  {
    icon: IconShoppingCart,
    title: "Available in Retail & Online",
    description: "Easy access to our complete range through multiple channels",
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-primary-500/10 to-primary-600/10 text-primary-600 rounded-full text-sm font-bold border border-primary-200">
                Why Choose Us
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Your Trusted{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                Wellness Partner
              </span>
            </h2>
          </div>
        </BlurFade>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 p-8"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
