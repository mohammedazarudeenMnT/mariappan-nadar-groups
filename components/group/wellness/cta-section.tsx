"use client";
import { motion } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";

export function WellnessCTASection() {
  return (
    <LampContainer>
      <div className="text-center w-full max-w-6xl mx-auto px-4">
        {/* Animated Content */}
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-transparent mb-8"
        >
          Visit Our Website
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          Discover Our Complete Wellness Range
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-base sm:text-lg text-slate-500 mb-12 max-w-2xl mx-auto"
        >
          Visit our dedicated wellness division to explore product lines and
          offers
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Link
            href="https://himalayawellness.in"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-primary-500/50 transition-all cursor-pointer"
            >
              Visit Himalaya Wellness Website
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <IconArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base text-slate-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-400" />
            <span>Product Catalog</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-500" />
            <span>Special Offers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-400" />
            <span>Store Locator</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-500" />
            <span>Contact Us</span>
          </div>
        </motion.div>
      </div>
    </LampContainer>
  );
}
