import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ─── Image Optimization ─── */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.25zone.io.vn",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5001",
      },
    ],
    // Cho phép dùng <img> thường mà không bị warning
    unoptimized: true,
  },
};

export default nextConfig;
