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
  title: "Underwear Manufacturer in China | OEM & ODM Bra, Panty & Shapewear Factory",
  description:
    "Hong Kong Winsun Co., Limited is an underwear manufacturer in China offering OEM and ODM bra, panty, shapewear, thermal wear, and private label production for global buyers.",
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
