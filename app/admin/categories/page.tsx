import { CategoriesManager } from "@/components/admin/CategoriesManager";
import { ProtectedAdminShell } from "@/components/admin/ProtectedAdminShell";
import { getCmsData } from "@/lib/cms-store";

export const dynamic = "force-dynamic";

export default async function AdminCategoriesPage() {
  const data = await getCmsData();

  return (
    <ProtectedAdminShell>
      <CategoriesManager
        initial={{
          coreProducts: data.coreProducts,
          productFamilies: data.productFamilies,
        }}
      />
    </ProtectedAdminShell>
  );
}
