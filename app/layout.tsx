import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InquiryPopup } from "@/components/InquiryPopup";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

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
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <InquiryPopup />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
