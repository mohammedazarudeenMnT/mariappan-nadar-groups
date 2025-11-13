"use client";

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ModernGridBg } from "@/components/ui/modern-grid-bg";
import Link from "next/link";

export function ConstructionHeroImageGrid() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-3 sm:px-6 py-12 sm:py-16 md:py-20 overflow-hidden bg-background">
      <ModernGridBg />
      <div className="mx-auto max-w-7xl relative z-10 w-full pt-12 sm:pt-16 md:pt-20 mt-20 sm:mt-16 md:mt-12 lg:mt-0">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 items-start lg:items-center lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex gap-6 flex-col">
            <div>
              <Badge
                variant="outline"
                className="text-primary-300 border-primary-700/50 bg-primary-900/30 backdrop-blur-sm"
              >
                Building Excellence Since 1900s
              </Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-2xl tracking-tight text-left font-bold text-primary-200">
                Premium Construction Materials
              </h1>
              <p className="text-base xs:text-lg sm:text-xl leading-relaxed tracking-tight text-white max-w-xl text-left">
                From steel beams to cement, we deliver quality materials that
                build lasting structures. Your trusted partner in construction
                excellence for over a century.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#services">
                <Button
                  size="lg"
                  className="gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  Explore Products <MoveRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="gap-2 shadow-md" variant="outline">
                  Contact Us <PhoneCall className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-primary-800/30">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-300">
                  100+
                </div>
                <div className="text-xs sm:text-sm text-primary-400/70">
                  Years Legacy
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-300">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-primary-400/70">
                  Projects
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary-300">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-primary-400/70">
                  Quality
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 auto-rows-max lg:auto-rows-auto">
            {/* Top Left - Cement/Concrete */}
            <div className="rounded-lg sm:rounded-xl aspect-square overflow-hidden shadow-md sm:shadow-xl hover:shadow-lg sm:hover:shadow-2xl transition-all hover:scale-[1.02] duration-300 group">
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop"
                  alt="Cement and Concrete Materials"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white">
                  <div className="text-lg sm:text-2xl font-bold">Cement</div>
                  <div className="text-xs sm:text-sm opacity-90">
                    Premium Quality
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right - Steel (Tall on lg, Square on mobile) */}
            <div className="rounded-lg sm:rounded-xl aspect-square lg:row-span-2 overflow-hidden shadow-md sm:shadow-xl hover:shadow-lg sm:hover:shadow-2xl transition-all hover:scale-[1.02] duration-300 group">
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=1200&fit=crop"
                  alt="Steel and Metal Construction Materials"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white">
                  <div className="text-lg sm:text-3xl font-bold">
                    Steel & Metal
                  </div>
                  <div className="text-xs sm:text-sm opacity-90">
                    Industrial Grade
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left - Bricks (Hidden on mobile, shown on lg) */}
            <div className="hidden lg:block rounded-lg sm:rounded-xl aspect-square overflow-hidden shadow-md sm:shadow-xl hover:shadow-lg sm:hover:shadow-2xl transition-all hover:scale-[1.02] duration-300 group">
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
                  alt="Bricks and Masonry Materials"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-red-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white">
                  <div className="text-lg sm:text-2xl font-bold">Bricks</div>
                  <div className="text-xs sm:text-sm opacity-90">
                    Durable & Strong
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
