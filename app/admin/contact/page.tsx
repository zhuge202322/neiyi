import { ContactManager } from "@/components/admin/ContactManager";
import { ProtectedAdminShell } from "@/components/admin/ProtectedAdminShell";
import { getCmsData } from "@/lib/cms-store";

export const dynamic = "force-dynamic";

export default async function AdminContactPage() {
  const data = await getCmsData();

  return (
    <ProtectedAdminShell>
      <ContactManager initial={data.contact} />
    </ProtectedAdminShell>
  );
}
