"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site, whatsappLink } from "@/lib/site";
import { InstagramIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { WhatsAppButton } from "@/components/whatsapp-button";

const HEADER_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Grupo Alves Imóveis e gostaria de falar com um corretor.";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-950/95 backdrop-blur text-cream shadow-lg shadow-black/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Grupo Alves Imóveis"
            width={48}
            height={48}
            className="h-12 w-12 rounded-md object-cover"
            priority
          />
          <span className="font-serif-display text-lg tracking-wide text-cream">
            GRUPO ALVES <span className="text-gold-400">IMÓVEIS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition hover:text-gold-400 ${
                  active ? "text-gold-400" : "text-cream/90"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <WhatsAppButton
            href={whatsappLink(HEADER_WHATSAPP_MESSAGE)}
            className="flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </WhatsAppButton>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <WhatsAppButton
            href={whatsappLink(HEADER_WHATSAPP_MESSAGE)}
            aria-label="Falar no WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </WhatsAppButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-cream"
            aria-label="Abrir menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-900 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium ${
                  pathname === link.href ? "text-gold-400" : "text-cream/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href={`tel:+${site.phoneWhatsapp}`} className="flex items-center gap-2 text-sm text-gold-300">
              <PhoneIcon />
              {site.phoneDisplay}
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-cream/90"
            >
              <InstagramIcon />
              Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
