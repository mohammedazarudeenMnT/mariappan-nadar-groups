"use client";
import { motion } from "motion/react";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconSend,
  IconBuilding,
  IconDeviceMobile,
  IconHeartHandshake,
  IconArrowRight,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { AboutHeroSection } from "@/components/about/hero-section";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Card } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

const divisions = [
  {
    id: "corporate",
    icon: IconBuilding,
    logo: "/Mariyappa Group-logo-blk.png",
    name: "Corporate Office",
    tagline: "Karuppayurani",
    description:
      "Our main corporate office managing all business operations and strategic initiatives",
    phone: "8220333888",
    email: "info@mngroup.com",
    address:
      "456/1, Sivagangai Road, Opp to Vikram Hospital, Ring Road Junction, Madurai 625020",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5!2d78.11!3d9.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnNDguMCJOIDc4wrAwNiczNi4wIkU!5e0!3m2!1sen!2sin!4v1234567890",
    gradient: "from-primary-500 via-primary-600 to-primary-700",
    customers: 2000,
    projects: 5000,
  },
  {
    id: "construction",
    icon: IconBuilding,
    logo: "/images/construction/MNBS Logo background erased.png",
    name: "Steel & Construction",
    tagline: "Building Materials",
    description:
      "Premium TMT bars, mild steel, cement, and construction materials",
    phone: "8940233833",
    email: "construction@mngroup.com",
    address:
      "4/467, Madurai Theni Road, Vadivel Nagar, Nagamalai Puthukottai, Madurai 625019",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0!2d78.1!3d9.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTcnMDAuMCJOIDc4wrAwNicwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890",
    gradient: "from-primary-600 via-primary-700 to-primary-800",
    customers: 500,
    projects: 1200,
  },
  {
    id: "mobiles",
    icon: IconDeviceMobile,
    logo: "/images/mathi-mobiles.png",
    name: "Mathi Mobiles",
    tagline: "Stay Connected",
    description: "Latest smartphones, accessories, and expert repair services",
    phone: "8883233355",
    email: "mobiles@mngroup.com",
    address:
      "Ground Floor, SMT Square, Opp to Nirmala School, 137/1-4, Kamarajar Salai, Madurai 625009",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.8!2d78.12!3d9.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnMTIuMCJOIDc4wrAwNycxMi4wIkU!5e0!3m2!1sen!2sin!4v1234567890",
    gradient: "from-primary-400 via-primary-500 to-primary-600",
    customers: 1000,
    projects: 5000,
  },
  {
    id: "wellness",
    icon: IconHeartHandshake,
    logo: "/images/himalaya_wellness/himalaya.avif",
    name: "Himalaya Wellness",
    tagline: "Live Healthy",
    description: "Trusted healthcare and wellness products for every family",
    phone: "9087733355",
    email: "wellness@mngroup.com",
    address:
      "Ground Floor, SMT Square, Opp to Nirmala School, 137/1-4, Kamarajar Salai, Madurai 625009",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.8!2d78.12!3d9.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnMTIuMCJOIDc4wrAwNycxMi4wIkU!5e0!3m2!1sen!2sin!4v1234567890",
    gradient: "from-primary-500 via-primary-600 to-primary-700",
    customers: 5000,
    projects: 10000,
  },
  {
    id: "maatram",
    icon: IconHeartHandshake,
    logo: "/images/Maatram/MAATRAM HORIZONTAL LOGO.png",
    name: "MaatRaM",
    tagline: "Educational & Medical Trust",
    description:
      "Dedicated to educational and medical initiatives for community welfare",
    phone: "8300033833",
    email: "maatram@mngroup.com",
    address:
      "456/1, Sivagangai Road, Opp to Vikram Hospital, Ring Road Junction, Madurai 625020",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5!2d78.11!3d9.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnNDguMCJOIDc4wrAwNiczNi4wIkU!5e0!3m2!1sen!2sin!4v1234567890",
    gradient: "from-primary-600 via-primary-700 to-primary-800",
    customers: 3000,
    projects: 8000,
  },
];

