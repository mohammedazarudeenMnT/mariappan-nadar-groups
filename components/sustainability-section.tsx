"use client";
import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "motion/react";
import { Sun, Users2, Shield, Clock, FileCheck, Leaf, ArrowRight } from "lucide-react";

const initiatives = [
  {
    icon: Sun,
    title: "Solar Energy",
    stat: "90%",
    description: "of total power consumption generated through solar energy",
  },
  {
    icon: Users2,
    title: "Women Empowerment",
    stat: "50%",
    description: "of our workforce comprises women, reflecting gender equality",
  },
  {
    icon: FileCheck,
    title: "100% Compliance",
    stat: "100%",
    description: "on-time GST filing, ESI & PF records, statutory adherence",
  },
  {
    icon: Clock,
    title: "On-Time Salaries",
    stat: "100%",
    description: "on-time salary disbursement with transparent HR processes",
  },
];

const governanceItems = [
  { icon: FileCheck, title: "GST Filing", description: "100% on-time filing" },
  {
    icon: FileCheck,
    title: "ESI & PF",
    description: "Accurate and updated records",
  },
  {
    icon: Shield,
    title: "Labour Guidelines",
    description: "Full statutory adherence",
  },
  {
    icon: FileCheck,
    title: "Ethical Practices",
    description: "Transparent accounting & audit",
  },
];

const cultureItems = [
  {
    icon: Clock,
    title: "On-Time Salaries",
    description: "100% on-time salary disbursement",
  },
  {
    icon: FileCheck,
    title: "Clear Processes",
    description: "Transparent HR communication",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Respectful and inclusive workplace",
  },
  {
    icon: Users2,
    title: "Growth Opportunities",
    description: "Internal growth and skill development",
  },
];

export function SustainabilitySection() {
  return (
    <section
      id="sustainability"
      className="relative py-24 bg-gradient-to-br from-muted via-background to-muted overflow-hidden scroll-mt-20"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.05}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4"
            >
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Our Commitment
              </span>
            </motion.div>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sustainability &{" "}
              <span className="text-primary">
                People-Focused
              </span>{" "}
              Initiatives
            </h2>
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building a greener tomorrow while empowering our workforce
            </p>
          </BlurFade>
        </div>

        {/* Stats Grid - Modern Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {initiatives.map((item, index) => {
            const Icon = item.icon;
            return (
              <BlurFade key={item.title} delay={0.2 + index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 200, damping: 10 },
                  }}
                  className="group relative min-h-[320px] flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-90" />
                  <div className="relative z-10 p-6 flex flex-col h-full text-primary-foreground">
                    {/* Icon */}
                    <motion.div
                      initial={{ rotate: -180, scale: 0 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + index * 0.1,
                        type: "spring",
                      }}
                    >
                      <Icon className="w-10 h-10 opacity-80 mb-4" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 mb-4">
                      <div className="text-5xl font-bold drop-shadow-md mb-3">
                        {item.stat}
                      </div>
                      <p className="text-base font-bold uppercase tracking-wide opacity-95 mb-2">
                        {item.title}
                      </p>
                      <p className="text-sm leading-relaxed opacity-90">
                        {item.description}
                      </p>
                    </div>

                   
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Towards a Greener Tomorrow */}
          <BlurFade delay={0.6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-xl border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <Sun className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Towards a Greener Tomorrow
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As part of our commitment to environmental responsibility,{" "}
                <span className="font-semibold text-primary">
                  nearly 90% of our total power consumption is generated through
                  solar energy
                </span>
                . By reducing our dependence on non-renewable sources, we are
                actively contributing to a cleaner, greener future.
              </p>
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;Sustainable business practices are not just good for
                  the planet — they&apos;re essential for our future
                  generations.&rdquo;
                </p>
              </div>
            </motion.div>
          </BlurFade>

          {/* Empowering Women */}
          <BlurFade delay={0.7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-xl border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <Users2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Empowering Women, Empowering the Workforce
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Women empowerment lies at the heart of our values.{" "}
                <span className="font-semibold text-primary">
                  Nearly 50% of our workforce comprises women
                </span>
                , reflecting our strong belief in gender equality, equal
                opportunity, and creating a progressive workplace. Their
                contribution and leadership form a vital part of our Group&apos;s
                growth story.
              </p>
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;Diversity and inclusion aren&apos;t just policies —
                  they&apos;re the foundation of our success.&rdquo;
                </p>
              </div>
            </motion.div>
          </BlurFade>
        </div>

        {/* Governance Section */}
        <BlurFade delay={0.8}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-xl border border-border mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                <Shield className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground">
                  Governance, Compliance & Ethical Standards
                </h3>
                <p className="text-primary font-semibold">
                  100% Statutory & Tax Compliance
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We operate with complete transparency and accountability. Our
              compliance framework ensures long-term stakeholder confidence and
              strengthens our credibility across all business segments.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {governanceItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="bg-primary/10 rounded-lg p-4 border border-primary/20"
                  >
                    <Icon className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-bold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </BlurFade>

        {/* Employee-Centric Culture */}
        <BlurFade delay={0.9}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-xl border border-border"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-3">
                Employee-Centric Culture
              </h3>
              <p className="text-lg text-muted-foreground">
                Our people are at the heart of everything we do
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cultureItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
}
