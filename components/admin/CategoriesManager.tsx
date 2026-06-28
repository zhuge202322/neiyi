"use client";

import { useState } from "react";
import { Plus, Save, Trash2 } from "lucide-react";
import type { CmsCoreProduct, CmsData, CmsProductFamily } from "@/lib/cms-types";
import { ImageField } from "@/components/admin/ImageField";

type CategoriesManagerProps = {
  initial: Pick<CmsData, "coreProducts" | "productFamilies">;
};

const iconOptions = [
  { value: "shirt", label: "服装" },
  { value: "sparkles", label: "亮点" },
  { value: "gem", label: "精品" },
  { value: "ruler", label: "尺码/塑形" },
  { value: "thermometer", label: "保暖" },
  { value: "scissors", label: "剪裁" },
];

function uid(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function CategoriesManager({ initial }: CategoriesManagerProps) {
  const [coreProducts, setCoreProducts] = useState(initial.coreProducts);
  const [families, setFamilies] = useState(initial.productFamilies);
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);

  function updateCore(id: string, patch: Partial<CmsCoreProduct>) {
    setCoreProducts((current) => current.map((item) => (item.id === id ? { ...item, ...patch } : item)));
    setSaved(false);
  }

  function updateFamily(id: string, patch: Partial<CmsProductFamily>) {
    setFamilies((current) => current.map((item) => (item.id === id ? { ...item, ...patch } : item)));
    setSaved(false);
  }

  function addCore() {
    setCoreProducts((current) => [
      ...current,
      {
        id: uid("core"),
        title: "新分类",
        description: "",
        image: "/assets/requested-products/seamless-bra.jpg",
        iconKey: "shirt",
        visible: true,
        sortOrder: current.length,
      },
    ]);
    setSaved(false);
  }

  function addFamily() {
    setFamilies((current) => [
      ...current,
      {
        id: uid("family"),
        title: "新产品系列",
        description: "",
        sortOrder: current.length,
        products: [],
      },
    ]);
    setSaved(false);
  }

  function removeFamily(id: string) {
    const family = families.find((item) => item.id === id);
    if (family?.products.length) {
      const confirmed = window.confirm(`该系列下有 ${family.products.length} 个产品。删除系列会同时移除这些产品，确定继续吗？`);
      if (!confirmed) return;
    }

    setFamilies((current) => current.filter((item) => item.id !== id));
    setSaved(false);
  }

  async function save() {
    setBusy(true);
    setSaved(false);

    try {
      const response = await fetch("/api/admin/categories", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ coreProducts, productFamilies: families }),
      });

      if (!response.ok) {
        alert("保存失败");
        return;
      }

      const body = await response.json();
      setCoreProducts(body.coreProducts);
      setFamilies(body.productFamilies);
      setSaved(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="admin-form">
      <div className="admin-panel">
        <div className="admin-panel-heading">
          <div>
            <span>分类管理</span>
            <h2>单独维护首页核心分类和产品页的产品系列。具体产品内容请在“产品管理”里编辑。</h2>
          </div>
          <button type="button" onClick={save} disabled={busy}>
            <Save size={18} />
            {busy ? "保存中..." : "保存分类"}
          </button>
        </div>
        {saved ? <div className="admin-success">已保存，刷新前台页面即可查看最新分类。</div> : null}
      </div>

      <section className="admin-panel">
        <div className="admin-section-title">
          <div>
            <span>首页核心分类</span>
            <h3>这些卡片显示在首页 Core Categories 区域和产品页核心分类区域。</h3>
          </div>
          <button type="button" onClick={addCore}>
            <Plus size={16} />
            添加首页分类
          </button>
        </div>

        <div className="admin-stack">
          {coreProducts.map((item, index) => (
            <article className="admin-card" key={item.id}>
              <div className="admin-card-heading">
                <strong>{item.title}</strong>
                <button
                  type="button"
                  className="danger"
                  onClick={() => {
                    setCoreProducts((current) => current.filter((product) => product.id !== item.id));
                    setSaved(false);
                  }}
                >
                  <Trash2 size={16} />
                  删除
                </button>
              </div>

              <div className="admin-grid two">
                <label>
                  <span>分类名称</span>
                  <input value={item.title} onChange={(event) => updateCore(item.id, { title: event.target.value })} />
                </label>
                <label>
                  <span>图标</span>
                  <select value={item.iconKey} onChange={(event) => updateCore(item.id, { iconKey: event.target.value })}>
                    {iconOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>排序</span>
                  <input
                    type="number"
                    value={item.sortOrder}
                    onChange={(event) => updateCore(item.id, { sortOrder: Number(event.target.value) || index })}
                  />
                </label>
                <label className="checkbox-line">
                  <input
                    type="checkbox"
                    checked={item.visible}
                    onChange={(event) => updateCore(item.id, { visible: event.target.checked })}
                  />
                  <span>在网站显示</span>
                </label>
                <label className="wide">
                  <span>分类描述</span>
                  <textarea
                    value={item.description}
                    rows={3}
                    onChange={(event) => updateCore(item.id, { description: event.target.value })}
                  />
                </label>
                <div className="wide">
                  <ImageField
                    label="分类图片"
                    value={item.image}
                    onChange={(value) => updateCore(item.id, { image: value })}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="admin-panel">
        <div className="admin-section-title">
          <div>
            <span>产品系列</span>
            <h3>产品系列显示在产品页，并作为产品管理里的分类选择。</h3>
          </div>
          <button type="button" onClick={addFamily}>
            <Plus size={16} />
            添加产品系列
          </button>
        </div>

        <div className="admin-stack">
          {families.map((family, familyIndex) => (
            <article className="admin-card admin-family-card" key={family.id}>
              <div className="admin-card-heading">
                <strong>{family.title}</strong>
                <button type="button" className="danger" onClick={() => removeFamily(family.id)}>
                  <Trash2 size={16} />
                  删除系列
                </button>
              </div>

              <div className="admin-grid two">
                <label>
                  <span>系列名称</span>
                  <input value={family.title} onChange={(event) => updateFamily(family.id, { title: event.target.value })} />
                </label>
                <label>
                  <span>排序</span>
                  <input
                    type="number"
                    value={family.sortOrder}
                    onChange={(event) => updateFamily(family.id, { sortOrder: Number(event.target.value) || familyIndex })}
                  />
                </label>
                <label className="wide">
                  <span>系列描述</span>
                  <textarea
                    value={family.description}
                    rows={2}
                    onChange={(event) => updateFamily(family.id, { description: event.target.value })}
                  />
                </label>
                <div className="admin-muted-line wide">当前系列下有 {family.products.length} 个产品。</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
