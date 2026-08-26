"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const OfferPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Popup only on homepage
    if (window.location.pathname !== "/") {
      return;
    }

    // Show after 1 second
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div
      className="offer-popup-overlay"
      onClick={closePopup}
    >
      <div
        className="offer-popup-box"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <button
          type="button"
          className="offer-popup-close"
          onClick={closePopup}
          aria-label="Close offer"
        >
          <i className="fal fa-times"></i>
        </button>

        {/* OFFER IMAGE */}
        <div className="offer-popup-image">

          <Image
            src="/assets/img/offer/offer.webp"
            alt="The Urban Canteen Special Offer"
            width={1362}
            height={648}
            priority
            className="offer-popup-img"
            sizes="
              (max-width: 575px) 92vw,
              (max-width: 767px) 90vw,
              (max-width: 1199px) 75vw,
              700px
            "
          />

        </div>

      </div>
    </div>
  );
};

export default OfferPopup;