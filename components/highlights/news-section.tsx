"use client";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconNews,
  IconArrowRight,
  IconClock,
  IconTrendingUp,
  IconBookmark,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const newsItems = [
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
];

export function NewsSection() {
  const featuredNews = newsItems.find((item) => item.featured);
  const regularNews = newsItems.filter((item) => !item.featured);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
              News & Press Desk
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest news, announcements, and press
            releases
          </p>
        </motion.div>

        {/* Featured News */}
        {featuredNews && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
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
                      <IconClock className="h-4 w-4" />
                      <span>{featuredNews.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconBookmark className="h-4 w-4" />
                      <span>{featuredNews.readTime}</span>
                    </div>
                  </div>

                  <Link href={`/highlights/news/${featuredNews.slug}`}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl w-fit cursor-pointer"
                    >
                      Read Full Story
                      <IconArrowRight className="h-5 w-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
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
                      <IconClock className="h-3 w-3" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IconBookmark className="h-3 w-3" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  <Link href={`/highlights/news/${item.slug}`}>
                    <motion.button
                      whileHover={{ x: 3 }}
                      className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm cursor-pointer"
                    >
                      Read More
                      <IconArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link href="/highlights/news">
            <button className="px-8 py-4 border-2 border-border rounded-lg font-semibold text-foreground hover:border-primary-600 hover:text-primary-600 transition-all cursor-pointer">
              View All News & Press Releases
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
