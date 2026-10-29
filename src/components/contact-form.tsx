"use client";

import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      `Nome: ${name}`,
      email && `E-mail: ${email}`,
      phone && `Telefone: ${phone}`,
      "",
      message,
    ].filter(Boolean);
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion();
    }
    window.open(whatsappLink(lines.join("\n")), "_blank", "noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-navy-700">
          Nome
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-black/10 px-3 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-500"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-navy-700">
            E-mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-black/10 px-3 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-500"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-navy-700">
            Telefone
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border border-black/10 px-3 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-500"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-navy-700">
          Mensagem
        </label>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-black/10 px-3 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-500"
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-navy-900 px-6 py-3 text-sm font-semibold text-gold-400 transition hover:bg-navy-800"
      >
        Enviar pelo WhatsApp
      </button>
      {sent && (
        <p className="text-sm text-navy-700">
          Abrimos o WhatsApp com sua mensagem pronta para envio.
        </p>
      )}
    </form>
  );
}
