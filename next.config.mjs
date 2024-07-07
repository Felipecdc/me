import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "felipe-portifolio.s3.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
