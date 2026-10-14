import Image from "next/image";
import { formatPrice, type Property } from "@/data/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md shadow-navy-950/5 ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy-950/90 px-3 py-1 text-xs font-semibold tracking-wide text-gold-400">
          {property.purpose}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900">
          Ref. {property.reference}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-gold-600">
          {property.type} · {property.neighborhood}
        </p>
        <h3 className="mt-1 font-serif-display text-lg text-navy-900">{property.title}</h3>
        <p className="text-sm text-navy-700/70">{property.city}</p>

        <div className="mt-4 flex items-center gap-4 text-sm text-navy-800/80">
          {property.bedrooms > 0 && <span>{property.bedrooms} qts</span>}
          <span>{property.bathrooms} ban.</span>
          <span>{property.parking} vg.</span>
          <span>{property.area} m²</span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4">
          <p className="font-serif-display text-xl text-navy-900">
            {formatPrice(property.price, property.purpose)}
          </p>
          <span className="text-sm font-semibold text-gold-600 transition group-hover:text-gold-500">
            Ver detalhes →
          </span>
        </div>
      </div>
    </article>
  );
}
