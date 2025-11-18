"use client";

import { motion } from "motion/react";
import {
  Target,
  Eye,
  Heart,
  Sparkles,
  Zap,
  Shield,
  Users,
  Globe,
  Lightbulb,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export function MissionVisionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background py-24">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Header Section */}
      <div className="container relative mx-auto px-4 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl space-y-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 shadow-lg backdrop-blur-sm"
          >
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              Our Purpose
            </span>
          </motion.div>
          <h2 className="text-4xl font-bold leading-[1.15] text-foreground md:text-5xl lg:text-6xl">
            Empowering Communities Through{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                Mission & Vision
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-0 h-1.5 w-full origin-left rounded-full bg-gradient-to-r from-primary to-primary/40"
              />
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Committed to creating lasting impact through education, healthcare,
            and sustainable community development
          </p>
        </motion.div>
      </div>

      <div className="container relative mx-auto px-4">
        {/* Cards Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/95 p-10 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(var(--primary-rgb),0.4)] md:p-12 lg:p-14"
          >
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 opacity-20">
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                  backgroundSize: "200% 200%",
                }}
              />
            </div>

            {/* Floating Particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  x: [0, i % 2 === 0 ? 20 : -20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
                className="absolute h-2 w-2 rounded-full bg-primary-foreground/40 blur-sm"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
              />
            ))}

            {/* Animated Gradient Orb */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary-foreground/20 blur-3xl"
            />

            <div className="relative z-10 space-y-8">
              {/* Icon Badge with Glow Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 rounded-2xl border border-primary-foreground/30 bg-primary-foreground/15 px-6 py-3.5 shadow-lg backdrop-blur-sm"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(255,255,255,0.4)",
                      "0 0 20px 5px rgba(255,255,255,0.2)",
                      "0 0 0 0 rgba(255,255,255,0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-xl bg-primary-foreground/25 p-2.5 shadow-inner"
                >
                  <Target className="h-6 w-6" />
                </motion.div>
                <span className="text-base font-bold uppercase tracking-wide">
                  Our Mission
                </span>
              </motion.div>

              {/* Title with Enhanced Typography */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h3 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  Empowering
                  <br />
                  <span className="relative inline-block">
                    Communities
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      viewport={{ once: true }}
                      className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-primary-foreground/60"
                    />
                  </span>
                </h3>
              </motion.div>

              {/* Description with Better Spacing */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-primary-foreground/95 md:text-xl"
              >
                To empower underprivileged communities by providing access to
                quality education and healthcare, fostering sustainable
                development and creating opportunities for a brighter future.
              </motion.p>

              {/* Divider Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="h-px w-full origin-left bg-gradient-to-r from-primary-foreground/40 via-primary-foreground/20 to-transparent"
              />

              {/* Enhanced Key Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { icon: Users, number: "10,000+", text: "Lives Impacted", color: "from-blue-400 to-blue-600" },
                  { icon: Heart, number: "50+", text: "Health Camps", color: "from-pink-400 to-pink-600" },
                  { icon: TrendingUp, number: "1,000+", text: "Youth Trained", color: "from-green-400 to-green-600" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.08 }}
                    className="group/stat relative overflow-hidden rounded-2xl border border-primary-foreground/25 bg-primary-foreground/10 p-5 shadow-lg backdrop-blur-sm transition-all hover:border-primary-foreground/50 hover:bg-primary-foreground/20 hover:shadow-2xl"
                  >
                    {/* Hover Gradient Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity group-hover/stat:opacity-10`}
                    />
                    
                    {/* Shine Effect */}
                    <motion.div
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent skew-x-12"
                    />

                    <div className="relative space-y-2.5 text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="mx-auto h-7 w-7 opacity-90 transition-all group-hover/stat:scale-110 group-hover/stat:opacity-100" />
                      </motion.div>
                      <div className="text-3xl font-bold tracking-tight">{item.number}</div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/90">
                        {item.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 pt-4"
              >
                <CheckCircle2 className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-sm font-medium text-primary-foreground/90">
                  Making a difference, one community at a time
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border-2 border-border bg-card p-10 shadow-xl transition-all duration-500 hover:border-primary/30 hover:shadow-2xl md:p-12 lg:p-14"
          >
            {/* Subtle Grid Pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(var(--primary-rgb, 59 130 246) / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--primary-rgb, 59 130 246) / 0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Animated Gradient Orb */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
            />

            <div className="relative z-10 space-y-6">
              {/* Icon Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 rounded-2xl border-2 border-primary/30 bg-gradient-to-r from-primary/15 to-primary/10 px-6 py-3.5 shadow-lg"
              >
                <div className="rounded-xl bg-primary/25 p-2.5 shadow-inner">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <span className="text-base font-bold uppercase tracking-wide text-primary">
                  Our Vision
                </span>
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
              >
                A World of{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Equal Access
                </span>
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                A world where every individual has equal access to education and
                healthcare, enabling them to reach their full potential and
                contribute meaningfully to society.
              </motion.p>

              {/* Core Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4 pt-4"
              >
                <div className="flex items-center gap-2.5">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">
                    Core Values
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    { icon: Heart, label: "Compassion" },
                    { icon: Shield, label: "Integrity" },
                    { icon: Lightbulb, label: "Innovation" },
                    { icon: Zap, label: "Sustainability" },
                    { icon: Users, label: "Empowerment" },
                    { icon: Globe, label: "Impact" },
                  ].map((value, idx) => (
                    <motion.div
                      key={value.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + idx * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="group relative overflow-hidden rounded-xl border-2 border-border bg-background/80 p-4 shadow-sm backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-background hover:shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="relative flex flex-col items-center gap-2.5 text-center">
                        <div className="rounded-lg bg-primary/10 p-2.5 shadow-sm transition-all group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-md">
                          <value.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-xs font-bold text-foreground">
                          {value.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
}
