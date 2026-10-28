import Image from "next/image";
import Link from "next/link";
import { formatPrice, properties } from "@/data/properties";
import { site, whatsappLink } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";

const HOME_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Grupo Alves Imóveis e gostaria de falar com um corretor.";

export default function Home() {
  const forSale = properties.filter((property) => property.purpose === "Venda");
  const [feature, ...rest] = forSale;
  const sideListings = rest.slice(0, 4);

  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-navy-950 md:min-h-[92vh]">
        <Image
          src="/hero/boa-viagem.jpg"
          alt="Vista aérea da orla de Boa Viagem, em Recife"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "50% 64%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/75 to-navy-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="max-w-xl">
            <h1 className="font-serif-display text-4xl leading-[1.1] text-cream sm:text-5xl md:text-6xl">
              Viver em Boa Viagem, com o endereço certo.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
              Compra, venda e aluguel de imóveis em Recife, com atendimento direto e
              assessoria completa do primeiro contato à entrega das chaves.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink(HOME_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-[#25D366] px-7 py-3 text-sm font-semibold text-white transition hover:brightness-95"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Falar no WhatsApp
              </a>
              <Link
                href="/imoveis"
                className="flex items-center gap-2 rounded-lg border border-cream/30 px-7 py-3 text-sm font-semibold text-cream transition hover:border-gold-400 hover:text-gold-400"
              >
                Ver imóveis
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 animate-bounce text-cream/50 md:block">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            <path d="M12 4v15m0 0 6-6m-6 6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {feature && (
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-serif-display text-3xl text-navy-900 md:text-4xl">
                Casas e apartamentos de alto padrão à venda
              </h2>
              <p className="mt-3 max-w-md text-navy-800/70">
                Uma curadoria enxuta, com fichas completas e fotos reais de cada imóvel.
              </p>
            </div>
            <Link
              href="/imoveis"
              className="text-sm font-semibold text-navy-900 underline-offset-4 hover:text-gold-600 hover:underline"
            >
              Ver todos os imóveis
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-12">
            <Link
              href={`/imoveis/${feature.id}`}
              className="group relative block overflow-hidden lg:col-span-7"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-950/5 md:aspect-[16/11]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-sm text-cream/70">
                    {feature.type} para {feature.purpose === "Aluguel" ? "aluguel" : "venda"} em{" "}
                    {feature.neighborhood ?? feature.location}
                  </p>
                  <h3 className="mt-1 font-serif-display text-2xl text-cream md:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream/70">{feature.stats.join(", ")}</p>
                  <p className="mt-3 font-serif-display text-xl text-gold-400">
                    {formatPrice(feature.price, feature.purpose)}
                  </p>
                </div>
              </div>
            </Link>

            <div className="flex flex-col divide-y divide-black/10 lg:col-span-5">
              {sideListings.map((property) => (
                <Link
                  key={property.id}
                  href={`/imoveis/${property.id}`}
                  className="group flex items-start gap-5 py-5 transition first:pt-0 last:pb-0 hover:bg-cream/70"
                >
                  <div className="relative h-24 w-28 flex-shrink-0 overflow-hidden bg-navy-950/5">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      sizes="112px"
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-navy-800/60">
                      {property.neighborhood ?? property.location}
                    </p>
                    <h3 className="mt-0.5 line-clamp-2 font-serif-display text-lg leading-snug text-navy-900 transition group-hover:text-gold-600">
                      {property.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-navy-900">
                      {formatPrice(property.price, property.purpose)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-navy-950 text-cream">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="border-b border-white/10 px-6 py-14 md:border-b-0 md:border-r md:px-14 md:py-20">
            <h3 className="font-serif-display text-2xl md:text-3xl">
              Quer financiar seu imóvel?
            </h3>
            <p className="mt-4 text-cream/70">
              Ajudamos você a simular e organizar as condições de financiamento com as
              principais instituições financeiras.
            </p>
            <Link
              href="/financie"
              className="mt-6 inline-flex items-center rounded-lg border border-gold-400/40 px-6 py-2.5 text-sm font-semibold text-gold-400 transition hover:bg-gold-400 hover:text-navy-950"
            >
              Simular financiamento
            </Link>
          </div>
          <div className="px-6 py-14 md:px-14 md:py-20">
            <h3 className="font-serif-display text-2xl md:text-3xl">
              Quer vender ou alugar seu imóvel?
            </h3>
            <p className="mt-4 text-cream/70">
              Cadastre seu imóvel com a gente e conte com profissionais capacitados para
              intermediar o seu negócio com segurança.
            </p>
            <Link
              href="/negocie"
              className="mt-6 inline-flex items-center rounded-lg border border-gold-400/40 px-6 py-2.5 text-sm font-semibold text-gold-400 transition hover:bg-gold-400 hover:text-navy-950"
            >
              Negocie seu imóvel
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center">
          <div className="relative h-72 overflow-hidden md:h-[26rem]">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
              alt="Atendimento Grupo Alves Imóveis"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif-display text-3xl text-navy-900 md:text-4xl">
              Transparência e atenção em cada negociação
            </h2>
            <p className="mt-6 text-navy-800/80">
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
              className="mt-7 inline-block text-sm font-semibold text-navy-900 underline-offset-4 hover:text-gold-600 hover:underline"
            >
              Conheça nossa história
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-20 text-center text-cream md:py-24">
        <Image
          src="/hero/boa-viagem.jpg"
          alt=""
          aria-hidden
          fill
          className="object-cover opacity-15"
          style={{ objectPosition: "50% 75%" }}
        />
        <div className="absolute inset-0 bg-navy-950/85" />
        <div className="relative mx-auto max-w-2xl px-6">
          <h2 className="font-serif-display text-2xl md:text-3xl">
            Fale agora com um de nossos corretores
          </h2>
          <p className="mt-3 text-cream/70">
            Estamos prontos para ajudá-lo a realizar o sonho de adquirir a casa própria.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink(HOME_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[#25D366] px-8 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/30 px-8 py-3 text-sm font-semibold text-cream transition hover:border-gold-400 hover:text-gold-400"
            >
              <InstagramIcon className="h-4 w-4" />
              Ver Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
