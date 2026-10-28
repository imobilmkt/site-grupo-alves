"use client";

import { useMemo, useState } from "react";
import { PropertyCard } from "@/components/property-card";
import type { Property } from "@/data/properties";

const PURPOSE_OPTIONS = ["Todos", "Venda", "Aluguel"] as const;
const TYPE_OPTIONS = ["Todos", "Casa", "Apartamento", "Lote/Terreno"] as const;

export function PropertyFilters({ properties }: { properties: Property[] }) {
  const [purpose, setPurpose] = useState<(typeof PURPOSE_OPTIONS)[number]>("Todos");
  const [type, setType] = useState<(typeof TYPE_OPTIONS)[number]>("Todos");

  const filtered = useMemo(() => {
    return properties.filter((property) => {
      if (purpose !== "Todos" && property.purpose !== purpose) return false;
      if (type !== "Todos" && property.type !== type) return false;
      return true;
    });
  }, [properties, purpose, type]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {PURPOSE_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setPurpose(option)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                purpose === option
                  ? "bg-navy-900 text-gold-400"
                  : "bg-cream text-navy-800/80 hover:bg-navy-900/10"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {TYPE_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setType(option)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                type === option
                  ? "border-gold-500 text-gold-600"
                  : "border-black/10 text-navy-800/70 hover:border-gold-500 hover:text-gold-600"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl bg-cream px-6 py-10 text-center text-navy-800/70">
          Nenhum imóvel encontrado com esses filtros. Fale com a gente pelo WhatsApp que ajudamos
          a encontrar a opção ideal.
        </p>
      ) : (
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}
