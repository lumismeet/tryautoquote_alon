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
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      // Duplicate topics merged into the stronger page (by Search Console data, Nov 2026).
      { source: "/guides/how-much-car-insurance-do-i-need", destination: "/blogs/how-much-car-insurance-do-you-need", permanent: true },
      { source: "/blogs/how-to-lower-your-car-insurance-premiums", destination: "/guides/how-to-lower-your-car-insurance-premium", permanent: true },
      // Old slug still showing in Search Console.
      { source: "/blogs/state-minimum-vs-high-coverage", destination: "/blogs/state-minimum-vs-full-coverage", permanent: true },
      { source: "/blogs/can-you-switch-car-insurance-companies-mid-policy", destination: "/blogs/can-you-switch-car-insurance-mid-policy", permanent: true },
      { source: "/blogs/how-to-file-a-car-insurance-claim-for-theft-or-vandalism", destination: "/blogs/how-to-file-a-theft-or-vandalism-claim", permanent: true },
      { source: "/blogs/why-your-insurance-went-up", destination: "/blogs/why-your-car-insurance-went-up", permanent: true },
    ];
  },
};

export default nextConfig;
