import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 bg-brand-50">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-brand-100 rounded-full mb-6">
          <svg className="w-12 h-12 text-brand-400" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5.5" cy="11" r="2.5" />
            <circle cx="9.5" cy="6" r="2.5" />
            <circle cx="14.5" cy="6" r="2.5" />
            <circle cx="18.5" cy="11" r="2.5" />
            <path d="M12 12c-3 0-5.5 2.5-5.5 5.5 0 2 1.5 3 3 3 1 0 1.5-.5 2.5-.5s1.5.5 2.5.5c1.5 0 3-1 3-3 0-3-2.5-5.5-5.5-5.5z" />
          </svg>
        </div>
        <div className="text-7xl font-bold text-brand-200 mb-4">404</div>
        <h1 className="text-2xl font-bold text-brand-900 mb-4">
          页面未找到
        </h1>
        <p className="text-warm-500 mb-8">
          您访问的页面可能已被移除或暂时不可用。如需了解宠物信息，请返回首页或联系我们。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary"
          >
            返回首页
          </Link>
          <Link
            href="/contact"
            className="btn-outline"
          >
            联系我们
          </Link>
        </div>
      </div>
    </div>
  );
}
