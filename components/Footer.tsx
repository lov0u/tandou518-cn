import Link from "next/link";
import { companyInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-brand-gradient flex items-center justify-center text-white text-xl">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="5.5" cy="11" r="2.5" />
                  <circle cx="9.5" cy="6" r="2.5" />
                  <circle cx="14.5" cy="6" r="2.5" />
                  <circle cx="18.5" cy="11" r="2.5" />
                  <path d="M12 12c-3 0-5.5 2.5-5.5 5.5 0 2 1.5 3 3 3 1 0 1.5-.5 2.5-.5s1.5.5 2.5.5c1.5 0 3-1 3-3 0-3-2.5-5.5-5.5-5.5z" />
                </svg>
              </div>
              <div className="text-lg font-bold text-white">
                凯轩宠物交易
              </div>
            </div>
            <p className="text-sm text-brand-200 leading-relaxed max-w-md">
              凯轩宠物交易（tandou518.cn）是烟台专业的宠物交易平台，提供猫咪、狗狗、兔子、仓鼠、鸟类、水族等多种宠物的交易服务。健康保障，品种纯正，售后跟踪，专业指导，给爱宠一个温暖的家。
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">快速导航</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link href="/" className="text-sm text-brand-200 hover:text-brand-400 transition-colors">
                首页
              </Link>
              <Link href="/pets" className="text-sm text-brand-200 hover:text-brand-400 transition-colors">
                宠物展示
              </Link>
              <Link href="/about" className="text-sm text-brand-200 hover:text-brand-400 transition-colors">
                关于我们
              </Link>
              <Link href="/news" className="text-sm text-brand-200 hover:text-brand-400 transition-colors">
                新闻资讯
              </Link>
              <Link href="/contact" className="text-sm text-brand-200 hover:text-brand-400 transition-colors">
                联系我们
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 text-sm text-brand-200 hover:text-brand-400 transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {companyInfo.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-brand-200">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {companyInfo.address}
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-200">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                全天候在线服务
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-brand-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-brand-300">
              © {new Date().getFullYear()} {companyInfo.name}. 保留所有权利.
            </p>
            <div className="flex items-center gap-4 text-sm text-brand-300">
              <Link href="/" className="hover:text-brand-400 transition-colors">
                首页
              </Link>
              <span>|</span>
              <Link href="/about" className="hover:text-brand-400 transition-colors">
                关于我们
              </Link>
              <span>|</span>
              <Link href="/contact" className="hover:text-brand-400 transition-colors">
                联系我们
              </Link>
              <span>|</span>
              <Link href="/sitemap.xml" className="hover:text-brand-400 transition-colors">
                网站地图
              </Link>
            </div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-2 text-xs text-brand-400">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-400 transition-colors"
            >
              {companyInfo.icp}
            </a>
            <span className="hidden md:inline">|</span>
            <span>
              技术支持：{" "}
              <a
                href="https://ra0.cn/wangzhan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-400 transition-colors"
              >
                青衣网络
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
