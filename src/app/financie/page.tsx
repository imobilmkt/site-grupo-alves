import type { Metadata } from "next";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Financie | Grupo Alves Imóveis",
  description: "Simule e organize o financiamento do seu imóvel com a Grupo Alves Imóveis.",
};

const steps = [
  {
    title: "Conte seus objetivos",
    text: "Fale com um de nossos corretores sobre o imóvel desejado e sua condição financeira.",
  },
  {
    title: "Simulação de crédito",
    text: "Avaliamos junto às instituições financeiras as melhores condições de financiamento para o seu perfil.",
  },
  {
    title: "Documentação",
    text: "Damos todo o suporte na organização da documentação necessária para a aprovação do crédito.",
  },
  {
    title: "Assinatura e entrega",
    text: "Acompanhamento jurídico e operacional até a assinatura do contrato e entrega das chaves.",
  },
];

export default function FinanciePage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-center text-cream md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
          {site.name}
        </p>
        <h1 className="mt-2 font-serif-display text-3xl md:text-4xl">Financie seu imóvel</h1>
        <p className="mx-auto mt-4 max-w-xl text-cream/70">
          Ajudamos você a simular e organizar as condições de financiamento com as principais
          instituições financeiras, com acompanhamento em cada etapa do processo.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-xl bg-cream p-6 ring-1 ring-black/5">
              <span className="font-serif-display text-3xl text-gold-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-serif-display text-lg text-navy-900">{step.title}</p>
              <p className="mt-2 text-sm text-navy-800/75">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-center text-cream md:py-20">
        <h2 className="font-serif-display text-2xl md:text-3xl">
          Pronto para simular seu financiamento?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-cream/70">
          Fale com um de nossos corretores e descubra as melhores condições para o imóvel dos
          seus sonhos.
        </p>
        <a
          href={whatsappLink("Olá! Gostaria de simular o financiamento de um imóvel com a Grupo Alves Imóveis.")}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-lg bg-gold-500 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
        >
          Falar com um corretor
        </a>
      </section>
    </>
  );
}
