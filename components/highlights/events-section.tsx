"use client";
import { motion } from "motion/react";
import { useState } from "react";
import {
  IconCalendar,
  IconSparkles,
  IconUsers,
  IconGift,
  IconMapPin,
  IconClock,
  IconPhoto,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const events = [
  {
    id: 1,
    year: "2024",
    title: "Annual Celebration 2024",
    subtitle: "99 Years of Excellence",
    date: "December 15, 2024",
    time: "6:00 PM - 11:00 PM",
    location: "Madurai Convention Center",
    attendees: "500+",
    description:
      "A grand celebration marking 99 years of excellence, bringing together employees, partners, and community members for an unforgettable evening of recognition, entertainment, and unity.",
    icon: IconSparkles,
    gradient: "from-primary-500 via-primary-600 to-primary-700",
    accentColor: "bg-primary-600",
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Award Ceremonies",
      "Cultural Performances",
      "Gala Dinner",
      "Team Building",
      "Live Entertainment",
      "Networking",
    ],
  },
  {
    id: 2,
    year: "2024",
    title: "Employee Recognition Day",
    subtitle: "Honoring Our Team",
    date: "August 20, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Corporate Office",
    attendees: "300+",
    description:
      "A special day dedicated to honoring outstanding contributions and long-term dedication of our team members. Celebrating the people who make our success possible.",
    icon: IconUsers,
    gradient: "from-primary-400 via-primary-500 to-primary-600",
    accentColor: "bg-primary-500",
    images: [
      "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Service Awards",
      "Performance Recognition",
      "Team Appreciation",
      "Career Milestones",
      "Leadership Awards",
      "Innovation Prizes",
    ],
  },
  {
    id: 3,
    year: "2023",
    title: "Community Festival",
    subtitle: "Giving Back Together",
    date: "November 10, 2023",
    time: "9:00 AM - 6:00 PM",
    location: "Community Center",
    attendees: "1000+",
    description:
      "Our annual community outreach program bringing joy and support to local families. A full day of celebration, giving, and community bonding.",
    icon: IconGift,
    gradient: "from-primary-300 via-primary-400 to-primary-500",
    accentColor: "bg-primary-400",
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop",
    ],
    highlights: [
      "Food Distribution",
      "Health Camps",
      "Educational Support",
      "Entertainment Programs",
      "Kids Activities",
      "Free Medical Checkups",
    ],
  },
];

export function EventsSection() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentEvent = events[activeEvent];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentEvent.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentEvent.images.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-background to-muted/30 dark:from-primary-950/20 dark:via-background dark:to-muted/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
              Events & Celebrations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Memorable Moments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones and bringing our community together
          </p>
        </motion.div>

        {/* Event Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <button
                key={event.id}
                onClick={() => {
                  setActiveEvent(index);
                  setCurrentImageIndex(0);
                }}
                className={cn(
                  "group relative px-6 py-4 rounded-xl transition-all duration-300 border-2 cursor-pointer",
                  activeEvent === index
                    ? "bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-600/30"
                    : "bg-card border-border text-muted-foreground hover:border-primary-300 hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={cn(
                      "h-5 w-5 transition-transform group-hover:scale-110",
                      activeEvent === index ? "text-white" : "text-primary-600"
                    )}
                  />
                  <div className="text-left">
                    <div className="font-semibold text-sm">{event.title}</div>
                    <div
                      className={cn(
                        "text-xs",
                        activeEvent === index
                          ? "text-white/80"
                          : "text-muted-foreground"
                      )}
                    >
                      {event.year}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Event Content */}
        <motion.div
          key={activeEvent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-8 items-start"
        >
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted group">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={currentEvent.images[currentImageIndex]}
                alt={currentEvent.title}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <IconChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <IconChevronRight className="h-5 w-5" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-sm rounded-full flex items-center gap-2">
                <IconPhoto className="h-4 w-4" />
                <span>
                  {currentImageIndex + 1} / {currentEvent.images.length}
                </span>
              </div>

              {/* Year Badge */}
              <div className="absolute top-4 left-4">
                <div
                  className={cn(
                    "px-4 py-2 text-white rounded-full font-bold text-sm shadow-lg bg-gradient-to-r",
                    currentEvent.gradient
                  )}
                >
                  {currentEvent.year}
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-2">
              {currentEvent.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={cn(
                    "relative aspect-video rounded-lg overflow-hidden border-2 transition-all cursor-pointer",
                    currentImageIndex === idx
                      ? "border-primary-600 scale-95"
                      : "border-transparent hover:border-primary-300"
                  )}
                >
                  <img
                    src={img}
                    alt={`${currentEvent.title} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {currentImageIndex === idx && (
                    <div className="absolute inset-0 bg-primary-600/20" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {currentEvent.title}
              </h3>
              <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold">
                {currentEvent.subtitle}
              </p>
            </div>

            {/* Meta Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <IconCalendar className="h-5 w-5 text-primary-600 mt-0.5" />
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Date
                  </div>
                  <div className="font-semibold text-foreground">
                    {currentEvent.date}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <IconClock className="h-5 w-5 text-primary-600 mt-0.5" />
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Time
                  </div>
                  <div className="font-semibold text-foreground">
                    {currentEvent.time}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <IconMapPin className="h-5 w-5 text-primary-600 mt-0.5" />
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Location
                  </div>
                  <div className="font-semibold text-foreground">
                    {currentEvent.location}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <IconUsers className="h-5 w-5 text-primary-600 mt-0.5" />
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Attendees
                  </div>
                  <div className="font-semibold text-foreground">
                    {currentEvent.attendees}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                About This Event
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {currentEvent.description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                Event Highlights
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {currentEvent.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full",
                        currentEvent.accentColor
                      )}
                    />
                    <span className="text-muted-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
