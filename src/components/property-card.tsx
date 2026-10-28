import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Property } from "@/data/properties";

export function PropertyCard({ property }: { property: Property }) {
  const purposeLabel = property.purpose === "Aluguel" ? "aluguel" : "venda";

  return (
    <article className="group">
      <Link href={`/imoveis/${property.id}`} className="block overflow-hidden">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-950/5">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
      </Link>

      <div className="mt-4">
        <p className="text-sm text-navy-800/60">
          {property.type} para {purposeLabel} em {property.neighborhood ?? property.location}
        </p>
        <Link href={`/imoveis/${property.id}`}>
          <h3 className="mt-1 font-serif-display text-xl text-navy-900 transition group-hover:text-gold-600">
            {property.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-navy-800/70">{property.stats.join(", ")}</p>

        <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3">
          <p className="font-serif-display text-lg text-navy-900">
            {formatPrice(property.price, property.purpose)}
          </p>
          <Link
            href={`/imoveis/${property.id}`}
            className="text-sm font-medium text-navy-900 underline-offset-4 transition hover:text-gold-600 hover:underline"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}
