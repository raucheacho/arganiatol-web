"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

type GuaranteeItem = {
  title: string;
  description: string;
  icon: string; // chemin vers l'image SVG
};

export default function GuaranteeSection() {
  const t = useTranslations("GuaranteeSection");

  const items: GuaranteeItem[] = [
    {
      title: t("item1.title"),
      description: t("item1.description"),
      icon: "/assets/svgs/organic.svg",
    },
    {
      title: t("item2.title"),
      description: t("item2.description"),
      icon: "/assets/svgs/free.svg",
    },
    {
      title: t("item3.title"),
      description: t("item3.description"),
      icon: "/assets/svgs/guaranty.svg",
    },
  ];

  return (
    <section className="bg-[#FFF6DA] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="w-24 h-24 flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-black">{item.title}</h3>
            <p className="text-sm text-black max-w-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
