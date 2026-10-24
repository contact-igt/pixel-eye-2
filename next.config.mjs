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
      {
        source: "/dr-abdul-rasheed.html",
        destination: "/doctors",
        permanent: true,
      },
      {
        source: "/dr-krishna-poojita.html",
        destination: "/doctors",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/appointment",
        permanent: true,
      },
           {
        source: "/best-eye-hospital-in-kukatpally.html",
        destination: "/",
        permanent: true,
      },
           {
        source: "/about-hospital.html",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
