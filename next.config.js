/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_APP_API_BASE_URL: "http://localhost:8000",
  },
};

module.exports = nextConfig;
