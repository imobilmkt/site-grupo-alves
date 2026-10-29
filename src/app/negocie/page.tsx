import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Negocie seu Imóvel | Grupo Alves Imóveis",
  description: "Cadastre seu imóvel para venda ou aluguel com a Grupo Alves Imóveis.",
};

export default function NegociePage() {
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
          <h1 className="font-serif-display text-3xl md:text-4xl">Negocie seu imóvel</h1>
          <p className="mt-5 text-cream/70">
            Conte pra gente sobre o seu imóvel pelo WhatsApp e um de nossos corretores cuida de
            toda a intermediação da venda ou locação com segurança.
          </p>
          <WhatsAppButton
            href={whatsappLink("Olá! Quero negociar meu imóvel com a Grupo Alves Imóveis e prefiro conversar direto por aqui.")}
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
            <Link href="/imoveis/jardim-tulipas-18-andar" className="group relative block h-56 overflow-hidden rounded-2xl sm:h-72">
              <Image
                src="/properties/jardim-tulipas-18-andar/01.jpg"
                alt="Apartamento à venda no Edf. Jardim das Tulipas"
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </Link>
            <Link href="/imoveis/quinta-manuel-rodrigues" className="group relative block h-56 overflow-hidden rounded-2xl sm:h-72">
              <Image
                src="/properties/quinta-manuel-rodrigues/01.jpg"
                alt="Flat para alugar no Quinta Manuel Rodrigues Residence"
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </Link>
            <Link href="/imoveis/edf-maria-ligia" className="group relative block h-56 overflow-hidden rounded-2xl sm:h-72">
              <Image
                src="/properties/edf-maria-ligia/01.jpg"
                alt="Apartamento para alugar no Edf. Maria Lígia"
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
              Ver todos os imóveis negociados pela Grupo Alves
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
