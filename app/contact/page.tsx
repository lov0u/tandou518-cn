import type { Metadata } from "next";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "联系凯轩宠物交易，邮箱：lov0u@foxmail.com，地址：烟台。我们随时为您提供专业的宠物交易服务。",
  alternates: { canonical: `https://${companyInfo.domain}/contact/` },
};

export default function ContactPage() {
  return (
    <div className="bg-brand-50">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">
            联系我们
          </h1>
          <p className="text-lg text-warm-500">
            有任何问题或需求，欢迎随时联系我们
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-brand-900 mb-6">联系方式</h2>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-warm">
                  <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-warm-400 mb-1">电子邮箱</div>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-lg font-semibold text-brand-800 hover:text-brand-600"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-warm">
                  <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-warm-400 mb-1">公司地址</div>
                    <div className="text-lg font-semibold text-brand-800">
                      {companyInfo.address}
                    </div>
                  </div>
                </div>

                {/* Service Hours */}
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-warm">
                  <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-warm-400 mb-1">服务时间</div>
                    <div className="text-lg font-semibold text-brand-800">
                      全天候在线服务
                    </div>
                    <div className="text-sm text-warm-500 mt-1">
                      邮件咨询随时回复
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-white rounded-3xl p-8 shadow-warm">
                <h3 className="text-lg font-bold text-brand-900 mb-4">关于我们</h3>
                <p className="text-warm-500 text-sm leading-relaxed">
                  凯轩宠物交易（tandou518.cn）是烟台专业的宠物交易平台，提供猫咪、狗狗、兔子、仓鼠、鸟类、水族等多种宠物的交易服务。我们致力于为每一位爱宠人士提供健康、纯正的优质宠物。
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-brand-900 mb-6">在线留言</h2>
              <form className="bg-white rounded-3xl p-8 shadow-warm">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-brand-800 mb-2">
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="请输入您的姓名"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-brand-200 focus:border-brand-500 focus:outline-none transition-colors bg-brand-50/50"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-brand-800 mb-2">
                    邮箱 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="请输入您的邮箱"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-brand-200 focus:border-brand-500 focus:outline-none transition-colors bg-brand-50/50"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-brand-800 mb-2">
                    留言 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="请输入您的留言内容"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-brand-200 focus:border-brand-500 focus:outline-none transition-colors bg-brand-50/50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  发送留言
                </button>
                <p className="text-xs text-warm-400 mt-4 text-center">
                  提交后我们将通过邮箱与您联系
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
