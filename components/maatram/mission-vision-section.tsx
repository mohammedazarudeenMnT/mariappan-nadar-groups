"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
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
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
            {/* Subtle Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            {/* Animated Gradient Orb */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary-foreground/20 blur-3xl"
            />

            <div className="relative z-10 space-y-6">
              {/* Icon Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 rounded-2xl border border-primary-foreground/30 bg-primary-foreground/15 px-6 py-3.5 shadow-lg backdrop-blur-sm"
              >
                <div className="rounded-xl bg-primary-foreground/25 p-2.5 shadow-inner">
                  <Target className="h-6 w-6" />
                </div>
                <span className="text-base font-bold uppercase tracking-wide">
                  Our Mission
                </span>
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              >
                Empowering Communities
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-primary-foreground/90"
              >
                To empower underprivileged communities by providing access to
                quality education and healthcare, fostering sustainable
                development and creating opportunities for a brighter future.
              </motion.p>

              {/* Key Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4 pt-6"
              >
                {[
                  { icon: Users, number: "10,000+", text: "Lives Impacted" },
                  { icon: Heart, number: "50+", text: "Health Camps" },
                  { icon: TrendingUp, number: "1,000+", text: "Youth Trained" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.05 }}
                    className="group relative overflow-hidden rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 p-5 shadow-lg backdrop-blur-sm transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/15 hover:shadow-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative space-y-2 text-center">
                      <item.icon className="mx-auto h-6 w-6 opacity-90 transition-transform group-hover:scale-110" />
                      <div className="text-2xl font-bold">{item.number}</div>
                      <div className="text-xs font-semibold text-primary-foreground/85">
                        {item.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
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

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative mx-auto mt-20 overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/95 p-12 text-center text-primary-foreground shadow-2xl md:p-16 lg:p-20"
        >
          {/* Subtle Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          {/* Animated Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-foreground/15 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary-foreground/15 blur-3xl"
          />

          <div className="relative z-10 space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto inline-flex items-center gap-2.5 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/15 px-6 py-2.5 shadow-lg backdrop-blur-sm"
            >
              <Users className="h-5 w-5" />
              <span className="text-sm font-bold">Join 10,000+ supporters</span>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
            >
              Ready to Make a Real Difference?
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-base text-primary-foreground/90 md:text-lg"
            >
              Join us in creating lasting positive change. Every contribution
              helps us empower more communities and transform lives.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-4 pt-6"
            >
              <Button
                size="lg"
                className="group h-14 rounded-full bg-primary-foreground px-10 text-base font-bold text-primary shadow-2xl transition-all hover:scale-105 hover:bg-primary-foreground/95 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)]"
              >
                Start Making Impact
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-2 border-primary-foreground/50 bg-primary-foreground/10 px-10 text-base font-bold text-primary-foreground shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:border-primary-foreground/70 hover:bg-primary-foreground/20 hover:shadow-xl"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm font-semibold text-primary-foreground/90"
            >
              {[
                { icon: CheckCircle2, text: "100% Transparent" },
                { icon: Shield, text: "Tax Deductible" },
                { icon: Award, text: "Direct Impact" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + idx * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2.5"
                >
                  <div className="rounded-lg bg-primary-foreground/25 p-2 shadow-inner">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
