import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "凯轩宠物交易（tandou518.cn）是烟台专业的宠物交易平台，提供多种宠物的交易服务。了解我们的经营理念、团队介绍和承诺保障。",
  alternates: { canonical: `https://${companyInfo.domain}/about/` },
};

export default function AboutPage() {
  const philosophies = [
    {
      title: "诚信经营",
      description: "我们坚持诚信为本，所有宠物信息真实可靠，价格透明公正，绝不隐瞒任何健康问题。",
    },
    {
      title: "品质优先",
      description: "每一只宠物都经过严格的健康检查和品种鉴定，确保品质纯正，让客户买得放心。",
    },
    {
      title: "爱心守护",
      description: "我们深信每一只宠物都值得被善待，致力于为它们找到最合适的家庭，让爱延续。",
    },
    {
      title: "专业服务",
      description: "拥有专业的宠物知识和服务团队，从选购到饲养全程提供专业指导和售后跟踪。",
    },
  ];

  const team = [
    {
      name: "王凯",
      role: "创始人",
      description: "10年宠物行业经验，热爱各种小动物，立志为每只宠物找到温暖的家。",
      avatar: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "李轩",
      role: "宠物顾问",
      description: "专业宠物美容师，对猫狗品种了如指掌，为客户提供专业的选购建议。",
      avatar: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "张敏",
      role: "健康管理师",
      description: "执业兽医资格，负责宠物健康检查和疫苗管理，确保每只宠物健康无忧。",
      avatar: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "刘洋",
      role: "售后客服",
      description: "耐心细致的客服专员，为每位客户提供全程饲养指导和售后跟踪服务。",
      avatar: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=300&q=80",
    },
  ];

  const guarantees = [
    { title: "健康保障", description: "所有宠物均经过专业兽医健康检查，保证出售时健康无疾病。" },
    { title: "品种纯正", description: "每一只宠物都经过品种鉴定，确保血统纯正有保障。" },
    { title: "售后跟踪", description: "购买后提供持续健康跟踪，随时解答养宠疑问。" },
    { title: "专业指导", description: "提供专业的饲养、训练及日常护理指导服务。" },
  ];

  return (
    <div className="bg-brand-50">
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-warm-gradient overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6">
            关于凯轩宠物
          </h1>
          <p className="text-lg text-warm-600 max-w-3xl mx-auto leading-relaxed">
            凯轩宠物交易（tandou518.cn）成立于烟台，是一家专业的宠物交易平台。我们秉承"给爱宠一个温暖的家"的理念，致力于为客户提供健康、纯正、优质的宠物。
          </p>
        </div>
        <div className="absolute top-10 right-10 opacity-5">
          <svg className="w-48 h-48" viewBox="0 0 24 24" fill="#92400e">
            <circle cx="5.5" cy="11" r="2.5" />
            <circle cx="9.5" cy="6" r="2.5" />
            <circle cx="14.5" cy="6" r="2.5" />
            <circle cx="18.5" cy="11" r="2.5" />
            <path d="M12 12c-3 0-5.5 2.5-5.5 5.5 0 2 1.5 3 3 3 1 0 1.5-.5 2.5-.5s1.5.5 2.5.5c1.5 0 3-1 3-3 0-3-2.5-5.5-5.5-5.5z" />
          </svg>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=800&q=80"
                alt="凯轩宠物店"
                className="rounded-3xl shadow-warm-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-900 mb-6">公司介绍</h2>
              <p className="text-warm-600 leading-relaxed mb-4">
                凯轩宠物交易是一家扎根于烟台的专业宠物交易平台，拥有多年的宠物交易和服务经验。我们专注于为客户提供优质的宠物和完善的售后服务。
              </p>
              <p className="text-warm-600 leading-relaxed mb-4">
                我们的业务涵盖猫咪、狗狗、兔子、仓鼠、鸟类、水族等多种宠物，每一只宠物都经过严格的健康检查和品种鉴定。我们坚信，每一只宠物都应该拥有一个温暖的家。
              </p>
              <p className="text-warm-600 leading-relaxed">
                多年来，我们已经为无数家庭送去了可爱的小伙伴，赢得了客户的广泛信赖和好评。我们将继续秉承初心，为更多爱宠人士提供优质的服务。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">经营理念</h2>
            <p className="text-warm-500 text-lg">用心服务，诚信至上</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophies.map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 shadow-warm card-hover">
                <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-600 rounded-lg" />
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-3">{item.title}</h3>
                <p className="text-sm text-warm-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">团队介绍</h2>
            <p className="text-warm-500 text-lg">专业的团队，贴心的服务</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl overflow-hidden shadow-warm card-hover text-center">
                <div className="h-56 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-900">{member.name}</h3>
                  <p className="text-brand-600 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-warm-500 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">承诺保障</h2>
            <p className="text-warm-500 text-lg">我们对每一位客户和宠物的承诺</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 text-center shadow-warm card-hover">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-2">{item.title}</h3>
                <p className="text-sm text-warm-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand-900 mb-4">
            有任何问题？欢迎联系我们
          </h2>
          <p className="text-warm-500 text-lg mb-8">
            我们的专业团队随时为您提供贴心的服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              联系我们
            </Link>
            <Link href="/pets" className="btn-outline text-lg px-8 py-4">
              浏览宠物
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
