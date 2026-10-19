import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old quote form was replaced by WhatsApp: keep old links working.
  async redirects() {
    return [{ source: "/orcamento", destination: "/contato", permanent: true }];
  },
};

export default nextConfig;
