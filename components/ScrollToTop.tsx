"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

// Resets scroll to the top on every quote-step change. Without this, the
// browser carries the previous step's scroll offset into the next page,
// which shows up as a "jump" when landing on a taller/shorter step.
// useLayoutEffect runs before the browser paints, so the reset happens
// without a visible flash of the old scroll position.
export default function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
