"use client";

import { useEffect, useState } from "react";

const OfferPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // =========================================
  // OPEN POPUP ON HOME PAGE LOAD
  // =========================================
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // =========================================
  // PREVENT BACKGROUND SCROLLING
  // =========================================
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

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
  // DON'T RENDER WHEN HIDDEN
  // =========================================
  if (!isVisible) return null;

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
      >
        {/* =========================================
            OFFER IMAGE
        ========================================= */}
        <div className="offer-popup-image">
          <img
            src="/assets/img/offer/offer.webp"
            alt="The Urban Canteen Special Offer"
            className="offer-popup-img"
          />
        </div>

        {/* =========================================
            CLOSE BUTTON
        ========================================= */}
        <button
          type="button"
          className="offer-popup-close"
          onClick={(e) => {
            e.stopPropagation();
            closePopup();
          }}
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