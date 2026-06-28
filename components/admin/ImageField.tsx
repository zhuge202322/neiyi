"use client";

import Image from "next/image";
import { Upload } from "lucide-react";
import { useRef, useState } from "react";

type ImageFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export function ImageField({ label, value, onChange }: ImageFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);

  async function upload(file: File) {
    setBusy(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        alert(body.error || "上传失败");
        return;
      }

      const body = await response.json();
      onChange(body.url);
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="admin-image-field">
      <span>{label}</span>
      <div className="admin-image-preview">
        {value ? <Image src={value} alt="" fill sizes="180px" /> : <em>暂无图片</em>}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) void upload(file);
        }}
      />
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder="/assets/example.jpg" />
      <button type="button" onClick={() => inputRef.current?.click()} disabled={busy}>
        <Upload size={16} />
        {busy ? "上传中..." : "上传"}
      </button>
    </div>
  );
}
