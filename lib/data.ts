/**
 * 宠物数据 - 凯轩宠物交易
 * tandou518.cn
 */

export interface Pet {
  slug: string;
  name: string;
  species: string;
  breed: string;
  price: string;
  image: string;
  age: string;
  gender: string;
  vaccinated: string;
  description: string;
  personality: string[];
}

export const pets: Pet[] = [
  {
    slug: "ragdoll-yueyue",
    name: "月月",
    species: "猫",
    breed: "布偶猫",
    price: "3500元（可议）",
    image:
      "https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&fit=crop&w=800&q=80",
    age: "6个月",
    gender: "母",
    vaccinated: "已接种三联疫苗",
    description:
      "月月是一只纯正的布偶猫，拥有丝滑柔软的半长毛和湛蓝的双眼。性格温顺粘人，非常喜欢与人互动，是理想的家庭伴侣猫。已做完整驱虫，健康状况优良。",
    personality: ["温顺粘人", "亲人友好", "安静乖巧"],
  },
  {
    slug: "golden-retriever-dahuang",
    name: "大黄",
    species: "狗",
    breed: "金毛寻回犬",
    price: "2800元（可议）",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    age: "8个月",
    gender: "公",
    vaccinated: "已接种八联疫苗",
    description:
      "大黄是一只活泼友善的金毛寻回犬，一身金色被毛闪亮健康。性格开朗热情，喜欢户外运动和与人玩耍，特别适合有小朋友的家庭。已完成基础服从训练。",
    personality: ["活泼友善", "聪明听话", "忠诚护主"],
  },
  {
    slug: "holland-lop-tuantuan",
    name: "团团",
    species: "兔子",
    breed: "荷兰垂耳兔",
    price: "380元（可议）",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
    age: "4个月",
    gender: "母",
    vaccinated: "已做球虫预防",
    description:
      "团团是一只可爱的荷兰垂耳兔，圆圆的脸蛋配上垂下的耳朵萌态十足。性格安静温顺，不吵不闹，非常适合公寓饲养。毛色亮丽，体格健壮。",
    personality: ["安静可爱", "温顺亲人", "爱干净"],
  },
  {
    slug: "hamster-xiaohua",
    name: "小花",
    species: "仓鼠",
    breed: "三线仓鼠",
    price: "60元",
    image:
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80",
    age: "3个月",
    gender: "母",
    vaccinated: "已做健康检查",
    description:
      "小花是一只活泼好动的三线仓鼠，背上的三条纹路清晰漂亮。体型娇小可爱，饲养简单，是小朋友和上班族的首选小宠物。已做完整健康检查。",
    personality: ["活泼好动", "好奇心强", "独立可爱"],
  },
  {
    slug: "budgerigar-lvlv",
    name: "绿绿",
    species: "鸟类",
    breed: "虎皮鹦鹉",
    price: "120元（可议）",
    image:
      "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&w=800&q=80",
    age: "5个月",
    gender: "公",
    vaccinated: "已做健康检查",
    description:
      "绿绿是一只羽毛鲜亮的虎皮鹦鹉，翠绿色的羽毛配上黄色面部非常漂亮。聪明伶俐，正在学习模仿简单词语，是爱鸟人士的不二之选。",
    personality: ["聪明学舌", "活泼好动", "亲近主人"],
  },
  {
    slug: "corgi-duantui",
    name: "短腿",
    species: "狗",
    breed: "柯基犬",
    price: "3200元（可议）",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
    age: "7个月",
    gender: "公",
    vaccinated: "已接种八联疫苗",
    description:
      "短腿是一只勇敢忠诚的柯基犬，小短腿配上大耳朵萌翻众人。虽然腿短但精力充沛，喜欢奔跑和玩耍。性格勇敢且对主人忠诚，是出色的伴侣犬。",
    personality: ["勇敢忠诚", "精力充沛", "聪明机灵"],
  },
  {
    slug: "british-shorthair-pangpang",
    name: "胖胖",
    species: "猫",
    breed: "英国短毛猫",
    price: "3000元（可议）",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
    age: "9个月",
    gender: "公",
    vaccinated: "已接种三联疫苗",
    description:
      "胖胖是一只圆脸大眼的英国短毛猫，蓝灰色短毛浓密柔软。性格安静温和，不挑食好养活，非常适合上班族和家庭饲养。体格健壮，毛色纯正。",
    personality: ["安静温和", "独立从容", "亲人可爱"],
  },
  {
    slug: "koi-hongyun",
    name: "红运",
    species: "水族",
    breed: "锦鲤",
    price: "500元起（可议）",
    image:
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    age: "1岁",
    gender: "不限",
    vaccinated: "已做水质检测",
    description:
      "红运是一条色彩艳丽的锦鲤，红白相间的花纹寓意吉祥如意。体型匀称，游姿优美，是庭院鱼池和水族箱的观赏佳品。饲养简单，生命力强。",
    personality: ["观赏佳品", "寓意吉祥", "适应力强"],
  },
];

/**
 * 宠物品类
 */
export const categories = [
  {
    name: "猫咪",
    icon: "猫",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=400&q=80",
    description: "布偶、英短、美短等多种品种",
  },
  {
    name: "狗狗",
    icon: "狗",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80",
    description: "金毛、柯基、泰迪等热门犬种",
  },
  {
    name: "兔子",
    icon: "兔",
    image:
      "https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&w=400&q=80",
    description: "荷兰垂耳兔、安哥拉兔等",
  },
  {
    name: "仓鼠",
    icon: "鼠",
    image:
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=400&q=80",
    description: "三线仓鼠、金丝熊等小型宠物",
  },
  {
    name: "鸟类",
    icon: "鸟",
    image:
      "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&w=400&q=80",
    description: "虎皮鹦鹉、玄凤鹦鹉等",
  },
  {
    name: "水族",
    icon: "鱼",
    image:
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=400&q=80",
    description: "锦鲤、热带鱼等观赏鱼类",
  },
];

/**
 * 服务承诺
 */
export const services = [
  {
    title: "健康保障",
    description: "所有宠物均经过专业健康检查，保证出售时健康无疾病。",
    icon: "health",
  },
  {
    title: "品种纯正",
    description: "每一只宠物都经过品种鉴定，确保血统纯正有保障。",
    icon: "pure",
  },
  {
    title: "售后跟踪",
    description: "购买后提供持续健康跟踪，随时解答养宠疑问。",
    icon: "track",
  },
  {
    title: "专业指导",
    description: "提供专业的饲养、训练及日常护理指导服务。",
    icon: "guide",
  },
];

/**
 * 公司信息
 */
export const companyInfo = {
  name: "凯轩宠物交易",
  domain: "tandou518.cn",
  email: "lov0u@foxmail.com",
  address: "烟台",
  icp: "鲁ICP备2024071942号",
  description:
    "凯轩宠物交易（tandou518.cn）是烟台专业的宠物交易平台，提供猫咪、狗狗、兔子、仓鼠、鸟类、水族等多种宠物的交易服务。健康保障，品种纯正，售后跟踪，专业指导，给爱宠一个温暖的家。",
  keywords:
    "宠物交易,烟台宠物,凯轩宠物,猫咪,狗狗,兔子,仓鼠,鸟类,水族,宠物店,宠物买卖,tandou518",
};

/**
 * 根据 slug 获取单只宠物
 */
export function getPetBySlug(slug: string): Pet | undefined {
  return pets.find((p) => p.slug === slug);
}

/**
 * 获取所有宠物 slug（用于 generateStaticParams）
 */
export function getAllPetSlugs(): string[] {
  return pets.map((p) => p.slug);
}
