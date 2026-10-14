import Image from "next/image";
import Link from "next/link";
import { SearchForm } from "@/components/search-form";
import { PropertyCard } from "@/components/property-card";
import { properties } from "@/data/properties";
import { whatsappLink } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1920&auto=format&fit=crop"
            alt="Edifícios residenciais"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/85 to-navy-950" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-16 pt-20 text-center md:pb-24 md:pt-28">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
            Grupo Alves Imóveis
          </p>
          <h1 className="max-w-3xl font-serif-display text-3xl leading-tight text-cream md:text-5xl">
            O imóvel que você procura e o{" "}
            <span className="gold-gradient-text">atendimento que você merece</span>.
          </h1>
          <p className="mt-5 max-w-xl text-cream/70">
            Compra, venda e aluguel de imóveis em Recife e região, com assessoria completa
            em cada etapa do negócio.
          </p>

          <div className="mt-10 w-full max-w-5xl">
            <SearchForm />
          </div>
        </div>
      </section>

      <section id="imoveis" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold-600">
              Seleção exclusiva
            </p>
            <h2 className="mt-1 font-serif-display text-3xl text-navy-900">
              Imóveis em destaque
            </h2>
          </div>
          <Link
            href="/contato"
            className="text-sm font-semibold text-navy-900 underline-offset-4 hover:text-gold-600 hover:underline"
          >
            Ver todos os imóveis →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="relative h-72 overflow-hidden rounded-2xl md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
              alt="Atendimento Grupo Alves Imóveis"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold-600">
              Sobre nós
            </p>
            <h2 className="mt-1 font-serif-display text-3xl text-navy-900">
              Transparência e atenção em cada negociação
            </h2>
            <p className="mt-5 text-navy-800/80">
              Somos especializados na compra, venda e aluguel de imóveis, prestando toda a
              assessoria necessária para uma transação segura e tranquila, com acompanhamento
              jurídico e operacional de qualidade.
            </p>
            <p className="mt-4 text-navy-800/80">
              Reconhecidos pela ética profissional e transparência no mercado imobiliário,
              oferecemos atendimento personalizado que resulta em segurança e satisfação em
              todos os negócios realizados.
            </p>
            <Link
              href="/sobre"
              className="mt-6 inline-block rounded-lg bg-navy-900 px-6 py-3 text-sm font-semibold text-gold-400 transition hover:bg-navy-800"
            >
              Conheça nossa história
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-navy-900 p-10 text-cream">
            <h3 className="font-serif-display text-2xl">Quer financiar seu imóvel?</h3>
            <p className="mt-3 text-cream/70">
              Ajudamos você a simular e organizar as condições de financiamento com as
              principais instituições financeiras.
            </p>
            <Link
              href="/financie"
              className="mt-6 inline-block rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
            >
              Simular financiamento
            </Link>
          </div>
          <div className="rounded-2xl bg-gold-500 p-10 text-navy-950">
            <h3 className="font-serif-display text-2xl">Quer vender ou alugar seu imóvel?</h3>
            <p className="mt-3 text-navy-950/80">
              Cadastre seu imóvel com a gente e conte com profissionais capacitados para
              intermediar o seu negócio com segurança.
            </p>
            <Link
              href="/negocie"
              className="mt-6 inline-block rounded-lg bg-navy-950 px-6 py-3 text-sm font-semibold text-gold-400 transition hover:bg-navy-800"
            >
              Negocie seu imóvel
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-center text-cream">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif-display text-2xl md:text-3xl">
            Fale agora com um de nossos corretores
          </h2>
          <p className="mt-3 text-cream/70">
            Estamos prontos para ajudá-lo a realizar o sonho de adquirir a casa própria.
          </p>
          <a
            href={whatsappLink("Olá! Vim pelo site da Grupo Alves Imóveis e gostaria de falar com um corretor.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-lg bg-gold-500 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
