export const site = {
  name: "Grupo Alves Imóveis",
  creci: "CRECI 21971J",
  cnpj: "54.020.041/0001-79",
  phoneDisplay: "(81) 99619-5985",
  phoneWhatsapp: "5581996195985",
  address: {
    line1: "Rua Padre Carapuceiro, 752 - Sala 1308",
    line2: "Boa Viagem - Recife/PE, 51020-280",
    mapsQuery: "Rua Padre Carapuceiro, 752, Boa Viagem, Recife - PE, 51020-280",
  },
  social: {
    instagram: "https://instagram.com/grupoalvesimoveis",
    facebook: "https://facebook.com/profile.php?id=61577472453841",
  },
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.phoneWhatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
  { href: "/financie", label: "Financie" },
  { href: "/negocie", label: "Negocie seu Imóvel" },
];
