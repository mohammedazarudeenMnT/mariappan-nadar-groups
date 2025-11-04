"use client";
import { motion } from "motion/react";
import {
  IconTrophy,
  IconAward,
  IconMedal,
  IconStar,
  IconCertificate,
  IconSparkles,
  IconRocket,
} from "@tabler/icons-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { BlurFade } from "@/components/ui/blur-fade";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Particles } from "@/components/ui/particles";
import { cn } from "@/lib/utils";

const achievements = [
  {
    title: "Industry Excellence Award",
    description:
      "Recognized for outstanding contribution to the steel and construction materials sector",
    icon: IconTrophy,
    stat: 15,
    suffix: "+",
    statLabel: "Awards Won",
    color: "from-primary-500 via-primary-600 to-primary-700",
    iconColor: "text-primary-600",
    bgGradient: "from-primary-500/10 to-primary-600/10",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Maintaining exceptional customer satisfaction rate across all divisions",
    icon: IconStar,
    stat: 98,
    suffix: "%",
    statLabel: "Satisfaction Rate",
    color: "from-primary-400 via-primary-500 to-primary-600",
    iconColor: "text-primary-500",
    bgGradient: "from-primary-400/10 to-primary-500/10",
  },
  {
    title: "Quality Certifications",
    description: "ISO certified across all business operations and processes",
    icon: IconCertificate,
    stat: 8,
    suffix: "+",
    statLabel: "Certifications",
    color: "from-primary-600 via-primary-700 to-primary-800",
    iconColor: "text-primary-700",
    bgGradient: "from-primary-600/10 to-primary-700/10",
  },
  {
    title: "Community Impact",
    description:
      "Lives touched through various community initiatives and programs",
    icon: IconAward,
    stat: 10000,
    suffix: "+",
    statLabel: "Lives Impacted",
    color: "from-primary-300 via-primary-400 to-primary-500",
    iconColor: "text-primary-400",
    bgGradient: "from-primary-300/10 to-primary-400/10",
  },
  {
    title: "Innovation Leader",
    description: "Pioneering sustainable practices in traditional industries",
    icon: IconRocket,
    stat: 25,
    suffix: "+",
    statLabel: "Innovations",
    color: "from-primary-500 via-primary-600 to-primary-700",
    iconColor: "text-primary-600",
    bgGradient: "from-primary-500/10 to-primary-600/10",
  },
  {
    title: "Years of Excellence",
    description: "Nearly a century of trusted service since 1925",
    icon: IconMedal,
    stat: 99,
    suffix: "+",
    statLabel: "Years of Trust",
    color: "from-primary-400 via-primary-500 to-primary-600",
    iconColor: "text-primary-500",
    bgGradient: "from-primary-400/10 to-primary-500/10",
  },
];

export function AchievementsSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <GridPattern
          width={40}
          height={40}
          className="opacity-30 dark:opacity-20"
        />
      </div>
      <Particles className="absolute inset-0 -z-10" quantity={50} />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-6">
              <IconSparkles className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Our Achievements
              </span>
            </div>
            <TextShimmer
              className="text-4xl md:text-6xl font-bold mb-6"
              shimmerWidth={200}
            >
              Milestones of Excellence
            </TextShimmer>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating decades of innovation, quality, and community impact
            </p>
          </div>
        </BlurFade>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full"
                >
                  <div className="relative h-full bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 overflow-hidden">
                    {/* Animated gradient background */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                        item.bgGradient
                      )}
                    />

                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                      <GridPattern
                        width={20}
                        height={20}
                        className="opacity-50"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with glow effect */}
                      <div className="relative mb-6">
                        <div
                          className={cn(
                            "absolute inset-0 bg-gradient-to-br blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500",
                            item.color
                          )}
                        />
                        <div className="relative w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <Icon className={cn("h-8 w-8", item.iconColor)} />
                        </div>
                      </div>

                      {/* Stat Counter */}
                      <div className="mb-4">
                        <div className="flex items-baseline gap-2">
                          <span
                            className={cn(
                              "text-5xl font-bold bg-gradient-to-br bg-clip-text text-transparent",
                              item.color
                            )}
                          >
                            <AnimatedCounter
                              to={item.stat}
                              suffix={item.suffix || ""}
                            />
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 font-medium">
                          {item.statLabel}
                        </p>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Decorative corner accent */}
                    <div
                      className={cn(
                        "absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br rounded-full opacity-20 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500",
                        item.color
                      )}
                    />
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* Stats Banner */}
        <BlurFade delay={0.8} inView>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-3xl"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 animate-gradient-x" />
            <div className="absolute inset-0 bg-grid-white/10" />

            {/* Content */}
            <div className="relative z-10 p-10 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                <div className="group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-5xl md:text-6xl font-bold mb-2"
                  >
                    <AnimatedCounter to={99} suffix="+" />
                  </motion.div>
                  <div className="text-sm md:text-base opacity-90 font-medium">
                    Years of Trust
                  </div>
                </div>
                <div className="group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-5xl md:text-6xl font-bold mb-2"
                  >
                    <AnimatedCounter to={3} suffix="" />
                  </motion.div>
                  <div className="text-sm md:text-base opacity-90 font-medium">
                    Business Divisions
                  </div>
                </div>
                <div className="group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-5xl md:text-6xl font-bold mb-2"
                  >
                    <AnimatedCounter to={500} suffix="+" />
                  </motion.div>
                  <div className="text-sm md:text-base opacity-90 font-medium">
                    Team Members
                  </div>
                </div>
                <div className="group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-5xl md:text-6xl font-bold mb-2"
                  >
                    <AnimatedCounter to={50000} suffix="+" />
                  </motion.div>
                  <div className="text-sm md:text-base opacity-90 font-medium">
                    Happy Customers
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
}
