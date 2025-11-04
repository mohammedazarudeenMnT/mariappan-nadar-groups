import type { Metadata } from "next";
import { NewsDetailPage } from "@/components/highlights/news-detail-page";
import { notFound } from "next/navigation";

// Mock data for news articles
const newsArticles = [
  {
    id: 1,
    slug: "mariappa-nadar-group-expands-steel-division",
    title: "Mariappa Nadar Group Expands Steel Division",
    excerpt:
      "New state-of-the-art facility to enhance production capacity and meet growing market demand across Tamil Nadu and beyond.",
    content: `
      <p>Mariappa Nadar Group, a leading business conglomerate in Madurai, has announced a significant expansion of its steel division with the inauguration of a new state-of-the-art manufacturing facility. This strategic investment represents the company's commitment to meeting the growing demand for quality steel products across Tamil Nadu and neighboring states.</p>
      
      <p>The new facility, spanning over 50 acres in the industrial corridor of Madurai, incorporates cutting-edge technology and sustainable manufacturing practices. With an initial investment of ₹200 crores, the facility is expected to increase the group's steel production capacity by 40% within the first year of operation.</p>
      
      <h3>Advanced Technology Integration</h3>
      <p>The facility features advanced automation systems, energy-efficient furnaces, and state-of-the-art quality control mechanisms. These technological upgrades not only enhance production efficiency but also ensure consistent product quality that meets international standards.</p>
      
      <p>"This expansion reflects our vision to be at the forefront of industrial innovation while maintaining our commitment to quality and sustainability," said the Managing Director during the inauguration ceremony.</p>
      
      <h3>Employment Opportunities</h3>
      <p>The new facility is expected to create over 500 direct employment opportunities and approximately 1,500 indirect jobs in the region. The company has partnered with local technical institutes to provide specialized training programs for the workforce.</p>
      
      <p>The expansion also includes plans for a research and development center focused on developing eco-friendly steel production methods and exploring new applications for steel products in construction and infrastructure projects.</p>
    `,
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Business Expansion",
    categoryColor:
      "bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&h=800&fit=crop",
    author: "Press Desk",
    tags: ["Steel Division", "Expansion", "Manufacturing", "Employment"],
    featured: true,
  },
  {
    id: 2,
    slug: "mathi-mobiles-launches-flagship-store",
    title: "Mathi Mobiles Launches New Flagship Store",
    excerpt:
      "Premium retail experience with latest technology and customer-centric services in the heart of Madurai.",
    content: `
      <p>Mathi Mobiles, the retail arm of Mariappa Nadar Group, has unveiled its newest flagship store in the bustling commercial district of Madurai. The 10,000 square feet retail space represents a new era in mobile retail experience, combining cutting-edge technology with personalized customer service.</p>
      
      <p>The store features an innovative layout designed to enhance customer experience, with dedicated zones for different brands, interactive demonstration areas, and a comprehensive service center equipped with the latest diagnostic and repair equipment.</p>
      
      <h3>Premium Customer Experience</h3>
      <p>The flagship store introduces several first-of-its-kind services in the region, including a virtual reality zone where customers can experience the latest smartphone features, a dedicated gaming area for testing mobile gaming capabilities, and a photography studio for testing camera features.</p>
      
      <p>The store also features a premium lounge area where customers can relax while their devices are being serviced, complete with complimentary refreshments and high-speed Wi-Fi connectivity.</p>
      
      <h3>Technology Integration</h3>
      <p>Advanced point-of-sale systems, digital inventory management, and customer relationship management tools ensure seamless service delivery. The store also offers online-to-offline integration, allowing customers to browse, compare, and reserve products online before visiting the store.</p>
    `,
    date: "February 28, 2024",
    readTime: "4 min read",
    category: "Retail",
    categoryColor:
      "bg-purple-100 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&h=800&fit=crop",
    author: "Marketing Team",
    tags: ["Retail", "Technology", "Customer Service", "Madurai"],
  },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((article) => article.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Mariappa Nadar Group",
    };
  }

  return {
    title: `${article.title} | Mariappa Nadar Group News`,
    description: article.excerpt,
    keywords: [
      ...article.tags,
      "Mariappa Nadar Group",
      "news",
      "press release",
    ],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: "article",
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function NewsDetailPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const article = newsArticles.find((article) => article.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  return <NewsDetailPage article={article} relatedArticles={relatedArticles} />;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}
