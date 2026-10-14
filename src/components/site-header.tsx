"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d="M14 9h2V6h-2c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9.5c0-.28.22-.5.5-.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.8c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1l-2 2.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-950/95 backdrop-blur text-cream shadow-lg shadow-black/20">
      <div className="hidden border-b border-white/10 bg-navy-950 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <span className="text-gold-300/90">{site.creci}</span>
          <div className="flex items-center gap-5">
            <a
              href={`tel:+${site.phoneWhatsapp}`}
              className="flex items-center gap-2 text-cream/90 transition hover:text-gold-400"
            >
              <PhoneIcon />
              {site.phoneDisplay}
            </a>
            <div className="flex items-center gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-cream/90 transition hover:border-gold-400 hover:text-gold-400"
              >
                <InstagramIcon />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-cream/90 transition hover:border-gold-400 hover:text-gold-400"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

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
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-cream md:hidden"
          aria-label="Abrir menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
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
          </nav>
        </div>
      )}
    </header>
  );
}
