import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getAllArticleSlugs } from "@/lib/payload";
import { companyInfo } from "@/lib/data";
import ArticleCharts from "@/app/ArticleCharts";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return { title: "文章未找到" };
  }

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt,
    keywords: article.metaKeywords?.split(","),
    alternates: { canonical: `https://${companyInfo.domain}/news/${article.slug}/` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      images: article.coverImage ? [{ url: article.coverImage }] : undefined,
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-brand-50">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-warm-500">
          <Link href="/" className="hover:text-brand-600">首页</Link>
          <span>/</span>
          <Link href="/news" className="hover:text-brand-600">新闻资讯</Link>
          <span>/</span>
          <span className="text-brand-700 line-clamp-1">{article.title}</span>
        </nav>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="text-sm text-warm-400 mb-3">
            {new Date(article.publishedAt).toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="text-lg text-warm-500 leading-relaxed">{article.excerpt}</p>
          )}
        </header>

        {/* Content */}
        <div
          className="prose-content max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        <ArticleCharts />

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-brand-200">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回新闻列表
          </Link>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-gradient rounded-3xl p-10 text-center shadow-warm-lg">
            <h2 className="text-2xl font-bold text-white mb-4">
              对宠物感兴趣？联系我们
            </h2>
            <p className="text-brand-100 mb-6">
              专业团队随时为您服务
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-700 rounded-2xl font-bold text-lg hover:bg-brand-50 transition-colors"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
