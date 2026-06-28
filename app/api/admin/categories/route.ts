import { NextRequest, NextResponse } from "next/server";
import { hasAdminSession } from "@/lib/admin-auth";
import { getCmsData, updateCmsData } from "@/lib/cms-store";
import type { CmsProductFamily } from "@/lib/cms-types";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await hasAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await getCmsData();
  return NextResponse.json({
    coreProducts: data.coreProducts,
    productFamilies: data.productFamilies,
  });
}

export async function PUT(request: NextRequest) {
  if (!(await hasAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const data = await updateCmsData((current) => {
    const incomingFamilies = Array.isArray(body.productFamilies) ? body.productFamilies : current.productFamilies;
    const productFamilies = incomingFamilies.map((family: Partial<CmsProductFamily>) => {
      const existing = current.productFamilies.find((item) => item.id === family.id);

      return {
        ...family,
        products: Array.isArray(family.products) ? family.products : existing?.products || [],
      };
    });

    return {
      ...current,
      coreProducts: Array.isArray(body.coreProducts) ? body.coreProducts : current.coreProducts,
      productFamilies,
    };
  });

  return NextResponse.json({
    coreProducts: data.coreProducts,
    productFamilies: data.productFamilies,
  });
}
