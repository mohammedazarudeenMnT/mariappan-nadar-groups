"use client";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { useState } from "react";
import {
  IconSparkles,
  IconBottle,
  IconBabyCarriage,
  IconScissors,
} from "@tabler/icons-react";

const categories = [
  {
    id: "personal-care",
    icon: IconSparkles,
    title: "Personal Care",
    products: [
      {
        name: "Herbal Soaps",
        description: "Natural cleansing with Ayurvedic herbs",
        image: "/images/himalaya_wellness/Neem-_-Turmeric-Soap.webp",
      },
      {
        name: "Herbal Shampoos",
        description: "Anti-hairfall & damage repair formulas",
        image: "/images/himalaya_wellness/shampoo.webp",
      },
      {
        name: "Face Wash & Scrubs",
        description: "Deep cleansing for clear, radiant skin",
        image:
          "/images/himalaya_wellness/7918819-2_Himalaya-Purifying-Neem-Face-Wash-New-Design-50ml_FOP.webp",
      },
      {
        name: "Face Creams & Lotions",
        description: "Nourishing moisturizers for all skin types",
        image: "/images/himalaya_wellness/revitalizing-night-cream.webp",
      },
    ],
  },
  {
    id: "health-supplements",
    icon: IconBottle,
    title: "Health Supplements",
    products: [
      {
        name: "Ashwagandha Capsules",
        description: "Stress relief & immunity booster",
        image: "/images/himalaya_wellness/Immusante-Tablets.webp",
      },
      {
        name: "Liv.52 Tablets",
        description: "Liver care & detoxification",
        image: "/images/himalaya_wellness/herbolax-capsules.webp",
      },
      {
        name: "Digestive Wellness",
        description: "Herbal digestive support tablets",
        image: "/images/himalaya_wellness/herbolax-capsules.webp",
      },
      {
        name: "Immunity Boosters",
        description: "Natural defense enhancers",
        image: "/images/himalaya_wellness/Immusante-Tablets.webp",
      },
    ],
  },
  {
    id: "baby-care",
    icon: IconBabyCarriage,
    title: "Baby Care",
    products: [
      {
        name: "Baby Soap",
        description: "Gentle herbal soap for delicate baby skin",
        image:
          "/images/himalaya_wellness/REFRESHINGBABYSOAP75GFRONT2INDIAIMSRGB-n.webp",
      },
      {
        name: "Baby Lotion",
        description: "Soft moisturizing care with natural oils",
        image:
          "/images/himalaya_wellness/BABY-LOTION-200ml-LABEL-_FOP-copy.webp",
      },
      {
        name: "Baby Powder",
        description: "Herbal powder for freshness & comfort",
        image: "/images/himalaya_wellness/baby-powder-400g.webp",
      },
      {
        name: "Baby Shampoo",
        description: "Tear-free gentle herbal cleansing",
        image:
          "/images/himalaya_wellness/Himalaya_GENTLE_BABY_SHAMPOO__Label_100_ml.webp",
      },
    ],
  },
  {
    id: "skin-hair-care",
    icon: IconScissors,
    title: "Skin & Hair Care",
    products: [
      {
        name: "Anti-Wrinkle Cream",
        description: "Herbal anti-aging formula for youthful skin",
        image:
          "/images/himalaya_wellness/anti-wrinkle-cream_f9d4812e-f2bd-4342-b240-35d4edb3f860.webp",
      },
      {
        name: "Hair Care Oil",
        description: "Herbal oil to strengthen & nourish hair",
        image: "/images/himalaya_wellness/Anti-Hair-Fall-Hair-oil.webp",
      },
      {
        name: "Face Packs & Masks",
        description: "Natural face packs for glowing skin",
        image:
          "/images/himalaya_wellness/Clear-Complexion-Face-Sheet-Mask.webp",
      },
      {
        name: "Hair Conditioner",
        description: "Herbal conditioner for smooth hair",
        image:
          "/images/himalaya_wellness/Himalaya-Bringha-80-Cond-Ecom-02_b9ffa926-7b1f-42bb-9524-64b7dfc851dc.webp",
      },
    ],
  },
];

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [direction, setDirection] = useState(0);

  const activeCategory = categories.find((cat) => cat.id === activeTab);

  const handleTabClick = (tabId: string) => {
    const currentIndex = categories.findIndex((cat) => cat.id === activeTab);
    const newIndex = categories.findIndex((cat) => cat.id === tabId);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(tabId);
  };

  return (
    <section className="relative py-22 px-4 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-primary-500/10 to-primary-600/10 text-primary-600 rounded-full text-sm font-bold border border-primary-200">
                Product Categories
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Complete Wellness{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                Range
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our comprehensive collection of natural care products
            </p>
          </div>
        </BlurFade>

        {/* Enhanced Animated Horizontal Tabs with Spring Physics */}
        <BlurFade delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12 relative">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeTab === category.id;
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTabClick(category.id)}
                  className={`
                    relative px-6 py-4 rounded-xl font-semibold transition-all duration-300
                    flex items-center gap-3 overflow-hidden cursor-pointer
                    ${
                      isActive
                        ? "text-white shadow-lg shadow-primary-500/30"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-primary-300 hover:shadow-md"
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-600 rounded-xl"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <Icon
                    className={`w-5 h-5 relative z-10 ${
                      isActive ? "text-white" : "text-primary-600"
                    }`}
                  />
                  <span className="relative z-10">{category.title}</span>
                </motion.button>
              );
            })}
          </div>
        </BlurFade>

        {/* Product Cards with Slide Animation */}
        <motion.div
          key={activeTab}
          initial={{
            opacity: 0,
            x: direction > 0 ? 100 : -100,
            filter: "blur(8px)",
          }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{
            opacity: 0,
            x: direction < 0 ? 100 : -100,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.4,
            ease: [0.32, 0.72, 0, 1],
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {activeCategory?.products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-primary-300 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
