"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const OfferPopup = () => {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // =========================================
  // SHOW ONLY ON HOME PAGE
  // =========================================
  useEffect(() => {
    // Agar Home page nahi hai
    if (pathname !== "/") {
      setIsVisible(false);
      setIsClosing(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  // =========================================
  // LOCK BODY SCROLL
  // =========================================
  useEffect(() => {
    if (isVisible && pathname === "/") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible, pathname]);

  // =========================================
  // CLOSE POPUP
  // =========================================
  const closePopup = () => {
    if (isClosing) return;

    setIsClosing(true);

    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 650);
  };

  // =========================================
  // DON'T RENDER ON OTHER PAGES
  // =========================================
  if (pathname !== "/" || !isVisible) {
    return null;
  }

  return (
    <div
      className={`offer-popup-overlay ${
        isClosing ? "offer-popup-closing" : ""
      }`}
      onClick={closePopup}
    >
      <div
        className={`offer-popup-box ${
          isClosing ? "offer-popup-box-closing" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >

        {/* OFFER IMAGE */}
        <div className="offer-popup-image">
          <img
            src="/assets/img/offer/offer.webp"
            alt="The Urban Canteen Special Offer"
            className="offer-popup-img"
          />
        </div>

        {/* CLOSE BUTTON */}
        <button
          type="button"
          className="offer-popup-close"
          onClick={closePopup}
          aria-label="Close offer"
        >
          <span className="close-icon">
            <i className="fal fa-times"></i>
          </span>
        </button>

      </div>
    </div>
  );
};

export default OfferPopup;