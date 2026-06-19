import { MessageCircle } from "lucide-react";
import { company } from "@/lib/site-data";

export function WhatsAppFloat() {
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
