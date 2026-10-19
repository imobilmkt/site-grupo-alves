export type Property = {
  id: string;
  title: string;
  location: string;
  type: "Casa" | "Apartamento" | "Lote/Terreno";
  purpose: "Venda" | "Aluguel";
  price: number;
  priceLabel?: string;
  stats: string[];
  highlights: string[];
  image: string;
  reference: string;
  instagramUrl: string;
};

// Imóveis reais cadastrados a partir da planilha de controle de tráfego
// e das legendas/fotos do Instagram @grupoalvesimoveis.
export const properties: Property[] = [
  {
    id: "alphaville-pernambuco-2",
    title: "Casa exclusiva no Alphaville Pernambuco 2",
    location: "Alphaville Pernambuco 2",
    type: "Casa",
    purpose: "Venda",
    price: 2200000,
    stats: ["289 m² construídos", "Terreno 404 m²", "4 suítes", "4 vagas"],
    highlights: [
      "4 suítes, sendo 1 master com closet e varanda",
      "Sala com pé-direito duplo",
      "Cozinha integrada com despensa",
      "Área gourmet com piscina",
      "Varanda com vista para a piscina",
      "Escritório e sala de TV ou jogos",
      "4 vagas de garagem, sendo 2 cobertas",
    ],
    image: "/properties/alphaville-pernambuco-2.jpg",
    reference: "GA001",
    instagramUrl: "https://www.instagram.com/reel/DecUjMkhycf/",
  },
  {
    id: "castelo-de-blois",
    title: "Apartamento no Edifício Castelo de Blois",
    location: "Boa Viagem, Recife - PE",
    type: "Apartamento",
    purpose: "Venda",
    price: 670000,
    stats: ["92 m²", "3 quartos + dependência", "1 suíte", "2 vagas"],
    highlights: [
      "03 quartos + dependência completa",
      "01 suíte + WC social",
      "Varanda",
      "Armários fixos na cozinha, quartos e banheiros",
      "Condomínio com piscina, salão de festas, playground e campinho",
    ],
    image: "/properties/castelo-de-blois.jpg",
    reference: "GA002",
    instagramUrl: "https://www.instagram.com/p/Dd9peJlj7V9/",
  },
  {
    id: "jardim-das-tulipas",
    title: "Apartamento alto padrão no Edf. Jardim das Tulipas",
    location: "Boa Viagem, Recife - PE",
    type: "Apartamento",
    purpose: "Venda",
    price: 3500000,
    stats: ["185 m² privativos", "18º andar", "2 suítes", "3 vagas"],
    highlights: [
      "18º andar, 185 m² de área privativa",
      "Suíte master com hidromassagem e ar-condicionado Hi-Wall/K7",
      "Varanda gourmet equipada: churrasqueira, adega, cervejeira e lavabo",
      "3 vagas de garagem, sendo 2 no subsolo e 1 coberta no térreo",
      "Piscina aquecida, sauna, salão de festas, espaço gourmet, mini campo e portaria blindada",
      "Condomínio R$ 1.700/mês · IPTU anual R$ 9.000,00",
    ],
    image: "/properties/jardim-das-tulipas.jpg",
    reference: "GA003",
    instagramUrl: "https://www.instagram.com/reel/DdEQ5ngOs2b/",
  },
  {
    id: "costa-dos-diamantes",
    title: "Apartamento em andar alto, semi mobiliado",
    location: "Boa Viagem, Recife - PE",
    type: "Apartamento",
    purpose: "Venda",
    price: 1200000,
    stats: ["92 m²", "3 quartos", "1 suíte", "2 vagas"],
    highlights: [
      "Andar alto, semi mobiliado",
      "3 quartos, sendo 1 suíte",
      "2 vagas de garagem cobertas",
      "Dependência completa",
      "Condomínio com piscina, academia, parquinho, salão de festas, mini campo e portaria 24h",
      "Condomínio R$ 1.135/mês, com água e gás inclusos",
    ],
    image: "/properties/costa-dos-diamantes.jpg",
    reference: "GA004",
    instagramUrl: "https://www.instagram.com/p/DeJpnztFvTY/",
  },
  {
    id: "alphaville-pernambuco-2-casa-2",
    title: "Casa nova no Alphaville Pernambuco 2",
    location: "Alphaville Pernambuco 2",
    type: "Casa",
    purpose: "Venda",
    price: 2450000,
    stats: ["305 m² construídos", "Terreno 403 m²", "5 suítes", "4 vagas"],
    highlights: [
      "Casa recém-construída e nunca habitada",
      "Lote com 403 m² e 305 m² de área construída",
      "5 suítes, sendo 1 no térreo",
      "Suíte master com varanda",
      "Sala com pé-direito duplo",
      "Cozinha integrada à área gourmet com piscina",
      "4 vagas de garagem, sendo 2 cobertas",
    ],
    image: "/properties/alphaville-pernambuco-2-casa2.jpg",
    reference: "GA005",
    instagramUrl: "https://www.instagram.com/reel/DerI2LDhiNY/",
  },
  {
    id: "casa-moser",
    title: "Casa Moser — Lançamento na Av. Rosa e Silva",
    location: "Av. Rosa e Silva, Recife - PE",
    type: "Apartamento",
    purpose: "Venda",
    price: 781637,
    priceLabel: "A partir de",
    stats: ["36 a 65 m²", "1 ou 2 quartos", "Pronto para morar"],
    highlights: [
      "Pronto para morar, na Av. Rosa e Silva",
      "Apartamentos de 36 a 65 m², com 1 ou 2 quartos",
      "Projeto de interiores assinado pelo Studio M2 Arquitetas",
      "Parceria entre Grupo Alves Imóveis e Moura Dubeux",
    ],
    image: "/properties/casa-moser.jpg",
    reference: "GA006",
    instagramUrl: "https://www.instagram.com/p/DeHE3TmFj_2/",
  },
  {
    id: "lote-alphaville-francisco-brennand",
    title: "Lote à venda no Alphaville Francisco Brennand",
    location: "Alphaville Francisco Brennand",
    type: "Lote/Terreno",
    purpose: "Venda",
    price: 450000,
    stats: ["1.027 m²", "Lote de esquina"],
    highlights: [
      "Excelente oportunidade para construir em condomínio procurado de Recife",
      "Lote de esquina",
      "Poste já instalado",
      "1.027 m² de área",
    ],
    image: "/properties/lote-alphaville-francisco-brennand.jpg",
    reference: "GA007",
    instagramUrl: "https://www.instagram.com/reel/DehgIoShcyb/",
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
