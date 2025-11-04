"use client";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  IconUsers,
  IconSchool,
  IconStethoscope,
  IconHeart,
} from "@tabler/icons-react";

const stats = [
  {
    icon: IconUsers,
    value: 3000,
    suffix: "+",
    label: "Lives Impacted",
    description: "Community members benefited from our programs",
    color: "from-primary-500 to-primary-600",
  },
  {
    icon: IconSchool,
    value: 8000,
    suffix: "+",
    label: "Students Supported",
    description: "Through scholarships and educational programs",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: IconStethoscope,
    value: 5000,
    suffix: "+",
    label: "Medical Consultations",
    description: "Free healthcare services provided",
    color: "from-green-500 to-green-600",
  },
  {
    icon: IconHeart,
    value: 100,
    suffix: "+",
    label: "Community Programs",
    description: "Welfare initiatives conducted annually",
    color: "from-red-500 to-red-600",
  },
];

export function ImpactSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1ca8cb_1px,transparent_1px),linear-gradient(to_bottom,#1ca8cb_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measuring success through the positive changes we create in our
              community
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <BlurFade key={stat.label} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative p-8 bg-white dark:bg-base-900 rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="text-4xl font-bold text-foreground mb-2">
                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Testimonial/Quote Section */}
        <BlurFade delay={0.6}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-12 bg-gradient-to-br from-primary-50 to-white dark:from-base-900 dark:to-base-800 rounded-3xl border border-primary-200 dark:border-primary-800 shadow-xl"
            >
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <IconHeart className="w-10 h-10 text-white" />
                </div>

                <blockquote className="text-2xl md:text-3xl font-semibold text-foreground italic">
                  "Education and health are not privileges, they are fundamental
                  rights. Through MaatRaM, we strive to make these rights
                  accessible to every member of our community."
                </blockquote>

                <div className="pt-6 border-t border-primary-200 dark:border-primary-800">
                  <p className="text-lg font-semibold text-primary-600">
                    MaatRaM Trust Team
                  </p>
                  <p className="text-muted-foreground">
                    Committed to Community Welfare
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
