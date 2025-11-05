"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  GraduationCap,
  Heart,
  Users,
  Sparkles,
  BookOpen,
  Stethoscope,
  Briefcase,
  TrendingUp,
  Award,
  Target,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const CardDecorator = () => (
  <>
    <span className="absolute -left-px -top-px block h-2 w-2 border-l-2 border-t-2 border-primary" />
    <span className="absolute -right-px -top-px block h-2 w-2 border-r-2 border-t-2 border-primary" />
    <span className="absolute -bottom-px -left-px block h-2 w-2 border-b-2 border-l-2 border-primary" />
    <span className="absolute -bottom-px -right-px block h-2 w-2 border-b-2 border-r-2 border-primary" />
  </>
);

export function InitiativesSection() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 md:py-32">
      {/* VISIBLE Background: Large Dot Matrix with Animated Diagonal Lines */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Large Visible Dot Matrix Pattern */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--primary) / 0.4) 2px, transparent 2px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated Diagonal Lines - VISIBLE */}
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "80px 80px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                hsl(var(--primary) / 0.3) 0px,
                hsl(var(--primary) / 0.3) 2px,
                transparent 2px,
                transparent 20px
              )
            `,
          }}
        />

        {/* Strong Gradient Orbs */}
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[10%] h-[500px] w-[500px] rounded-full bg-primary/30 blur-[100px]"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[10%] right-[5%] h-[550px] w-[550px] rounded-full bg-primary/25 blur-[110px]"
        />

        {/* Horizontal Lines for Depth */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, hsl(var(--primary) / 0.3) 0px, hsl(var(--primary) / 0.3) 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2.5"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              MaatRaM - Making an Impact
            </span>
          </motion.div>

          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Initiatives
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
            Transforming lives through focused programs that create lasting
            change in education, healthcare, and skill development.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="group relative h-full rounded-xl border border-border/50 bg-card/60 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <CardDecorator />
              <CardHeader className="pb-3">
                <div className="mb-4 flex items-center gap-3 text-muted-foreground">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Education</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Quality education for underprivileged children
                </h3>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Providing scholarships, learning centers, and digital
                  resources that empower the next generation.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      icon: BookOpen,
                      text: "Free Scholarships",
                      value: "500+",
                    },
                    { icon: Sparkles, text: "Digital Learning", value: "50+" },
                    { icon: Users, text: "Career Guidance", value: "1000+" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center justify-between rounded-lg border border-border bg-background/50 p-3"
                    >
                      <div className="flex items-center gap-2">
                        <div className="rounded-lg bg-primary/10 p-1.5">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {item.text}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-primary">
                        {item.value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
                  <div className="text-3xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">
                    Students Educated
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Healthcare Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group relative h-full rounded-xl border border-border/50 bg-card/60 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <CardDecorator />
              <CardHeader className="pb-3">
                <div className="mb-4 flex items-center gap-3 text-muted-foreground">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Healthcare</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Free medical care for communities in need
                </h3>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Medical camps and healthcare facilities ensuring quality care
                  for underserved populations.
                </p>

                <div className="space-y-3">
                  {[
                    { icon: Stethoscope, text: "Medical Camps" },
                    { icon: Heart, text: "Free Checkups" },
                    { icon: Award, text: "Medicine Support" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <div className="rounded-lg bg-primary/10 p-2">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item.text}</span>
                      <CheckCircle2 className="ml-auto h-4 w-4 text-primary" />
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
                  <div className="text-3xl font-bold text-primary">50,000+</div>
                  <div className="text-sm text-slate-400">Lives Touched</div>
                </div>

                <Button
                  variant="outline"
                  className="w-full transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skill Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="group relative h-full rounded-xl border border-border/50 bg-card/60 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <CardDecorator />
              <CardHeader className="pb-3">
                <div className="mb-4 flex items-center gap-3 text-muted-foreground">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Skills</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Vocational training for employable skills
                </h3>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Empowering youth with training programs and career
                  opportunities for sustainable livelihoods.
                </p>

                <div className="space-y-3">
                  {[
                    { icon: Briefcase, text: "Job Training" },
                    { icon: Award, text: "Certification" },
                    { icon: TrendingUp, text: "Placement Support" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <div className="rounded-lg bg-primary/10 p-2">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item.text}</span>
                      <CheckCircle2 className="ml-auto h-4 w-4 text-primary" />
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
                  <div className="text-3xl font-bold text-primary">5,000+</div>
                  <div className="text-sm text-slate-400">Youth Trained</div>
                </div>

                <Button
                  variant="outline"
                  className="w-full transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="relative mx-auto max-w-2xl overflow-hidden rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 shadow-lg">
            <CardDecorator />
            <div className="relative z-10 space-y-4">
              <div className="mx-auto inline-flex rounded-full bg-primary/20 p-3">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Ready to Make a Difference?
              </h3>
              <p className="mx-auto max-w-md text-muted-foreground">
                Join us in creating lasting change. Every contribution helps us
                empower more communities.
              </p>
              <Button size="lg" className="rounded-full">
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
