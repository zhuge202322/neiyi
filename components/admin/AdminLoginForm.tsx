"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, LogIn } from "lucide-react";

type AdminLoginFormProps = {
  usernameHint: string;
  passwordHint: string;
};

export function AdminLoginForm({ usernameHint, passwordHint }: AdminLoginFormProps) {
  const router = useRouter();
  const [username, setUsername] = useState(usernameHint);
  const [password, setPassword] = useState(passwordHint === "Configured in environment" ? "" : passwordHint);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        setError(body.error || "登录失败");
        return;
      }

      router.push("/admin");
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="admin-login-card">
      <div className="admin-login-lock">
        <Lock size={28} />
      </div>
      <h1>Winsun 网站后台</h1>
      <p>管理网站联系方式、产品分类和产品详情内容。</p>

      {error ? <div className="admin-error">{error}</div> : null}

      <label>
        <span>账号</span>
        <input value={username} onChange={(event) => setUsername(event.target.value)} required />
      </label>

      <label>
        <span>密码</span>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
      </label>

      <button type="submit" disabled={busy}>
        <LogIn size={18} />
        {busy ? "登录中..." : "登录"}
      </button>

      <small>
        默认本地账号：{usernameHint} / {passwordHint}
      </small>
    </form>
  );
}
