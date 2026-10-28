import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Olá! Vim pelo site da Grupo Alves Imóveis e gostaria de mais informações.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
