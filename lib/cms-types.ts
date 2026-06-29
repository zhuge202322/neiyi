export type CmsContact = {
  name: string;
  chineseName?: string;
  shortName: string;
  established: string;
  address: string;
  email: string;
  instagram?: string;
  telegram?: string;
  whatsApp: string[];
  whatsAppPrimary: string;
  whatsAppLink: string;
  markets: string[];
};

export type CmsCoreProduct = {
  id: string;
  title: string;
  description: string;
  image: string;
  iconKey: string;
  visible: boolean;
  sortOrder: number;
};

export type CmsProduct = {
  id: string;
  name: string;
  slug: string;
  image: string;
  images: string[];
  summary: string;
  highlights: string[];
  featured: boolean;
  sortOrder: number;
};

export type CmsProductFamily = {
  id: string;
  title: string;
  description: string;
  sortOrder: number;
  products: CmsProduct[];
};

export type CmsData = {
  contact: CmsContact;
  coreProducts: CmsCoreProduct[];
  productFamilies: CmsProductFamily[];
  updatedAt: string;
};
