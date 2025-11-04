"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { useRef } from "react";

export function LegacyBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-32 overflow-hidden bg-slate-900"
    >
      {/* Parallax Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 -bottom-32">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop')",
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
                Our Legacy of{" "}
                <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                  Trust
                </span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl text-slate-200 mb-6 leading-relaxed font-light"
              >
                Our legacy reflects strength and durability — values that guide
                every product we deliver.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light"
              >
                Decades of experience have built not just structures, but
                long-term partnerships.
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
  );
}
