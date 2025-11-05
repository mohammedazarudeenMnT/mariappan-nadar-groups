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
    <section className="bg-muted/30 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Stories of Impact
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Hear from the people whose lives have been transformed by our work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
