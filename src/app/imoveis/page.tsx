import type { Metadata } from "next";
import { PropertyFilters } from "@/components/property-filters";
import { formatPrice, properties } from "@/data/properties";
import { site, siteUrl, whatsappLink } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";

const prices = properties.map((p) => p.price);
const minPrice = Math.min(...prices);
const maxPrice = Math.max(...prices);
const neighborhoods = Array.from(new Set(properties.map((p) => p.neighborhood).filter(Boolean)));
const types = Array.from(new Set(properties.map((p) => p.type.toLowerCase())));
const purposes = Array.from(new Set(properties.map((p) => p.purpose.toLowerCase())));

const description = `Confira ${properties.length} imóveis disponíveis da Grupo Alves Imóveis em ${
  neighborhoods.join(", ") || "Recife e região"
}: ${types.join(", ")} para ${purposes.join(" e ")}, de ${formatPrice(minPrice, "Venda").replace(
  "/mês",
  ""
)} a ${formatPrice(maxPrice, "Venda").replace("/mês", "")}.`;

export const metadata: Metadata = {
  title: "Imóveis à venda e para alugar",
  description,
  alternates: { canonical: "/imoveis" },
};

const listJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: properties.map((property, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${siteUrl}/imoveis/${property.id}`,
    name: property.title,
  })),
};

export default function ImoveisPage() {
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
            Nossos <span className="gold-gradient-text">imóveis</span>
          </h1>
          <p className="mt-5 text-cream/70">
            Casas, apartamentos e terrenos à venda e para aluguel em Recife e região, com
            assessoria completa em cada etapa do negócio.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <PropertyFilters properties={properties} />
      </section>

      <section className="bg-navy-950 py-16 text-center text-cream">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif-display text-2xl md:text-3xl">
            Não encontrou o que procurava?
          </h2>
          <p className="mt-3 text-cream/70">
            Conte pra gente o que você precisa e um de nossos corretores te ajuda a encontrar o
            imóvel ideal.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink("Olá! Vim pela página de imóveis do site da Grupo Alves Imóveis e gostaria de ajuda para encontrar um imóvel.")}
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
