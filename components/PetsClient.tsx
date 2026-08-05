"use client";

import { useState } from "react";
import Link from "next/link";
import { pets } from "@/lib/data";

const filterTabs = ["全部", "猫", "狗", "兔子", "仓鼠", "鸟类"];

export default function PetsClient() {
  const [activeFilter, setActiveFilter] = useState("全部");

  const filteredPets =
    activeFilter === "全部"
      ? pets
      : pets.filter((pet) => pet.species === activeFilter);

  return (
    <div className="bg-brand-50">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">
            宠物展示
          </h1>
          <p className="text-lg text-warm-500">
            精心挑选的优质宠物，总有一款适合你
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 sticky top-16 z-40 bg-brand-50/95 backdrop-blur-sm border-b border-brand-200">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-6 py-2.5 rounded-2xl font-medium transition-all ${
                activeFilter === tab
                  ? "bg-brand-700 text-white shadow-warm"
                  : "bg-white text-brand-700 hover:bg-brand-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Pets Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPets.map((pet) => (
              <Link
                key={pet.slug}
                href={`/pets/${pet.slug}`}
                className="bg-white rounded-3xl overflow-hidden shadow-warm card-hover"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-700 text-white text-sm rounded-full">
                    {pet.species}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-brand-900">{pet.name}</h3>
                    <span className="text-brand-600 font-semibold text-sm">{pet.price}</span>
                  </div>
                  <p className="text-warm-500 text-sm mb-3">{pet.breed}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-warm-400">{pet.age} / {pet.gender}</span>
                    <span className="text-brand-600 text-sm font-medium">
                      查看详情 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPets.length === 0 && (
            <div className="text-center py-20">
              <p className="text-warm-400 text-lg">暂无该分类的宠物</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-brand-gradient rounded-3xl p-12 shadow-warm-lg">
          <h2 className="text-2xl font-bold text-white mb-4">
            没有找到心仪的宠物？
          </h2>
          <p className="text-brand-100 mb-8">
            联系我们，告诉我们您的需求，我们帮您寻找
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-700 rounded-2xl font-bold text-lg hover:bg-brand-50 transition-colors"
          >
            联系我们
          </Link>
        </div>
      </section>
    </div>
  );
}
