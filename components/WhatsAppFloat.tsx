import { MessageCircle } from "lucide-react";
import { getSiteCompany } from "@/lib/site-cms";

export async function WhatsAppFloat() {
  const company = await getSiteCompany();

  return (
    <a
      className="whatsapp-float"
      href={company.whatsAppLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
