import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato | Grupo Alves Imóveis",
  description: "Fale com a Grupo Alves Imóveis por telefone, WhatsApp ou mensagem.",
};

export default function ContatoPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.address.mapsQuery,
  )}&output=embed`;

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

          <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/10">
            <iframe
              title="Localização Grupo Alves Imóveis"
              src={mapSrc}
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
