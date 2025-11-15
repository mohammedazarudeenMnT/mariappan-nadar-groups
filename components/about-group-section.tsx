"use client";
import React, { useRef } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import GeometricBackground from "@/components/ui/geometric-background";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import Link from "next/link";

const cards = [
  {
    title: "A Legacy of Excellence Across Industries",
    description:
      "Founded nearly a century ago by P.S.M. Mariappa Nadar, the Group began as a humble trading firm in Madurai. Today, under the leadership of Rajalakshmi, the company has evolved into a trusted multi-sector enterprise spanning construction materials, mobile retail, and health & wellness.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    color: "from-primary-500 to-primary-600",
    badge: "Since 1925",
  },
  {
    title: "Guided by Vision, Driven by Legacy",
    description:
      "At the heart of the Mariappa Nadar Group's continued success lies a visionary leadership team that upholds the Group's founding values — integrity, excellence, and commitment to community. Each generation has carried forward a tradition of purposeful leadership.",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop",
    color: "from-primary-600 to-primary-700",
    badge: "Leadership",
  },
];

interface CardProps {
  i: number;
  title: string;
  description: string;
  image: string;
  color: string;
  badge: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  image,
  color,
  badge,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="flex items-center justify-center sticky top-0 pb-10 sm:pb-10 md:pb-12 lg:pb-10 xl:pb-14 2xl:pb-16"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col md:flex-row relative w-[95%] md:w-[85%] max-w-6xl rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-10 gap-5 sm:gap-6 md:gap-8 origin-top shadow-2xl bg-white"
      >
        {/* Text Content - Left Side */}
        <div className="w-full md:w-[45%] flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="mb-3 sm:mb-4"
          >
            <span
              className={`px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r ${color} text-white text-sm sm:text-sm font-semibold rounded-full inline-block`}
            >
              {badge}
            </span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-base-900 mb-3 sm:mb-4 leading-tight"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-sm sm:text-sm md:text-base text-base-600 leading-relaxed"
          >
            {description}
          </motion.p>
          <Link href="/about" className="cursor-pointer">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="mt-4 sm:mt-6 flex items-center gap-2 text-primary-600 text-sm sm:text-base font-semibold hover:gap-3 transition-all duration-200"
            >
              <span>Learn More</span>
              <svg
                width="20"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-3"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          </Link>
        </div>

        {/* Image - Right Side */}
        <div className="w-full md:w-[55%] relative rounded-lg md:rounded-xl overflow-hidden h-[220px] sm:h-[280px] md:h-auto md:min-h-[400px]">
          <motion.div
            className="absolute inset-0"
            style={{ scale: imageScale }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div
            className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export function AboutGroupSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative py-12 sm:py-16 md:py-20">
      <GeometricBackground className="bg-gradient-to-b from-white via-primary-50/30 to-white absolute inset-0">
        <div />
      </GeometricBackground>
      {/* Header Section */}
      <div className="relative z-10 pb-16 sm:pb-14 md:pb-16 lg:pb-14 xl:pb-18 2xl:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center">
          <BlurFade delay={0.05}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-base-900 mb-3 sm:mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              About the{" "}
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                Group
              </span>
            </motion.h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-base-600 max-w-2xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              A century-long journey of{" "}
              <span className="text-primary-600 font-semibold">trust</span>,{" "}
              <span className="text-primary-600 font-semibold">innovation</span>
              , and{" "}
              <span className="text-primary-600 font-semibold">
                community service
              </span>
            </motion.p>
          </BlurFade>
        </div>
      </div>

      {/* Stacking Cards */}
      <div className="relative">
        {cards.map((card, i) => {
          const targetScale = 1 - (cards.length - i) * 0.05;
          return (
            <Card
              key={`card_${i}`}
              i={i}
              title={card.title}
              description={card.description}
              image={card.image}
              color={card.color}
              badge={card.badge}
              progress={scrollYProgress}
              range={[i * 0.5, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
