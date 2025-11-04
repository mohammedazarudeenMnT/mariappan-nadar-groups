"use client";

import { Card } from "@/components/ui/card";
import {
  GraduationCap,
  Stethoscope,
  BookHeart,
  Utensils,
  Users2,
  Lightbulb,
} from "lucide-react";

export function InitiativesSection() {
  const initiatives = [
    {
      icon: GraduationCap,
      title: "Scholarship Programs",
      description:
        "Supporting deserving students with educational scholarships and financial aid.",
      gradient:
        "from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50",
    },
    {
      icon: Stethoscope,
      title: "Medical Camps",
      description:
        "Organizing free health checkups and medical camps in rural areas.",
      gradient:
        "from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50",
    },
    {
      icon: BookHeart,
      title: "Learning Resources",
      description:
        "Providing books, supplies, and digital learning tools to students.",
      gradient:
        "from-red-100 to-red-200 dark:from-red-900/50 dark:to-red-800/50",
    },
    {
      icon: Utensils,
      title: "Nutrition Programs",
      description:
        "Ensuring proper nutrition for children through meal programs.",
      gradient:
        "from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50",
    },
    {
      icon: Users2,
      title: "Skill Development",
      description:
        "Vocational training programs for youth and women empowerment.",
      gradient:
        "from-yellow-100 to-yellow-200 dark:from-yellow-900/50 dark:to-yellow-800/50",
    },
    {
      icon: Lightbulb,
      title: "Awareness Campaigns",
      description: "Health and education awareness programs in communities.",
      gradient:
        "from-pink-100 to-pink-200 dark:from-pink-900/50 dark:to-pink-800/50",
    },
  ];

  return (
    <section id="initiatives" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-semibold md:text-5xl text-foreground mb-4">
              Our Initiatives
            </h2>
            <p className="text-muted-foreground">
              Comprehensive programs designed to create lasting impact in
              education and healthcare, supporting communities across Madurai
              and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <Card
                key={index}
                className={`relative flex flex-col justify-between h-[280px] w-full overflow-hidden rounded-3xl p-8 bg-gradient-to-r ${initiative.gradient} border-0 shadow-lg hover:shadow-xl transition-shadow`}
              >
                {/* Card Content */}
                <div className="z-10 flex flex-col items-start text-left">
                  <initiative.icon className="mb-4 h-12 w-12 text-foreground" />
                </div>
                <div className="z-10">
                  <h3 className="mb-2 text-lg font-semibold uppercase tracking-wider">
                    {initiative.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {initiative.description}
                  </p>
                </div>

                {/* Subtle overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
