import "server-only";

import fs from "node:fs/promises";
import path from "node:path";
import { unstable_noStore as noStore } from "next/cache";
import { company, productFamilies, products } from "@/lib/site-data";
import type { CmsCoreProduct, CmsData, CmsProduct, CmsProductFamily } from "@/lib/cms-types";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "cms.json");

const defaultIconKeys = ["shirt", "sparkles", "gem", "ruler", "thermometer", "scissors"];

function slugLike(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stringList(value: unknown, fallback: string[] = []) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }
  if (typeof value === "string") {
    return value
      .split(/\r?\n|,/)
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return fallback;
}

function normalizeProduct(product: Partial<CmsProduct>, index: number): CmsProduct {
  const name = String(product.name || "New Product").trim();
  const slug = String(product.slug || slugLike(name) || `product-${index + 1}`).trim();
  const images = stringList(product.images, product.image ? [String(product.image)] : []);
  const image = images[0] || String(product.image || "/assets/requested-products/seamless-bra.jpg");

  return {
    id: String(product.id || slug || `product-${index + 1}`),
    name,
    slug,
    image,
    images: images.length ? images : [image],
    summary: String(product.summary || ""),
    highlights: stringList(product.highlights, []),
    featured: Boolean(product.featured),
    sortOrder: Number.isFinite(Number(product.sortOrder)) ? Number(product.sortOrder) : index,
  };
}

function normalizeFamily(family: Partial<CmsProductFamily>, index: number): CmsProductFamily {
  const title = String(family.title || "Product Family").trim();

  return {
    id: String(family.id || slugLike(title) || `family-${index + 1}`),
    title,
    description: String(family.description || ""),
    sortOrder: Number.isFinite(Number(family.sortOrder)) ? Number(family.sortOrder) : index,
    products: Array.isArray(family.products)
      ? family.products.map((product, productIndex) => normalizeProduct(product, productIndex))
      : [],
  };
}

function normalizeCoreProduct(product: Partial<CmsCoreProduct>, index: number): CmsCoreProduct {
  const title = String(product.title || "Core Category").trim();

  return {
    id: String(product.id || slugLike(title) || `core-${index + 1}`),
    title,
    description: String(product.description || ""),
    image: String(product.image || "/assets/requested-products/seamless-bra.jpg"),
    iconKey: String(product.iconKey || defaultIconKeys[index] || "shirt"),
    visible: product.visible !== false,
    sortOrder: Number.isFinite(Number(product.sortOrder)) ? Number(product.sortOrder) : index,
  };
}

export function createDefaultCmsData(): CmsData {
  return {
    contact: {
      name: company.name,
      chineseName: company.chineseName,
      shortName: company.shortName,
      established: company.established,
      address: company.address,
      email: company.email,
      instagram: company.instagram,
      telegram: company.telegram,
      whatsApp: company.whatsApp,
      whatsAppPrimary: company.whatsAppPrimary,
      whatsAppLink: company.whatsAppLink,
      markets: company.markets,
    },
    coreProducts: products.map((product, index) =>
      normalizeCoreProduct(
        {
          id: slugLike(product.title),
          title: product.title,
          description: product.description,
          image: product.image,
          iconKey: defaultIconKeys[index] || "shirt",
          visible: true,
          sortOrder: index,
        },
        index,
      ),
    ),
    productFamilies: productFamilies.map((family, familyIndex) =>
      normalizeFamily(
        {
          id: slugLike(family.title),
          title: family.title,
          description: family.description,
          sortOrder: familyIndex,
          products: family.products.map((product, productIndex) => ({
            id: product.slug,
            name: product.name,
            slug: product.slug,
            image: product.image,
            images: product.images?.length ? product.images : [product.image],
            summary: product.summary,
            highlights: product.highlights,
            featured: productIndex === 0,
            sortOrder: productIndex,
          })),
        },
        familyIndex,
      ),
    ),
    updatedAt: new Date().toISOString(),
  };
}

export function normalizeCmsData(input: Partial<CmsData> | null | undefined): CmsData {
  const fallback = createDefaultCmsData();
  const contact = input?.contact || fallback.contact;

  return {
    contact: {
      name: String(contact.name || fallback.contact.name),
      chineseName: String(contact.chineseName || fallback.contact.chineseName || ""),
      shortName: String(contact.shortName || fallback.contact.shortName),
      established: String(contact.established || fallback.contact.established),
      address: String(contact.address || fallback.contact.address),
      email: String(contact.email || fallback.contact.email),
      instagram: String(contact.instagram || fallback.contact.instagram || ""),
      telegram: String(contact.telegram || fallback.contact.telegram || ""),
      whatsApp: stringList(contact.whatsApp, fallback.contact.whatsApp),
      whatsAppPrimary: String(contact.whatsAppPrimary || stringList(contact.whatsApp, fallback.contact.whatsApp)[0] || ""),
      whatsAppLink: String(contact.whatsAppLink || fallback.contact.whatsAppLink),
      markets: stringList(contact.markets, fallback.contact.markets),
    },
    coreProducts: Array.isArray(input?.coreProducts)
      ? input.coreProducts.map((product, index) => normalizeCoreProduct(product, index))
      : fallback.coreProducts,
    productFamilies: Array.isArray(input?.productFamilies)
      ? input.productFamilies.map((family, index) => normalizeFamily(family, index))
      : fallback.productFamilies,
    updatedAt: String(input?.updatedAt || fallback.updatedAt),
  };
}

export async function getCmsData(): Promise<CmsData> {
  noStore();

  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return normalizeCmsData(JSON.parse(raw));
  } catch {
    return createDefaultCmsData();
  }
}

export async function saveCmsData(data: CmsData) {
  const normalized = normalizeCmsData({ ...data, updatedAt: new Date().toISOString() });
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, `${JSON.stringify(normalized, null, 2)}\n`, "utf8");
  return normalized;
}

export async function updateCmsData(updater: (data: CmsData) => CmsData | Promise<CmsData>) {
  const current = await getCmsData();
  const next = await updater(current);
  return saveCmsData(next);
}
