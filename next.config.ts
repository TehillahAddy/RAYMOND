import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enforces stricter linting and error handling
  eslint: {
    // Disable ESLint during production builds (useful to avoid build failures)
    ignoreDuringBuilds: true,
  },
  swcMinify: true, // Enable SWC compiler for faster minification
  images: {
    // Example for optimized images
    domains: ["example.com", "another-example.com"], // add your image domains here
  },
  pageExtensions: ["ts", "tsx", "js", "jsx"], // Ensuring TypeScript files are recognized
  // Add any other configuration you need here
};

export default nextConfig;
