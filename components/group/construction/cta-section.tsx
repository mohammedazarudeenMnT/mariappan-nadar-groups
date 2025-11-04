"use client";
import { motion } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";

export function CTASection() {
  return (
    <LampContainer>
      <div className="text-center w-full max-w-5xl mx-auto px-4">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Visit Our Website
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-xl md:text-2xl text-slate-300 mb-3 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Experience Our Full Range of Projects
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-base text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          To explore our detailed portfolio, ongoing projects, and services,
          visit our dedicated construction and materials website
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <Link
            href="https://mmfirms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(6, 182, 212, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full font-bold text-base md:text-lg shadow-lg shadow-cyan-500/30 transition-all overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">
                Go to MM Firm Constructions Website
              </span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <IconArrowRight className="w-5 h-5" />
              </motion.div>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-slate-400 text-sm"
        >
          {[
            { label: "Product Catalog", color: "bg-cyan-400" },
            { label: "Project Gallery", color: "bg-cyan-500" },
            { label: "Get Quote", color: "bg-cyan-400" },
            { label: "Contact Us", color: "bg-cyan-500" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, color: "#e0f2fe" }}
              className="flex items-center gap-2 cursor-pointer transition-colors"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className={`w-2 h-2 rounded-full ${item.color}`}
              />
              <span>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </LampContainer>
  );
}
