"use client";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";

export function CommitmentSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat bg-fixed brightness-110"
          style={{
            backgroundImage:
              "url('/images/himalaya_wellness/himalaya banner.png')",
            backgroundColor: "#0f766e",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-primary-900/70" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <BlurFade delay={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-bold border border-white/20">
              Our Commitment
            </span>
          </motion.div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Quality You Can Feel,
            <br />
            <span className="bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent">
              Care You Can Trust
            </span>
          </motion.h2>
        </BlurFade>

        <BlurFade delay={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            <p>
              Every Himalaya product follows strict quality standards and
              sustainable manufacturing practices.
            </p>
            <p className="text-2xl font-semibold text-white">
              We stand by our promise — pure, safe, and effective care.
            </p>
          </motion.div>
        </BlurFade>

        {/* Decorative Bars */}
        <div className="mt-16 flex justify-center gap-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
              className="w-1 h-24 bg-gradient-to-t from-primary-400 to-primary-300 rounded-full origin-bottom"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
