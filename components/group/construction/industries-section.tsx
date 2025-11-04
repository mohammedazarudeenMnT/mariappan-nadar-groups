"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { useRef, useState, useEffect } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

const industries = [
  {
    title: "Residential",
    description: "Premium materials for dream homes and luxury apartments",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    stats: "500+ Homes Built",
  },
  {
    title: "Commercial",
    description: "Robust solutions for offices, malls, and business complexes",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    stats: "200+ Commercial Projects",
  },
  {
    title: "Industrial",
    description: "Heavy-duty materials for factories and manufacturing units",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop",
    stats: "150+ Industrial Sites",
  },
  {
    title: "Infrastructure",
    description: "Large-scale supply for bridges, roads, and public works",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    stats: "50+ Infrastructure Projects",
  },
];

export function IndustriesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420; // Card width + gap
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Initialize scroll state
    handleScroll();

    // Add resize listener to update scroll state
    const handleResize = () => handleScroll();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-slate-900 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" />
      </motion.div>

      <div className="relative z-10">
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-20 max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-primary-500/20 to-primary-600/20 text-primary-400 rounded-full text-sm font-bold border border-primary-500/30">
                Industries We Serve
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Landmarks That{" "}
              <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                Speak for Themselves
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From residential dreams to industrial giants, we&apos;ve built the
              foundation of Tamil Nadu&apos;s growth
            </p>
          </div>
        </BlurFade>

        {/* Horizontal Scroll Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Scroll Hint - Left Gradient */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />

          {/* Scroll Hint - Right Gradient */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

          {/* Left Scroll Button */}
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll("left")}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-primary-500 text-white shadow-2xl hover:bg-primary-600 transition-colors cursor-pointer"
            >
              <IconChevronLeft className="w-6 h-6" />
            </motion.button>
          )}

          {/* Right Scroll Button */}
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll("right")}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-primary-500 text-white shadow-2xl hover:bg-primary-600 transition-colors cursor-pointer"
            >
              <IconChevronRight className="w-6 h-6" />
            </motion.button>
          )}

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 pl-4 pr-4 md:pl-8 md:pr-8 snap-x snap-mandatory hide-scrollbar"
          >
            {industries.map((industry, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative flex-shrink-0 w-[320px] md:w-[400px] snap-center"
                >
                  {/* Card */}
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    {/* Image */}
                    <motion.img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      {/* Stats Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="mb-4"
                      >
                        <span className="inline-block px-4 py-2 bg-primary-500/20 backdrop-blur-sm text-primary-300 rounded-full text-sm font-bold border border-primary-400/30">
                          {industry.stats}
                        </span>
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="text-4xl font-bold text-white mb-3"
                      >
                        {industry.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-slate-300 leading-relaxed mb-4"
                      >
                        {industry.description}
                      </motion.p>

                      {/* View Projects Link */}
                      <Link href="/contact" className="cursor-pointer">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ x: 5 }}
                          className="inline-flex items-center gap-2 text-primary-400 font-semibold"
                        >
                          View Projects
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.div>
                      </Link>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-2xl transition-all duration-300" />
                  </div>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Hide scrollbar completely */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Smooth scrolling */
        .overflow-x-auto {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </section>
  );
}
