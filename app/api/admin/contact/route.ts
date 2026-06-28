import { NextRequest, NextResponse } from "next/server";
import { hasAdminSession } from "@/lib/admin-auth";
import { getCmsData, updateCmsData } from "@/lib/cms-store";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await hasAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await getCmsData();
  return NextResponse.json(data.contact);
}

export async function PUT(request: NextRequest) {
  if (!(await hasAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const contact = await request.json();
  const data = await updateCmsData((current) => ({
    ...current,
    contact,
  }));

  return NextResponse.json(data.contact);
}
