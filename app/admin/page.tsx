import Link from "next/link";
import { ContactRound, FolderOpen, Package, Settings } from "lucide-react";
import { ProtectedAdminShell } from "@/components/admin/ProtectedAdminShell";
import { getCmsData } from "@/lib/cms-store";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const data = await getCmsData();
  const productCount = data.productFamilies.reduce((total, family) => total + family.products.length, 0);
  const familyCount = data.productFamilies.length;

  const cards = [
    {
      label: "联系方式",
      value: data.contact.email,
      href: "/admin/contact",
      text: "维护公司地址、邮箱、WhatsApp 和主要出口市场。",
      icon: ContactRound,
    },
    {
      label: "分类管理",
      value: `${familyCount} 个产品系列`,
      href: "/admin/categories",
      text: "单独维护首页核心分类和产品页系列，不在产品管理里混合编辑。",
      icon: FolderOpen,
    },
    {
      label: "产品管理",
      value: `${productCount} 个产品`,
      href: "/admin/products",
      text: "维护产品详情页、多张图片、卖点、排序、推荐状态和所属系列。",
      icon: Package,
    },
    {
      label: "前台数据",
      value: "data/cms.json",
      href: "/",
      text: "前台会优先读取后台保存的数据，并保留默认内容兜底。",
      icon: Settings,
    },
  ];

  return (
    <ProtectedAdminShell>
      <div className="admin-dashboard">
        <div className="admin-page-title">
          <span>后台首页</span>
          <h2>集中管理 Winsun 网站内容。</h2>
          <p>分类和产品已经拆分成两个独立模块，后台结构更清楚，后续添加产品也更方便。</p>
        </div>

        <div className="admin-dashboard-grid">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.label} href={card.href} className="admin-dashboard-card">
                <Icon size={24} />
                <span>{card.label}</span>
                <strong>{card.value}</strong>
                <p>{card.text}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </ProtectedAdminShell>
  );
}
