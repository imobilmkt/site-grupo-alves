export type Property = {
  id: string;
  title: string;
  location: string;
  address?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  type: "Casa" | "Apartamento" | "Lote/Terreno";
  purpose: "Venda" | "Aluguel";
  price: number;
  priceLabel?: string;
  priceNote?: string;
  areaM2?: number;
  bedrooms?: number;
  bathrooms?: number;
  parkingSpaces?: number;
  furnished?: boolean;
  stats: string[];
  highlights: string[];
  image: string;
  images?: string[];
  reference: string;
  instagramUrl?: string;
};

// Imóveis cadastrados para as campanhas de Google Ads, a partir das fotos
// e fichas técnicas do Google Drive da Grupo Alves Imóveis.
export const properties: Property[] = [
  {
    id: "icon-design-living",
    title: "Studio mobiliado no Edf. Icon Design Living",
    location: "Boa Viagem, Recife - PE",
    address: "Av. Engenheiro Domingos Ferreira, 2448 - Boa Viagem, Recife - PE, 51020-030",
    neighborhood: "Boa Viagem",
    city: "Recife",
    state: "PE",
    postalCode: "51020-030",
    type: "Apartamento",
    purpose: "Aluguel",
    price: 9000,
    areaM2: 58,
    bedrooms: 2,
    parkingSpaces: 1,
    furnished: true,
    stats: ["58 m² úteis", "2 quartos", "1 vaga fixa", "Mobiliado"],
    highlights: [
      "58 m² de área útil, com armários fixos",
      "2 quartos",
      "Totalmente mobiliado, com todos os utensílios",
      "1 vaga de garagem fixa por unidade",
      "Empreendimento com coworking, sala de jogos, área gourmet, horta, pet place, academia, área de grill, piscina e playground",
      "Ano de construção 2026 · Construtora Gabriel Bacelar",
    ],
    image: "/properties/icon-design-living/01.jpg",
    images: Array.from({ length: 13 }, (_, i) => `/properties/icon-design-living/${String(i + 1).padStart(2, "0")}.jpg`),
    reference: "GA008",
  },
  {
    id: "studio-portal-dos-corais",
    title: "Studio mobiliado no Edf. Portal dos Corais",
    location: "Segundo Jardim, Boa Viagem - Recife/PE",
    address: "Segundo Jardim, Boa Viagem - Recife/PE · A poucos passos da praia",
    neighborhood: "Boa Viagem",
    city: "Recife",
    state: "PE",
    type: "Apartamento",
    purpose: "Aluguel",
    price: 5500,
    priceNote: "Com taxas + caução equivalente a 3 meses de locação",
    areaM2: 54,
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    furnished: true,
    stats: ["54 m²", "Andar alto", "2 quartos (1 suíte)", "1 vaga rotativa"],
    highlights: [
      "54 m² bem distribuídos, em andar alto",
      "2 quartos, sendo 1 suíte com closet",
      "Banheiro social",
      "Cozinha americana",
      "Apartamento mobiliado",
      "1 vaga de garagem rotativa",
      "Lazer do condomínio: piscina, sauna, academia, salão de festas, lavanderia e serviço de camareira",
    ],
    image: "/properties/studio-portal-dos-corais/01.jpg",
    images: Array.from({ length: 20 }, (_, i) => `/properties/studio-portal-dos-corais/${String(i + 1).padStart(2, "0")}.jpg`),
    reference: "GA009",
  },
  {
    id: "edf-maria-ligia",
    title: "Apartamento no Edf. Maria Lígia — 1ª locação",
    location: "Boa Viagem, Recife - PE",
    address: "Rua Antônio Falcão, 979 - Boa Viagem, Recife - PE, 51020-240",
    neighborhood: "Boa Viagem",
    city: "Recife",
    state: "PE",
    postalCode: "51020-240",
    type: "Apartamento",
    purpose: "Aluguel",
    price: 5000,
    priceNote: "Caução ou fiador",
    areaM2: 59,
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    stats: ["59 m²", "2 quartos (1 suíte)", "2 banheiros", "1 vaga"],
    highlights: [
      "59 m², sendo 2 quartos, 1 suíte e 2 banheiros",
      "Varanda",
      "1ª locação",
      "1 vaga de garagem semi-coberta",
      "Gás incluso · água individual",
      "Construtora Queiroz Galvão · construção 2018 · síndico profissional · 3 elevadores",
      "Lazer: academia, sala de pilates completa, espaço gourmet, salão de festas, piscina adulto e infantil, sauna, churrasqueira, playground, salão de jogos, minimercado 24h e gerador",
    ],
    image: "/properties/edf-maria-ligia/01.jpg",
    images: Array.from({ length: 17 }, (_, i) => `/properties/edf-maria-ligia/${String(i + 1).padStart(2, "0")}.jpg`),
    reference: "GA010",
  },
  {
    id: "quinta-manuel-rodrigues",
    title: "Flat mobiliado no Quinta Manuel Rodrigues Residence",
    location: "Boa Viagem, Recife - PE",
    address: "Rua Pedro Américo Galvão, 129 - Boa Viagem, Recife - PE, 51011-560",
    neighborhood: "Boa Viagem",
    city: "Recife",
    state: "PE",
    postalCode: "51011-560",
    type: "Apartamento",
    purpose: "Aluguel",
    price: 5500,
    areaM2: 53,
    bedrooms: 2,
    furnished: true,
    stats: ["53 m²", "2 quartos mobiliados", "9º andar", "Pronto para morar"],
    highlights: [
      "2 quartos mobiliados, pronto para morar",
      "9º andar, 53 m²",
      "Excelente localização em Boa Viagem, perto da praia, supermercados, restaurantes, academias e farmácias",
      "Lazer do condomínio: piscina, salão de festas, lavanderia e serviço de camareira (contratação à parte)",
    ],
    image: "/properties/quinta-manuel-rodrigues/01.jpg",
    images: Array.from({ length: 16 }, (_, i) => `/properties/quinta-manuel-rodrigues/${String(i + 1).padStart(2, "0")}.jpg`),
    reference: "GA011",
  },
  {
    id: "alphaville-francisco-brennand",
    title: "Casa de alto padrão no Alphaville Francisco Brennand",
    location: "Alphaville Francisco Brennand, Recife - PE",
    neighborhood: "Alphaville Francisco Brennand",
    city: "Recife",
    state: "PE",
    type: "Casa",
    purpose: "Venda",
    price: 3300000,
    priceNote: "Condomínio R$ 1.300/mês",
    areaM2: 371,
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 2,
    furnished: false,
    stats: ["663 m² de terreno", "371 m² construídos", "4 suítes", "Piscina aquecida"],
    highlights: [
      "Terreno de 663 m² voltado para área de mata, com privacidade e integração com a natureza",
      "Energia solar com geração própria de aproximadamente 2.000 kWh",
      "Térreo: garagem coberta para 2 carros, sala ampla com excelente iluminação natural, lavabo, cozinha completa com despensa",
      "Área de lazer com piscina aquecida, hidromassagem e paisagismo",
      "Área livre nos fundos com potencial de ampliação (gourmet, salão ou novos ambientes)",
      "1º andar com 4 suítes, sendo 1 master com closet e 1 com varanda, e sala de apoio/estar íntimo",
      "Condomínio com academia, quadra de tênis, quadra poliesportiva, campo de futebol, salão de festas, salão de jogos, restaurante, lagos para pesca, trilha ecológica e quiosques gourmet",
    ],
    image: "/properties/alphaville-francisco-brennand/01.jpg",
    images: Array.from({ length: 16 }, (_, i) => `/properties/alphaville-francisco-brennand/${String(i + 1).padStart(2, "0")}.jpg`),
    reference: "GA012",
  },
  {
    id: "alphaville-pernambuco-2",
    title: "Casa exclusiva no Alphaville Pernambuco 2",
    location: "Vargem Fria, Jaboatão dos Guararapes - PE",
    address: "Rodovia BR 232, Km 17.1 - Vargem Fria, Jaboatão dos Guararapes - PE",
    neighborhood: "Vargem Fria",
    city: "Jaboatão dos Guararapes",
    state: "PE",
    type: "Casa",
    purpose: "Venda",
    price: 2200000,
    areaM2: 289,
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 4,
    furnished: false,
    stats: ["404 m² de terreno", "289 m² construídos", "4 suítes", "4 vagas de garagem"],
    highlights: [
      "289 m² de área construída em terreno de 404 m²",
      "4 suítes, sendo 1 master com closet e varanda",
      "4 vagas de garagem, sendo 2 cobertas",
      "Sala com pé-direito duplo",
      "Cozinha integrada com despensa",
      "Área gourmet com piscina",
      "Escritório + sala de TV ou jogos",
      "Varanda com vista para a piscina",
    ],
    image: "/properties/alphaville-pernambuco-2/01.jpg",
    images: Array.from({ length: 16 }, (_, i) => `/properties/alphaville-pernambuco-2/${String(i + 1).padStart(2, "0")}.jpg`),
    reference: "GA013",
  },
  {
    id: "jardim-tulipas-30-andar",
    title: "Apartamento no Edf. Jardim das Tulipas — 30º andar",
    location: "Boa Viagem, Recife - PE",
    address: "Rua Professor Júlio Ferreira de Melo, 562 - Apartamento 3002 - Boa Viagem, Recife - PE, 51020-231",
    neighborhood: "Boa Viagem",
    city: "Recife",
    state: "PE",
    postalCode: "51020-231",
    type: "Apartamento",
    purpose: "Venda",
    price: 3500000,
    areaM2: 185,
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 3,
    furnished: false,
    stats: ["185 m² privativos", "30º andar", "4 suítes na planta original", "3 vagas de garagem"],
    highlights: [
      "185 m² de área privativa no 30º andar, com excelente ventilação e iluminação natural",
      "Ampla sala de estar e jantar, ideal para receber",
      "4 suítes na planta original",
      "Suíte de serviço com dependência completa",
      "Varanda gourmet, lavabo e armários planejados",
      "3 vagas de garagem no subsolo",
      "Condomínio com portaria blindada, piscina aquecida, sauna, salão de festas, espaço gourmet, mini campo de futebol, bicicletário e mercado de conveniência",
    ],
    image: "/properties/jardim-tulipas-30-andar/01.jpg",
    images: Array.from({ length: 16 }, (_, i) => `/properties/jardim-tulipas-30-andar/${String(i + 1).padStart(2, "0")}.jpg`),
    reference: "GA014",
  },
  {
    id: "jardim-tulipas-18-andar",
    title: "Apartamento mobiliado no Edf. Jardim das Tulipas — 18º andar",
    location: "Boa Viagem, Recife - PE",
    address: "Rua Professor Júlio Ferreira de Melo, 562 - Boa Viagem, Recife - PE",
    neighborhood: "Boa Viagem",
    city: "Recife",
    state: "PE",
    type: "Apartamento",
    purpose: "Venda",
    price: 3500000,
    priceNote: "Condomínio R$ 1.700/mês e IPTU R$ 9.000/ano",
    areaM2: 185,
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 3,
    furnished: true,
    stats: ["185 m² privativos", "18º andar", "2 suítes", "Mobiliado"],
    highlights: [
      "Vendido porteira fechada, incluindo móveis planejados, mobiliário e eletrodomésticos de alto padrão",
      "185 m² de área privativa no 18º andar, com excelente ventilação e iluminação natural",
      "Ampla sala de estar e jantar com piso em porcelanato",
      "2 suítes, sendo uma ampla suíte master com hidromassagem e ar-condicionado",
      "Possibilidade de conversão da suíte master em uma terceira suíte",
      "Suíte de serviço com dependência completa",
      "Varanda gourmet totalmente equipada, com churrasqueira, adega climatizada, cervejeira e lavabo",
      "3 vagas de garagem, sendo 2 no subsolo e 1 coberta no térreo",
      "Condomínio com portaria blindada, piscina aquecida, sauna, salão de festas, espaço gourmet, mini campo de futebol, bicicletário e mercado de conveniência",
    ],
    image: "/properties/jardim-tulipas-18-andar/01.jpg",
    images: Array.from({ length: 8 }, (_, i) => `/properties/jardim-tulipas-18-andar/${String(i + 1).padStart(2, "0")}.jpg`),
    reference: "GA015",
  },
];

