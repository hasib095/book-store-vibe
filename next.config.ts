import type { NextConfig } from "next";


//https://designobserver.com/wp-content/uploads/2024/06/40406-sa-hero.png
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'designobserver.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ]
  },
};

export default nextConfig;
