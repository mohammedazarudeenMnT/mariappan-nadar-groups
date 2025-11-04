"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const galleryCategories = [
  { id: "all", label: "All" },
  { id: "facilities", label: "Facilities" },
  { id: "team", label: "Team" },
  { id: "events", label: "Events" },
  { id: "products", label: "Products" },
];

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    alt: "Modern office building",
    category: "facilities",
    title: "Corporate Headquarters",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=800&fit=crop",
    alt: "Team collaboration",
    category: "team",
    title: "Team Collaboration",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Business meeting",
    category: "team",
    title: "Strategic Planning",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
    alt: "Team success",
    category: "events",
    title: "Annual Celebration",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop",
    alt: "Modern workspace",
    category: "facilities",
    title: "Innovation Lab",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=800&fit=crop",
    alt: "Professional team member",
    category: "team",
    title: "Leadership Team",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=1200&h=800&fit=crop",
    alt: "Steel products",
    category: "products",
    title: "Steel Division",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
    alt: "Community event",
    category: "events",
    title: "Community Outreach",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop",
    alt: "Team meeting",
    category: "team",
    title: "Team Workshop",
  },
];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage
    );
    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    setSelectedImage(filteredItems[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage
    );
    const nextIndex =
      currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredItems[nextIndex].id);
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
              Visual Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A visual journey through our legacy and achievements
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
                selectedCategory === category.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30"
                  : "bg-card border border-border text-muted-foreground hover:border-primary-300 hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <IconX className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <IconChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <IconChevronRight className="h-6 w-6" />
            </button>

            <div
              className="max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={
                  filteredItems.find((item) => item.id === selectedImage)?.src
                }
                alt={
                  filteredItems.find((item) => item.id === selectedImage)?.alt
                }
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold">
                  {
                    filteredItems.find((item) => item.id === selectedImage)
                      ?.title
                  }
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
