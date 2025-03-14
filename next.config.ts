import type { NextConfig } from "next";

// for configuration https://nextjs.org/docs/messages/next-image-unconfigured-host
const nextConfig: NextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "spaceholder.cc",
        pathname: "/i/**",
      },
    ]
  },
};

export default nextConfig;
