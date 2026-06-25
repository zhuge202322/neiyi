"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Globe2, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getLocaleFromValue, tr, withLocale, type Locale } from "@/lib/i18n";
import { company, languageOptions, navItems } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const locale = getLocaleFromValue(searchParams.get("lang"));
  const currentHref = useMemo(() => {
    const query = searchParams.toString();
    return `${pathname}${query ? `?${query}` : ""}`;
  }, [pathname, searchParams]);
  const languageHref = (nextLocale: Locale) => withLocale(currentHref, nextLocale);
  const isActiveLanguage = (code: string) => (locale === "ru" ? code === "RU" : code === "EN");
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
  }, [pathname, locale]);

  return (
    <header className={`site-header ${scrolled || forceSolid ? "site-header--solid" : ""}`}>
      <Link href={withLocale("/", locale)} className="brand" aria-label={`${company.name} home`}>
        <Image src="/assets/winsun-logo.png" alt="" width={128} height={72} priority />
        <span>{company.name}</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={withLocale(item.href, locale)}
            className={pathname === item.href ? "active" : ""}
          >
            {tr(item.label, locale)}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <div className="language-menu">
          <button type="button" aria-label="Select language">
            <Globe2 size={17} />
            <span>{locale === "ru" ? "RU" : "EN"}</span>
          </button>
          <div className="language-menu__panel">
            {languageOptions.map((item) => {
              if (item.code === "EN" || item.code === "RU") {
                return (
                  <Link
                    key={item.code}
                    href={languageHref(item.code === "RU" ? "ru" : "en")}
                    className={isActiveLanguage(item.code) ? "active" : ""}
                    data-locale-switch="true"
                  >
                    <strong>{item.code}</strong>
                    {tr(item.label, locale)}
                  </Link>
                );
              }

              return (
                <span key={item.code} aria-disabled="true">
                  <strong>{item.code}</strong>
                  {tr(item.label, locale)}
                </span>
              );
            })}
          </div>
        </div>
        <Link href={withLocale("/contact", locale)} className="icon-link" aria-label="Send an inquiry">
          <MessageCircle size={18} />
          <span>{tr("Inquiry", locale)}</span>
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
            href={withLocale(item.href, locale)}
            className={pathname === item.href ? "active" : ""}
          >
            {tr(item.label, locale)}
          </Link>
        ))}
        <div className="mobile-languages">
          {languageOptions.map((item) =>
            item.code === "EN" || item.code === "RU" ? (
              <Link
                key={item.code}
                href={languageHref(item.code === "RU" ? "ru" : "en")}
                className={isActiveLanguage(item.code) ? "active" : ""}
                data-locale-switch="true"
              >
                {item.code}
              </Link>
            ) : (
              <span key={item.code} aria-disabled="true">
                {item.code}
              </span>
            ),
          )}
        </div>
      </div>
    </header>
  );
}
