"use client";

import { useState } from "react";
import Link from "next/link";
import { companyInfo } from "@/lib/data";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/pets", label: "宠物展示" },
  { href: "/about", label: "关于我们" },
  { href: "/news", label: "新闻资讯" },
  { href: "/contact", label: "联系我们" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-50/95 backdrop-blur-sm border-b border-brand-200 shadow-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-brand-gradient flex items-center justify-center text-white text-xl">
              {/* 爪印图标 */}
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="5.5" cy="11" r="2.5" />
                <circle cx="9.5" cy="6" r="2.5" />
                <circle cx="14.5" cy="6" r="2.5" />
                <circle cx="18.5" cy="11" r="2.5" />
                <path d="M12 12c-3 0-5.5 2.5-5.5 5.5 0 2 1.5 3 3 3 1 0 1.5-.5 2.5-.5s1.5.5 2.5.5c1.5 0 3-1 3-3 0-3-2.5-5.5-5.5-5.5z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold text-brand-900">
                凯轩宠物
              </div>
              <div className="text-xs text-warm-500 hidden sm:block">
                给爱宠一个温暖的家
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-brand-800 hover:text-brand-600 hover:bg-brand-100 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Email CTA */}
          <a
            href={`mailto:${companyInfo.email}`}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-brand-700 text-white rounded-2xl font-semibold hover:bg-brand-600 transition-colors text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {companyInfo.email}
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-brand-100 text-brand-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="菜单"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden py-4 border-t border-brand-200 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2.5 text-sm font-medium text-brand-800 hover:text-brand-600 hover:bg-brand-100 rounded-xl transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`mailto:${companyInfo.email}`}
                className="mt-2 mx-4 flex items-center justify-center gap-2 px-4 py-3 bg-brand-700 text-white rounded-2xl font-semibold"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {companyInfo.email}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
