"use client";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  IconBuildingSkyscraper,
  IconTruckDelivery,
  IconRuler,
  IconHammer,
  IconStack2,
  IconTool,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconStack2,
    title: "TMT Bars",
    subtitle: "JSW, RANINDIA, Vizag",
    description:
      "Premium quality TMT bars with superior strength and durability for all construction needs",
    gradient: "from-primary-600 to-primary-700",
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&h=400&fit=crop",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Cement & Aggregates",
    subtitle: "Trusted Brands",
    description:
      "High-grade cement and aggregates ensuring structural integrity and longevity",
    gradient: "from-slate-600 to-primary-600",
    image:
      "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=600&h=400&fit=crop",
  },
  {
    icon: IconHammer,
    title: "Roofing Sheets",
    subtitle: "Weather Resistant",
    description:
      "Durable roofing solutions protecting your structures from all weather conditions",
    gradient: "from-primary-500 to-primary-700",
    image:
      "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&h=400&fit=crop",
  },
  {
    icon: IconRuler,
    title: "Structural Steels & Iron",
    subtitle: "Industrial Grade",
    description:
      "Precision-engineered structural steel for commercial and industrial projects",
    gradient: "from-primary-700 to-slate-700",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop",
  },
  {
    icon: IconTool,
    title: "Construction Equipment",
    subtitle: "Professional Tools",
    description:
      "Complete range of construction equipment and accessories for efficient project execution",
    gradient: "from-slate-700 to-primary-600",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=400&fit=crop",
  },
  {
    icon: IconTruckDelivery,
    title: "Logistics & Supply",
    subtitle: "On-Time Delivery",
    description:
      "Reliable supply chain management ensuring materials reach your site on schedule",
    gradient: "from-primary-600 to-primary-800",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-32 px-4 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary-300/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-primary-500/10 to-primary-600/10 text-primary-600 rounded-full text-sm font-bold border border-primary-200">
                Our Services
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                  Construction Solutions
                </span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              From foundation to finish, we provide everything you need to build
              with confidence
            </motion.p>
          </div>
        </BlurFade>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative h-full"
                >
                  {/* Card with image background */}
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                    {/* Background Image with saturation effect */}
                    <motion.div
                      className="absolute inset-0 saturate-50 transition-all duration-500 group-hover:scale-110 group-hover:saturate-100"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                      {/* Icon with rotation animation */}
                      <motion.div
                        whileHover={{
                          rotate: -45,
                          scale: 1.1,
                          transition: { duration: 0.3 },
                        }}
                        className="ml-auto"
                      >
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                          <Icon className="w-6 h-6" />
                        </div>
                      </motion.div>

                      {/* Bottom Content */}
                      <div>
                        {/* Subtitle */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className="text-xs font-bold text-primary-300 uppercase tracking-wider mb-2"
                        >
                          {service.subtitle}
                        </motion.div>

                        {/* Animated Title - each letter bounces on hover */}
                        <h3 className="text-3xl font-bold mb-3">
                          {service.title.split("").map((letter, i) => (
                            <motion.span
                              key={i}
                              className="inline-block"
                              whileHover={{
                                y: -5,
                                transition: {
                                  duration: 0.3,
                                  delay: i * 0.03,
                                },
                              }}
                            >
                              {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                          ))}
                        </h3>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          className="text-white/90 leading-relaxed text-sm"
                        >
                          {service.description}
                        </motion.p>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                      className="absolute inset-0 border-2 border-primary-400 rounded-2xl pointer-events-none"
                    />
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
