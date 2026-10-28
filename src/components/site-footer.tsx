import Image from "next/image";
import Link from "next/link";
import { navLinks, site, whatsappLink } from "@/lib/site";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons";

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

          <a
            href={whatsappLink("Olá! Vim pelo site da Grupo Alves Imóveis e gostaria de falar com um corretor.")}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex w-fit items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar no WhatsApp
          </a>

          <div className="mt-4 flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-gold-400 hover:text-gold-400"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:border-gold-400 hover:text-gold-400"
            >
              <FacebookIcon className="h-4 w-4" />
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
