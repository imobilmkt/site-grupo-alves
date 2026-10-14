export type Property = {
  id: string;
  title: string;
  neighborhood: string;
  city: string;
  type: "Apartamento" | "Casa" | "Comercial" | "Terreno";
  purpose: "Venda" | "Aluguel";
  price: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  area: number;
  image: string;
  reference: string;
};

// Placeholder listings — replace with real inventory data.
export const properties: Property[] = [
  {
    id: "1",
    title: "Apartamento alto padrão com vista mar",
    neighborhood: "Boa Viagem",
    city: "Recife - PE",
    type: "Apartamento",
    purpose: "Venda",
    price: 980000,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    area: 120,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    reference: "GA001",
  },
  {
    id: "2",
    title: "Casa em condomínio fechado",
    neighborhood: "Piedade",
    city: "Jaboatão dos Guararapes - PE",
    type: "Casa",
    purpose: "Venda",
    price: 750000,
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    area: 210,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    reference: "GA002",
  },
  {
    id: "3",
    title: "Apartamento compacto e bem localizado",
    neighborhood: "Madalena",
    city: "Recife - PE",
    type: "Apartamento",
    purpose: "Aluguel",
    price: 2400,
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: 65,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    reference: "GA003",
  },
  {
    id: "4",
    title: "Sala comercial em torre corporativa",
    neighborhood: "Boa Viagem",
    city: "Recife - PE",
    type: "Comercial",
    purpose: "Aluguel",
    price: 3200,
    bedrooms: 0,
    bathrooms: 1,
    parking: 1,
    area: 45,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    reference: "GA004",
  },
  {
    id: "5",
    title: "Cobertura duplex com terraço gourmet",
    neighborhood: "Casa Forte",
    city: "Recife - PE",
    type: "Apartamento",
    purpose: "Venda",
    price: 1450000,
    bedrooms: 4,
    bathrooms: 5,
    parking: 3,
    area: 280,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    reference: "GA005",
  },
  {
    id: "6",
    title: "Casa térrea com quintal amplo",
    neighborhood: "Boa Viagem",
    city: "Recife - PE",
    type: "Casa",
    purpose: "Venda",
    price: 620000,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: 150,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
    reference: "GA006",
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
