"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ContactRound, FolderOpen, LayoutDashboard, LogOut, Package } from "lucide-react";

const navItems = [
  { href: "/admin", label: "后台首页", icon: LayoutDashboard },
  { href: "/admin/contact", label: "联系方式", icon: ContactRound },
  { href: "/admin/categories", label: "分类管理", icon: FolderOpen },
  { href: "/admin/products", label: "产品管理", icon: Package },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  const title =
    navItems.find((item) => (item.href === "/admin" ? pathname === item.href : pathname.startsWith(item.href)))?.label ||
    "后台首页";

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <strong>Winsun CMS</strong>
          <span>网站后台</span>
        </div>

        <nav>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = item.href === "/admin" ? pathname === item.href : pathname.startsWith(item.href);

            return (
              <Link key={item.href} href={item.href} className={active ? "active" : ""}>
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button type="button" onClick={logout} className="admin-logout">
          <LogOut size={18} />
          退出登录
        </button>
      </aside>

      <div className="admin-main">
        <header>
          <div>
            <span>Hong Kong Winsun Co., Ltd.</span>
            <h1>{title}</h1>
          </div>
          <Link href="/" target="_blank">
            查看网站
          </Link>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
