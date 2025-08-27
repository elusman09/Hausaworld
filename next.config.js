/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["your-supabase-bucket-url.com"], // Add poster/image domains
  },
};

module.exports = nextConfig;
