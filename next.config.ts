/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fashor.com",
        pathname: "/cdn/shop/**",
      },
    ],
  },
};

export default nextConfig;