export function ContactClient() {
  const [selectedDivision, setSelectedDivision] = useState<string>("corporate");
  const currentDivision =
    divisions.find((d) => d.id === selectedDivision) || divisions[0];
  const Icon = currentDivision.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Shared Hero Section */}
      <AboutHeroSection
        title="Contact Us"
        description="Choose your division and connect with our expert team for personalized assistance. We're here to help you with all your needs."
        breadcrumb="Home ❯ Contact"
        logoText="MN"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
      />

      {/* Division Tabs */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-background via-primary-50/30 to-background dark:from-background dark:via-primary-950/10 dark:to-background">
        <BackgroundBeams className="absolute inset-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <BlurFade delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Select Your Division
              </h2>
              <p className="text-xl text-muted-foreground">
                Each division has dedicated experts ready to assist you
              </p>
            </div>
          </BlurFade>

          {/* Division Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {divisions.map((division, index) => {
              const DivIcon = division.icon;
              const isSelected = selectedDivision === division.id;

              return (
                <BlurFade key={division.id} delay={0.2 + index * 0.1}>
                  <motion.button
                    onClick={() => setSelectedDivision(division.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden cursor-pointer",
                      isSelected
                        ? "text-white shadow-2xl"
                        : "bg-card border-2 border-border text-foreground hover:border-primary-300"
                    )}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeTab"
                        className={cn(
                          "absolute inset-0 bg-gradient-to-r",
                          division.gradient
                        )}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-3">
                      {division.logo ? (
                        <div className="relative h-6 w-6">
                          <Image
                            src={division.logo}
                            alt={`${division.name} logo`}
                            fill
                            sizes="24px"
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <DivIcon className="h-6 w-6" />
                      )}
                      {division.name}
                    </span>
                  </motion.button>
                </BlurFade>
              );
            })}
          </div>

          {/* Division Content */}
          <motion.div
            key={selectedDivision}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Division Header Card */}
            <div className="mb-12">
              <Card
                className={cn(
                  "relative overflow-hidden border-2 p-10 bg-gradient-to-br from-primary-50/50 to-background dark:from-primary-950/20 dark:to-background"
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-5",
                    currentDivision.gradient
                  )}
                />
                <DotPattern
                  width={20}
                  height={20}
                  cx={1}
                  cy={1}
                  cr={1}
                  className="absolute inset-0 opacity-20"
                />

                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={cn(
                          "w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl p-2",
                          currentDivision.logo
                            ? "bg-white"
                            : cn("bg-gradient-to-br", currentDivision.gradient)
                        )}
                      >
                        {currentDivision.logo ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={currentDivision.logo}
                              alt={`${currentDivision.name} logo`}
                              fill
                              sizes="80px"
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <Icon className="h-10 w-10 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-foreground">
                          {currentDivision.name}
                        </h3>
                        <p className="text-lg text-primary-600 font-semibold">
                          {currentDivision.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {currentDivision.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl">
                      <div className="text-4xl font-bold text-primary-600 mb-2">
                        <AnimatedCounter
                          to={currentDivision.customers}
                          suffix="+"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Happy Customers
                      </p>
                    </div>
                    <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl">
                      <div className="text-4xl font-bold text-primary-600 mb-2">
                        <AnimatedCounter
                          to={currentDivision.projects}
                          suffix="+"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Projects Done
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: IconPhone,
                    label: "Phone",
                    value: currentDivision.phone,
                    href: `tel:${currentDivision.phone}`,
                    color: "from-primary-500 to-primary-600",
                  },
                  {
                    icon: IconMail,
                    label: "Email",
                    value: currentDivision.email,
                    href: `mailto:${currentDivision.email}`,
                    color: "from-primary-600 to-primary-700",
                  },
                  {
                    icon: IconMapPin,
                    label: "Location",
                    value: currentDivision.address,
                    href: null,
                    color: "from-primary-400 to-primary-500",
                  },
                  {
                    icon: IconClock,
                    label: "Hours",
                    value: "Mon-Sat: 9AM - 6PM",
                    href: null,
                    color: "from-primary-500 to-primary-700",
                  },
                ].map((item, index) => (
                  <BlurFade key={index} delay={0.3 + index * 0.1}>
                    <Card
                      className="p-6 hover:shadow-xl transition-all cursor-pointer group"
                      onClick={() =>
                        item.href && window.open(item.href, "_self")
                      }
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform",
                            item.color
                          )}
                        >
                          <item.icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                            {item.label}
                          </p>
                          <p className="font-bold text-foreground text-sm">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </BlurFade>
                ))}

                {/* Social Links */}
                <BlurFade delay={0.7}>
                  <Card className="p-6">
                    <h4 className="font-bold text-foreground mb-4">
                      Connect With Us
                    </h4>
                    <div className="flex gap-3">
                      {[
                        {
                          icon: IconBrandWhatsapp,
                          gradient: "from-primary-500 to-primary-600",
                        },
                        {
                          icon: IconBrandLinkedin,
                          gradient: "from-primary-600 to-primary-700",
                        },
                        {
                          icon: IconBrandFacebook,
                          gradient: "from-primary-400 to-primary-600",
                        },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          href="#"
                          className={cn(
                            "w-12 h-12 bg-gradient-to-br rounded-xl flex items-center justify-center shadow-lg cursor-pointer",
                            social.gradient
                          )}
                        >
                          <social.icon className="h-6 w-6 text-white" />
                        </motion.a>
                      ))}
                    </div>
                  </Card>
                </BlurFade>
              </div>

              {/* Contact Form */}
              <BlurFade delay={0.4} className="lg:col-span-2">
                <Card className="p-10">
                  <h3 className="text-3xl font-bold text-foreground mb-3">
                    Send a Message
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    We&apos;ll get back to you within 24 hours
                  </p>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-5 py-4 rounded-xl border-2 border-border bg-background focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-5 py-4 rounded-xl border-2 border-border bg-background focus:border-primary-500 focus:outline-none transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 border-border bg-background focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={6}
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 border-border bg-background focus:border-primary-500 focus:outline-none resize-none transition-colors"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className={cn(
                        "w-full px-8 py-5 bg-gradient-to-r text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 cursor-pointer",
                        currentDivision.gradient
                      )}
                    >
                      <IconSend className="h-6 w-6" />
                      Send to {currentDivision.name}
                      <IconArrowRight className="h-6 w-6" />
                    </motion.button>
                  </form>
                </Card>
              </BlurFade>
            </div>

            {/* Map */}
            <BlurFade delay={0.5}>
              <Card className="mt-8 overflow-hidden">
                <div className="p-4 border-b border-border">
                  <h4 className="font-bold text-foreground flex items-center gap-2">
                    <IconMapPin className="h-5 w-5 text-primary-500" />
                    {currentDivision.name} Location
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {currentDivision.address}
                  </p>
                </div>
                <div className="aspect-[21/9] w-full">
                  <iframe
                    key={currentDivision.id}
                    src={currentDivision.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${currentDivision.name} Location`}
                  />
                </div>
              </Card>
            </BlurFade>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
