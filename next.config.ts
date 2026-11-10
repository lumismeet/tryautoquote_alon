import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Markdown endpoint reads MDX articles from disk at request time.
  outputFileTracingIncludes: {
    "/api/agent-md": ["./content/blogs/**/*"],
  },
  // Pages are content-negotiated (HTML or Markdown) by middleware.ts.
  async headers() {
    return [{ source: "/:path((?!_next/|api/).*)", headers: [{ key: "Vary", value: "Accept" }] }];
  },
  async redirects() {
    return [{ source: "/about-us", destination: "/about", permanent: true }];
  },
};

export default nextConfig;
