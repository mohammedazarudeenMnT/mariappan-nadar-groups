"use client";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconArrowRight,
} from "@tabler/icons-react";
import Link from "next/link";

export function MaatramCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Animated Circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <BlurFade delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Get Involved with MaatRaM
              </h2>
              <p className="text-xl text-primary-100 leading-relaxed">
                Join us in our mission to create a better tomorrow. Whether
                you're seeking assistance or want to contribute to our cause,
                we're here to help.
              </p>

              <div className="space-y-4 pt-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Visit Us</p>
                    <p className="text-primary-100">
                      456/1, Sivagangai Road, Opp to Vikram Hospital
                      <br />
                      Ring Road Junction, Madurai 625020
                    </p>
                  </div>
                </motion.div>

                <motion.a
                  href="tel:8300033833"
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Call Us</p>
                    <p className="text-primary-100 text-lg font-semibold">
                      8300033833
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:maatram@mngroup.com"
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconMail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email Us</p>
                    <p className="text-primary-100">maatram@mngroup.com</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </BlurFade>

          {/* Right Content - CTA Cards */}
          <BlurFade delay={0.2}>
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 bg-white text-foreground rounded-2xl shadow-2xl"
              >
                <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
                <p className="text-muted-foreground mb-6">
                  If you or someone you know needs educational or medical
                  support, reach out to us. We're here to help.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer"
                >
                  Contact Us
                  <IconArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4">Want to Contribute?</h3>
                <p className="text-primary-100 mb-6">
                  Your support can make a real difference. Learn about volunteer
                  opportunities and ways to contribute to our initiatives.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer"
                >
                  Get Involved
                  <IconArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
