"use client";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  IconDeviceMobile,
  IconHeadphones,
  IconTool,
  IconUsers,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconDeviceMobile,
    title: "Samsung Exclusive Showroom",
    description:
      "Official Samsung SmartCafé partner with latest Galaxy devices",
  },
  {
    icon: IconTool,
    title: "Authorized Service Center",
    description: "Expert repairs with genuine Samsung parts",
  },
  {
    icon: IconHeadphones,
    title: "Original Accessories",
    description: "Genuine Samsung accessories and smartwatches",
  },
  {
    icon: IconUsers,
    title: "Trusted by 10,000+ Customers",
    description: "Years of reliable service and support",
  },
];

export function MobilesAboutSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Pattern - Specific Areas */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* Top Left Corner */}
        <div
          className="absolute top-0 left-0 w-1/3 h-1/3"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            maskImage:
              "radial-gradient(ellipse at top left, black 40%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at top left, black 40%, transparent 70%)",
          }}
        />

        {/* Top Right Corner */}
        <div
          className="absolute top-0 right-0 w-1/3 h-1/3"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            maskImage:
              "radial-gradient(ellipse at top right, black 40%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at top right, black 40%, transparent 70%)",
          }}
        />

        {/* Bottom Left Corner */}
        <div
          className="absolute bottom-0 left-0 w-1/3 h-1/3"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            maskImage:
              "radial-gradient(ellipse at bottom left, black 40%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at bottom left, black 40%, transparent 70%)",
          }}
        />

        {/* Bottom Right Corner */}
        <div
          className="absolute bottom-0 right-0 w-1/3 h-1/3"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            maskImage:
              "radial-gradient(ellipse at bottom right, black 40%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at bottom right, black 40%, transparent 70%)",
          }}
        />
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
                About Mathi Mobiles
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Samsung Exclusive{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                Showroom
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Mathi Mobiles, part of the Mariappa Nadar Group, is an authorized
              Samsung Exclusive Showroom and SmartCafé partner. We offer the
              complete range of Samsung mobiles, laptops, smartwatches, and
              original accessories with genuine warranty and exceptional
              after-sales support.
            </p>
          </div>
        </BlurFade>

        {/* Quick Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
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
                  {/* Animated Border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

                  {/* Rotating Border Animation */}
                  <motion.div
                    className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(60deg, transparent, transparent, rgba(var(--primary-500), 0.5), transparent, transparent)",
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300" />

                  {/* Card Content */}
                  <div className="relative p-8 text-center bg-white rounded-2xl h-full flex flex-col">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* Image & Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <BlurFade delay={0.3}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&h=600&fit=crop"
                alt="Samsung Exclusive Showroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Visit Our Samsung Showroom
                </h3>
                <p className="text-white/90">
                  Experience the complete Galaxy ecosystem
                </p>
              </div>
            </motion.div>
          </BlurFade>

          <BlurFade delay={0.4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Your Trusted Samsung Partner
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mt-2" />
                  <p className="text-lg text-slate-600">
                    <strong className="text-slate-900">
                      Samsung Exclusive Showroom:
                    </strong>{" "}
                    Official Samsung SmartCafé with complete Galaxy lineup
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mt-2" />
                  <p className="text-lg text-slate-600">
                    <strong className="text-slate-900">Complete Range:</strong>{" "}
                    Samsung mobiles, laptops, smartwatches, and original
                    accessories
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mt-2" />
                  <p className="text-lg text-slate-600">
                    <strong className="text-slate-900">
                      Genuine Products:
                    </strong>{" "}
                    100% authentic Samsung products with official warranty
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mt-2" />
                  <p className="text-lg text-slate-600">
                    <strong className="text-slate-900">Expert Support:</strong>{" "}
                    Certified Samsung technicians and flexible EMI options
                  </p>
                </div>
              </div>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
