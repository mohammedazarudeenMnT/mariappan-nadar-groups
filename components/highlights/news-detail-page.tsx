"use client";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconArrowLeft,
  IconClock,
  IconUser,
  IconShare,
  IconBookmark,
  IconCalendar,
  IconTag,
  IconArrowRight,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  image: string;
  author: string;
  tags: string[];
  featured?: boolean;
}

interface NewsDetailPageProps {
  article: NewsArticle;
  relatedArticles: NewsArticle[];
}

export function NewsDetailPage({
  article,
  relatedArticles,
}: NewsDetailPageProps) {
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
            <span>Back to News & Press</span>
          </Link>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[60vh] overflow-hidden"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Article Header */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span
                className={cn(
                  "inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4",
                  article.categoryColor
                )}
              >
                {article.category}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-gray-200 mb-6 max-w-3xl">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <IconUser className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCalendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconClock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Article Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <IconTag className="h-5 w-5" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-muted/80 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                {/* Share Actions */}
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="font-semibold mb-4">Share Article</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-3 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
                      <IconShare className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
                      <IconBookmark className="h-4 w-4" />
                      <span>Bookmark</span>
                    </button>
                  </div>
                </div>

                {/* Article Info */}
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="font-semibold mb-4">Article Info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Published</span>
                      <span>{article.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Read Time</span>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Author</span>
                      <span>{article.author}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category</span>
                      <span>{article.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Related Articles
              </h2>
              <p className="text-muted-foreground">
                Discover more news and updates from Mariappa Nadar Group
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.div
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href={`/highlights/news/${relatedArticle.slug}`}>
                    <div className="h-full bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute bottom-3 left-3">
                          <span
                            className={cn(
                              "inline-block px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm",
                              relatedArticle.categoryColor
                            )}
                          >
                            {relatedArticle.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <IconClock className="h-3 w-3" />
                            <span>{relatedArticle.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <IconBookmark className="h-3 w-3" />
                            <span>{relatedArticle.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary-600 transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h3>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                          {relatedArticle.excerpt}
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

            {/* View All News Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <Link
                href="/highlights#news"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border rounded-lg font-semibold text-foreground hover:border-primary-600 hover:text-primary-600 transition-all"
              >
                View All News & Press Releases
                <IconArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
