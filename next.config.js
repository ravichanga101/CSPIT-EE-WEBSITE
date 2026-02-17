/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["172.16.12.129"],
  async rewrites() {
    return [
      {
        source: "/index.php",
        destination: "/",
      },
      {
        source: "/contactform/contactform.php",
        destination: "/api/contact",
      },
      {
        source: "/ee/index.php",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
