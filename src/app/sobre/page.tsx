import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Sobre nós | Grupo Alves Imóveis",
  description:
    "Conheça a Grupo Alves Imóveis: ética, transparência e atendimento personalizado em cada negociação.",
};

export default function SobrePage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-center text-cream md:py-20">
        <Image
          src="/logo.jpeg"
          alt="Grupo Alves Imóveis"
          width={120}
          height={120}
          className="mx-auto h-24 w-24 rounded-2xl object-cover md:h-28 md:w-28"
          priority
        />
        <h1 className="mt-6 font-serif-display text-3xl md:text-4xl">Sobre nós</h1>
        <p className="mx-auto mt-3 max-w-md text-cream/70">
          Corretores especializados em Recife e região, com atenção a cada detalhe do negócio.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="relative h-72 overflow-hidden rounded-2xl md:h-96">
          <Image
            src="/properties/alphaville-francisco-brennand/01.jpg"
            alt="Casa negociada pela Grupo Alves Imóveis"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif-display text-2xl text-navy-900 md:text-3xl">Quem somos</h2>
          <p className="mt-4 text-navy-800/85">
            Precisando de uma solução ou querendo investir no mercado imobiliário, conte com a
            máxima transparência e atenção de corretor especializado.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 pb-16 md:grid-cols-2 md:items-center md:pb-24">
        <div className="relative h-72 overflow-hidden rounded-2xl md:order-2 md:h-96">
          <Image
            src="/properties/jardim-tulipas-18-andar/01.jpg"
            alt="Apartamento negociado pela Grupo Alves Imóveis"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:order-1">
          <h2 className="font-serif-display text-2xl text-navy-900 md:text-3xl">
            Como trabalhamos
          </h2>
          <p className="mt-4 text-navy-800/85">
            Somos especializados na compra, venda e aluguel de imóveis, prestamos toda a
            assessoria necessária à realização de uma transação segura e tranquila, com
            acompanhamento jurídico e operacional de qualidade.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-xl">
            <h2 className="font-serif-display text-2xl text-navy-900 md:text-3xl">
              Imóveis que já passaram por nós
            </h2>
            <p className="mt-4 text-navy-800/85">
              Reconhecidos pela ética profissional e transparência no mercado imobiliário,
              oferecemos a nossos clientes um atendimento personalizado, resultando em segurança
              e satisfação em todos os negócios realizados.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="relative h-56 overflow-hidden rounded-2xl sm:h-72">
              <Image
                src="/properties/alphaville-pernambuco-2/01.jpg"
                alt="Casa à venda no Alphaville Pernambuco 2"
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-56 overflow-hidden rounded-2xl sm:h-72">
              <Image
                src="/properties/jardim-tulipas-30-andar/01.jpg"
                alt="Apartamento à venda no Edf. Jardim das Tulipas"
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-56 overflow-hidden rounded-2xl sm:h-72">
              <Image
                src="/properties/studio-portal-dos-corais/01.jpg"
                alt="Apartamento para alugar no Edf. Portal dos Corais"
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 sm:grid-cols-3">
          {[
            { title: "Transparência", text: "Negociações claras do início ao fim." },
            { title: "Assessoria completa", text: "Acompanhamento jurídico e operacional." },
            { title: "Atendimento próximo", text: "Corretores especializados para cada caso." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5">
              <p className="font-serif-display text-lg text-navy-900">{item.title}</p>
              <p className="mt-2 text-sm text-navy-800/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 text-center md:py-20">
        <h2 className="mx-auto max-w-xl font-serif-display text-2xl text-navy-900 md:text-3xl">
          Possuímos profissionais capacitados e diferenciados para uma total eficiência e
          garantia nas intermediações imobiliárias.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-navy-800/70">
          Entre em contato, teremos o prazer em ajudá-lo a realizar o sonho de adquirir a casa
          própria.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <WhatsAppButton
            href={whatsappLink("Olá! Vi a página Sobre nós do site e gostaria de conversar com a Grupo Alves Imóveis.")}
            className="flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar no WhatsApp
          </WhatsAppButton>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-navy-900 px-6 py-3 text-sm font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-gold-400"
          >
            <InstagramIcon className="h-4 w-4" />
            Ver Instagram
          </a>
          <Link
            href="/contato"
            className="rounded-lg border border-navy-900 px-6 py-3 text-sm font-semibold text-navy-900 transition hover:bg-navy-900 hover:text-gold-400"
          >
            Ver outros contatos
          </Link>
        </div>
      </section>
    </>
  );
}
