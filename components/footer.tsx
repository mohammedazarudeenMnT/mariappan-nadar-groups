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
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            {/* Logo and Description */}
            <div className="flex flex-col items-center md:items-start gap-4 flex-1">
              <div className="w-40 h-40 md:w-48 md:h-48 relative">
                <Image
                  src="/Mariyappa Group-logo.png"
                  alt="Mariappa Nadar Group Logo"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-base-400 text-center md:text-left leading-relaxed max-w-md">
                Building excellence across three trusted divisions. Serving with
                quality, integrity, and innovation for nearly a century.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="flex flex-col gap-3">
              <motion.a
                href="tel:8220333888"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 px-5 py-3 bg-gradient-to-br from-primary-500/10 to-transparent border border-primary-500/20 rounded-lg hover:border-primary-500/40 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-primary-400" />
                <div>
                  <p className="text-xs text-primary-300 font-medium">Phone</p>
                  <p className="text-sm text-white font-semibold">8220333888</p>
                </div>
              </motion.a>
              <motion.a
                href="mailto:info@mngroup.com"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 px-5 py-3 bg-gradient-to-br from-primary-500/10 to-transparent border border-primary-500/20 rounded-lg hover:border-primary-500/40 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-primary-400" />
                <div>
                  <p className="text-xs text-primary-300 font-medium">Email</p>
                  <p className="text-sm text-white font-semibold">
                    info@mngroup.com
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Offices and Locations Section */}
      <div className="relative border-b border-primary-500/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-primary-300 text-center text-xs font-bold tracking-wider uppercase">
              Our Locations
            </h3>

            {/* Grid of Offices */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Corporate Office */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 bg-gradient-to-br from-primary-500/10 to-transparent border border-primary-500/20 rounded-lg hover:border-primary-500/40 transition-all"
              >
                <h4 className="text-primary-300 font-semibold mb-2 text-xs uppercase tracking-wide">
                  Corporate Office
                </h4>
                <p className="text-[10px] text-primary-400 mb-2">
                  Karuppayurani
                </p>
                <div className="space-y-1 text-xs text-base-300 mb-3">
                  <p>456/1, Sivagangai Road</p>
                  <p>Opp to Vikram Hospital</p>
                  <p>Ring Road Junction</p>
                  <p>Madurai 625020</p>
                </div>
                <motion.a
                  href="tel:8220333888"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-1.5 text-xs text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span className="font-semibold">8220333888</span>
                </motion.a>
              </motion.div>

              {/* Branch Office 1 - Building Materials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-4 bg-gradient-to-br from-primary-500/10 to-transparent border border-primary-500/20 rounded-lg hover:border-primary-500/40 transition-all"
              >
                <h4 className="text-primary-300 font-semibold mb-2 text-xs uppercase tracking-wide">
                  Branch Office No. 1
                </h4>
                <p className="text-[10px] text-primary-400 mb-2">
                  Building Materials
                </p>
                <div className="space-y-1 text-xs text-base-300 mb-3">
                  <p>Nagamalai Pudukottai</p>
                  <p>4/467, Madurai Theni Road</p>
                  <p>Vadivel Nagar</p>
                  <p>Nagamalai Puthukottai</p>
                  <p>Madurai 625019</p>
                </div>
                <motion.a
                  href="tel:8940233833"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-1.5 text-xs text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span className="font-semibold">8940233833</span>
                </motion.a>
              </motion.div>

              {/* Branch Office 2 - Mobiles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-4 bg-gradient-to-br from-primary-500/10 to-transparent border border-primary-500/20 rounded-lg hover:border-primary-500/40 transition-all"
              >
                <h4 className="text-primary-300 font-semibold mb-2 text-xs uppercase tracking-wide">
                  Branch Office No. 2
                </h4>
                <p className="text-[10px] text-primary-400 mb-2">Mobiles</p>
                <div className="space-y-1 text-xs text-base-300 mb-3">
                  <p>Kamarajar Salai</p>
                  <p>Ground Floor, SMT Square</p>
                  <p>Opp to Nirmala School</p>
                  <p>137/1-4, Kamarajar Salai</p>
                  <p>Madurai 625009</p>
                </div>
                <motion.a
                  href="tel:8883233355"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-1.5 text-xs text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span className="font-semibold">8883233355</span>
                </motion.a>
              </motion.div>

              {/* Branch Office 3 - Health and Wellness */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-4 bg-gradient-to-br from-primary-500/10 to-transparent border border-primary-500/20 rounded-lg hover:border-primary-500/40 transition-all"
              >
                <h4 className="text-primary-300 font-semibold mb-2 text-xs uppercase tracking-wide">
                  Branch Office No. 3
                </h4>
                <p className="text-[10px] text-primary-400 mb-2">
                  Health & Wellness Products
                </p>
                <div className="space-y-1 text-xs text-base-300 mb-3">
                  <p>Kamarajar Salai</p>
                  <p>Ground Floor, SMT Square</p>
                  <p>Opp to Nirmala School</p>
                  <p>137/1-4, Kamarajar Salai</p>
                  <p>Madurai 625009</p>
                </div>
                <motion.a
                  href="tel:9087733355"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-1.5 text-xs text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span className="font-semibold">9087733355</span>
                </motion.a>
              </motion.div>

              {/* MaatRaM Trust */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-4 bg-gradient-to-br from-primary-500/10 to-transparent border border-primary-500/20 rounded-lg hover:border-primary-500/40 transition-all"
              >
                <h4 className="text-primary-300 font-semibold mb-2 text-xs uppercase tracking-wide">
                  MaatRaM
                </h4>
                <p className="text-[10px] text-primary-400 mb-2">
                  Educational & Medical Trust
                </p>
                <div className="space-y-1 text-xs text-base-300 mb-3">
                  <p>456/1, Sivagangai Road</p>
                  <p>Opp to Vikram Hospital</p>
                  <p>Ring Road Junction</p>
                  <p>Madurai 625020</p>
                </div>
                <motion.a
                  href="tel:8300033833"
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-1.5 text-xs text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span className="font-semibold">8300033833</span>
                </motion.a>
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
