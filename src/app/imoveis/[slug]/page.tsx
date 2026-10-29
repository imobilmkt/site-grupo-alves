import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyGallery } from "@/components/property-gallery";
import { PropertyCard } from "@/components/property-card";
import { formatPrice, getPropertyById, getPropertySummary, properties } from "@/data/properties";
import { instagramLink, site, siteUrl, whatsappLink } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.id }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyById(slug);
  if (!property) return {};

  const description = getPropertySummary(property);
  const keywords = [
    property.type,
    property.purpose,
    property.location,
    property.neighborhood,
    `${property.bedrooms ?? ""} quartos`.trim(),
    `imóvel para ${property.purpose.toLowerCase()} em ${property.neighborhood ?? property.location}`,
    property.reference,
  ].filter(Boolean) as string[];

  return {
    title: property.title,
    description,
    keywords,
    alternates: {
      canonical: `/imoveis/${property.id}`,
    },
    openGraph: {
      title: property.title,
      description,
      url: `${siteUrl}/imoveis/${property.id}`,
      images: [property.image],
    },
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyById(slug);

  if (!property) {
    notFound();
  }

  const images = property.images && property.images.length > 0 ? property.images : [property.image];
  const related = properties.filter((p) => p.id !== property.id && p.purpose === property.purpose).slice(0, 3);

  const waMessage = `Olá! Tenho interesse no imóvel "${property.title}" (Ref. ${property.reference}), que vi no site da Grupo Alves Imóveis.`;
  const summary = getPropertySummary(property);

  const propertyJsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: summary,
    url: `${siteUrl}/imoveis/${property.id}`,
    image: images.map((src) => `${siteUrl}${src}`),
    sku: property.reference,
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address ?? property.location,
      addressLocality: property.city ?? "Recife",
      addressRegion: property.state ?? "PE",
      ...(property.postalCode ? { postalCode: property.postalCode } : {}),
      addressCountry: "BR",
    },
    about: {
      "@type": property.type === "Casa" ? "SingleFamilyResidence" : "Apartment",
      ...(property.areaM2
        ? { floorSize: { "@type": "QuantitativeValue", value: property.areaM2, unitCode: "MTK" } }
        : {}),
      ...(property.bedrooms ? { numberOfRooms: property.bedrooms } : {}),
      ...(property.bathrooms ? { numberOfBathroomsTotal: property.bathrooms } : {}),
      ...(property.furnished !== undefined ? { amenityFeature: property.furnished ? "Mobiliado" : "Sem mobília" } : {}),
    },
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "BRL",
      businessFunction:
        property.purpose === "Aluguel" ? "http://purl.org/goodrelations/v1#LeaseOut" : "http://purl.org/goodrelations/v1#Sell",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/imoveis/${property.id}`,
      seller: {
        "@type": "RealEstateAgent",
        name: site.name,
        telephone: `+${site.phoneWhatsapp}`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyJsonLd) }}
      />

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <nav className="mb-6 text-sm text-navy-800/60">
          <Link
            href={property.purpose === "Aluguel" ? "/aluguel" : "/imoveis"}
            className="hover:text-gold-600"
          >
            {property.purpose === "Aluguel" ? "Alugar" : "Comprar"}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy-900">{property.title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <PropertyGallery images={images} title={property.title} />

            <div className="mt-8">
              <h2 className="font-serif-display text-xl text-navy-900">Sobre o imóvel</h2>
              <p className="mt-3 text-navy-800/80">{summary}</p>
              <ul className="mt-4 space-y-2">
                {property.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-navy-800/80">
                    <span className="mt-1 text-gold-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="h-fit rounded-2xl bg-white p-6 shadow-lg shadow-navy-950/5 ring-1 ring-black/5 lg:sticky lg:top-24">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-navy-950 px-3 py-1 text-xs font-semibold tracking-wide text-gold-400">
                {property.purpose}
              </span>
              <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-navy-900">
                Ref. {property.reference}
              </span>
            </div>

            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-gold-600">
              {property.type} · {property.location}
            </p>
            <h1 className="mt-1 font-serif-display text-2xl text-navy-900">{property.title}</h1>

            {property.address && (
              <p className="mt-2 text-sm text-navy-800/70">{property.address}</p>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {property.stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-navy-800/80"
                >
                  {stat}
                </span>
              ))}
            </div>

            <div className="mt-6 border-t border-black/5 pt-5">
              {property.priceLabel && (
                <p className="text-xs font-medium uppercase tracking-wide text-navy-700/60">
                  {property.priceLabel}
                </p>
              )}
              <p className="font-serif-display text-3xl text-navy-900">
                {formatPrice(property.price, property.purpose)}
              </p>
              {property.priceNote && (
                <p className="mt-1 text-xs text-navy-800/60">{property.priceNote}</p>
              )}
            </div>

            <a
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>

            <a
              href={instagramLink(property.instagramUrl)}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-black/10 px-6 py-3 text-sm font-semibold text-navy-900 transition hover:border-gold-500 hover:text-gold-600"
            >
              <InstagramIcon className="h-4 w-4" />
              Ver no Instagram
            </a>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 font-serif-display text-2xl text-navy-900">
              Outros imóveis que podem te interessar
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <PropertyCard key={item.id} property={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
