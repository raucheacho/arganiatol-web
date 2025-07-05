"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export function AccordionAbout() {
  const t = useTranslations("AccordionAbout");

  return (
    <Accordion type="multiple" className="w-full" defaultValue={["item-1"]}>
      {/* Informations produit */}
      <AccordionItem value="item-1">
        <AccordionTrigger>{t("productInformation")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>{t("productDescription1")}</p>
          <p>{t("productDescription2")}</p>
        </AccordionContent>
      </AccordionItem>

      {/* Ingrédients */}
      <AccordionItem value="item-ingredients">
        <AccordionTrigger>{t("ingredients")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>{t("ingredientsDescription1")}</p>
          <p>{t("ingredientsDescription2")}</p>
        </AccordionContent>
      </AccordionItem>

      {/* Utilisation */}
      <AccordionItem value="item-usage">
        <AccordionTrigger>{t("usage")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>{t("usageDescription1")}</p>
          <p>{t("usageDescription2")}</p>
          <p>{t("usageDescription3")}</p>
        </AccordionContent>
      </AccordionItem>

      {/* Conservation */}
      <AccordionItem value="item-storage">
        <AccordionTrigger>{t("storage")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>{t("storageDescription1")}</p>
          <p>{t("storageDescription2")}</p>
        </AccordionContent>
      </AccordionItem>

      {/* Certifications */}
      <AccordionItem value="item-certifications">
        <AccordionTrigger>{t("certifications")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-balance">
          <p>{t("certification1")}</p>
          <p>{t("certification2")}</p>
          <p>{t("certification3")}</p>
          <p>{t("certification4")}</p>
          <p>{t("certification5")}</p>
        </AccordionContent>
      </AccordionItem>

      {/* Livraison */}
      <AccordionItem value="item-shipping">
        <AccordionTrigger>{t("shippingDetails")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>{t("shippingDescription1")}</p>
          <p>{t("shippingDescription2")}</p>
        </AccordionContent>
      </AccordionItem>

      {/* Retours */}
      <AccordionItem value="item-returns">
        <AccordionTrigger>{t("returnPolicy")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>{t("returnDescription1")}</p>
          <p>{t("returnDescription2")}</p>
        </AccordionContent>
      </AccordionItem>

      {/* FAQ */}
      <AccordionItem value="item-faq">
        <AccordionTrigger>{t("faq")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <div>
            <p className="font-semibold">{t("faqQuestion1")}</p>
            <p>{t("faqAnswer1")}</p>
          </div>
          <div>
            <p className="font-semibold">{t("faqQuestion2")}</p>
            <p>{t("faqAnswer2")}</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
