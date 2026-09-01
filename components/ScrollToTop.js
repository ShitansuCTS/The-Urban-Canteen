"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Browser automatic scroll restoration disable
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Wait for new page to render
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;