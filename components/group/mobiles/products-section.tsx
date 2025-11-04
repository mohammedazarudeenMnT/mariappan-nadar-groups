"use client";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  IconDeviceMobile,
  IconHeadphones,
  IconDeviceWatch,
  IconTool,
  IconCreditCard,
} from "@tabler/icons-react";

const products = [
  {
    icon: IconDeviceMobile,
    title: "Samsung Mobiles",
    subtitle: "Complete Galaxy Lineup",
    description:
      "Latest Samsung Galaxy smartphones including S-Series, Z-Fold, Z-Flip, A-Series, and M-Series with official warranty",
    gradient: "from-primary-600 to-primary-700",
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=400&fit=crop",
  },
  {
    icon: IconHeadphones,
    title: "Samsung Accessories",
    subtitle: "Original & Genuine",
    description:
      "Original Samsung cases, chargers, earbuds, power banks, and all genuine accessories",
    gradient: "from-slate-600 to-primary-600",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=400&fit=crop",
  },
  {
    icon: IconTool,
    title: "Samsung Service Center",
    subtitle: "Authorized Support",
    description:
      "Official Samsung service center with certified technicians and genuine parts",
    gradient: "from-primary-500 to-primary-700",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
  },
  {
    icon: IconCreditCard,
    title: "Easy EMI & Offers",
    subtitle: "Flexible Payment",
    description:
      "Samsung exclusive offers, trade-in programs, and convenient EMI payment options",
    gradient: "from-primary-700 to-slate-700",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  },
  {
    icon: IconDeviceWatch,
    title: "Samsung Laptops & Watches",
    subtitle: "Complete Ecosystem",
    description:
      "Samsung laptops, Galaxy smartwatches, and tablets for your complete digital lifestyle",
    gradient: "from-slate-700 to-primary-600",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=400&fit=crop",
  },
];

export function ProductsSection() {
  return (
    <section
      id="products"
      className="relative py-32 px-4 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600 rounded-full blur-3xl" />
      </div>

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
                What We Offer
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Complete Samsung{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your one-stop destination for all Samsung products and services
            </p>
          </div>
        </BlurFade>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-6 gap-4">
          {/* Card 1 - Smartphones (Large) */}
          <BlurFade delay={0.2} className="col-span-full lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative h-full overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="relative flex aspect-square size-16 rounded-full border border-slate-200 mb-6 before:absolute before:-inset-2 before:rounded-full before:border before:border-slate-100">
                <IconDeviceMobile className="m-auto size-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {products[0].title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {products[0].description}
              </p>
            </motion.div>
          </BlurFade>

          {/* Card 2 - Accessories */}
          <BlurFade
            delay={0.3}
            className="col-span-full sm:col-span-3 lg:col-span-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative h-full overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="relative flex aspect-square size-14 rounded-full border border-slate-200 mb-4 before:absolute before:-inset-2 before:rounded-full before:border before:border-slate-100">
                <IconHeadphones className="m-auto size-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {products[1].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {products[1].description}
              </p>
            </motion.div>
          </BlurFade>

          {/* Card 3 - Repair Services */}
          <BlurFade
            delay={0.4}
            className="col-span-full sm:col-span-3 lg:col-span-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative h-full overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="relative flex aspect-square size-14 rounded-full border border-slate-200 mb-4 before:absolute before:-inset-2 before:rounded-full before:border before:border-slate-100">
                <IconTool className="m-auto size-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {products[2].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {products[2].description}
              </p>
            </motion.div>
          </BlurFade>

          {/* Card 4 - Trade-In & EMI (Wide) */}
          <BlurFade delay={0.5} className="col-span-full lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="relative flex aspect-square size-14 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                <IconCreditCard className="m-auto size-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {products[3].title}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {products[3].description}
              </p>
            </motion.div>
          </BlurFade>

          {/* Card 5 - Corporate Sales (Wide) */}
          <BlurFade delay={0.6} className="col-span-full lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="relative flex aspect-square size-14 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                <IconDeviceWatch className="m-auto size-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {products[4].title}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {products[4].description}
              </p>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
