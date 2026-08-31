import type { NextConfig } from "next";

const nextConfig: NextConfig & { agentRules?: boolean } = {
  reactStrictMode: true,
  agentRules: false
};

export default nextConfig;
