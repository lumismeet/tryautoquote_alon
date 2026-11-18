"use client";

import { useEffect } from "react";

// Inside the iframe: tell the host page our height so the frame fits the calculator.
export default function EmbedResize({ slug }: { slug: string }) {
  useEffect(() => {
    // Measure the content itself (the page is never shorter than the frame, so it can't shrink otherwise).
    const send = () => {
      const main = document.querySelector("main");
      const height = Math.ceil(main ? main.getBoundingClientRect().bottom + window.scrollY : document.documentElement.scrollHeight) + 4;
      window.parent?.postMessage({ type: "taq-embed-height", slug, height }, "*");
    };
    send();
    const ro = new ResizeObserver(send);
    ro.observe(document.querySelector("main") ?? document.body);
    return () => ro.disconnect();
  }, [slug]);
  return null;
}
