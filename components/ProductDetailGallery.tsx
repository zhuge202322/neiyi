"use client";

import Image from "next/image";
import { useState } from "react";

type ProductDetailGalleryProps = {
  name: string;
  family: string;
  images: string[];
};

export function ProductDetailGallery({ family, images, name }: ProductDetailGalleryProps) {
  const gallery = images.filter(Boolean);
  const [active, setActive] = useState(0);
  const activeImage = gallery[active] || gallery[0] || "";

  return (
    <>
      <div className="product-detail-main-image">
        {activeImage ? (
          <Image
            src={activeImage}
            alt={name}
            fill
            sizes="(min-width: 1100px) 54vw, 100vw"
            priority
          />
        ) : null}
        <div className="product-image-badge">
          <span>OEM / ODM</span>
          <strong>Factory direct</strong>
        </div>
      </div>
      <div className="product-detail-caption">
        <span>{family}</span>
        <strong>{gallery.length > 1 ? `${gallery.length} product images` : "Private label ready"}</strong>
      </div>
      {gallery.length > 1 ? (
        <div className="product-gallery-thumbs" aria-label={`${name} product gallery`}>
          {gallery.map((image, index) => (
            <button
              type="button"
              className={`product-thumb ${index === active ? "product-thumb--active" : ""}`}
              key={`${image}-${index}`}
              onClick={() => setActive(index)}
            >
              <Image src={image} alt="" width={76} height={90} />
              <span>{index === 0 ? "Main image" : `Image ${index + 1}`}</span>
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
}
