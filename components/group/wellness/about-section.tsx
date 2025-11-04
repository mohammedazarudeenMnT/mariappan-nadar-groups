"use client";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  IconLeaf,
  IconPackage,
  IconShieldCheck,
  IconHeart,
} from "@tabler/icons-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const highlights = [
  {
    icon: IconLeaf,
    title: "Natural Ingredients",
    description: "100% natural and herbal formulations",
  },
  {
    icon: IconPackage,
    title: "Wide Range of Care Products",
    description: "Complete wellness solutions for every need",
  },
  {
    icon: IconShieldCheck,
    title: "Trusted Wellness Brand",
    description: "Decades of trust and quality assurance",
  },
  {
    icon: IconHeart,
    title: "Holistic Health Focus",
    description: "Nurturing well-being from within",
  },
];

const CardDecorator = () => (
  <>
    <span className="border-primary-600 absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
    <span className="border-primary-600 absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
    <span className="border-primary-600 absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
    <span className="border-primary-600 absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
  </>
);

export function WellnessAboutSection() {
  return (
    <section
      id="about"
      className="relative py-22 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="relative text-center ">
            <div className="absolute inset-0 opacity-5 -mx-4 -my-8">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                About Himalaya Wellness
              </span>
            </motion.div>
            <h2 className="relative text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Wellness Rooted in{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                Nature
              </span>
            </h2>
            <p className="relative text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              The Himalaya Wellness of Mariappa Nadar Group focuses on natural
              care and health products that nurture well-being from within.
              Inspired by Ayurveda and supported by modern science, every
              product is crafted with safety, quality, and trust.
            </p>
          </div>
        </BlurFade>

        {/* Enhanced Highlight Cards Grid with Decorators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <Card className="group relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-primary-100">
                  <CardDecorator />
                  <CardHeader className="pb-3">
                    <div className="p-6">
                      <span className="text-primary-600 flex items-center justify-center mb-4">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 text-center">
                        {highlight.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-center leading-relaxed px-4 pb-4">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
