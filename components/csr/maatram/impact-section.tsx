"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

interface StatProps {
  value: string;
  label: string;
  sub?: string;
}

function MetricStat({ value, label, sub }: StatProps) {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    if (isNaN(target)) return;

    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(target / (duration / 50));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(start);
    }, 50);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <Card className="flex flex-col gap-3 text-center p-8 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center gap-2">
        <TrendingUp className="h-5 w-5 text-primary" />
        <p className="text-5xl font-bold text-foreground">
          {isNaN(target) ? value : `${count}${suffix}`}
        </p>
      </div>
      <p className="font-semibold text-foreground text-lg">{label}</p>
      {sub && <p className="text-sm text-muted-foreground">{sub}</p>}
    </Card>
  );
}

export function ImpactSection() {
  const metrics = [
    {
      value: "5000+",
      label: "Students Supported",
      sub: "Through scholarships",
    },
    { value: "10000+", label: "Medical Checkups", sub: "Free health camps" },
    { value: "50+", label: "Communities Reached", sub: "Across Madurai" },
    { value: "15+", label: "Years of Service", sub: "Making a difference" },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-semibold md:text-5xl text-foreground">
              Our Impact in Numbers
            </h2>
            <p className="text-muted-foreground">
              Real results from our commitment to education and
              healthcare—transforming lives and building stronger communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, i) => (
              <MetricStat
                key={i}
                value={metric.value}
                label={metric.label}
                sub={metric.sub}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
