"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Heart, Users, GraduationCap, Building2 } from "lucide-react";

// Animated Counter Hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return { count, ref };
}

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
}

function StatCard({ icon, value, suffix = "", label }: StatCardProps) {
  const { count, ref } = useCounter(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full bg-white/5 backdrop-blur-xl p-4 text-primary-400 border border-primary-500/20">
          {icon}
        </div>
      </div>
      <div className="mb-2 text-4xl font-bold text-white">
        {count}
        {suffix}
      </div>
      <div className="text-white/60">{label}</div>
    </motion.div>
  );
}

export function MaatramHeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80",
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-primary-950 to-slate-900 px-4 py-12 text-white md:py-24 lg:py-32">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse at center, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black, transparent 80%)",
        }}
      />

      {/* Animated gradient blurs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-primary/40 blur-[150px] rounded-full z-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.3 }}
        className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-primary/30 blur-[180px] rounded-full z-0"
      />

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 lg:gap-24">
        <div className="relative z-10 flex flex-col items-center gap-6 pt-8 text-center md:pt-16 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary-500/30 bg-white/5 backdrop-blur-xl px-4 py-2 text-sm font-medium text-white/90"
          >
            <Heart className="mr-2 h-4 w-4 text-primary-400" />
            Transforming Lives Since 2010
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block bg-gradient-to-b from-white to-white/80 bg-clip-text text-4xl font-bold leading-[1.1] tracking-tight text-transparent drop-shadow-sm sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Empowering Communities Through{" "}
            <span className="inline-block h-16 w-32 align-middle overflow-hidden rounded-2xl bg-muted md:h-20 md:w-48">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={heroImages[currentImageIndex]}
                  alt="Impact"
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1 }}
                />
              </AnimatePresence>
            </span>{" "}
            Education & Healthcare
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[550px] text-base font-medium text-white/60 sm:text-lg md:text-xl"
          >
            Join us in our mission to create lasting change through quality
            education and accessible healthcare for all.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid w-full max-w-4xl grid-cols-2 gap-8 pt-12 md:grid-cols-4"
          >
            <StatCard
              icon={<Users className="h-8 w-8" />}
              value={50000}
              suffix="+"
              label="Lives Impacted"
            />
            <StatCard
              icon={<GraduationCap className="h-8 w-8" />}
              value={5000}
              suffix="+"
              label="Students Educated"
            />
            <StatCard
              icon={<Heart className="h-8 w-8" />}
              value={10000}
              suffix="+"
              label="Medical Treatments"
            />
            <StatCard
              icon={<Building2 className="h-8 w-8" />}
              value={25}
              suffix="+"
              label="Centers"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
