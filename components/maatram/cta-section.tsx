"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-muted/50 px-6 py-20 md:py-32">
      {/* BOLD VISIBLE Background Pattern */}
      <div className="absolute inset-0 -z-10">
        {/* Cross-Hatch Pattern - BOLD */}
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                hsl(var(--primary) / 0.5) 0px,
                hsl(var(--primary) / 0.5) 3px,
                transparent 3px,
                transparent 40px
              ),
              repeating-linear-gradient(
                90deg,
                hsl(var(--primary) / 0.5) 0px,
                hsl(var(--primary) / 0.5) 3px,
                transparent 3px,
                transparent 40px
              )
            `,
          }}
        />

        {/* Large Circles Pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="bold-circles"
              x="0"
              y="0"
              width="150"
              height="150"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="75"
                cy="75"
                r="50"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                fill="none"
              />
              <circle
                cx="75"
                cy="75"
                r="30"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bold-circles)" />
        </svg>

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            opacity: [0.25, 0.4, 0.25],
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[15%] h-[500px] w-[500px] rounded-full bg-primary/25 blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.35, 0.2],
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[15%] right-[5%] h-[550px] w-[550px] rounded-full bg-primary/20 blur-[130px]"
        />
      </div>

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary via-primary to-primary/90 p-10 text-center text-primary-foreground shadow-2xl md:p-16"
        >
          {/* Decorative Elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          {/* Animated Border Glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-50 blur-sm" />

          <div className="relative z-10 space-y-8">
            {/* Social Proof Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mx-auto inline-flex w-fit items-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm"
            >
              <div className="flex -space-x-2">
                <Avatar className="h-8 w-8 border-2 border-white">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" />
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 border-2 border-white">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 border-2 border-white">
                  <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-sm font-bold">
                Join 10,000+ supporters making a difference
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
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
                      className="text-white/60"
                    />
                  </motion.svg>
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-primary-foreground/95 md:text-xl">
                Your support can transform lives. Join us in our mission to
                provide education and healthcare to those who need it most.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="group h-14 rounded-full bg-white px-8 text-lg font-bold text-primary shadow-2xl transition-all hover:scale-105 hover:bg-white/95 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.4)]"
              >
                Donate Now
                <Heart className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-2 border-white/40 bg-white/10 px-8 text-lg font-bold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/20"
              >
                Become a Volunteer
              </Button>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6 border-t border-white/20 pt-8"
            >
              <h3 className="text-xl font-semibold">Get in Touch</h3>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                {[
                  { icon: Mail, text: "info@maatram.org" },
                  { icon: Phone, text: "+91 452 123 4567" },
                  { icon: MapPin, text: "Madurai, Tamil Nadu" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
