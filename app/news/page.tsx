import type { Metadata } from "next";
import Link from "next/link";
import { getArticles } from "@/lib/strapi";
import { companyInfo } from "@/lib/data";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "新闻资讯",
  description:
    "了解凯轩宠物的最新宠物资讯、养宠知识和行业动态。",
  alternates: { canonical: `https://${companyInfo.domain}/news/` },
};

export default async function NewsPage() {
  const { articles } = await getArticles(1, 20);

  return (
    <div className="bg-brand-50">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">
            新闻资讯
          </h1>
          <p className="text-lg text-warm-500">
            了解最新宠物资讯和养宠知识
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="bg-white rounded-3xl overflow-hidden shadow-warm card-hover"
                >
                  {article.coverImage && (
                    <div className="h-52 overflow-hidden">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-xs text-warm-400 mb-2">
                      {new Date(article.publishedAt).toLocaleDateString("zh-CN")}
                    </div>
                    <h2 className="text-lg font-bold text-brand-900 mb-2 line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-warm-500 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 text-brand-600 text-sm font-medium">
                      阅读全文 →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-100 rounded-full mb-6">
                <svg className="w-10 h-10 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <p className="text-warm-400 text-lg">暂无文章</p>
              <p className="text-warm-400 text-sm mt-2">请稍后再来查看</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
