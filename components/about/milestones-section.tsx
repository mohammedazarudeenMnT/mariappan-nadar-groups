"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Building2,
  Store,
  Heart,
  Award,
  TrendingUp,
  Users,
} from "lucide-react";

export function MilestonesSection() {
  const data = [
    {
      title: "1925",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            The Beginning
          </p>
          <div className="relative rounded-xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop"
              alt="Historic Madurai 1925"
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Foundation by P.S.M. Mariappa Nadar
                  </h4>
                  <p className="text-primary-100 text-base leading-relaxed">
                    Started as a modest trading firm in Madurai, laying the
                    foundation for what would become a trusted multi-sector
                    enterprise. Built on principles of integrity and community
                    service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "1950s",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Expansion Era
          </p>
          <div className="relative rounded-xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop"
              alt="Construction Materials"
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Construction Materials Division
                  </h4>
                  <p className="text-primary-100 text-base leading-relaxed">
                    Entered the construction materials sector, providing quality
                    building materials to support Madurai&apos;s growing
                    infrastructure needs. Established reputation for reliability
                    and quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "1990s",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Technology Integration
          </p>
          <div className="relative rounded-xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=800&fit=crop"
              alt="Mobile Technology Store"
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Launch of Mathi Mobiles
                  </h4>
                  <p className="text-primary-100 text-base leading-relaxed">
                    Recognized the growing importance of mobile technology and
                    established Mathi Mobiles, bringing the latest mobile
                    devices and accessories to customers across Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2000s",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Wellness Focus
          </p>
          <div className="relative rounded-xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=800&fit=crop"
              alt="Wellness Products"
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Himalaya Wellness Partnership
                  </h4>
                  <p className="text-primary-100 text-base leading-relaxed">
                    Partnered with Himalaya to bring trusted wellness and
                    healthcare products to the community, expanding our
                    commitment to holistic well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2010s",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Leadership Transition
          </p>
          <div className="relative rounded-xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop"
              alt="Modern Leadership"
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Rajalakshmi&apos;s Leadership
                  </h4>
                  <p className="text-primary-100 text-base leading-relaxed">
                    Under Rajalakshmi&apos;s visionary leadership, the group
                    modernized operations while maintaining founding values,
                    ensuring sustainable growth and community impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Today",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Century of Excellence
          </p>
          <div className="relative rounded-xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop"
              alt="Modern Business Success"
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                    A Trusted Multi-Sector Enterprise
                  </h4>
                  <p className="text-primary-100 text-base leading-relaxed mb-4">
                    Nearly 100 years of excellence, serving 50,000+ customers
                    across three thriving divisions. Continuing to build on our
                    legacy of integrity, quality, and community service.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-3xl font-bold text-white">3</div>
                      <div className="text-xs text-primary-100 mt-1">
                        Divisions
                      </div>
                    </div>
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-3xl font-bold text-white">50K+</div>
                      <div className="text-xs text-primary-100 mt-1">
                        Customers
                      </div>
                    </div>
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-3xl font-bold text-white">100</div>
                      <div className="text-xs text-primary-100 mt-1">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="milestones"
      className="relative w-full bg-primary-50/10 dark:bg-neutral-900 scroll-mt-20 overflow-hidden"
    >
      {/* Background Pattern - Diagonal Stripes (Corners) */}
      <div className="absolute top-0 left-0 w-1/2 h-1/3 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,oklch(0.64_0.15_210_/_0.025)_20px,oklch(0.64_0.15_210_/_0.025)_40px)] opacity-70" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-[repeating-linear-gradient(-45deg,transparent,transparent_20px,oklch(0.64_0.15_210_/_0.025)_20px,oklch(0.64_0.15_210_/_0.025)_40px)] opacity-70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <BlurFade delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4">
            Our Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-6 max-w-3xl mx-auto px-4">
            Nearly a century of growth, innovation, and unwavering commitment to
            excellence
          </p>
        </BlurFade>
      </div>
      <Timeline data={data} />
    </section>
  );
}
