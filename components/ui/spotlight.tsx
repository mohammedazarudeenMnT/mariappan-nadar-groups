"use client";
import React from "react";
import { motion } from "motion/react";

export function Spotlight({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`pointer-events-none absolute -top-40 left-0 z-[1] h-[169%] w-[138%] lg:w-[84%] ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-400/30 via-primary-500/20 to-transparent blur-3xl" />
    </motion.div>
  );
}
