/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ESLint errors ko ignore karega
  },
  output: "export",
  images: {
    unoptimized: true, // 👈 image optimization disable
  },
};

module.exports = nextConfig;
