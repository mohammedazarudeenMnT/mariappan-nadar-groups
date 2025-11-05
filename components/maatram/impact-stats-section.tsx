"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Heart, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: GraduationCap,
    value: 5000,
    suffix: "+",
    label: "Students Supported",
    description: "Scholarships and educational aid provided",
    color: "blue",
  },
  {
    icon: Heart,
    value: 15000,
    suffix: "+",
    label: "Medical Treatments",
    description: "Free healthcare services delivered",
    color: "red",
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Lives Impacted",
    description: "Families benefited from our programs",
    color: "green",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Community Programs",
    description: "Active initiatives across Madurai",
    color: "yellow",
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-400",
    accent: "bg-blue-500",
  },
  red: {
    bg: "bg-red-500/10",
    text: "text-red-600 dark:text-red-400",
    accent: "bg-red-500",
  },
  green: {
    bg: "bg-green-500/10",
    text: "text-green-600 dark:text-green-400",
    accent: "bg-green-500",
  },
  yellow: {
    bg: "bg-yellow-500/10",
    text: "text-yellow-600 dark:text-yellow-400",
    accent: "bg-yellow-500",
  },
};

function AnimatedCounter({
  value,
  duration = 2000,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold">
      {count.toLocaleString()}
    </div>
  );
}

export function ImpactStatsSection() {
  return (
    <section className="w-full bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Our Impact in Numbers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real change, measurable results. See how we're making a difference
            in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colors =
              colorClasses[stat.color as keyof typeof colorClasses];

            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 p-6 transition-all hover:shadow-xl"
              >
                <div className="flex flex-col gap-4">
                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg}`}
                  >
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>

                  {/* Value */}
                  <div className="space-y-1">
                    <div className={`flex items-baseline gap-1 ${colors.text}`}>
                      <AnimatedCounter value={stat.value} />
                      <span className="text-2xl font-bold">{stat.suffix}</span>
                    </div>
                    <div className="text-base font-semibold text-foreground">
                      {stat.label}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>

                {/* Accent bar */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-full ${colors.accent} transform transition-transform group-hover:scale-x-100 scale-x-0 origin-left`}
                />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
