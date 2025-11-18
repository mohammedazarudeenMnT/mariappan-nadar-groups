"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const tabs = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "divisions", label: "Business Divisions" },
  { id: "milestones", label: "Our Journey" },
  { id: "leadership", label: "Leadership" },
  { id: "mission-vision", label: "Mission & Vision" },
  { id: "philosophy", label: "Philosophy" },
];

export function TabNavigation() {
  const [activeTab, setActiveTab] = useState("who-we-are");
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Don't update active tab while user is clicking tabs
      if (isScrolling) return;

      const sections = tabs.map((tab) => document.getElementById(tab.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Set scrolling state to prevent scroll listener from interfering
      setIsScrolling(true);

      // Update active tab immediately for better UX
      setActiveTab(id);

      const offset = 100; // Offset for sticky header and tab bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Reset scrolling state after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  return (
    <div className="sticky top-20 sm:top-24 z-40 bg-white/95 backdrop-blur-md border-b border-base-200 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto scrollbar-hide px-2 sm:px-4 md:px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-medium whitespace-nowrap transition-all duration-300 flex-shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? "text-primary-600 scale-105"
                  : "text-base-600 hover:text-primary-500 hover:scale-102"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
