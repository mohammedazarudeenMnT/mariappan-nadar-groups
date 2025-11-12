"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  Heart,
  Users,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemFadeIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const stats = [
  {
    icon: GraduationCap,
    value: 5000,
    suffix: "+",
    label: "Students Supported",
    description: "Scholarships and educational aid provided",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    value: 15000,
    suffix: "+",
    label: "Medical Treatments",
    description: "Free healthcare services delivered",
    gradient: "from-red-500 to-pink-500",
    bgGradient: "from-red-500/20 to-pink-500/20",
    iconBg: "bg-gradient-to-br from-red-500 to-pink-500",
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Lives Impacted",
    description: "Families benefited from our programs",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/20 to-emerald-500/20",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Community Programs",
    description: "Active initiatives across Madurai",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/20 to-orange-500/20",
    iconBg: "bg-gradient-to-br from-yellow-500 to-orange-500",
  },
];

function AnimatedCounter({
  value,
  duration = 2000,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="text-5xl font-bold">
      {count.toLocaleString()}
    </div>
  );
}

export function ImpactStatsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-muted/50 via-background to-muted/50 py-20 md:py-32">
      {/* VISIBLE Background: Grid Pattern with Pulse Orbs */}
      <div className="absolute inset-0 -z-10">
        {/* Strong Pulse Orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/15 blur-3xl delay-1000" />
      </div>

      {/* VISIBLE Decorative Grid */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <svg className="h-full w-full" fill="none">
          <defs>
            <pattern
              id="stats-grid"
              x="0"
              y="0"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M32 0L0 0 0 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-6 py-3"
          >
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">Our Impact</span>
          </motion.div>

          <h2 className="mb-4 text-4xl font-bold tracking-tighter text-foreground md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Impact in Numbers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Real change, measurable results. See how we&apos;re making a
            difference in our community through dedicated action and commitment.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                variants={itemFadeIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${stat.bgGradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                <Card className="relative h-full overflow-hidden border-2 border-border p-6 shadow-lg transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-2xl">
                  {/* Background Gradient */}
                  <div
                    className={`absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br ${stat.bgGradient} blur-2xl opacity-50`}
                  />

                  <div className="relative flex flex-col gap-4">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.iconBg} shadow-lg`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </motion.div>

                    {/* Value */}
                    <div className="space-y-2">
                      <div
                        className={`flex items-baseline gap-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                      >
                        <AnimatedCounter value={stat.value} />
                        <span className="text-3xl font-bold">
                          {stat.suffix}
                        </span>
                      </div>
                      <div className="text-lg font-bold text-foreground">
                        {stat.label}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {stat.description}
                    </p>

                    {/* Sparkle Icon */}
                    <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r ${stat.gradient} transition-transform duration-500 group-hover:scale-x-100`}
                  />

                  {/* Corner Decorations */}
                  <span className="absolute -left-px -top-px block h-2 w-2 border-l-2 border-t-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute -right-px -top-px block h-2 w-2 border-r-2 border-t-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute -bottom-px -left-px block h-2 w-2 border-b-2 border-l-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute -bottom-px -right-px block h-2 w-2 border-b-2 border-r-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
