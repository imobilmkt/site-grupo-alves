"use client";

import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

export function SearchForm() {
  const [reference, setReference] = useState("");
  const [purpose, setPurpose] = useState("Venda");
  const [type, setType] = useState("Apartamento");
  const [maxPrice, setMaxPrice] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      "Olá! Gostaria de ajuda para encontrar um imóvel com estas características:",
      reference && `Referência: ${reference}`,
      `Negócio: ${purpose}`,
      `Tipo do imóvel: ${type}`,
      maxPrice && `Valor máximo: ${maxPrice}`,
      location && `Cidade/bairro: ${location}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid w-full gap-4 rounded-2xl bg-white/95 p-6 shadow-2xl shadow-black/30 backdrop-blur md:grid-cols-5 md:items-end md:gap-3 md:p-5"
    >
      <div className="md:col-span-1">
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-navy-700">
          Referência
        </label>
        <input
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          placeholder="Ex: GA001"
          className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm text-navy-900 outline-none focus:border-gold-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-navy-700">
          Negócio
        </label>
        <select
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm text-navy-900 outline-none focus:border-gold-500"
        >
          <option>Venda</option>
          <option>Aluguel</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-navy-700">
          Tipo do imóvel
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm text-navy-900 outline-none focus:border-gold-500"
        >
          <option>Apartamento</option>
          <option>Casa</option>
          <option>Comercial</option>
          <option>Terreno</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-navy-700">
          Valor máximo
        </label>
        <input
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="R$"
          className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm text-navy-900 outline-none focus:border-gold-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-navy-700">
          Cidade e bairros
        </label>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Ex: Boa Viagem"
          className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm text-navy-900 outline-none focus:border-gold-500"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-semibold text-gold-400 transition hover:bg-navy-800 md:col-span-5"
      >
        Pesquisar Referência
      </button>
    </form>
  );
}
