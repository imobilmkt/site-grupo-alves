import type { Faq } from "@/lib/faq";

export function FaqSection({ title, faqs }: { title: string; faqs: Faq[] }) {
  if (faqs.length === 0) return null;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-cream py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif-display text-2xl text-navy-900 md:text-3xl">{title}</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5"
            >
              <summary className="cursor-pointer list-none font-medium text-navy-900 marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="shrink-0 text-gold-600 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-navy-800/80">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
