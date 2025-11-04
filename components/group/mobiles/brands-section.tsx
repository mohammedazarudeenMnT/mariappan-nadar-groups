"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  IconDeviceMobile,
  IconShield,
  IconClock,
  IconCheck,
} from "@tabler/icons-react";
import { Marquee } from "@/components/ui/marquee";
import { useState, useEffect, useRef } from "react";

// Utility for conditional class names
const cn = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const brands = [
  {
    name: "Galaxy S-Series",
    tagline: "Flagship Excellence",
    description: "S24 Ultra, S24+, S24",
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
  },
  {
    name: "Galaxy Z-Series",
    tagline: "Unfold Your World",
    description: "Z Fold, Z Flip",
    image:
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop",
  },
  {
    name: "Galaxy A-Series",
    tagline: "Awesome Innovation",
    description: "A54, A34, A24",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
  },
  {
    name: "Galaxy Watch",
    tagline: "Smart Living",
    description: "Watch 6, Watch 6 Classic",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
  },
  {
    name: "Galaxy Buds",
    tagline: "Sound Perfection",
    description: "Buds Pro, Buds FE",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
  },
  {
    name: "Samsung Laptops",
    tagline: "Power & Portability",
    description: "Galaxy Book Series",
    image:
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=400&fit=crop",
  },
];

const features = [
  "100% Genuine Products",
  "Official Warranty",
  "Expert Guidance",
  "Trade-In Available",
  "EMI Options",
  "Service Center",
];

