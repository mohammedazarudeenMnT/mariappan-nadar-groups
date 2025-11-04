"use client";
import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";
import { Card } from "@/components/ui/card";
import { IconHeart, IconQuote } from "@tabler/icons-react";

const stories = [
  {
    name: "Rajesh Kumar",
    role: "Steel Division Manager",
    story:
      "Started as a warehouse assistant 25 years ago, now leading a team of 50+ professionals. The Mariappa Nadar Group believed in my potential and invested in my growth.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Mathi Mobiles Store Manager",
    story:
      "As a single mother, this company gave me the opportunity to build a career while supporting my family. Today, I manage one of the busiest stores and mentor new team members.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Anand Krishnan",
    role: "Community Beneficiary",
    story:
      "The scholarship program funded my engineering education. Now I work in the construction division, giving back to the community that supported me.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Lakshmi Devi",
    role: "Local Entrepreneur",
    story:
      "Through the women's empowerment initiative, I received training and support to start my own business. Today, I employ 10 women from my village.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Venkat Raman",
    role: "Retired Employee",
    story:
      "Spent 40 years with the company, from clerk to senior manager. The values and ethics I learned here shaped not just my career, but my life.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Meena Patel",
    role: "Healthcare Worker",
    story:
      "The Himalaya Wellness partnership brought quality healthcare to our rural community. We've seen infant mortality drop by 60% in just three years.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
];

function StoryCard({ name, role, story, image }: (typeof stories)[0]) {
  return (
    <Card className="relative w-[350px] p-6 mx-2 hover:shadow-xl transition-shadow">
      <IconQuote className="absolute top-4 right-4 h-8 w-8 text-primary-200 dark:text-primary-800" />
      <div className="flex items-center gap-4 mb-4">
        <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed italic">
        &quot;{story}&quot;
      </p>
    </Card>
  );
}

export function InspiringStoriesSection() {
  const firstRow = stories.slice(0, 3);
  const secondRow = stories.slice(3);

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <IconHeart className="h-10 w-10 text-primary-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Inspiring Stories
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from people whose lives have been touched by our work
          </p>
        </motion.div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((story, index) => (
              <StoryCard key={index} {...story} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
            {secondRow.map((story, index) => (
              <StoryCard key={index} {...story} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
