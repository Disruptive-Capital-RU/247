/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/?action=signin",
        permanent: false,
      },
      {
        source: "/signup",
        destination: "/?action=signup",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
