
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.r2.dev",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/book-an-appointment.html",
        destination: "/appointment",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
