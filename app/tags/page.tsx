import type { Metadata } from "next";
import Link from "next/link";
import { getTags } from "@/lib/payload";
import { companyInfo } from "@/lib/data";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "文章标签",
  description: `浏览${companyInfo.name}所有文章标签，按标签分类浏览宠物养护知识和行业动态。`,
  alternates: {
    canonical: `https://${companyInfo.domain}/tags/`,
  },
};

export default async function TagsPage() {
  const tags = await getTags();

  return (
    <>
      <section className="bg-gradient-to-br from-brand-800 to-brand-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            文章标签
          </h1>
          <p className="text-xl text-white/90">
            按标签分类浏览宠物养护知识和行业动态
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-50 min-h-[400px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {tags.length > 0 ? (
            <>
              <nav className="flex items-center gap-2 text-sm text-brand-400 mb-8">
                <Link href="/" className="hover:text-brand-600">
                  首页
                </Link>
                <span>/</span>
                <Link href="/news" className="hover:text-brand-600">
                  新闻资讯
                </Link>
                <span>/</span>
                <span className="text-brand-900">标签</span>
              </nav>

              <div className="flex flex-wrap gap-4">
                {tags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/tags/${tag.slug}`}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-brand-100"
                  >
                    <span className="text-lg font-bold text-brand-900 group-hover:text-brand-600 transition-colors">
                      {tag.name}
                    </span>
                    <svg
                      className="w-4 h-4 text-brand-300 group-hover:text-brand-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🐾</div>
              <h2 className="text-xl font-bold text-brand-800 mb-2">
                标签即将上线
              </h2>
              <p className="text-brand-500 mb-8">
                文章标签功能正在准备中，敬请期待
              </p>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-colors"
              >
                浏览全部文章
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
