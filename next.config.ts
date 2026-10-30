import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // O site antigo cadastrava imóveis em /imovel/<slug>/<id> (e um
      // formato curto /imovel/a/<id>). Essas páginas ainda estão indexadas
      // no Google, mas os anúncios/imóveis não existem mais — redireciona
      // para a listagem de imóveis à venda, em vez de deixar um 404.
      {
        source: "/imovel/:path*",
        destination: "/imoveis",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
