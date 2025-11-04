"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import {
  IconArrowLeft,
  IconSearch,
  IconFilter,
  IconClock,
  IconBookmark,
  IconArrowRight,
  IconCalendar,
  IconTrendingUp,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

// Extended news data for the listing page
const allNewsItems = [
  {
    id: 1,
    slug: "mariappa-nadar-group-expands-steel-division",
    title: "Mariappa Nadar Group Expands Steel Division",
    excerpt:
      "New state-of-the-art facility to enhance production capacity and meet growing market demand across Tamil Nadu and beyond.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Business Expansion",
    categoryColor:
      "bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&h=800&fit=crop",
    featured: true,
  },
  {
    id: 2,
    slug: "mathi-mobiles-launches-flagship-store",
    title: "Mathi Mobiles Launches New Flagship Store",
    excerpt:
      "Premium retail experience with latest technology and customer-centric services in the heart of Madurai.",
    date: "February 28, 2024",
    readTime: "4 min read",
    category: "Retail",
    categoryColor:
      "bg-purple-100 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&h=800&fit=crop",
  },
  {
    id: 3,
    slug: "community-health-initiative-milestone",
    title: "Community Health Initiative Reaches Milestone",
    excerpt:
      "Partnership with Himalaya Wellness brings healthcare to 5,000+ families in underserved communities.",
    date: "January 20, 2024",
    readTime: "6 min read",
    category: "Community Impact",
    categoryColor:
      "bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
  },
  {
    id: 4,
    slug: "sustainability-award-green-practices",
    title: "Sustainability Award for Green Practices",
    excerpt:
      "Recognized for implementing eco-friendly operations across all divisions and reducing carbon footprint.",
    date: "December 10, 2023",
    readTime: "3 min read",
    category: "Awards",
    categoryColor:
      "bg-amber-100 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=800&fit=crop",
  },
  {
    id: 5,
    slug: "digital-transformation-initiative",
    title: "Digital Transformation Initiative Launched",
    excerpt:
      "Comprehensive digitization program to modernize operations across all business divisions and enhance customer experience.",
    date: "November 25, 2023",
    readTime: "4 min read",
    category: "Technology",
    categoryColor:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
  },
  {
    id: 6,
    slug: "annual-charity-drive-success",
    title: "Annual Charity Drive Exceeds Expectations",
    excerpt:
      "Community outreach program raises ₹50 lakhs for local education and healthcare initiatives in rural Madurai.",
    date: "October 15, 2023",
    readTime: "3 min read",
    category: "Community Impact",
    categoryColor:
      "bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=800&fit=crop",
  },
];

const categories = [
  "All",
  "Business Expansion",
  "Retail",
  "Community Impact",
  "Awards",
  "Technology",
];

export function NewsListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = allNewsItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.find((item) => item.featured);
  const regularNews = filteredNews.filter((item) => !item.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/highlights#news"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <IconArrowLeft className="h-4 w-4" />
            <span>Back to Highlights</span>
          </Link>
        </div>
      </motion.div>

      {/* Header Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                News & Press Desk
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with our latest news, announcements, press releases,
              and company updates
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search Bar */}
              <div className="relative flex-1">
                <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    selectedCategory === category
                      ? "bg-primary-600 text-white shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center gap-2 mb-6">
                <IconTrendingUp className="h-5 w-5 text-primary-600" />
                <h2 className="text-2xl font-bold text-foreground">
                  Featured Story
                </h2>
              </div>

              <div className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-full text-xs font-bold shadow-lg">
                    <IconTrendingUp className="h-4 w-4" />
                    <span>FEATURED</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-[300px] md:h-[500px] overflow-hidden">
                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:hidden" />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span
                        className={cn(
                          "inline-block px-3 py-1 rounded-full text-xs font-semibold",
                          featuredNews.categoryColor
                        )}
                      >
                        {featuredNews.category}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary-600 transition-colors">
                      {featuredNews.title}
                    </h3>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {featuredNews.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                      <div className="flex items-center gap-2">
                        <IconCalendar className="h-4 w-4" />
                        <span>{featuredNews.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <IconClock className="h-4 w-4" />
                        <span>{featuredNews.readTime}</span>
                      </div>
                    </div>

                    <Link href={`/highlights/news/${featuredNews.slug}`}>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl w-fit"
                      >
                        Read Full Story
                        <IconArrowRight className="h-5 w-5" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {regularNews.length > 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {selectedCategory === "All" ? "All News" : selectedCategory}
                </h2>
                <p className="text-muted-foreground">
                  {filteredNews.length} article
                  {filteredNews.length !== 1 ? "s" : ""} found
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularNews.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <Link href={`/highlights/news/${item.slug}`}>
                      <div className="h-full bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                          {/* Category Badge */}
                          <div className="absolute bottom-3 left-3">
                            <span
                              className={cn(
                                "inline-block px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm",
                                item.categoryColor
                              )}
                            >
                              {item.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <IconCalendar className="h-3 w-3" />
                              <span>{item.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <IconClock className="h-3 w-3" />
                              <span>{item.readTime}</span>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary-600 transition-colors line-clamp-2">
                            {item.title}
                          </h3>

                          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                            {item.excerpt}
                          </p>

                          <motion.div
                            whileHover={{ x: 3 }}
                            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm"
                          >
                            Read More
                            <IconArrowRight className="h-4 w-4" />
                          </motion.div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconSearch className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria to find more
                  articles.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
