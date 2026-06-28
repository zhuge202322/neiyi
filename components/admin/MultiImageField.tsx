"use client";

import Image from "next/image";
import { Plus, Trash2, Upload } from "lucide-react";
import { useRef, useState } from "react";

type MultiImageFieldProps = {
  label: string;
  value: string[];
  onChange: (value: string[]) => void;
};

export function MultiImageField({ label, value, onChange }: MultiImageFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const images = value.filter(Boolean);

  async function upload(files: FileList) {
    setBusy(true);
    try {
      const uploaded: string[] = [];

      for (const file of Array.from(files)) {
        const form = new FormData();
        form.append("file", file);
        const response = await fetch("/api/admin/upload", {
          method: "POST",
          body: form,
        });

        if (!response.ok) {
          const body = await response.json().catch(() => ({}));
          alert(body.error || "图片上传失败");
          continue;
        }

        const body = await response.json();
        uploaded.push(body.url);
      }

      if (uploaded.length) {
        onChange([...images, ...uploaded]);
      }
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function updateAt(index: number, next: string) {
    onChange(images.map((image, imageIndex) => (imageIndex === index ? next : image)).filter(Boolean));
  }

  function removeAt(index: number) {
    onChange(images.filter((_, imageIndex) => imageIndex !== index));
  }

  return (
    <div className="admin-multi-image-field">
      <div className="admin-multi-image-field__head">
        <span>{label}</span>
        <button type="button" onClick={() => inputRef.current?.click()} disabled={busy}>
          <Upload size={16} />
          {busy ? "上传中..." : "上传图片"}
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        multiple
        onChange={(event) => {
          const files = event.target.files;
          if (files?.length) void upload(files);
        }}
      />

      <div className="admin-multi-image-grid">
        {images.map((image, index) => (
          <div className="admin-multi-image-card" key={`${image}-${index}`}>
            <div className="admin-multi-image-preview">
              <Image src={image} alt="" fill sizes="180px" />
              {index === 0 ? <strong>主图</strong> : null}
            </div>
            <input value={image} onChange={(event) => updateAt(index, event.target.value)} />
            <button type="button" className="danger" onClick={() => removeAt(index)}>
              <Trash2 size={15} />
              删除
            </button>
          </div>
        ))}

        <button type="button" className="admin-multi-image-add" onClick={() => onChange([...images, ""])}>
          <Plus size={18} />
          添加图片地址
        </button>
      </div>

      <small>第一张图片会作为产品列表和详情页主图显示。</small>
    </div>
  );
}
