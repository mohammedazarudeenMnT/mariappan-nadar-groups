"use client";
import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Link from "next/link";

const divisions = [
  {
    id: 1,
    title: "Construction Materials Division",
    previewContent: (
      <div className="space-y-3">
        <div className="inline-block px-3 py-1 bg-primary-500/20 rounded-full mb-2">
          <span className="text-primary-300 text-xs font-semibold">
            Mariappa Nadar Building Solutions
          </span>
        </div>
        <h3 className="font-bold text-2xl md:text-3xl text-white">
          Construction Materials
        </h3>
        <Link href="/group/construction-materials" className="cursor-pointer">
          <button className="mt-4 inline-flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all cursor-pointer">
            Learn More
            <span>→</span>
          </button>
        </Link>
      </div>
    ),
    content: (
      <div className="space-y-3">
        <div className="inline-block px-3 py-1 bg-primary-500/20 rounded-full mb-2">
          <span className="text-primary-300 text-xs font-semibold">
            Mariappa Nadar Building Solutions
          </span>
        </div>
        <h3 className="font-bold text-2xl md:text-3xl text-white">
          Construction Materials
        </h3>
        <p className="text-sm text-neutral-300 leading-relaxed">
          Wholesale and retail supply of premium construction materials.
          Uninterrupted supply-chain reliability for contractors, builders, and
          home builders.
        </p>
        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <span className="text-xs text-neutral-300">TMT Steel Bars</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <span className="text-xs text-neutral-300">Cement</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <span className="text-xs text-neutral-300">
              Waterproofing Materials
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <span className="text-xs text-neutral-300">
              Construction Chemicals & Electrical Pipes
            </span>
          </div>
        </div>
        <Link href="/group/construction-materials" className="cursor-pointer">
          <button className="mt-4 inline-flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all cursor-pointer">
            Learn More
            <span>→</span>
          </button>
        </Link>
      </div>
    ),
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Mobile Retail & Technology",
    previewContent: (
      <div className="space-y-2">
        <div className="inline-block px-3 py-1 bg-primary-500/20 rounded-full mb-1">
          <span className="text-primary-300 text-xs font-semibold">
            Mathi Mobiles
          </span>
        </div>
        <h3 className="font-bold text-xl text-white">Technology Products</h3>
        <Link href="/group/mathi-mobiles" className="cursor-pointer">
          <button className="mt-3 inline-flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all cursor-pointer">
            Learn More
            <span>→</span>
          </button>
        </Link>
      </div>
    ),
    content: (
      <div className="space-y-2">
        <div className="inline-block px-3 py-1 bg-primary-500/20 rounded-full mb-1">
          <span className="text-primary-300 text-xs font-semibold">
            Mathi Mobiles
          </span>
        </div>
        <h3 className="font-bold text-xl text-white">Technology Products</h3>
        <p className="text-xs text-neutral-300 leading-relaxed">
          Budget to premium smartphones, Tabs, Laptops, Chargers, and
          Smartwatches. Combining technology and trust with comprehensive
          after-sales support.
        </p>
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <span className="text-xs text-neutral-300">
              Budget to Premium Smartphones
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <span className="text-xs text-neutral-300">
              Tabs, Laptops & Smartwatches
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <span className="text-xs text-neutral-300">
              After-sales assistance
            </span>
          </div>
        </div>
        <Link href="/group/mathi-mobiles" className="cursor-pointer">
          <button className="mt-3 inline-flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all cursor-pointer">
            Learn More
            <span>→</span>
          </button>
        </Link>
      </div>
    ),
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Health & Wellness Products",
    previewContent: (
      <div className="space-y-2">
        <div className="inline-block px-3 py-1 bg-primary-500/20 rounded-full mb-1">
          <span className="text-primary-300 text-xs font-semibold">
            Himalaya Wellness (Franchisee)
          </span>
        </div>
        <h3 className="font-bold text-xl text-white">Wellness Products</h3>
        <Link href="/group/himalaya-wellness" className="cursor-pointer">
          <button className="mt-3 inline-flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all cursor-pointer">
            Learn More
            <span>→</span>
          </button>
        </Link>
      </div>
    ),
    content: (
      <div className="space-y-2">
        <div className="inline-block px-3 py-1 bg-primary-500/20 rounded-full mb-1">
          <span className="text-primary-300 text-xs font-semibold">
            Himalaya Wellness (Franchisee)
          </span>
        </div>
        <h3 className="font-bold text-xl text-white">Wellness Products</h3>
        <p className="text-xs text-neutral-300 leading-relaxed">
          Authorized franchisee offering curated range of certified wellness and
          lifestyle products. Encouraging healthier living through safe,
          accessible, and high-quality options.
        </p>
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <span className="text-xs text-neutral-300">
              Certified wellness products
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <span className="text-xs text-neutral-300">
              Lifestyle & personal care
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <span className="text-xs text-neutral-300">
              Safe & accessible options
            </span>
          </div>
        </div>
        <Link href="/group/himalaya-wellness">
          <button className="mt-3 inline-flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all">
            Learn More
            <span>→</span>
          </button>
        </Link>
      </div>
    ),
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop",
  },
];

export function DivisionsShowcase() {
  return (
    <section
      id="divisions"
      className="relative py-24 bg-primary-50/10 dark:bg-neutral-950 overflow-hidden scroll-mt-20"
    >
      {/* Aurora Background Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-400/20 via-primary-300/10 to-transparent rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary-500/15 via-primary-400/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Background Pattern - Circuit Board (Top Left & Bottom Right) */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 opacity-[0.12]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_calc(50%-1px),oklch(0.64_0.15_210_/_0.3)_calc(50%-1px),oklch(0.64_0.15_210_/_0.3)_calc(50%+1px),transparent_calc(50%+1px)),linear-gradient(0deg,transparent_calc(50%-1px),oklch(0.64_0.15_210_/_0.3)_calc(50%-1px),oklch(0.64_0.15_210_/_0.3)_calc(50%+1px),transparent_calc(50%+1px))] bg-[length:60px_60px]" />
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-[0.12]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_calc(50%-1px),oklch(0.64_0.15_210_/_0.3)_calc(50%-1px),oklch(0.64_0.15_210_/_0.3)_calc(50%+1px),transparent_calc(50%+1px)),linear-gradient(0deg,transparent_calc(50%-1px),oklch(0.64_0.15_210_/_0.3)_calc(50%-1px),oklch(0.64_0.15_210_/_0.3)_calc(50%+1px),transparent_calc(50%+1px))] bg-[length:60px_60px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <BlurFade delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-neutral-900 dark:text-neutral-100 mb-4 sm:mb-6">
            Our Business Divisions
          </h2>
          <p className="text-lg sm:text-xl text-center text-neutral-600 dark:text-neutral-400 mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            Three distinct divisions, one unified commitment to excellence and
            customer satisfaction
          </p>
        </BlurFade>

        <div className="min-h-[400px] sm:min-h-[600px]">
          <LayoutGrid cards={divisions} />
        </div>
      </div>
    </section>
  );
}
