"use client";

import { motion } from "framer-motion";
import { Circle, Smartphone, Headphones, Watch } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
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
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export function MobilesHeroGeometric() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-1000 via-primary-950 to-primary-900 pt-32 sm:pt-24 md:pt-16 lg:pt-0 mt-12 sm:mt-8 md:mt-0">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.08] via-transparent to-primary-400/[0.08] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-primary-500/[0.2]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-primary-400/[0.2]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-primary-300/[0.2]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-primary-600/[0.2]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-primary-400/[0.2]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />

        {/* Floating Product Images - Samsung Products */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -10 }}
          animate={{ opacity: 0.8, y: 0, rotate: -5 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute left-[5%] top-[25%] hidden lg:block"
        >
          <motion.img
            animate={{ y: [0, -20, 0], rotate: [-5, -8, -5] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=400&fit=crop"
            alt="Samsung Galaxy Smartphone"
            className="w-48 h-64 object-cover rounded-2xl shadow-2xl border-2 border-white/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 10 }}
          animate={{ opacity: 0.8, y: 0, rotate: 5 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute right-[8%] top-[30%] hidden lg:block"
        >
          <motion.img
            animate={{ y: [0, -15, 0], rotate: [5, 8, 5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&h=300&fit=crop"
            alt="Samsung Galaxy Watch"
            className="w-40 h-40 object-cover rounded-2xl shadow-2xl border-2 border-white/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 5 }}
          animate={{ opacity: 0.7, y: 0, rotate: 3 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute left-[15%] bottom-[15%] hidden md:block"
        >
          <motion.img
            animate={{ y: [0, -12, 0], rotate: [3, 0, 3] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=300&h=300&fit=crop"
            alt="Samsung Laptop"
            className="w-36 h-36 object-cover rounded-2xl shadow-2xl border-2 border-white/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -8 }}
          animate={{ opacity: 0.7, y: 0, rotate: -4 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="absolute right-[12%] bottom-[20%] hidden md:block"
        >
          <motion.img
            animate={{ y: [0, -18, 0], rotate: [-4, -7, -4] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop"
            alt="Samsung Galaxy Buds"
            className="w-32 h-32 object-cover rounded-2xl shadow-2xl border-2 border-white/10"
          />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] mb-8 md:mb-12 backdrop-blur-sm"
          >
            <Circle className="h-2 w-2 fill-primary-400/80" />
            <span className="text-sm text-white/70 tracking-wide font-medium">
              Samsung Exclusive Showroom | Official SmartCafé Partner
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Mathi Mobiles
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-primary-200 via-primary-300 to-primary-400"
                )}
              >
                Smart Devices, Smarter Service
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/50 mb-10 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
              Samsung Exclusive Showroom | Official SmartCafé Partner — Complete
              range of Samsung mobiles, laptops, smartwatches, and original
              accessories.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Link href="#products">
              <Button
                size="lg"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-6 text-lg"
              >
                Explore Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-black hover:bg-white/10 hover:text-white px-8 py-6 text-lg"
              >
                Visit Store
              </Button>
            </Link>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { icon: Smartphone, label: "Samsung Mobiles" },
              { icon: Headphones, label: "Original Accessories" },
              { icon: Watch, label: "Laptops & Watches" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm cursor-pointer"
              >
                <item.icon className="w-8 h-8 text-primary-400" />
                <span className="text-sm text-white/60">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-primary-1000 via-transparent to-primary-1000/80 pointer-events-none" />
    </div>
  );
}
