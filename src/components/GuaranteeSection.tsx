import Image from "next/image";

type GuaranteeItem = {
  title: string;
  description: string;
  icon: string; // chemin vers l'image SVG
};

const items: GuaranteeItem[] = [
  {
    title: "Completely Cruelty-Free",
    description:
      "All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients",
    icon: "/assets/svgs/organic.svg",
  },
  {
    title: "Completely Cruelty-Free",
    description:
      "All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients",
    icon: "/assets/svgs/free.svg",
  },
  {
    title: "Ingredient Sourcing",
    description:
      "All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients",
    icon: "/assets/svgs/guaranty.svg",
  },
];

export default function GuaranteeSection() {
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
