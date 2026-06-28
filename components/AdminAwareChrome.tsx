"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type AdminAwareChromeProps = {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
  popup: React.ReactNode;
  translator: React.ReactNode;
  whatsapp: React.ReactNode;
};

export function AdminAwareChrome({
  children,
  footer,
  header,
  popup,
  translator,
  whatsapp,
}: AdminAwareChromeProps) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    document.documentElement.classList.toggle("admin-route", isAdmin);
    document.body.classList.toggle("admin-route", isAdmin);

    return () => {
      document.documentElement.classList.remove("admin-route");
      document.body.classList.remove("admin-route");
    };
  }, [isAdmin]);

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
      {popup}
      {whatsapp}
      {translator}
    </>
  );
}
