import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Permitimos imágenes remotas desde picsum.photos para las cards del dataset.
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      // Permitimos también el dominio que Picsum usa internamente para servir algunas imágenes.
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
    ],
  },
};

export default nextConfig;