import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pets, getPetBySlug, getAllPetSlugs, companyInfo } from "@/lib/data";

export async function generateStaticParams() {
  return getAllPetSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pet = getPetBySlug(slug);
  if (!pet) {
    return { title: "宠物未找到" };
  }
  return {
    title: `${pet.name} - ${pet.breed}`,
    description: `${pet.name}是一只${pet.breed}，${pet.description.substring(0, 100)}`,
    alternates: { canonical: `https://${companyInfo.domain}/pets/${pet.slug}/` },
    openGraph: {
      title: `${pet.name} - ${pet.breed} | ${companyInfo.name}`,
      description: pet.description,
      images: [{ url: pet.image }],
    },
  };
}

export default async function PetDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pet = getPetBySlug(slug);

  if (!pet) {
    notFound();
  }

  const relatedPets = pets
    .filter((p) => p.species === pet.species && p.slug !== pet.slug)
    .slice(0, 3);

  return (
    <div className="bg-brand-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-warm-500">
          <Link href="/" className="hover:text-brand-600">首页</Link>
          <span>/</span>
          <Link href="/pets" className="hover:text-brand-600">宠物展示</Link>
          <span>/</span>
          <span className="text-brand-700">{pet.name}</span>
        </nav>
      </div>

      {/* Pet Detail */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-warm-lg">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute top-6 left-6 px-4 py-2 bg-brand-700 text-white rounded-full text-sm font-medium">
                {pet.species}
              </div>
            </div>

            {/* Info */}
            <div>
              <h1 className="text-4xl font-bold text-brand-900 mb-3">{pet.name}</h1>
              <p className="text-xl text-warm-500 mb-6">{pet.breed}</p>

              <div className="bg-brand-100 rounded-2xl p-6 mb-6">
                <div className="text-sm text-warm-500 mb-1">价格</div>
                <div className="text-2xl font-bold text-brand-600">{pet.price}</div>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-2xl p-4 text-center shadow-warm">
                  <div className="text-xs text-warm-400 mb-1">年龄</div>
                  <div className="text-lg font-semibold text-brand-800">{pet.age}</div>
                </div>
                <div className="bg-white rounded-2xl p-4 text-center shadow-warm">
                  <div className="text-xs text-warm-400 mb-1">性别</div>
                  <div className="text-lg font-semibold text-brand-800">{pet.gender}</div>
                </div>
                <div className="bg-white rounded-2xl p-4 text-center shadow-warm">
                  <div className="text-xs text-warm-400 mb-1">疫苗</div>
                  <div className="text-sm font-semibold text-brand-800 mt-1">{pet.vaccinated}</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-brand-900 mb-3">宠物介绍</h2>
                <p className="text-warm-600 leading-relaxed">{pet.description}</p>
              </div>

              {/* Personality */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-brand-900 mb-3">性格特点</h2>
                <div className="flex flex-wrap gap-3">
                  {pet.personality.map((trait) => (
                    <span
                      key={trait}
                      className="px-4 py-2 bg-brand-100 text-brand-700 rounded-xl font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-primary text-lg px-8 py-4 flex-1"
                >
                  联系我们
                </Link>
                <Link
                  href="/pets"
                  className="btn-outline text-lg px-8 py-4 flex-1"
                >
                  返回列表
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pets */}
      {relatedPets.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-gradient">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-8 text-center">
              相关推荐
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {relatedPets.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/pets/${rp.slug}`}
                  className="bg-white rounded-3xl overflow-hidden shadow-warm card-hover"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={rp.image}
                      alt={rp.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-brand-900">{rp.name}</h3>
                      <span className="text-brand-600 font-semibold text-sm">{rp.price}</span>
                    </div>
                    <p className="text-warm-500 text-sm">{rp.breed}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
