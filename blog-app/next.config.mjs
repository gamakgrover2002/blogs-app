import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@models": path.resolve("src/models"),
      "@components": path.resolve("src/components"),
      "@utils": path.resolve("src/utils"),
    };
    return config;
  },
};

export default nextConfig;
