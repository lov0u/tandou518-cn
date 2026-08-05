import type { Metadata } from "next";
import { companyInfo } from "@/lib/data";
import PetsClient from "@/components/PetsClient";

export const metadata: Metadata = {
  title: "宠物展示",
  description:
    "浏览凯轩宠物的精选宠物列表，包括猫咪、狗狗、兔子、仓鼠、鸟类、水族等多种宠物，每一只都健康纯正。",
  alternates: { canonical: `https://${companyInfo.domain}/pets/` },
};

export default function PetsPage() {
  return <PetsClient />;
}
