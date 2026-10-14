import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre nós | Grupo Alves Imóveis",
  description:
    "Conheça a Grupo Alves Imóveis: ética, transparência e atendimento personalizado em cada negociação.",
};

export default function SobrePage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-center text-cream md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
          {site.name}
        </p>
        <h1 className="mt-2 font-serif-display text-3xl md:text-4xl">Sobre nós</h1>
      </section>

      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="relative h-72 overflow-hidden rounded-2xl md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop"
            alt="Equipe Grupo Alves Imóveis"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-5 text-navy-800/85">
          <p>
            Precisando de uma solução ou querendo investir no mercado imobiliário, conte com
            a máxima transparência e atenção de corretor especializado.
          </p>
          <p>
            Somos especializados na compra, venda e aluguel de imóveis, prestamos toda a
            assessoria necessária à realização de uma transação segura e tranquila, com
            acompanhamento jurídico e operacional de qualidade.
          </p>
          <p>
            Reconhecidos pela ética profissional e transparência no mercado imobiliário,
            oferecemos a nossos clientes um atendimento personalizado, resultando em
            segurança e satisfação em todos os negócios realizados.
          </p>
          <p>
            Possuímos profissionais capacitados e diferenciados para uma total eficiência e
            garantia nas intermediações imobiliárias. Entre em contato, teremos o prazer em
            ajudá-lo a realizar o sonho de adquirir a casa própria.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
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
        <h2 className="font-serif-display text-2xl text-navy-900 md:text-3xl">
          Vamos conversar sobre o seu próximo imóvel?
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={whatsappLink("Olá! Vi a página Sobre nós do site e gostaria de conversar com a Grupo Alves Imóveis.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-navy-900 px-6 py-3 text-sm font-semibold text-gold-400 transition hover:bg-navy-800"
          >
            Falar no WhatsApp
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