// Flip Card Component for Circular Gallery
function BrandFlipCard({
  brand,
  className,
  style,
}: {
  brand: (typeof brands)[0];
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        "group w-32 xs:w-36 sm:w-44 md:w-52 lg:w-56 h-44 xs:h-48 sm:h-60 md:h-72 lg:h-80 rounded-xl sm:rounded-2xl [perspective:1000px] transition-transform duration-300 ease-in-out hover:scale-110",
        className
      )}
      style={style}
    >
      <div className="relative w-full h-full rounded-2xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side - Image */}
        <div className="absolute inset-0 rounded-2xl [backface-visibility:hidden] overflow-hidden">
          <img
            src={brand.image}
            alt={brand.name}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

          {/* Brand Name on Front */}
          <div className="absolute bottom-0 left-0 right-0 p-2 xs:p-3 sm:p-4 md:p-5">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
              {brand.name}
            </h3>
          </div>
        </div>

        {/* Back Side - Details */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 border border-primary-500 flex flex-col items-center justify-center p-3 xs:p-4 sm:p-5 md:p-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 rounded-full flex items-center justify-center mb-2 sm:mb-3">
            <IconDeviceMobile className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
          </div>

          <h3 className="font-bold text-sm xs:text-base md:text-lg lg:text-xl text-white mb-1 sm:mb-2">
            {brand.name}
          </h3>

          <p className="text-[10px] xs:text-xs md:text-sm text-white/90 font-medium mb-2 sm:mb-3 uppercase tracking-wide">
            {brand.tagline}
          </p>

          <p className="text-[10px] xs:text-xs md:text-sm text-white/80 leading-relaxed line-clamp-3 sm:line-clamp-4">
            {brand.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// Animated Brand Card Component using Framer Motion
function AnimatedBrandCard({
  brand,
  index,
  totalCards,
  rotation,
  radius,
  centerX,
  centerY,
}: {
  brand: (typeof brands)[0];
  index: number;
  totalCards: number;
  rotation: any;
  radius: number;
  centerX: number;
  centerY: number;
}) {
  // Calculate base angle for this card
  const baseAngle = (index / totalCards) * 2 * Math.PI - Math.PI / 2;

  // Transform rotation to translateX and translateY (pure transforms, no re-renders!)
  const translateX = useTransform(rotation, (r: number) => {
    const angle = baseAngle + r;
    return radius * Math.cos(angle);
  });

  const translateY = useTransform(rotation, (r: number) => {
    const angle = baseAngle + r;
    return radius * Math.sin(angle);
  });

  const rotate = useTransform(rotation, (r: number) => {
    const angle = baseAngle + r;
    return ((angle + Math.PI / 2) * 180) / Math.PI;
  });

  return (
    <motion.div
      className="absolute hover:z-20"
      style={{
        left: centerX,
        top: centerY,
        x: translateX,
        y: translateY,
        rotate,
        translateX: "-50%",
        translateY: "-50%",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      <BrandFlipCard
        brand={brand}
        className="transition-transform duration-300 hover:scale-110"
      />
    </motion.div>
  );
}

// Circular Gallery Component
function CircularBrandsGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);

  // Framer Motion's useMotionValue - doesn't cause re-renders!
  const rotation = useMotionValue(0);

  // Effect for responsive sizing
  useEffect(() => {
    const updateSize = () => {
      if (galleryRef.current) {
        const gallerySize = galleryRef.current.offsetWidth;
        setSize(gallerySize);
      }
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    if (galleryRef.current) {
      resizeObserver.observe(galleryRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  // Smooth animation using Framer Motion's useAnimationFrame - no re-renders!
  useAnimationFrame((time, delta) => {
    // Increment rotation smoothly based on delta time
    rotation.set(rotation.get() + delta * 0.00008);
  });

  const radius = size * 0.38;
  const centerX = size / 2;
  const centerY = size / 2;

  return (
    <div
      ref={galleryRef}
      className="relative w-full max-w-[350px] xs:max-w-[420px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px] xl:max-w-[900px] aspect-square flex items-center justify-center mx-auto mt-12 sm:mt-16 md:mt-20"
    >
      {/* Central Logo - No Box */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center justify-center space-y-1 xs:space-y-1.5 sm:space-y-2"
        >
          {/* Logo with glow effect - Responsive sizing */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/30 to-primary-600/30 blur-xl sm:blur-2xl rounded-full scale-150" />
            <img
              src="/images/mathi-mobiles.png"
              alt="Mathi Mobiles"
              className="relative w-12 xs:w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 h-auto drop-shadow-2xl"
            />
          </div>

          {/* Text content with shadow - Responsive sizing */}
          <div className="text-center space-y-0.5 sm:space-y-1">
            <h2 className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-slate-900 leading-tight drop-shadow-lg">
              Samsung Exclusive Showroom
            </h2>
            <p className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-primary-600 uppercase tracking-wide font-bold drop-shadow-md">
              Official SmartCafé Partner
            </p>
            <p className="text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-slate-600 font-medium drop-shadow hidden xs:block">
              Hover to explore products
            </p>
          </div>
        </motion.div>
      </div>

      {/* Circular Arrangement of Cards - Smooth Framer Motion */}
      {size > 0 &&
        brands.map((brand, index) => (
          <AnimatedBrandCard
            key={index}
            brand={brand}
            index={index}
            totalCards={brands.length}
            rotation={rotation}
            radius={radius}
            centerX={centerX}
            centerY={centerY}
          />
        ))}
    </div>
  );
}

// Elegant Floating Shape Component
function ElegantShape({
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-primary-500/[0.08]",
  className = "",
}: {
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border-2 border-primary-200/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]`}
        />
      </motion.div>
    </motion.div>
  );
}

export function BrandsSection() {
  return (
    <section className="relative py-16 xs:py-20 sm:py-24 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.03] via-transparent to-primary-600/[0.03] blur-3xl" />

      {/* Elegant Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-primary-500/[0.12]"
          className="left-[-10%] md:left-[-5%] top-[15%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-primary-600/[0.12]"
          className="right-[-5%] md:right-[0%] top-[70%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-primary-400/[0.12]"
          className="left-[5%] md:left-[10%] bottom-[5%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-primary-700/[0.12]"
          className="right-[15%] md:right-[20%] top-[10%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-primary-500/[0.12]"
          className="left-[20%] md:left-[25%] top-[5%]"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="px-4 xs:px-5 sm:px-6 py-1.5 xs:py-2 bg-gradient-to-r from-primary-500/10 to-primary-600/10 text-primary-600 rounded-full text-xs xs:text-sm font-bold border border-primary-200">
                Samsung Exclusive Showroom
              </span>
            </motion.div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Samsung Exclusive{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                Showroom
              </span>
            </h2>
            <p className="text-base xs:text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Official Samsung SmartCafé Partner | Complete Galaxy lineup with
              genuine warranty and expert support
            </p>
          </div>
        </BlurFade>

        {/* Circular Gallery */}
        <div className="mb-16 sm:mb-24 md:mb-32 mt-8 sm:mt-10 md:mt-12">
          <CircularBrandsGallery />
        </div>

        {/* Features Marquee */}
        <BlurFade delay={0.5}>
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-r from-primary-50 to-primary-100 p-4 xs:p-5 sm:p-6 md:p-8 border-2 border-primary-200">
            <Marquee className="py-2 xs:py-3 sm:py-4" pauseOnHover>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="mx-4 xs:mx-6 sm:mx-8 flex items-center gap-2 xs:gap-3 text-primary-900"
                >
                  <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-primary-500" />
                  <span className="text-sm xs:text-base sm:text-lg font-semibold whitespace-nowrap">
                    {feature}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>

        {/* Stats Section */}
        <BlurFade delay={0.6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 xs:mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8"
          >
            {[
              {
                icon: IconShield,
                value: "100%",
                label: "Genuine Products",
                description: "Authentic devices with official warranty",
              },
              {
                icon: IconClock,
                value: "1 Year",
                label: "Warranty Coverage",
                description: "Comprehensive protection on all devices",
              },
              {
                icon: IconDeviceMobile,
                value: "24/7",
                label: "Customer Support",
                description: "Always here to help you",
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="relative rounded-xl sm:rounded-2xl bg-white border-2 border-slate-200 p-5 xs:p-6 sm:p-7 md:p-8 hover:border-primary-300 transition-all hover:shadow-xl">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 mb-3 sm:mb-4 shadow-lg"
                    >
                      <Icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" />
                    </motion.div>

                    {/* Value */}
                    <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">
                      {stat.value}
                    </div>

                    {/* Label */}
                    <div className="text-base xs:text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">
                      {stat.label}
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-xs xs:text-sm">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
}
