import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { getAdminCredentialsHint, hasAdminSession } from "@/lib/admin-auth";

export const metadata = {
  title: "后台登录 | Winsun CMS",
};

export default async function AdminLoginPage() {
  if (await hasAdminSession()) {
    redirect("/admin");
  }

  const hint = await getAdminCredentialsHint();

  return (
    <div className="admin-login-page">
      <AdminLoginForm usernameHint={hint.username} passwordHint={hint.password} />
    </div>
  );
}
