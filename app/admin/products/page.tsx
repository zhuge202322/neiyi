import { ProductsManager } from "@/components/admin/ProductsManager";
import { ProtectedAdminShell } from "@/components/admin/ProtectedAdminShell";
import { getCmsData } from "@/lib/cms-store";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const data = await getCmsData();

  return (
    <ProtectedAdminShell>
      <ProductsManager
        initial={{
          productFamilies: data.productFamilies,
        }}
      />
    </ProtectedAdminShell>
  );
}
