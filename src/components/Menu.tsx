"use client";

import { menuItems } from "@/constants/menu";
import { Link } from "@/i18n/navigation";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Menu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const t = useTranslations("Menu");
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex">
      <button
        className="absolute top-6 right-6 bg-black rounded-full p-2 z-50 group"
        onClick={() => setIsOpen(false)}
        aria-label="Fermer le menu"
      >
        <X className="w-10 h-10 text-[#E5BC38] group-hover:rotate-90 transition-all duration-300 transform" />
      </button>
      {/* Vidéo de fond */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full aspect-video object-cover w-full"
        >
          <source
            src="https://res.cloudinary.com/dvoryr7ba/video/upload/v1751368192/header_loop_nzgtdu.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dégradé pour lisibilité du texte */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Menu overlay */}
      <div className="relative w-1/3 h-full bg-[#000]/10 flex flex-col justify-center items-start px-10 space-y-6 text-[#E5BC38] font-semibold text-3xl lg:text-5xl z-50">
        {/* Bouton de fermeture */}

        {/* Liens de navigation */}
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="relative group poppins"
          >
            <span className="capitalize text-nowrap">{t(item.label)}</span>
            <span className="absolute left-0 -bottom-2 w-0 h-1 bg-[#E5BC38] transition-all group-hover:w-full duration-300" />
          </Link>
        ))}
        <div className="mt-10 w-full absolute top-0 poppins">
          <Link
            className="flex items-center [&_svg:not([class*='size-'])]:size-10 lg:[&_svg:not([class*='size-'])]:size-14 space-x-2"
            href={"/login"}
          >
            <span className="">{t("login")}</span>
          </Link>
        </div>
      </div>
      <div className="absolute inset-0  bg-linear-to-r from-[#000] to-90%"></div>
      <div className="absolute inset-0  bg-linear-to-r from-[#000] to-90%"></div>
    </div>
  );
}
