"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { getLocaleFromValue, ruText, withLocale } from "@/lib/i18n";

const textOriginals = new WeakMap<Text, string>();
const attrOriginals = new WeakMap<Element, Map<string, string>>();
const translatableAttributes = ["aria-label", "alt", "placeholder", "title"];
const ignoredTags = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"]);
const normalizeText = (value: string) => value.trim().replace(/\s+/g, " ");

function translateTextNode(node: Text) {
  const current = node.nodeValue ?? "";
  const base = textOriginals.get(node) ?? current;
  const leading = base.match(/^\s*/)?.[0] ?? "";
  const trailing = base.match(/\s*$/)?.[0] ?? "";
  const core = normalizeText(base);
  const translated = ruText[core];

  if (!translated) {
    return;
  }

  if (!textOriginals.has(node)) {
    textOriginals.set(node, base);
  }

  const nextValue = `${leading}${translated}${trailing}`;
  if (current !== nextValue) {
    node.nodeValue = nextValue;
  }
}

function restoreTextNode(node: Text) {
  const original = textOriginals.get(node);

  if (original && node.nodeValue !== original) {
    node.nodeValue = original;
  }
}

function getOriginalAttribute(element: Element, attr: string) {
  const current = element.getAttribute(attr);

  if (!current) {
    return null;
  }

  let originals = attrOriginals.get(element);
  if (!originals) {
    originals = new Map<string, string>();
    attrOriginals.set(element, originals);
  }

  if (!originals.has(attr)) {
    originals.set(attr, current);
  }

  return originals.get(attr) ?? current;
}

function translateAttributes(element: Element) {
  translatableAttributes.forEach((attr) => {
    const original = getOriginalAttribute(element, attr);

    if (!original) {
      return;
    }

    const translated = ruText[normalizeText(original)];
    if (translated && element.getAttribute(attr) !== translated) {
      element.setAttribute(attr, translated);
    }
  });
}

function restoreAttributes(element: Element) {
  const originals = attrOriginals.get(element);

  if (!originals) {
    return;
  }

  originals.forEach((value, attr) => {
    if (element.getAttribute(attr) !== value) {
      element.setAttribute(attr, value);
    }
  });
}

function walkTextNodes(root: ParentNode, callback: (node: Text) => void) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;

      if (!parent || ignoredTags.has(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }

      if (!node.nodeValue?.trim()) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let node = walker.nextNode();
  while (node) {
    callback(node as Text);
    node = walker.nextNode();
  }
}

function walkElements(root: ParentNode, callback: (element: Element) => void) {
  if (root instanceof Element) {
    callback(root);
  }

  root.querySelectorAll("*").forEach((element) => {
    if (!ignoredTags.has(element.tagName)) {
      callback(element);
    }
  });
}

function localizeInternalLinks(root: ParentNode, locale: "en" | "ru") {
  root.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => {
    if (anchor.dataset.localeSwitch === "true") {
      return;
    }

    const href = anchor.getAttribute("href");

    if (!href || !href.startsWith("/") || href.startsWith("//")) {
      return;
    }

    const localized = withLocale(href, locale);
    if (href !== localized) {
      anchor.setAttribute("href", localized);
    }
  });
}

function applyLocale(root: ParentNode, locale: "en" | "ru") {
  document.documentElement.lang = locale;
  localizeInternalLinks(root, locale);

  if (locale === "ru") {
    walkTextNodes(root, translateTextNode);
    walkElements(root, translateAttributes);
    return;
  }

  walkTextNodes(root, restoreTextNode);
  walkElements(root, restoreAttributes);
}

export function SiteTranslator() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = getLocaleFromValue(searchParams.get("lang"));

  useEffect(() => {
    let frame = 0;

    const run = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => applyLocale(document.body, locale));
    };

    run();

    const observer = new MutationObserver(run);
    observer.observe(document.body, {
      childList: true,
      characterData: true,
      subtree: true,
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [locale, pathname, searchParams]);

  return null;
}
