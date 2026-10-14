"use client";

import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

export function NegotiateForm() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "Residencial",
    propertyType: "",
    cep: "",
    uf: "",
    city: "",
    neighborhood: "",
    address: "",
    number: "",
    complement: "",
    price: "",
    condo: "",
    iptu: "",
    exchange: "Não",
    description: "",
  });
  const [authorized, setAuthorized] = useState(false);
  const [sent, setSent] = useState(false);

  function update<K extends keyof typeof data>(key: K, value: (typeof data)[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!authorized) return;

    const lines = [
      "Quero negociar meu imóvel:",
      `Nome: ${data.name}`,
      `Telefone: ${data.phone}`,
      data.email && `E-mail: ${data.email}`,
      `Categoria: ${data.category}`,
      data.propertyType && `Tipo do imóvel: ${data.propertyType}`,
      "",
      "Localização:",
      [data.address, data.number].filter(Boolean).join(", "),
      data.complement,
      [data.neighborhood, data.city, data.uf].filter(Boolean).join(" - "),
      data.cep && `CEP: ${data.cep}`,
      "",
      "Dados financeiros:",
      data.price && `Preço do imóvel: ${data.price}`,
      data.condo && `Condomínio: R$ ${data.condo}/mês`,
      data.iptu && `IPTU: R$ ${data.iptu}/ano`,
      `Aceita permuta: ${data.exchange}`,
      "",
      data.description && `Descrição: ${data.description}`,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noreferrer");
    setSent(true);
  }

  const inputClass =
    "w-full rounded-lg border border-black/10 px-3 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-500";
  const labelClass = "mb-1 block text-xs font-semibold uppercase tracking-wide text-navy-700";

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <section>
        <h2 className="mb-4 font-serif-display text-xl text-navy-900">Seus dados</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className={labelClass}>Nome</label>
            <input
              required
              className={inputClass}
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Telefone</label>
            <input
              required
              className={inputClass}
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>E-mail</label>
            <input
              type="email"
              className={inputClass}
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-serif-display text-xl text-navy-900">Sobre o imóvel</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Categoria</label>
            <select
              className={inputClass}
              value={data.category}
              onChange={(e) => update("category", e.target.value)}
            >
              <option>Residencial</option>
              <option>Comercial</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Tipo do imóvel</label>
            <input
              placeholder="Ex: Apartamento, Casa, Terreno..."
              className={inputClass}
              value={data.propertyType}
              onChange={(e) => update("propertyType", e.target.value)}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-serif-display text-xl text-navy-900">Onde fica o imóvel?</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className={labelClass}>CEP</label>
            <input
              className={inputClass}
              value={data.cep}
              onChange={(e) => update("cep", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>UF</label>
            <input
              className={inputClass}
              value={data.uf}
              onChange={(e) => update("uf", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Cidade</label>
            <input
              className={inputClass}
              value={data.city}
              onChange={(e) => update("city", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Bairro</label>
            <input
              className={inputClass}
              value={data.neighborhood}
              onChange={(e) => update("neighborhood", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Endereço</label>
            <input
              className={inputClass}
              value={data.address}
              onChange={(e) => update("address", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Número</label>
            <input
              className={inputClass}
              value={data.number}
              onChange={(e) => update("number", e.target.value)}
            />
          </div>
          <div className="sm:col-span-3">
            <label className={labelClass}>Complemento</label>
            <input
              className={inputClass}
              value={data.complement}
              onChange={(e) => update("complement", e.target.value)}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-serif-display text-xl text-navy-900">Dados financeiros</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className={labelClass}>Preço do imóvel</label>
            <input
              className={inputClass}
              value={data.price}
              onChange={(e) => update("price", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Condomínio (R$/mês)</label>
            <input
              className={inputClass}
              value={data.condo}
              onChange={(e) => update("condo", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>IPTU (R$/ano)</label>
            <input
              className={inputClass}
              value={data.iptu}
              onChange={(e) => update("iptu", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Aceita permuta?</label>
            <select
              className={inputClass}
              value={data.exchange}
              onChange={(e) => update("exchange", e.target.value)}
            >
              <option>Não</option>
              <option>Sim</option>
            </select>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-serif-display text-xl text-navy-900">Descreva seu imóvel</h2>
        <p className="mb-2 text-sm text-navy-700/70">
          Conte detalhes que valorizam o anúncio: situação do imóvel, pontos fortes do bairro,
          vizinhança, ventilação e iluminação.
        </p>
        <textarea
          rows={5}
          className={inputClass}
          value={data.description}
          onChange={(e) => update("description", e.target.value)}
        />
      </section>

      <label className="flex items-start gap-3 text-sm text-navy-800">
        <input
          type="checkbox"
          checked={authorized}
          onChange={(e) => setAuthorized(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-black/20"
        />
        Autorizo a intermediação deste imóvel de minha propriedade.
      </label>

      <button
        type="submit"
        disabled={!authorized}
        className="rounded-lg bg-navy-900 px-6 py-3 text-sm font-semibold text-gold-400 transition hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Enviar
      </button>
      {sent && (
        <p className="text-sm text-navy-700">
          Abrimos o WhatsApp com os dados do seu imóvel prontos para envio.
        </p>
      )}
    </form>
  );
}
