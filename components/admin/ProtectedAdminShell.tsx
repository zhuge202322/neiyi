import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { hasAdminSession } from "@/lib/admin-auth";

export async function ProtectedAdminShell({ children }: { children: React.ReactNode }) {
  if (!(await hasAdminSession())) {
    redirect("/admin/login");
  }

  return <AdminShell>{children}</AdminShell>;
}
