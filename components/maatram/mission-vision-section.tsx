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
    <section className="relative w-full overflow-hidden bg-background">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Purpose
            </span>
          </div>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Driving Change Through{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Action & Vision
            </span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Committed to creating lasting impact through education, healthcare,
            and community empowerment
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:min-h-[650px]">
          {/* Left Side - Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-12 text-primary-foreground md:rounded-none md:p-16 lg:p-20"
          >
            {/* Decorative Diagonal Stripes Pattern */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 1px, transparent 1px, transparent 20px)",
                maskImage:
                  "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
              }}
            />

            {/* Dot Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                maskImage:
                  "radial-gradient(ellipse 70% 60% at 30% 40%, black, transparent 70%)",
              }}
            />

            {/* Cross Pattern Accent */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                  linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
                  linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
                `,
                backgroundSize: "40px 40px",
                backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
                maskImage:
                  "radial-gradient(ellipse at bottom right, black 30%, transparent 70%)",
              }}
            />

            {/* Floating Orbs */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-10 top-10 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-10 -left-10 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl"
            />

            <div className="relative z-10 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 backdrop-blur-sm"
              >
                <div className="rounded-full bg-primary-foreground/20 p-1.5">
                  <Target className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">
                  Our Mission
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-bold leading-[1.1] md:text-6xl lg:text-7xl"
              >
                Empowering
                <br />
                <span className="relative inline-block">
                  Communities
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute -bottom-2 left-0 h-1.5 w-full origin-left bg-primary-foreground/40"
                  />
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-xl text-xl leading-relaxed text-primary-foreground/95 md:text-2xl"
              >
                To empower underprivileged communities by providing access to
                quality education and healthcare, fostering sustainable
                development and creating opportunities for a brighter future.
              </motion.p>

              {/* Impact Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-3"
              >
                {[
                  {
                    icon: Users,
                    number: "10,000+",
                    text: "Children Educated",
                  },
                  {
                    icon: Heart,
                    number: "50+",
                    text: "Health Camps",
                  },
                  {
                    icon: TrendingUp,
                    number: "1,000+",
                    text: "Youth Trained",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative overflow-hidden rounded-2xl border-2 border-primary-foreground/20 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative space-y-3">
                      <div className="inline-flex rounded-xl bg-primary-foreground/10 p-3">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div className="text-3xl font-bold">{item.number}</div>
                      <div className="text-sm font-medium text-primary-foreground/90">
                        {item.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4 pt-8"
              >
                <Button
                  size="lg"
                  className="group h-12 rounded-full bg-primary-foreground px-8 text-base font-semibold text-primary shadow-lg hover:bg-primary-foreground/90 hover:shadow-xl"
                >
                  Explore Our Mission
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-card p-12 md:rounded-none md:p-16 lg:p-20"
          >
            {/* Enhanced Grid Pattern Background */}
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(var(--primary-rgb, 59 130 246) / 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--primary-rgb, 59 130 246) / 0.08) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage:
                  "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
              }}
            />

            {/* Decorative Dot Pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(var(--primary-rgb, 59 130 246) / 0.12) 1.5px, transparent 1.5px)",
                backgroundSize: "32px 32px",
                maskImage:
                  "radial-gradient(ellipse 60% 50% at 70% 30%, black, transparent 60%)",
              }}
            />

            {/* Vertical Lines Accent */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(var(--primary-rgb, 59 130 246) / 0.1) 1px, transparent 1px)",
                backgroundSize: "60px 100%",
                maskImage:
                  "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
              }}
            />

            {/* Floating Gradient Orbs */}
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -30, 0],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-10 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -20, 0],
                y: [0, 20, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
            />

            <div className="relative z-10 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 rounded-full border-2 border-primary/30 bg-primary/10 px-6 py-3"
              >
                <div className="rounded-full bg-primary/20 p-1.5">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                  Our Vision
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-bold leading-[1.1] text-foreground md:text-6xl lg:text-7xl"
              >
                A World of{" "}
                <span className="relative inline-block bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                  Equal Access
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute -bottom-2 left-0 h-1 w-full origin-left bg-gradient-to-r from-primary to-primary/40"
                  />
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
              >
                A world where every individual has equal access to education and
                healthcare, enabling them to reach their full potential and
                contribute meaningfully to society.
              </motion.p>

              {/* Core Values Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Core Values
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
                  {[
                    { icon: Heart, label: "Compassion" },
                    { icon: Shield, label: "Integrity" },
                    { icon: Lightbulb, label: "Innovation" },
                    { icon: Zap, label: "Sustainability" },
                    { icon: Users, label: "Empowerment" },
                    { icon: Globe, label: "Global Impact" },
                  ].map((value, idx) => (
                    <motion.div
                      key={value.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + idx * 0.08 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="group relative overflow-hidden rounded-xl border border-border bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-background hover:shadow-md"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="relative flex flex-col items-center gap-2 text-center">
                        <div className="rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                          <value.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">
                          {value.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="flex flex-wrap gap-4 pt-8"
              >
                <Button size="lg" className="group h-12 rounded-full px-8">
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-2 px-8 hover:border-primary"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-primary p-12 text-center text-primary-foreground shadow-2xl md:p-16 lg:p-20"
        >
          {/* Decorative Grid Pattern */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 80%)",
            }}
          />

          {/* Diagonal Stripes Accent */}
          <div
            className="absolute inset-0 opacity-12"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.08) 1px, transparent 1px, transparent 30px)",
              maskImage:
                "linear-gradient(to bottom right, black 40%, transparent 90%)",
            }}
          />

          {/* Dot Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.12) 1.5px, transparent 1.5px)",
              backgroundSize: "36px 36px",
              maskImage:
                "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, black 60%, transparent 90%)",
            }}
          />

          {/* Checkerboard Accent in Corners */}
          <div
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(255,255,255,0.06) 25%, transparent 25%),
                linear-gradient(-45deg, rgba(255,255,255,0.06) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.06) 75%),
                linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.06) 75%)
              `,
              backgroundSize: "50px 50px",
              backgroundPosition: "0 0, 0 25px, 25px -25px, -25px 0px",
              maskImage: `
                radial-gradient(circle at top left, black 20%, transparent 40%),
                radial-gradient(circle at bottom right, black 20%, transparent 40%)
              `,
              maskComposite: "add",
            }}
          />

          {/* Floating Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl"
          />

          <div className="relative z-10 space-y-8">
            {/* Social Proof Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mx-auto inline-flex items-center gap-3 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 backdrop-blur-sm"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-primary-foreground/20"
                  >
                    <Users className="h-4 w-4 text-primary" />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm font-bold">
                Join 10,000+ supporters making a difference
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            >
              Ready to Make a{" "}
              <span className="relative inline-block">
                Real Difference?
                <motion.svg
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M0 5 Q 150 0, 300 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className="text-primary-foreground/60"
                  />
                </motion.svg>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mx-auto max-w-2xl text-lg text-primary-foreground/95 md:text-xl lg:text-2xl"
            >
              Join us in creating lasting positive change. Every contribution
              helps us empower more communities and transform lives.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-6"
            >
              <Button
                size="lg"
                className="group h-14 rounded-full bg-primary-foreground px-10 text-lg font-bold text-primary shadow-2xl transition-all hover:scale-105 hover:bg-primary-foreground/95 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
              >
                Start Making Impact
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-2 border-primary-foreground/40 bg-primary-foreground/10 px-10 text-lg font-bold text-primary-foreground backdrop-blur-sm transition-all hover:border-primary-foreground/60 hover:bg-primary-foreground/20"
              >
                Schedule a Call
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 pt-10 text-sm font-medium text-primary-foreground/90 md:gap-10"
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
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="rounded-lg bg-primary-foreground/20 p-1.5">
                    <item.icon className="h-4 w-4" />
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
