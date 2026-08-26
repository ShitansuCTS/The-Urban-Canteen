"use client";

import { useEffect, useState } from "react";

const FloatingButtons = () => {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-action-buttons">

      {/* BACK TO TOP */}
      <button
        type="button"
        className={`floating-back-top ${
          showBackTop ? "show" : ""
        }`}
        onClick={handleBackToTop}
        aria-label="Back to top"
      >
        <span className="back-top-inner">
          <i className="bi bi-arrow-up"></i>
        </span>
      </button>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/9938161712"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="whatsapp-inner">
          <i className="bi bi-whatsapp"></i>
        </span>

        <span className="whatsapp-pulse"></span>
      </a>

    </div>
  );
};

export default FloatingButtons;