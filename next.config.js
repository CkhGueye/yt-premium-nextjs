/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/category/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