export function formatPrice(value: number, purpose: Property["purpose"]) {
  const formatted = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
  return purpose === "Aluguel" ? `${formatted}/mês` : formatted;
}

export function getPropertyById(id: string) {
  return properties.find((property) => property.id === id);
}

// Resumo em linguagem natural, gerado a partir dos campos estruturados do
// imóvel (quartos, banheiros, área, vagas, preço). Usado na página do imóvel
// e no JSON-LD para facilitar a leitura e a recomendação por buscadores e IAs.
export function getPropertySummary(property: Property) {
  const parts: string[] = [];

  const place = property.address ?? property.location;
  parts.push(`${property.type} para ${property.purpose.toLowerCase()} em ${place}.`);

  const details: string[] = [];
  if (property.areaM2) details.push(`${property.areaM2} m²`);
  if (property.bedrooms) {
    details.push(`${property.bedrooms} ${property.bedrooms === 1 ? "quarto" : "quartos"}`);
  }
  if (property.bathrooms) {
    details.push(`${property.bathrooms} ${property.bathrooms === 1 ? "banheiro" : "banheiros"}`);
  }
  if (property.parkingSpaces) {
    details.push(`${property.parkingSpaces} ${property.parkingSpaces === 1 ? "vaga de garagem" : "vagas de garagem"}`);
  }
  if (property.furnished) details.push("mobiliado");

  if (details.length > 0) {
    parts.push(`Tem ${details.join(", ")}.`);
  }

  const priceLabel = property.priceLabel ? `${property.priceLabel} ` : "";
  parts.push(`Valor: ${priceLabel}${formatPrice(property.price, property.purpose)}.`);

  return parts.join(" ");
}
