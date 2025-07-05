"use client";

"use client";

import { useTranslations } from "next-intl";
import { AccordionAbout } from "./AccordionAbout";

export default function PhilosophySection() {
  const t = useTranslations("PhilosophySection");

  return (
    <main className="bg-[#E5BC38]">
      {/* Remplacer ici par un composant React si besoin */}
      {/* <Breadcrumb /> */}

      <div className="bg-[#FFF6DA]">
        <div className="max-w-7xl mx-auto px-4 lg:px-0 py-10 flex flex-col lg:flex-row items-start justify-between space-y-10 lg:space-y-0 lg:space-x-28">
          <div className="space-y-5 flex-1">
            <h3 className="text-xl sm:text-lg quentin">{t("aboutUs")}</h3>
            <h2 className="text-2xl sm:text-3xl font-semibold montserrat">
              {t("ourPhilosophy")}
            </h2>
            <p className="text-sm sm:text-base text-[#121212] poppins leading-10">
              {t("philosophyText")}
            </p>

            <button className="relative w-full md:w-[9rem] h-11 group focus:outline-none cursor-pointer mt-10">
              <span className="absolute inset-0 bg-[#E5BC38] transition-transform duration-300 group-hover:translate-x-[2%] group-hover:translate-y-[5%]"></span>
              <span className="absolute inset-0 border border-black translate-x-[-2%] translate-y-[-14%] md:translate-x-[-4%] md:translate-y-[-12%] z-0"></span>
              <span className="absolute inset-0 flex items-center justify-center z-10 text-black font-medium text-sm">
                {t("callToAction")}
              </span>
            </button>
          </div>

          <div className="flex-1 w-full">
            <h3 className="text-xl font-bold sm:text-2xl text-[#121212] poppins leading-[0.875rem] ">
              FAQ
            </h3>
            <AccordionAbout />
          </div>
        </div>
      </div>
    </main>
  );
}
