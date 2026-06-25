import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InquiryPopup } from "@/components/InquiryPopup";
import { SiteTranslator } from "@/components/SiteTranslator";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "OEM & ODM Underwear Manufacturer in China | Bras, Panties & Shapewear Factory",
  description:
    "Winsun is a professional underwear manufacturer providing OEM, ODM and private label services for bras, panties, shapewear, thermal wear and loungewear. Factory established in 2015 with global export experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main>{children}</main>
        <Footer />
        <InquiryPopup />
        <WhatsAppFloat />
        <Suspense fallback={null}>
          <SiteTranslator />
        </Suspense>
      </body>
    </html>
  );
}
