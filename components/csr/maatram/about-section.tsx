"use client";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { IconTarget, IconUsers, IconHeart } from "@tabler/icons-react";

export function MaatramAboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About MaatRaM Trust
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A beacon of hope and transformation in our community
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <BlurFade delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MaatRaM Educational and Medical Trust is committed to creating
                lasting positive change in our community through comprehensive
                educational programs and accessible healthcare services. We
                believe that education and health are fundamental rights that
                should be available to all.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Located at 456/1, Sivagangai Road, opposite Vikram Hospital at
                Ring Road Junction, Madurai 625020, we serve as a cornerstone of
                community development and social welfare.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <IconHeart className="w-24 h-24 text-primary-600 mx-auto" />
                  <p className="text-2xl font-bold text-foreground">
                    Serving the Community
                  </p>
                  <p className="text-muted-foreground">
                    Through Education & Healthcare
                  </p>
                </div>
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-primary-400 rounded-3xl blur-3xl -z-10"
              />
            </div>
          </BlurFade>
        </div>

        {/* Core Values */}
        <BlurFade delay={0.4}>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 bg-gradient-to-br from-primary-50 to-white dark:from-base-900 dark:to-base-800 rounded-2xl border border-primary-200 dark:border-primary-800 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <IconTarget className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To create an empowered community where every individual has
                access to quality education and healthcare, enabling them to
                reach their full potential.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 bg-gradient-to-br from-primary-50 to-white dark:from-base-900 dark:to-base-800 rounded-2xl border border-primary-200 dark:border-primary-800 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mb-6">
                <IconUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Values
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Compassion, integrity, excellence, and inclusivity guide
                everything we do. We believe in treating every individual with
                dignity and respect.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-8 bg-gradient-to-br from-primary-50 to-white dark:from-base-900 dark:to-base-800 rounded-2xl border border-primary-200 dark:border-primary-800 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl flex items-center justify-center mb-6">
                <IconHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Commitment
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated to sustainable community development through
                continuous support, innovation, and partnerships that create
                lasting positive impact.
              </p>
            </motion.div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
