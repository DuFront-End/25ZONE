import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better performance
  reactStrictMode: true,
  // Use Vercel's default serverless output
  // output: "export", // commented out for Vercel deployment
  images: {
    // Allow external image domains for production
    domains: ["api.25zone.io.vn", "cdn.25zone.io.vn"],
    // Disable unoptimized for Vercel Image Optimization
    unoptimized: false,
  },
};

export default nextConfig;