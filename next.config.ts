import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images:{
    domains:["source.unsplash.com",'randomuser.me',"images.unsplash.com","www.google.com"]
  }
};

export default nextConfig;
