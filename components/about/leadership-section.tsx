"use client";
import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Award, Users, Target } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const leaders = [
  {
    name: "Rajalakshmi",
    role: "Group Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Leading the Mariappa Nadar Group with vision and dedication, continuing the legacy of excellence established nearly a century ago.",
    className: "absolute top-10 left-[15%] rotate-[-5deg]",
  },
  {
    name: "Construction Division Head",
    role: "Director - Construction Materials",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Overseeing quality construction materials supply, ensuring every project is built on a foundation of trust and reliability.",
    className: "absolute top-40 left-[20%] rotate-[-7deg]",
  },
  {
    name: "Technology Division Head",
    role: "Director - Mathi Mobiles",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "Bringing the latest mobile technology to customers, making innovation accessible and affordable across Tamil Nadu.",
    className: "absolute top-5 left-[40%] rotate-[8deg]",
  },
  {
    name: "Wellness Division Head",
    role: "Director - Himalaya Wellness",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
    bio: "Committed to community health and wellness, providing trusted healthcare products that enhance quality of life.",
    className: "absolute top-32 left-[55%] rotate-[10deg]",
  },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest standards in everything we do",
  },
  {
    icon: Users,
    title: "People First",
    description: "Our team and customers are at the heart of our success",
  },
  {
    icon: Target,
    title: "Vision",
    description: "Forward-thinking leadership driving sustainable growth",
  },
];

export function LeadershipSection() {
  return (
    <AuroraBackground
      id="leadership"
      className="py-16 sm:py-20 md:py-24 scroll-mt-20"
      showRadialGradient={false}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <BlurFade delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-neutral-900 dark:text-neutral-100 mb-4 sm:mb-6">
            Leadership Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-neutral-600 dark:text-neutral-400 mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            Experienced leaders driving our vision forward while honoring our
            heritage
          </p>
        </BlurFade>

        {/* Leadership Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <BlurFade key={value.title} delay={0.2 + index * 0.1}>
                <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 sm:p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                    {value.description}
                  </p>
                </div>
              </BlurFade>
            );
          })}
        </div>

        {/* Leadership Cards - Mobile Grid, Desktop Draggable */}
        <BlurFade delay={0.4}>
          {/* Mobile/Tablet: Grid Layout */}
          <div className="block md:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {leaders.map((leader, index) => (
                <div key={leader.name} className="group">
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-primary-200 font-medium text-sm mb-2">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-lg">
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Draggable Cards */}
          <div className="hidden md:block">
            <DraggableCardContainer className="relative flex min-h-[600px] w-full items-center justify-center overflow-visible">
              <p className="absolute top-1/2 mx-auto max-w-2xl -translate-y-3/4 text-center text-2xl md:text-3xl lg:text-4xl font-black text-neutral-400 dark:text-neutral-600 z-0 px-4">
                Meet the visionaries behind our century of excellence
              </p>
              {leaders.map((leader) => (
                <DraggableCardBody
                  key={leader.name}
                  className={leader.className}
                >
                  <div className="relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="pointer-events-none relative z-10 h-80 w-80 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg z-20" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-primary-200 font-medium text-sm mb-2">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </DraggableCardBody>
              ))}
            </DraggableCardContainer>
          </div>
        </BlurFade>

        {/* Leadership Quote */}
        {/* <BlurFade delay={0.8}>
          <div className="relative mt-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl overflow-hidden">
            <div className="relative z-10">
              <div className="text-6xl mb-4 opacity-50">"</div>
              <p className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
                Our strength lies in our people, our values, and our unwavering
                commitment to the communities we serve.
              </p>
              <p className="text-lg text-primary-100">
                — Mariappa Nadar Group Leadership Team
              </p>
            </div>
          </div>
        </BlurFade> */}
      </div>
    </AuroraBackground>
  );
}
