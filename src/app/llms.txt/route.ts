import { formatPrice, properties } from "@/data/properties";
import { site, siteUrl } from "@/lib/site";

// Arquivo seguindo a convenção llms.txt (https://llmstxt.org): um resumo em
// Markdown, pensado para ser lido por assistentes de IA, com os dados centrais
// do negócio e de cada imóvel (quartos, área, preço, localização). Gerado a
// partir dos mesmos dados usados nas páginas do site, então nunca fica
// desatualizado.
function buildLlmsTxt() {
  const lines: string[] = [];

  lines.push(`# ${site.name}`);
  lines.push("");
  lines.push(
    `> Imobiliária em Recife - PE (${site.creci}). Compra, venda e aluguel de casas, apartamentos e terrenos, com atendimento personalizado em cada etapa do negócio.`
  );
  lines.push("");
  lines.push(`- Site: ${siteUrl}`);
  lines.push(`- Telefone/WhatsApp: ${site.phoneDisplay}`);
  lines.push(`- Endereço: ${site.address.line1}, ${site.address.line2}`);
  lines.push(`- Instagram: ${site.social.instagram}`);
  lines.push("");
  lines.push("## Imóveis disponíveis");
  lines.push("");
  lines.push(
    `Lista completa e atualizada em ${siteUrl}/imoveis. Cada imóvel abaixo tem página própria com fotos, descrição completa e contato direto por WhatsApp.`
  );
  lines.push("");

  for (const property of properties) {
    const facts = [
      property.areaM2 ? `${property.areaM2} m²` : null,
      property.bedrooms ? `${property.bedrooms} quarto${property.bedrooms > 1 ? "s" : ""}` : null,
      property.bathrooms ? `${property.bathrooms} banheiro${property.bathrooms > 1 ? "s" : ""}` : null,
      property.parkingSpaces
        ? `${property.parkingSpaces} vaga${property.parkingSpaces > 1 ? "s" : ""} de garagem`
        : null,
      property.furnished ? "mobiliado" : null,
    ]
      .filter(Boolean)
      .join(", ");

    lines.push(
      `- [${property.title}](${siteUrl}/imoveis/${property.id}): ${property.type} para ${property.purpose.toLowerCase()} em ${property.location}. ${facts ? `${facts}. ` : ""}Valor: ${property.priceLabel ? `${property.priceLabel} ` : ""}${formatPrice(property.price, property.purpose)}. Ref. ${property.reference}.`
    );
  }

  lines.push("");
  lines.push("## Outras páginas");
  lines.push("");
  lines.push(`- [Todos os imóveis](${siteUrl}/imoveis)`);
  lines.push(`- [Sobre a Grupo Alves Imóveis](${siteUrl}/sobre)`);
  lines.push(`- [Financiamento](${siteUrl}/financie)`);
  lines.push(`- [Negociar/anunciar um imóvel](${siteUrl}/negocie)`);
  lines.push(`- [Contato](${siteUrl}/contato)`);

  return lines.join("\n");
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
