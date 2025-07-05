"use client";
"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const t = useTranslations("NewsletterForm");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔧 Remplace cette partie par un appel API ou intégration Mailchimp, etc.
    alert(`Email enregistré : ${email}`);
  };

  return (
    <div className="w-full p-10 h-96">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-10 max-w-xl mx-auto"
      >
        <div className="text-center">
          <h3 className="text-xl sm:text-lg quentin">{t("newsletter")}</h3>
          <h2 className="text-2xl sm:text-3xl font-semibold montserrat">
            {t("signUp")}
          </h2>
        </div>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("emailPlaceholder")}
          className="border-b-2 border-black w-full placeholder:text-black h-10 focus:outline-0"
        />

        {/* Bouton */}
        <a
          href="#"
          className="relative w-full md:w-[9rem] h-11 group focus:outline-none cursor-pointer"
        >
          <span className="absolute inset-0 bg-[#FFF6DA] transition-transform duration-300 group-hover:translate-x-[2%] group-hover:translate-y-[5%]"></span>
          <span className="absolute inset-0 border border-black translate-x-[-2%] translate-y-[-14%] md:translate-x-[-4%] md:translate-y-[-12%] z-0"></span>
          <span className="absolute inset-0 flex items-center justify-center z-10 text-black font-medium text-sm">
            {t("readMore")}
          </span>
        </a>
      </form>
    </div>
  );
}
