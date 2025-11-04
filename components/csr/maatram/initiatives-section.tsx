"use client";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  IconSchool,
  IconStethoscope,
  IconBook,
  IconHeartHandshake,
  IconAmbulance,
  IconUsers,
} from "@tabler/icons-react";

const initiatives = [
  {
    icon: IconSchool,
    title: "Educational Programs",
    description:
      "Scholarships, tutoring, and educational resources for underprivileged students to ensure quality education for all.",
    color: "from-blue-500 to-blue-600",
    features: [
      "Merit-based scholarships",
      "Free tutoring programs",
      "Educational materials distribution",
      "Career guidance workshops",
    ],
  },
  {
    icon: IconBook,
    title: "Skill Development",
    description:
      "Vocational training and skill development programs to empower youth with employable skills and entrepreneurship opportunities.",
    color: "from-primary-500 to-primary-600",
    features: [
      "Vocational training courses",
      "Computer literacy programs",
      "Entrepreneurship workshops",
      "Job placement assistance",
    ],
  },
  {
    icon: IconStethoscope,
    title: "Healthcare Services",
    description:
      "Free medical camps, health screenings, and awareness programs to ensure accessible healthcare for all community members.",
    color: "from-green-500 to-green-600",
    features: [
      "Free medical camps",
      "Health screening programs",
      "Medicine distribution",
      "Health awareness campaigns",
    ],
  },
  {
    icon: IconAmbulance,
    title: "Emergency Medical Aid",
    description:
      "24/7 emergency medical assistance and ambulance services for those in need during critical situations.",
    color: "from-red-500 to-red-600",
    features: [
      "Emergency ambulance service",
      "Critical care support",
      "Medical emergency fund",
      "Hospital coordination",
    ],
  },
  {
    icon: IconHeartHandshake,
    title: "Community Welfare",
    description:
      "Supporting vulnerable sections of society through food distribution, shelter assistance, and social welfare programs.",
    color: "from-purple-500 to-purple-600",
    features: [
      "Food distribution drives",
      "Shelter assistance",
      "Elderly care programs",
      "Women empowerment initiatives",
    ],
  },
  {
    icon: IconUsers,
    title: "Youth Development",
    description:
      "Mentorship programs, sports activities, and leadership training to nurture the next generation of community leaders.",
    color: "from-orange-500 to-orange-600",
    features: [
      "Mentorship programs",
      "Sports & recreation",
      "Leadership training",
      "Cultural activities",
    ],
  },
];

export function InitiativesSection() {
  return (
    <section
      id="initiatives"
      className="py-20 bg-gradient-to-b from-background to-primary-50/30 dark:from-background dark:to-primary-950/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Initiatives
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to create lasting positive impact
              in education, healthcare, and community welfare
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <BlurFade key={initiative.title} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full p-8 bg-white dark:bg-base-900 rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${initiative.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <initiative.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {initiative.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {initiative.description}
                </p>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                    Key Features:
                  </p>
                  <ul className="space-y-2">
                    {initiative.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
