import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Grupo Alves Imóveis"
              width={48}
              height={48}
              className="h-12 w-12 rounded-md object-cover"
            />
            <div>
              <p className="font-serif-display text-lg text-cream">Grupo Alves Imóveis</p>
              <p className="text-xs text-gold-300/80">{site.creci}</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            Compra, venda e aluguel de imóveis em Recife e região, com a máxima
            transparência e atenção de corretor especializado.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold-400">
            Navegação
          </p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-gold-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold-400">
            Contato
          </p>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>{site.address.line1}</li>
            <li>{site.address.line2}</li>
            <li>
              <a href={`tel:+${site.phoneWhatsapp}`} className="transition hover:text-gold-400">
                {site.phoneDisplay}
              </a>
            </li>
            <li>CNPJ: {site.cnpj}</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline-offset-4 hover:text-gold-400 hover:underline"
            >
              Instagram
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline-offset-4 hover:text-gold-400 hover:underline"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="mx-auto max-w-7xl px-6 text-center text-xs text-cream/50">
          © 2026 Grupo Alves Imóveis | {site.creci} — Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
