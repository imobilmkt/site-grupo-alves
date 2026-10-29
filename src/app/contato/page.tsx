import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site, whatsappLink } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Contato | Grupo Alves Imóveis",
  description: "Fale com a Grupo Alves Imóveis por telefone, WhatsApp ou mensagem.",
};

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.848849045736!2d-34.90424552459198!3d-8.11686828122629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f74c91b0267%3A0x6ce4e7662e0688e8!2sGrupo%20Alves%20Im%C3%B3veis!5e0!3m2!1spt-BR!2sbr!4v1792157161973!5m2!1spt-BR!2sbr";

export default function ContatoPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-center text-cream md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
          {site.name}
        </p>
        <h1 className="mt-2 font-serif-display text-3xl md:text-4xl">Entre em contato</h1>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="mb-6 font-serif-display text-xl text-navy-900">Envie uma mensagem</h2>
          <ContactForm />
        </div>

        <div>
          <h2 className="mb-6 font-serif-display text-xl text-navy-900">Endereço</h2>
          <div className="space-y-2 text-navy-800/85">
            <p className="font-semibold text-navy-900">
              {site.name} | {site.creci}
            </p>
            <p>{site.address.line1}</p>
            <p>{site.address.line2}</p>
            <p>CNPJ: {site.cnpj}</p>
            <a
              href={`tel:+${site.phoneWhatsapp}`}
              className="inline-block pt-2 font-semibold text-gold-600 hover:text-gold-500"
            >
              {site.phoneDisplay}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppButton
              href={whatsappLink("Olá! Vim pela página de contato do site da Grupo Alves Imóveis e gostaria de falar com um corretor.")}
              className="flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </WhatsAppButton>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-navy-900 px-6 py-3 text-sm font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-gold-400"
            >
              <InstagramIcon className="h-4 w-4" />
              Ver Instagram
            </a>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/10">
            <iframe
              title="Localização Grupo Alves Imóveis"
              src={mapSrc}
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </>
  );
}
