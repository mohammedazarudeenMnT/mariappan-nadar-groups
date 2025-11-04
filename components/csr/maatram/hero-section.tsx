"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, CheckCircle2 } from "lucide-react";

export function MaatramHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    "Educational Scholarships",
    "Free Medical Camps",
    "Community Development",
    "Skill Training Programs",
  ];

  return (
    <section className="w-full min-h-[90vh] bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-70" />
        <div
          className={`absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl transition-all duration-1500 ${
            isLoaded ? "opacity-30 scale-100" : "opacity-0 scale-80"
          }`}
        />
        <div
          className={`absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl transition-all duration-1500 delay-300 ${
            isLoaded ? "opacity-20 scale-100" : "opacity-0 scale-80"
          }`}
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
          {/* Left content */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/80 border border-border transition-all duration-600 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <Heart className="h-4 w-4 text-primary fill-primary" />
              <span className="text-sm font-medium">
                Making a Difference Since Inception
              </span>
            </div>

            {/* Main heading */}
            <div>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight transition-all duration-700 delay-200 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                MaatRaM Trust -{" "}
                <span className="text-primary">Transforming Lives</span> Through
                Education & Healthcare
              </h1>

              <p
                className={`mt-6 text-lg text-muted-foreground max-w-lg transition-all duration-700 delay-400 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Dedicated to community welfare through comprehensive education
                and healthcare initiatives in Madurai. Making a meaningful
                difference in people's lives, one step at a time.
              </p>
            </div>

            {/* CTA buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-600 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Button size="lg" className="group">
                Explore Our Initiatives
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get Involved</a>
              </Button>
            </div>
          </div>

          {/* Right content - Feature showcase */}
          <div
            className={`w-full lg:w-1/2 relative transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
              <div className="aspect-video relative overflow-hidden rounded-lg border border-border mb-6">
                <img
                  src="/images/maatram-hero.jpg"
                  alt="MaatRaM Trust Community Impact"
                  className="w-full h-full object-cover"
                />
              </div>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-4 transition-all duration-500 ${
                      isLoaded
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-5"
                    }`}
                    style={{ transitionDelay: `${700 + index * 100}ms` }}
                  >
                    <div className="text-primary shrink-0">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-base text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
