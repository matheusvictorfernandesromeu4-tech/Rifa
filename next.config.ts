import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignora erros de ESLint durante o build na Vercel
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignora erros de TypeScript durante o build na Vercel
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
