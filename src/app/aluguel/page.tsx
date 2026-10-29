import type { Metadata } from "next";
import { PropertyFilters } from "@/components/property-filters";
import { formatPrice, properties } from "@/data/properties";
import { site, siteUrl, whatsappLink } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";

const forRent = properties.filter((p) => p.purpose === "Aluguel");
const prices = forRent.map((p) => p.price);
const minPrice = Math.min(...prices);
const maxPrice = Math.max(...prices);
const neighborhoods = Array.from(new Set(forRent.map((p) => p.neighborhood).filter(Boolean)));
const types = Array.from(new Set(forRent.map((p) => p.type.toLowerCase())));

const description = `Confira ${forRent.length} imóveis para alugar da Grupo Alves Imóveis em ${
  neighborhoods.join(", ") || "Recife e região"
}: ${types.join(", ")}, de ${formatPrice(minPrice, "Aluguel")} a ${formatPrice(maxPrice, "Aluguel")}.`;

export const metadata: Metadata = {
  title: "Imóveis para alugar",
  description,
  alternates: { canonical: "/aluguel" },
};

const listJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: forRent.map((property, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${siteUrl}/imoveis/${property.id}`,
    name: property.title,
  })),
};

export default function AluguelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }}
      />

      <section className="bg-navy-950 py-16 text-center text-cream md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
            Grupo Alves Imóveis
          </p>
          <h1 className="font-serif-display text-3xl md:text-5xl">
            Imóveis para <span className="gold-gradient-text">alugar</span>
          </h1>
          <p className="mt-5 text-cream/70">
            Apartamentos e studios mobiliados para locação em Recife, com contratos ágeis e
            suporte completo durante toda a estadia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <PropertyFilters properties={forRent} showPurposeFilter={false} />
      </section>

      <section className="bg-navy-950 py-16 text-center text-cream">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif-display text-2xl md:text-3xl">
            Não encontrou o que procurava?
          </h2>
          <p className="mt-3 text-cream/70">
            Conte pra gente o que você precisa e um de nossos corretores te ajuda a encontrar o
            imóvel ideal para alugar.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink("Olá! Vim pela página de imóveis para alugar do site da Grupo Alves Imóveis e gostaria de ajuda para encontrar um imóvel.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[#25D366] px-8 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/30 px-8 py-3 text-sm font-semibold text-cream transition hover:border-gold-400 hover:text-gold-400"
            >
              <InstagramIcon className="h-4 w-4" />
              Ver Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
