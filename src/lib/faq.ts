import { formatPrice, type Property } from "@/data/properties";

export type Faq = { question: string; answer: string };

function uniqueNeighborhoods(properties: Property[]) {
  return Array.from(new Set(properties.map((p) => p.neighborhood ?? p.location)));
}

// Junta itens em português ("A", "A e B" ou "A, B e C"), em vez de "A e B e C".
function joinPt(items: string[]) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} e ${items[items.length - 1]}`;
}

function uniqueTypes(properties: Property[]) {
  return Array.from(new Set(properties.map((p) => p.type)));
}

function priceRangeLabel(properties: Property[], purpose: Property["purpose"]) {
  const prices = properties.map((p) => p.price);
  const min = formatPrice(Math.min(...prices), purpose);
  const max = formatPrice(Math.max(...prices), purpose);
  return min === max ? min : `${min} a ${max}`;
}

function listProperties(properties: Property[]) {
  return properties
    .map((p) => `${p.title} (${p.neighborhood ?? p.location}, ${formatPrice(p.price, p.purpose)})`)
    .join("; ");
}

// Gera um FAQ a partir dos imóveis que realmente existem no estoque (nunca
// texto fixo), para responder com precisão perguntas de busca por
// característica ("apartamento 2 quartos boa viagem aluguel" etc.) tanto
// para quem lê a página quanto para IAs que leem o FAQPage/llms.txt.
export function buildPropertyFaqs(properties: Property[], purpose: Property["purpose"]): Faq[] {
  if (properties.length === 0) return [];

  const faqs: Faq[] = [];
  const verb = purpose === "Aluguel" ? "alugar" : "comprar";
  const neighborhoods = uniqueNeighborhoods(properties);
  const neighborhoodLabel = joinPt(neighborhoods);

  faqs.push({
    question: `Quais imóveis a Grupo Alves Imóveis tem para ${verb}?`,
    answer: `A Grupo Alves Imóveis tem ${properties.length} imóve${
      properties.length === 1 ? "l" : "is"
    } para ${verb} em ${neighborhoodLabel}: ${joinPt(uniqueTypes(properties))
      .toLowerCase()}, de ${priceRangeLabel(properties, purpose)}.`,
  });

  for (const neighborhood of neighborhoods) {
    const inNeighborhood = properties.filter(
      (p) => (p.neighborhood ?? p.location) === neighborhood
    );
    if (inNeighborhood.length === properties.length) continue; // já coberto pela pergunta geral
    faqs.push({
      question: `Tem imóvel para ${verb} em ${neighborhood}?`,
      answer: `Sim. ${listProperties(inNeighborhood)}.`,
    });
  }

  const bedroomCounts = Array.from(
    new Set(properties.map((p) => p.bedrooms).filter((n): n is number => Boolean(n)))
  ).sort((a, b) => a - b);

  for (const bedrooms of bedroomCounts) {
    const matches = properties.filter((p) => p.bedrooms === bedrooms);
    faqs.push({
      question: `Tem imóvel de ${bedrooms} quarto${bedrooms > 1 ? "s" : ""} para ${verb} em ${neighborhoodLabel}?`,
      answer: `Sim. ${listProperties(matches)}.`,
    });
  }

  if (purpose === "Aluguel") {
    const furnished = properties.filter((p) => p.furnished);
    if (furnished.length > 0) {
      faqs.push({
        question: `Tem apartamento mobiliado para alugar em ${neighborhoodLabel}?`,
        answer: `Sim. ${listProperties(furnished)}.`,
      });
    }
  }

  faqs.push({
    question: `Qual a faixa de preço dos imóveis para ${verb} da Grupo Alves Imóveis?`,
    answer: `Os imóveis para ${verb} da Grupo Alves Imóveis variam de ${priceRangeLabel(
      properties,
      purpose
    )}, dependendo do bairro, metragem e número de quartos.`,
  });

  return faqs;
}
