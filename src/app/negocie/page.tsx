import type { Metadata } from "next";
import { NegotiateForm } from "@/components/negotiate-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Negocie seu Imóvel | Grupo Alves Imóveis",
  description: "Cadastre seu imóvel para venda ou aluguel com a Grupo Alves Imóveis.",
};

export default function NegociePage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-center text-cream md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
          {site.name}
        </p>
        <h1 className="mt-2 font-serif-display text-3xl md:text-4xl">Negocie seu Imóvel</h1>
        <p className="mx-auto mt-4 max-w-xl text-cream/70">
          Preencha os dados abaixo e conte com profissionais capacitados para intermediar a
          venda ou locação do seu imóvel com segurança.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <NegotiateForm />
      </section>
    </>
  );
}
