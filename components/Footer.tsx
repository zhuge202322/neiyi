import Image from "next/image";
import Link from "next/link";
import { AtSign, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { company as fallbackCompany, navItems } from "@/lib/site-data";
import { getSiteCompany, getSiteCoreProducts } from "@/lib/site-cms";

export async function Footer() {
  const [company, products] = await Promise.all([getSiteCompany(), getSiteCoreProducts()]);

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Image
            src="/assets/629-update/winsun-logo-horizontal-transparent.png"
            alt={company.name || fallbackCompany.name}
            width={240}
            height={48}
          />
          <p>
            Underwear and knitted apparel OEM/ODM partner for global buyers seeking reliable
            development, production, and export service.
          </p>
        </div>

        <div>
          <h3>Company</h3>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div>
          <h3>Categories</h3>
          {products.slice(0, 6).map((item) => (
            <Link key={item.title} href="/products">
              {item.title}
            </Link>
          ))}
        </div>

        <div>
          <h3>Contact</h3>
          <p className="footer-contact">
            <MapPin size={16} />
            <span>{company.address}</span>
          </p>
          <p className="footer-contact">
            <MessageCircle size={16} />
            <span>{company.whatsApp.join(" / ")}</span>
          </p>
          <p className="footer-contact">
            <AtSign size={16} />
            <span>Instagram: {company.instagram || fallbackCompany.instagram}</span>
          </p>
          <p className="footer-contact">
            <Send size={16} />
            <span>Telegram: {company.telegram || fallbackCompany.telegram}</span>
          </p>
          <p className="footer-contact">
            <Mail size={16} />
            <Link href={`mailto:${company.email}`}>{company.email}</Link>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>(C) {new Date().getFullYear()} {company.name}</span>
        <span>Private label underwear manufacturing since {company.established}</span>
      </div>
    </footer>
  );
}
