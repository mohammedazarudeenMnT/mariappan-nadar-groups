"use client";
import { motion } from "motion/react";
import {
  IconHeart,
  IconSchool,
  IconStethoscope,
  IconSparkles,
} from "@tabler/icons-react";
import Link from "next/link";

export function MaatramHeroSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-5">
            {/* Circular Background Pattern */}
            <div
              style={{
                transform: "translate(-50%, -50%)",
              }}
              className="absolute left-1/2 top-1/2 -z-10 mx-auto size-[800px] rounded-full border p-16 [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] md:size-[1300px] md:p-32"
            >
              <div className="size-full rounded-full border p-16 md:p-32">
                <div className="size-full rounded-full border"></div>
              </div>
            </div>

            {/* Icon Badge */}
            <span className="mx-auto flex size-16 items-center justify-center rounded-full border bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg md:size-20">
              <IconHeart className="size-8 text-white md:size-10" />
            </span>

            {/* Main Heading */}
            <h1 className="mx-auto max-w-screen-lg text-balance text-center text-4xl font-bold tracking-tight md:text-6xl">
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                MaatRaM Trust
              </span>
              <br />
              <span className="text-foreground">
                Educational & Medical Trust
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto max-w-screen-md text-center text-muted-foreground md:text-lg">
              Dedicated to transforming lives through quality education and
              accessible healthcare. Building a healthier, more educated
              community for a brighter tomorrow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-3 pb-12 pt-3">
              <Link
                href="#initiatives"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all cursor-pointer hover:scale-105"
              >
                Explore Our Initiatives
                <IconSparkles className="size-5" />
              </Link>
              <div className="text-xs text-muted-foreground">
                Trusted by 3000+ Community Members
              </div>
            </div>
          </div>

          {/* Focus Areas Cards */}
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <motion.div
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent" />
              <div className="relative z-10">
                <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
                  <IconSchool className="size-7 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  Education Programs
                </h3>
                <p className="text-muted-foreground">
                  Scholarships, tutoring, and educational resources for
                  underprivileged students to ensure quality education for all.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
              <div className="relative z-10">
                <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                  <IconStethoscope className="size-7 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  Healthcare Services
                </h3>
                <p className="text-muted-foreground">
                  Free medical camps, health screenings, and awareness programs
                  to ensure accessible healthcare for all community members.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
