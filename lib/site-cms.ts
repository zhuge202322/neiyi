import {
  Gem,
  Ruler,
  Scissors,
  Shirt,
  Sparkles,
  ThermometerSun,
  type LucideIcon,
} from "lucide-react";
import { getCmsData } from "@/lib/cms-store";
import type { CmsCoreProduct, CmsProduct, CmsProductFamily } from "@/lib/cms-types";
import { company as fallbackCompany } from "@/lib/site-data";

const iconMap: Record<string, LucideIcon> = {
  gem: Gem,
  ruler: Ruler,
  scissors: Scissors,
  shirt: Shirt,
  sparkles: Sparkles,
  thermometer: ThermometerSun,
};

function whatsappLink(phone: string) {
  const digits = phone.replace(/[^\d]/g, "");
  return digits ? `https://wa.me/${digits}` : fallbackCompany.whatsAppLink;
}

export async function getSiteCompany() {
  const data = await getCmsData();
  const primary = data.contact.whatsAppPrimary || data.contact.whatsApp[0] || fallbackCompany.whatsAppPrimary;

  return {
    ...fallbackCompany,
    ...data.contact,
    whatsApp: data.contact.whatsApp.length ? data.contact.whatsApp : fallbackCompany.whatsApp,
    whatsAppPrimary: primary,
    whatsAppLink: data.contact.whatsAppLink || whatsappLink(primary),
  };
}

export async function getSiteCoreProducts() {
  const data = await getCmsData();

  return data.coreProducts
    .filter((product) => product.visible)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((product) => ({
      ...product,
      icon: iconMap[product.iconKey] || Shirt,
    }));
}

export async function getSiteProductFamilies(): Promise<CmsProductFamily[]> {
  const data = await getCmsData();

  return data.productFamilies
    .slice()
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((family) => ({
      ...family,
      products: family.products.slice().sort((a, b) => a.sortOrder - b.sortOrder),
    }));
}

export async function getSiteProductDetails() {
  const families = await getSiteProductFamilies();

  return families.flatMap((family) =>
    family.products.map((product) => ({
      ...product,
      family: family.title,
      familyDescription: family.description,
    })),
  );
}

export type SiteCoreProduct = CmsCoreProduct & { icon: LucideIcon };
export type SiteProductDetail = CmsProduct & {
  family: string;
  familyDescription: string;
};
