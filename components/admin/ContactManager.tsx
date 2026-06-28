"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import type { CmsContact } from "@/lib/cms-types";

type ContactManagerProps = {
  initial: CmsContact;
};

export function ContactManager({ initial }: ContactManagerProps) {
  const [contact, setContact] = useState(initial);
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);

  function update(key: keyof CmsContact, value: string | string[]) {
    setContact((current) => ({ ...current, [key]: value }));
    setSaved(false);
  }

  async function save(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setSaved(false);

    try {
      const response = await fetch("/api/admin/contact", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      if (!response.ok) {
        alert("保存失败");
        return;
      }

      setContact(await response.json());
      setSaved(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={save} className="admin-form">
      <div className="admin-panel">
        <div className="admin-panel-heading">
          <div>
            <span>联系方式</span>
            <h2>维护 Contact 页面、底部导航和 WhatsApp 浮窗显示的企业信息。</h2>
          </div>
          <button type="submit" disabled={busy}>
            <Save size={18} />
            {busy ? "保存中..." : "保存联系方式"}
          </button>
        </div>

        {saved ? <div className="admin-success">已保存，刷新前台页面即可查看最新内容。</div> : null}

        <div className="admin-grid two">
          <label>
            <span>公司名称</span>
            <input value={contact.name} onChange={(event) => update("name", event.target.value)} />
          </label>
          <label>
            <span>公司简称</span>
            <input value={contact.shortName} onChange={(event) => update("shortName", event.target.value)} />
          </label>
          <label>
            <span>成立年份</span>
            <input value={contact.established} onChange={(event) => update("established", event.target.value)} />
          </label>
          <label>
            <span>企业邮箱</span>
            <input type="email" value={contact.email} onChange={(event) => update("email", event.target.value)} />
          </label>
          <label className="wide">
            <span>公司地址</span>
            <textarea value={contact.address} onChange={(event) => update("address", event.target.value)} rows={3} />
          </label>
          <label>
            <span>WhatsApp 号码</span>
            <textarea
              value={contact.whatsApp.join("\n")}
              onChange={(event) =>
                update(
                  "whatsApp",
                  event.target.value
                    .split(/\r?\n/)
                    .map((item) => item.trim())
                    .filter(Boolean),
                )
              }
              rows={4}
            />
            <small>每行填写一个号码。</small>
          </label>
          <label>
            <span>主要 WhatsApp</span>
            <input value={contact.whatsAppPrimary} onChange={(event) => update("whatsAppPrimary", event.target.value)} />
            <small>用于右下角 WhatsApp 浮窗。</small>
          </label>
          <label>
            <span>WhatsApp 跳转链接</span>
            <input value={contact.whatsAppLink} onChange={(event) => update("whatsAppLink", event.target.value)} />
          </label>
          <label>
            <span>主要市场</span>
            <textarea
              value={contact.markets.join("\n")}
              onChange={(event) =>
                update(
                  "markets",
                  event.target.value
                    .split(/\r?\n/)
                    .map((item) => item.trim())
                    .filter(Boolean),
                )
              }
              rows={4}
            />
          </label>
        </div>
      </div>
    </form>
  );
}
