/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',        // gera build completo para deploy
  eslint: {
    ignoreDuringBuilds: true,  // ignora lint na hora do build
  },
  typescript: {
    ignoreBuildErrors: false,  // falha se houver erro de TS
  },
  images: { unoptimized: true }, // se você não precisa de otimizações de imagem
}

module.exports = nextConfig
