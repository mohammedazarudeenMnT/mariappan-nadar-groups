"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavItem {
  name: string;
  link?: string;
  submenu?: {
    name: string;
    link: string;
  }[];
}

interface DropdownNavbarProps {
  className?: string;
}

export const DropdownNavbar = ({ className }: DropdownNavbarProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (link?: string) => {
    if (!link) return false;
    if (link === "/") return pathname === "/";
    return pathname.startsWith(link);
  };

  const navItems: NavItem[] = [
    {
      name: "About Us",
      link: "/about",
      submenu: [
        { name: "Who We Are", link: "/about#who-we-are" },
        { name: "Business Divisions", link: "/about#divisions" },
        { name: "Our Journey", link: "/about#our-journey" },
        { name: "Leadership", link: "/about#leadership" },
        { name: "Mission & Vision", link: "/about#mission-vision" },
        { name: "Philosophy", link: "/about#philosophy" },
      ],
    },
    {
      name: "Our Group",
      link: "/group",
      submenu: [
        { name: "Overview", link: "/group" },
        { name: "Construction", link: "/group/construction-materials" },
        { name: "Mathi Mobiles", link: "/group/mathi-mobiles" },
        { name: "Himalaya Products", link: "/group/himalaya-wellness" },
      ],
    },
    {
      name: "CSR Activities",
      link: "/csr/maatram",
      submenu: [
        {
          name: "MaatRaM Educational and Medical Trust",
          link: "/csr/maatram",
        },
      ],
    },
    {
      name: "Highlights",
      link: "/highlights",
      submenu: [
        { name: "Overview", link: "/highlights" },
        { name: "Achievements", link: "/highlights#achievements" },
        { name: "Events & Celebrations", link: "/highlights#events" },
        { name: "Gallery", link: "/highlights#gallery" },
        { name: "News & Press Desk", link: "/highlights#news" },
        { name: "Inspiring Stories", link: "/highlights#stories" },
      ],
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm dark:bg-base-950/95"
          : "bg-white/95 backdrop-blur-md shadow-sm dark:bg-base-950/95 md:bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            "h-22"
          )}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-6 sm:space-x-8 cursor-pointer"
            >
              <div className="h-54 w-54 sm:h-62 sm:w-62 relative transition-all duration-300">
                <Image
                  src="/Mariyappa Group-logo.png"
                  alt="Mariappa Nadar Group Logo"
                  fill
                  sizes="(max-width: 640px) 256px, 288px"
                  className={cn(
                    "object-contain transition-opacity duration-300 ",
                    isScrolled ? "opacity-0" : "opacity-100"
                  )}
                  priority
                />
                <Image
                  src="/Mariyappa Group-logo-blk.png"
                  alt="Mariappa Nadar Group Logo"
                  fill
                  sizes="(max-width: 640px) 256px, 288px"
                  className={cn(
                    "object-contain transition-opacity duration-300",
                    isScrolled ? "opacity-100" : "opacity-0"
                  )}
                  priority
                />
              </div>
              <span
                className={cn(
                  "font-bold text-2xl sm:text-4xl md:text-5xl hidden xs:block max-w-[250px] sm:max-w-none truncate transition-colors",
                  isScrolled
                    ? "text-base-800 dark:text-white"
                    : "text-white drop-shadow-lg"
                )}
              >
                Mariappa Nadar Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.submenu && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <Link
                      href={item.link || "#"}
                      className={cn(
                        "flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-colors relative cursor-pointer",
                        isActive(item.link)
                          ? isScrolled
                            ? "text-primary-600 dark:text-primary-400"
                            : "text-primary-200"
                          : isScrolled
                          ? "text-base-700 hover:text-primary-600 dark:text-base-300 dark:hover:text-primary-400"
                          : "text-white hover:text-primary-200 drop-shadow-md"
                      )}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <IconChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform relative z-10",
                          activeDropdown === item.name && "rotate-180"
                        )}
                      />
                      {isActive(item.link) && (
                        <motion.div
                          layoutId="navbar-glow"
                          className="absolute inset-0 rounded-full -z-10"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        >
                          <div className="absolute inset-0 bg-primary/10 rounded-full" />
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary-500 rounded-t-full">
                            <div className="absolute w-12 h-6 bg-primary/30 rounded-full blur-md -top-2 -left-2" />
                            <div className="absolute w-8 h-6 bg-primary/30 rounded-full blur-md -top-1" />
                            <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                          </div>
                        </motion.div>
                      )}
                    </Link>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-0 w-64 bg-white dark:bg-base-900 rounded-md shadow-lg py-2 border border-base-200 dark:border-base-700"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.link}
                              className={cn(
                                "block px-4 py-2 text-sm transition-colors cursor-pointer",
                                isActive(subItem.link)
                                  ? "bg-primary-50 text-primary-700 font-medium dark:bg-base-800 dark:text-primary-400"
                                  : "text-base-700 hover:bg-primary-50 hover:text-primary-700 dark:text-base-300 dark:hover:bg-base-800 dark:hover:text-primary-400"
                              )}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.link || "#"}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors relative block cursor-pointer",
                      isActive(item.link)
                        ? isScrolled
                          ? "text-primary-600 dark:text-primary-400"
                          : "text-primary-200"
                        : isScrolled
                        ? "text-base-700 hover:text-primary-600 dark:text-base-300 dark:hover:text-primary-400"
                        : "text-white hover:text-primary-200 drop-shadow-md"
                    )}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive(item.link) && (
                      <motion.div
                        layoutId="navbar-glow"
                        className="absolute inset-0 rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      >
                        <div className="absolute inset-0 bg-primary/10 rounded-full" />
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary-500 rounded-t-full">
                          <div className="absolute w-12 h-6 bg-primary/30 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-primary/30 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors cursor-pointer",
                "text-base-700 hover:text-base-900 dark:text-base-300 dark:hover:text-white"
              )}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-base-900 border-t border-base-200 dark:border-base-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <div className="flex items-center">
                        <Link
                          href={item.link || "#"}
                          className={cn(
                            "flex-1 px-3 py-2 text-base font-medium rounded-l-md cursor-pointer",
                            isActive(item.link)
                              ? "bg-primary-50 text-primary-700 dark:bg-base-800 dark:text-primary-400"
                              : "text-base-700 hover:bg-base-100 dark:text-base-300 dark:hover:bg-base-800"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.name ? null : item.name
                            )
                          }
                          className="px-3 py-2 text-base-700 hover:bg-base-100 dark:text-base-300 dark:hover:bg-base-800 rounded-r-md cursor-pointer"
                        >
                          <IconChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform",
                              activeDropdown === item.name && "rotate-180"
                            )}
                          />
                        </button>
                      </div>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.link}
                                className={cn(
                                  "block px-3 py-2 text-sm rounded-md cursor-pointer",
                                  isActive(subItem.link)
                                    ? "bg-primary-50 text-primary-700 font-medium dark:bg-base-800 dark:text-primary-400"
                                    : "text-base-600 hover:bg-base-100 dark:text-base-400 dark:hover:bg-base-800"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.link || "#"}
                      className={cn(
                        "block px-3 py-2 text-base font-medium rounded-md cursor-pointer",
                        isActive(item.link)
                          ? "bg-primary-50 text-primary-700 dark:bg-base-800 dark:text-primary-400"
                          : "text-base-700 hover:bg-base-100 dark:text-base-300 dark:hover:bg-base-800"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
