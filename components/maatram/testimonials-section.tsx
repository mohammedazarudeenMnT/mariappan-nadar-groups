"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

function TestimonialCard({ quote, author, role, image }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full">
        <CardContent className="pt-6">
          <Quote className="mb-4 h-8 w-8 text-primary" />
          <p className="mb-6 text-muted-foreground">{quote}</p>
          <div className="flex items-center gap-4">
            <img
              src={image}
              alt={author}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-foreground">{author}</div>
              <div className="text-sm text-muted-foreground">{role}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const testimonials = [
  {
    quote:
      "This organization changed my life. Thanks to their education program, I was able to complete my studies and secure a good job.",
    author: "Priya Sharma",
    role: "Scholarship Recipient",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    quote:
      "The healthcare camp in our village provided free treatment to hundreds of people. Their dedication is truly inspiring.",
    author: "Rajesh Kumar",
    role: "Community Leader",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    quote:
      "The vocational training I received helped me start my own business. I'm now able to support my family.",
    author: "Anita Desai",
    role: "Training Graduate",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-muted/40 px-4 py-20 md:py-32">
      {/* BOLD VISIBLE Background Pattern */}
      <div className="absolute inset-0 -z-10">
        {/* Large Visible Dots */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--primary) / 0.6) 3px, transparent 3px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Diagonal Lines - BOLD */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                hsl(var(--primary) / 0.5) 0px,
                hsl(var(--primary) / 0.5) 3px,
                transparent 3px,
                transparent 25px
              )
            `,
          }}
        />

        {/* Strong Gradient Orbs */}
        <motion.div
          animate={{
            opacity: [0.35, 0.5, 0.35],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-primary/35 blur-[100px]"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.45, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[20%] right-[10%] h-[550px] w-[550px] rounded-full bg-primary/30 blur-[110px]"
        />
      </div>

      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2.5"
          >
            <Quote className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              MaatRaM Testimonials
            </span>
          </motion.div>

          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Voices of{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Change
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            Real stories from real people whose lives have been transformed
            through our programs and initiatives.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {/* Large Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <Card className="group relative h-full overflow-hidden border-2 border-border bg-gradient-to-br from-card via-card to-primary/5 p-8 shadow-xl transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

              <CardContent className="relative space-y-6 p-0">
                <Quote className="h-12 w-12 text-primary/40" />
                <p className="text-xl font-medium leading-relaxed text-foreground">
                  {testimonials[0].quote}
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <img
                    src={testimonials[0].image}
                    alt={testimonials[0].author}
                    className="h-16 w-16 rounded-full border-2 border-primary/20 object-cover shadow-lg"
                  />
                  <div>
                    <div className="text-lg font-bold text-foreground">
                      {testimonials[0].author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[0].role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Smaller Cards */}
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="lg:col-span-2"
            >
              <Card className="group relative h-full overflow-hidden border-2 border-border bg-card p-6 shadow-lg transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />

                <CardContent className="relative space-y-4 p-0">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full border-2 border-primary/10 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
