import Link from "next/link";
import { pets, categories, services, companyInfo } from "@/lib/data";
import { getArticles } from "@/lib/payload";

export const revalidate = 3600;

export default async function HomePage() {
  const { articles } = await getArticles(1, 3);
  const featuredPets = pets.slice(0, 6);

  return (
    <div className="bg-brand-50">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=1920&q=80"
            alt="可爱宠物合照"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900/70 via-brand-900/50 to-brand-900/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-400/30 backdrop-blur-sm rounded-full text-brand-100 text-sm font-medium mb-6 animate-fade-in">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5.5" cy="11" r="2.5" />
              <circle cx="9.5" cy="6" r="2.5" />
              <circle cx="14.5" cy="6" r="2.5" />
              <circle cx="18.5" cy="11" r="2.5" />
              <path d="M12 12c-3 0-5.5 2.5-5.5 5.5 0 2 1.5 3 3 3 1 0 1.5-.5 2.5-.5s1.5.5 2.5.5c1.5 0 3-1 3-3 0-3-2.5-5.5-5.5-5.5z" />
            </svg>
            烟台专业宠物交易平台
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            凯轩宠物
          </h1>
          <p className="text-xl md:text-2xl text-brand-100 mb-10 animate-slide-up">
            给爱宠一个温暖的家
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              href="/pets"
              className="btn-primary bg-brand-600 hover:bg-brand-500 text-lg px-8 py-4"
            >
              浏览宠物
            </Link>
            <Link
              href="/contact"
              className="btn-outline text-white border-white hover:bg-white hover:text-brand-700 text-lg px-8 py-4"
            >
              联系我们
            </Link>
          </div>
        </div>

        {/* Wave Decoration */}
        <svg
          className="absolute bottom-0 left-0 w-full z-10"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            fill="#fffbeb"
            d="M0,40 C320,80 640,0 960,30 C1280,60 1440,40 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              宠物品类
            </h2>
            <p className="text-warm-500 text-lg">多种宠物，总有一款适合你</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href="/pets"
                className="flex flex-col items-center group card-hover"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-brand-200 shadow-warm group-hover:border-brand-400 transition-colors">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="mt-3 text-lg font-semibold text-brand-800 group-hover:text-brand-600 transition-colors">
                  {cat.name}
                </div>
                <div className="text-xs text-warm-500 text-center mt-1">
                  {cat.description}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              精选宠物
            </h2>
            <p className="text-warm-500 text-lg">精心挑选，品质保障</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPets.map((pet) => (
              <Link
                key={pet.slug}
                href={`/pets/${pet.slug}`}
                className="bg-white rounded-3xl overflow-hidden shadow-warm card-hover"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-brand-700 text-white text-sm rounded-full">
                    {pet.species}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-brand-900">{pet.name}</h3>
                    <span className="text-brand-600 font-semibold">{pet.price}</span>
                  </div>
                  <p className="text-warm-500 text-sm mb-3">{pet.breed}</p>
                  <div className="flex flex-wrap gap-2">
                    {pet.personality.map((trait) => (
                      <span
                        key={trait}
                        className="px-2 py-1 bg-brand-100 text-brand-700 text-xs rounded-lg"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/pets" className="btn-primary text-lg px-8 py-4">
              查看全部宠物
            </Link>
          </div>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 paw-pattern">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
            关于凯轩宠物
          </h2>
          <p className="text-lg text-warm-600 leading-relaxed mb-8">
            凯轩宠物交易（tandou518.cn）成立于烟台，是一家专业的宠物交易平台。我们秉承"给爱宠一个温暖的家"的理念，致力于为客户提供健康、纯正、优质的宠物。业务涵盖猫咪、狗狗、兔子、仓鼠、鸟类、水族等多种宠物的交易服务，每一只宠物都经过严格的健康检查和品种鉴定，确保您带回家的每一位小伙伴都健康快乐。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">6+</div>
              <div className="text-warm-500 mt-2">宠物品类</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">100+</div>
              <div className="text-warm-500 mt-2">优质宠物</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">100%</div>
              <div className="text-warm-500 mt-2">健康保障</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">24h</div>
              <div className="text-warm-500 mt-2">售后跟踪</div>
            </div>
          </div>
          <div className="mt-10">
            <Link href="/about" className="btn-outline">
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              服务承诺
            </h2>
            <p className="text-warm-500 text-lg">用心服务，让每一只宠物都值得信赖</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 text-center shadow-warm card-hover"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-100 rounded-2xl flex items-center justify-center">
                  {service.icon === "health" && (
                    <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {service.icon === "pure" && (
                    <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  )}
                  {service.icon === "track" && (
                    <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                  {service.icon === "guide" && (
                    <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-2">{service.title}</h3>
                <p className="text-sm text-warm-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              新闻动态
            </h2>
            <p className="text-warm-500 text-lg">了解最新宠物资讯</p>
          </div>
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="bg-white rounded-3xl overflow-hidden shadow-warm card-hover"
                >
                  {article.coverImage && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-xs text-warm-400 mb-2">
                      {new Date(article.publishedAt).toLocaleDateString("zh-CN")}
                    </div>
                    <h3 className="text-lg font-bold text-brand-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-warm-500 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-warm-400">
              <p className="text-lg">暂无文章</p>
            </div>
          )}
          <div className="text-center mt-10">
            <Link href="/news" className="btn-outline">
              查看全部新闻
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-brand-gradient rounded-3xl p-12 text-center shadow-warm-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <svg className="w-64 h-64" viewBox="0 0 24 24" fill="white">
                <circle cx="5.5" cy="11" r="2.5" />
                <circle cx="9.5" cy="6" r="2.5" />
                <circle cx="14.5" cy="6" r="2.5" />
                <circle cx="18.5" cy="11" r="2.5" />
                <path d="M12 12c-3 0-5.5 2.5-5.5 5.5 0 2 1.5 3 3 3 1 0 1.5-.5 2.5-.5s1.5.5 2.5.5c1.5 0 3-1 3-3 0-3-2.5-5.5-5.5-5.5z" />
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                想要了解更多宠物信息？
              </h2>
              <p className="text-brand-100 text-lg mb-8">
                欢迎联系我们，专业团队为您提供贴心服务
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-700 rounded-2xl font-bold text-lg hover:bg-brand-50 transition-colors"
                >
                  联系我们
                </Link>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
