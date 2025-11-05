"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { IconSchool, IconStethoscope, IconArrowRight } from "@tabler/icons-react";
import { BlurFade } from "@/components/ui/blur-fade";

const focusAreas = [
    {
        icon: IconSchool,
        title: "Education Programs",
        description:
            "Empowering students through scholarships, tutoring, and educational resources to build a brighter future for our community.",
        stats: "500+ Students Supported",
    },
    {
        icon: IconStethoscope,
        title: "Healthcare Services",
        description:
            "Providing free medical camps, health screenings, and essential healthcare services to underserved communities.",
        stats: "1000+ Lives Impacted",
    },
];

export function MaatramHomeSection() {
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
                className="relative py-12 sm:py-16 md:py-24 overflow-hidden bg-slate-900"
            >
                {/* Parallax Background Image */}
                <motion.div style={{ y }} className="absolute inset-0 -bottom-32">
                    <div
                        className="w-full h-full bg-cover bg-center bg-fixed"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop')",
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
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                                    <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                                        MaatRaM
                                    </span>{" "}
                                    Educational & Medical Trust
                                </h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed font-light"
                                >
                                    Transforming lives through{" "}
                                    <span className="text-primary-400 font-semibold">education</span>{" "}
                                    and{" "}
                                    <span className="text-primary-400 font-semibold">healthcare</span>{" "}
                                    initiatives.
                                </motion.p>

                                {/* Decorative Line */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                    className="w-24 h-0.5 bg-gradient-to-r from-primary-400 to-primary-500 mx-auto mb-10"
                                />

                                {/* Focus Areas Cards */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {focusAreas.map((area, index) => {
                                        const Icon = area.icon;
                                        return (
                                            <motion.div
                                                key={area.title}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.9 + index * 0.2 }}
                                                whileHover={{ y: -10 }}
                                                className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20 hover:bg-white/15 transition-all duration-300"
                                            >
                                                <div className="flex items-start gap-3 mb-3">
                                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center flex-shrink-0">
                                                        <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-white mb-1">
                                                            {area.title}
                                                        </h3>
                                                        <p className="text-xs font-medium text-primary-300">
                                                            {area.stats}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="text-slate-300 text-sm leading-relaxed">
                                                    {area.description}
                                                </p>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.3 }}
                                >
                                    <Link href="/csr/maatram">
                                        <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                            <span>Learn More About MaatRaM Trust</span>
                                            <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </BlurFade>
                    </div>
                </motion.div>
            </section>
    );
}
