"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

const footerSections = [
  {
    social: { title: "Facebook", href: "#", icon: Facebook },
    category: "About Us",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Our Group", href: "/group" },
      { title: "Highlights", href: "/highlights" },
      { title: "Contact Us", href: "/contact" },
      { title: "Home", href: "/" },
    ],
  },
  {
    social: { title: "Twitter", href: "#", icon: Twitter },
    category: "Our Businesses",
    links: [
      {
        title: "Construction Materials",
        href: "/group/construction-materials",
      },
      { title: "Mathi Mobiles", href: "/group/mathi-mobiles" },
      { title: "Himalaya Wellness", href: "/group/himalaya-wellness" },
      { title: "All Businesses", href: "/group" },
      { title: "About", href: "/about" },
    ],
  },
  {
    social: { title: "Instagram", href: "#", icon: Instagram },
    category: "Explore",
    links: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Our Group", href: "/group" },
      { title: "Highlights", href: "/highlights" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    social: { title: "LinkedIn", href: "#", icon: Linkedin },
    category: "Quick Links",
    links: [
      { title: "Contact Us", href: "/contact" },
      { title: "About Us", href: "/about" },
      { title: "Our Businesses", href: "/group" },
      { title: "Highlights", href: "/highlights" },
      { title: "Home", href: "/" },
    ],
  },
];

function SocialCard({
  title,
  href,
  icon: Icon,
}: {
  title: string;
  href: string;
  icon: React.ElementType;
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ backgroundColor: "rgba(28, 168, 203, 0.1)" }}
      className="flex items-center justify-between border-t border-b border-primary-500/20 p-4 text-sm group transition-all hover:border-primary-500/40 cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-primary-600/20 transition-all">
          <Icon className="w-5 h-5 text-primary-400" />
        </div>
        <span className="font-semibold text-white group-hover:text-primary-300 transition-colors">
          {title}
        </span>
      </div>
      <ArrowRight className="w-5 h-5 text-primary-400 transition-transform group-hover:translate-x-1" />
    </motion.a>
  );
}

function LinksGroup({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string }[];
}) {
  return (
    <div className="p-4">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-primary-300 mt-2 mb-4 text-xs font-bold tracking-wider uppercase"
      >
        {title}
      </motion.h3>
      <ul className="space-y-2">
        {links.map((link, idx) => (
          <motion.li
            key={link.title}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
          >
            <Link
              href={link.href}
              className="text-base-400 hover:text-primary-400 text-sm transition-colors flex items-center group cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500/0 group-hover:bg-primary-500 mr-2 transition-all" />
              {link.title}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-primary-500/20 bg-gradient-to-b from-base-900 via-base-900 to-black text-white relative overflow-hidden">
      {/* Radial Gradient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(35%_128px_at_50%_0%,rgba(28,168,203,0.15),transparent)]"
      />

      {/* Brand Header Section */}
      <div className="relative border-b border-primary-500/20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-8"
          >
            {/* Logo */}
            <div className="w-48 h-48 md:w-64 md:h-64 relative">
              <Image
                src="/Mariyappa Group-logo.png"
                alt="Mariappa Nadar Group Logo"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-base-400 text-center leading-relaxed max-w-2xl">
              Building excellence across three trusted divisions. Serving with
              quality, integrity, and innovation for nearly a century.
            </p>

            {/* Contact Info Cards */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-primary-500/10 to-transparent border border-primary-500/20 rounded-xl hover:border-primary-500/40 transition-all"
              >
                <Phone className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-xs text-primary-300 font-medium">Phone</p>
                  <p className="text-sm text-white">+91 XXX XXX XXXX</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-primary-500/10 to-transparent border border-primary-500/20 rounded-xl hover:border-primary-500/40 transition-all"
              >
                <Mail className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-xs text-primary-300 font-medium">Email</p>
                  <p className="text-sm text-white">info@mngroup.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Split Column Layout */}
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="relative grid grid-cols-1 border-x border-primary-500/20 md:grid-cols-4 md:divide-x md:divide-primary-500/20">
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <SocialCard
                title={section.social.title}
                href={section.social.href}
                icon={section.social.icon}
              />
              <LinksGroup title={section.category} links={section.links} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-center border-t border-primary-500/20 p-6 mt-8">
        <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base-400 text-sm">
            © {new Date().getFullYear()} Mariappa Nadar Group. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-base-400 hover:text-primary-400 transition-colors underline cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-base-400 hover:text-primary-400 transition-colors underline cursor-pointer"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
