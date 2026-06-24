"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe2, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, languageOptions, navItems } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const forceSolid =
    (pathname.startsWith("/products/") && pathname !== "/products") ||
    (pathname.startsWith("/blog/") && pathname !== "/blog");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header ${scrolled || forceSolid ? "site-header--solid" : ""}`}>
      <Link href="/" className="brand" aria-label={`${company.name} home`}>
        <Image src="/assets/winsun-logo.png" alt="" width={128} height={72} priority />
        <span>{company.name}</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <div className="language-menu">
          <button type="button" aria-label="Select language">
            <Globe2 size={17} />
            <span>EN</span>
          </button>
          <div className="language-menu__panel">
            {languageOptions.map((item) => (
              <span key={item.code}>
                <strong>{item.code}</strong>
                {item.label}
              </span>
            ))}
          </div>
        </div>
        <Link href="/contact" className="icon-link" aria-label="Send an inquiry">
          <MessageCircle size={18} />
          <span>Inquiry</span>
        </Link>
        <button
          className="menu-button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-panel ${open ? "mobile-panel--open" : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
        <div className="mobile-languages">
          {languageOptions.map((item) => (
            <span key={item.code}>{item.code}</span>
          ))}
        </div>
      </div>
    </header>
  );
}
