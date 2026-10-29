import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Financie | Grupo Alves Imóveis",
  description: "Simule e organize o financiamento do seu imóvel com a Grupo Alves Imóveis.",
};

export default function FinanciePage() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy-950 py-20 text-center text-cream md:py-28">
        <Image
          src="/hero/boa-viagem.jpg"
          alt="Vista aérea da orla de Boa Viagem, em Recife"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "50% 64%" }}
        />
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

        <div className="relative mx-auto max-w-xl px-6">
          <h1 className="font-serif-display text-3xl md:text-4xl">Financie seu imóvel</h1>
          <p className="mt-5 text-cream/70">
            Fale com um de nossos corretores pelo WhatsApp e simule as melhores condições de
            financiamento com acompanhamento em cada etapa do processo.
          </p>
          <WhatsAppButton
            href={whatsappLink("Olá! Gostaria de simular o financiamento de um imóvel com a Grupo Alves Imóveis.")}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-8 py-3 text-sm font-semibold text-white transition hover:brightness-95"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar no WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <Link href="/imoveis/alphaville-francisco-brennand" className="group relative block h-56 overflow-hidden rounded-2xl sm:h-72">
              <Image
                src="/properties/alphaville-francisco-brennand/01.jpg"
                alt="Casa à venda no Alphaville Francisco Brennand"
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </Link>
            <Link href="/imoveis/alphaville-pernambuco-2" className="group relative block h-56 overflow-hidden rounded-2xl sm:h-72">
              <Image
                src="/properties/alphaville-pernambuco-2/01.jpg"
                alt="Casa à venda no Alphaville Pernambuco 2"
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </Link>
            <Link href="/imoveis/jardim-tulipas-30-andar" className="group relative block h-56 overflow-hidden rounded-2xl sm:h-72">
              <Image
                src="/properties/jardim-tulipas-30-andar/01.jpg"
                alt="Apartamento à venda no Edf. Jardim das Tulipas"
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </Link>
          </div>
          <p className="mt-8 text-center">
            <Link
              href="/imoveis"
              className="text-sm font-semibold text-navy-900 underline-offset-4 hover:text-gold-600 hover:underline"
            >
              Ver todos os imóveis disponíveis para financiamento
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
