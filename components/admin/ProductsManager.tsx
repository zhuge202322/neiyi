"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Save, Search, Trash2 } from "lucide-react";
import type { CmsData, CmsProduct } from "@/lib/cms-types";
import { MultiImageField } from "@/components/admin/MultiImageField";

type ProductsManagerProps = {
  initial: Pick<CmsData, "productFamilies">;
};

type ProductRow = {
  familyId: string;
  familyTitle: string;
  familySortOrder: number;
  product: CmsProduct;
};

const pageSizeOptions = [4, 6, 8, 12];

function uid(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function emptyProduct(familyIndex: number, productIndex: number): CmsProduct {
  return {
    id: uid("product"),
    name: "新产品",
    slug: `new-product-${familyIndex + 1}-${productIndex + 1}`,
    image: "/assets/requested-products/seamless-bra.jpg",
    images: ["/assets/requested-products/seamless-bra.jpg"],
    summary: "",
    highlights: ["支持 OEM / ODM", "支持贴牌定制", "可定制颜色和包装"],
    featured: false,
    sortOrder: productIndex,
  };
}

export function ProductsManager({ initial }: ProductsManagerProps) {
  const [families, setFamilies] = useState(initial.productFamilies);
  const [familyFilter, setFamilyFilter] = useState("all");
  const [addFamilyId, setAddFamilyId] = useState(initial.productFamilies[0]?.id || "");
  const [query, setQuery] = useState("");
  const [pageSize, setPageSize] = useState(6);
  const [page, setPage] = useState(1);
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);

  const allRows = useMemo<ProductRow[]>(
    () =>
      families
        .flatMap((family) =>
          family.products.map((product) => ({
            familyId: family.id,
            familyTitle: family.title,
            familySortOrder: family.sortOrder,
            product,
          })),
        )
        .sort((a, b) => a.familySortOrder - b.familySortOrder || a.product.sortOrder - b.product.sortOrder),
    [families],
  );

  const filteredRows = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    return allRows.filter((row) => {
      const inFamily = familyFilter === "all" || row.familyId === familyFilter;
      if (!inFamily) return false;
      if (!keyword) return true;

      return [row.product.name, row.product.slug, row.product.summary, row.familyTitle]
        .join(" ")
        .toLowerCase()
        .includes(keyword);
    });
  }, [allRows, familyFilter, query]);

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleRows = filteredRows.slice(startIndex, startIndex + pageSize);

  function markDirty() {
    setSaved(false);
  }

  function updateProduct(familyId: string, productId: string, patch: Partial<CmsProduct>) {
    setFamilies((current) =>
      current.map((family) =>
        family.id === familyId
          ? {
              ...family,
              products: family.products.map((product) =>
                product.id === productId ? { ...product, ...patch } : product,
              ),
            }
          : family,
      ),
    );
    markDirty();
  }

  function moveProduct(productId: string, fromFamilyId: string, nextFamilyId: string) {
    if (fromFamilyId === nextFamilyId) return;

    setFamilies((current) => {
      const sourceFamily = current.find((family) => family.id === fromFamilyId);
      const product = sourceFamily?.products.find((item) => item.id === productId);
      if (!product) return current;

      return current.map((family) => {
        if (family.id === fromFamilyId) {
          return { ...family, products: family.products.filter((item) => item.id !== productId) };
        }

        if (family.id === nextFamilyId) {
          return {
            ...family,
            products: [...family.products, { ...product, sortOrder: family.products.length }],
          };
        }

        return family;
      });
    });
    setFamilyFilter(nextFamilyId);
    setAddFamilyId(nextFamilyId);
    setPage(1);
    markDirty();
  }

  function addProduct() {
    const targetFamilyId = addFamilyId || families[0]?.id;
    if (!targetFamilyId) {
      alert("请先到分类管理中添加产品系列。");
      return;
    }

    const targetFamilyIndex = families.findIndex((family) => family.id === targetFamilyId);
    const targetFamily = families[targetFamilyIndex];
    if (!targetFamily) return;

    const nextProductCount = targetFamily.products.length + 1;
    setFamilies((current) =>
      current.map((family, familyIndex) =>
        family.id === targetFamilyId
          ? {
              ...family,
              products: [...family.products, emptyProduct(familyIndex, family.products.length)],
            }
          : family,
      ),
    );
    setFamilyFilter(targetFamilyId);
    setQuery("");
    setPage(Math.max(1, Math.ceil(nextProductCount / pageSize)));
    markDirty();
  }

  function deleteProduct(familyId: string, productId: string) {
    const confirmed = window.confirm("确定删除这个产品吗？");
    if (!confirmed) return;

    setFamilies((current) =>
      current.map((family) =>
        family.id === familyId ? { ...family, products: family.products.filter((product) => product.id !== productId) } : family,
      ),
    );
    markDirty();
  }

  async function save() {
    setBusy(true);
    setSaved(false);

    try {
      const response = await fetch("/api/admin/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productFamilies: families }),
      });

      if (!response.ok) {
        alert("保存失败");
        return;
      }

      const body = await response.json();
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
            <span>产品管理</span>
            <h2>这里只维护产品详情、图片、卖点和所属系列。分类名称请到“分类管理”单独编辑。</h2>
          </div>
          <button type="button" onClick={save} disabled={busy}>
            <Save size={18} />
            {busy ? "保存中..." : "保存产品"}
          </button>
        </div>

        {saved ? <div className="admin-success">已保存，刷新前台页面即可查看最新产品内容。</div> : null}

        <div className="admin-toolbar">
          <label>
            <span>筛选系列</span>
            <select
              value={familyFilter}
              onChange={(event) => {
                setFamilyFilter(event.target.value);
                setPage(1);
              }}
            >
              <option value="all">全部系列</option>
              {families.map((family) => (
                <option key={family.id} value={family.id}>
                  {family.title}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>搜索产品</span>
            <div className="admin-search-input">
              <Search size={16} />
              <input
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                placeholder="名称、Slug、摘要"
              />
            </div>
          </label>

          <label>
            <span>每页显示</span>
            <select
              value={pageSize}
              onChange={(event) => {
                setPageSize(Number(event.target.value));
                setPage(1);
              }}
            >
              {pageSizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option} 个产品
                </option>
              ))}
            </select>
          </label>

          <div className="admin-toolbar-actions">
            <label>
              <span>新增到</span>
              <select value={addFamilyId} onChange={(event) => setAddFamilyId(event.target.value)}>
                {families.map((family) => (
                  <option key={family.id} value={family.id}>
                    {family.title}
                  </option>
                ))}
              </select>
            </label>
            <button type="button" onClick={addProduct}>
              <Plus size={16} />
              添加产品
            </button>
          </div>
        </div>

        <div className="admin-muted-line">
          共 {allRows.length} 个产品，当前筛选 {filteredRows.length} 个。第 {currentPage} / {totalPages} 页。
        </div>
      </div>

      <section className="admin-panel">
        <div className="admin-section-title">
          <div>
            <span>产品列表</span>
            <h3>产品会根据 Slug 自动生成详情页。第一张图片会作为列表和详情页主图。</h3>
          </div>
        </div>

        {visibleRows.length ? (
          <div className="admin-stack">
            {visibleRows.map(({ familyId, familyTitle, product }, productIndex) => (
              <article className="admin-card admin-product-card" key={product.id}>
                <div className="admin-card-heading">
                  <div>
                    <strong>{product.name}</strong>
                    <div className="admin-product-meta">
                      {familyTitle} / {product.slug || "未设置 Slug"}
                    </div>
                  </div>
                  <button type="button" className="danger" onClick={() => deleteProduct(familyId, product.id)}>
                    <Trash2 size={16} />
                    删除
                  </button>
                </div>

                <div className="admin-grid two">
                  <label>
                    <span>所属系列</span>
                    <select value={familyId} onChange={(event) => moveProduct(product.id, familyId, event.target.value)}>
                      {families.map((family) => (
                        <option key={family.id} value={family.id}>
                          {family.title}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span>产品名称</span>
                    <input
                      value={product.name}
                      onChange={(event) => {
                        const name = event.target.value;
                        updateProduct(familyId, product.id, {
                          name,
                          slug: product.slug || slugify(name),
                        });
                      }}
                    />
                  </label>
                  <label>
                    <span>Slug（网址路径）</span>
                    <input
                      value={product.slug}
                      onChange={(event) => updateProduct(familyId, product.id, { slug: slugify(event.target.value) })}
                    />
                  </label>
                  <label>
                    <span>排序</span>
                    <input
                      type="number"
                      value={product.sortOrder}
                      onChange={(event) =>
                        updateProduct(familyId, product.id, { sortOrder: Number(event.target.value) || productIndex })
                      }
                    />
                  </label>
                  <label className="checkbox-line">
                    <input
                      type="checkbox"
                      checked={product.featured}
                      onChange={(event) => updateProduct(familyId, product.id, { featured: event.target.checked })}
                    />
                    <span>推荐产品</span>
                  </label>
                  <label className="wide">
                    <span>产品摘要</span>
                    <textarea
                      value={product.summary}
                      rows={3}
                      onChange={(event) => updateProduct(familyId, product.id, { summary: event.target.value })}
                    />
                  </label>
                  <label className="wide">
                    <span>产品卖点</span>
                    <textarea
                      value={product.highlights.join("\n")}
                      rows={3}
                      onChange={(event) =>
                        updateProduct(familyId, product.id, {
                          highlights: event.target.value
                            .split(/\r?\n/)
                            .map((entry) => entry.trim())
                            .filter(Boolean),
                        })
                      }
                    />
                    <small>每行填写一个卖点。</small>
                  </label>
                  <div className="wide">
                    <MultiImageField
                      label="产品图片（支持多张）"
                      value={product.images?.length ? product.images : [product.image]}
                      onChange={(value) =>
                        updateProduct(familyId, product.id, {
                          images: value,
                          image: value[0] || product.image,
                        })
                      }
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="admin-empty">
            <strong>没有找到产品</strong>
            <p>可以调整筛选条件，或者先选择一个系列后添加产品。</p>
          </div>
        )}

        <div className="admin-pagination">
          <button type="button" onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={currentPage <= 1}>
            <ChevronLeft size={16} />
            上一页
          </button>
          <span>
            第 {currentPage} / {totalPages} 页
          </span>
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            disabled={currentPage >= totalPages}
          >
            下一页
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
