"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* =========================================================
   FOOD GALLERY
========================================================= */

const foodGalleryImages = [
  {
    src: "/assets/img/gallery/23.webp",
    col: "col-lg-8",
    delay: "0.1s",
  },
  {
    src: "/assets/img/gallery/07.webp",
    col: "col-lg-4",
    delay: "0.2s",
  },
  {
    src: "/assets/img/gallery/24.webp",
    col: "col-lg-4",
    delay: "0.3s",
  },
  {
    src: "/assets/img/gallery/21.webp",
    col: "col-lg-8",
    delay: "0.4s",
  },
  {
    src: "/assets/img/gallery/13.webp",
    col: "col-lg-3",
    delay: "0.1s",
  },
  {
    src: "/assets/img/gallery/15.webp",
    col: "col-lg-3",
    delay: "0.2s",
  },
  {
    src: "/assets/img/gallery/01.webp",
    col: "col-lg-6",
    delay: "0.3s",
  },
  {
    src: "/assets/img/gallery/12.webp",
    col: "col-lg-3",
    delay: "0.4s",
  },
  {
    src: "/assets/img/gallery/20.webp",
    col: "col-lg-6",
    delay: "0.1s",
  },
  {
    src: "/assets/img/gallery/22.webp",
    col: "col-lg-3",
    delay: "0.2s",
  },
  {
    src: "/assets/img/gallery/13.webp",
    col: "col-lg-9",
    delay: "0.3s",
  },
  {
    src: "/assets/img/gallery/02.webp",
    col: "col-lg-3",
    delay: "0.4s",
  },
];

/* =========================================================
   RESTAURANT GALLERY
========================================================= */

const restaurantGalleryImages = [
  {
    src: "/assets/img/restaurant/1.webp",
    col: "col-lg-8",
    delay: "0.1s",
  },
  {
    src: "/assets/img/restaurant/2.webp",
    col: "col-lg-4",
    delay: "0.2s",
  },
  {
    src: "/assets/img/restaurant/3.webp",
    col: "col-lg-4",
    delay: "0.3s",
  },
  {
    src: "/assets/img/restaurant/4.webp",
    col: "col-lg-8",
    delay: "0.4s",
  },
  {
    src: "/assets/img/restaurant/5.webp",
    col: "col-lg-3",
    delay: "0.1s",
  },
  {
    src: "/assets/img/restaurant/6.webp",
    col: "col-lg-3",
    delay: "0.2s",
  },
  {
    src: "/assets/img/restaurant/7.webp",
    col: "col-lg-6",
    delay: "0.3s",
  },
  {
    src: "/assets/img/restaurant/8.webp",
    col: "col-lg-3",
    delay: "0.4s",
  },
  {
    src: "/assets/img/restaurant/9.webp",
    col: "col-lg-6",
    delay: "0.1s",
  },
];

/* =========================================================
   GALLERY ITEM
========================================================= */

const GalleryItem = ({
  src,
  col,
  delay,
  index,
  onOpen,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`${col} gallery-animation-item`}
      style={{
        "--animation-delay": delay,
      }}
    >
      <div className="gallery-image-box">

        {/* SKELETON */}
        {!loaded && (
          <div className="gallery-skeleton">
            <span></span>
          </div>
        )}

        <Image
          src={src}
          alt="The Urban Canteen Gallery"
          fill
          sizes="
            (max-width: 575px) 100vw,
            (max-width: 991px) 50vw,
            50vw
          "
          className={`gallery-section-image ${loaded
              ? "gallery-image-loaded"
              : "gallery-image-loading"
            }`}
          loading={index < 2 ? "eager" : "lazy"}
          priority={index === 0}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />

        {loaded && (
          <div className="gallery-hover-overlay">
            <button
              type="button"
              className="gallery-plus"
              onClick={() => onOpen(index)}
              aria-label="Open gallery image"
            >
              <i className="fal fa-plus"></i>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
/* =========================================================
   MAIN GALLERY
========================================================= */

const NewGallery = () => {

  /* =======================================================
     ACTIVE TAB

     Restaurant Gallery will be displayed first
  ======================================================= */

  const [activeTab, setActiveTab] = useState("restaurant");

  /* =======================================================
     ACTIVE LIGHTBOX IMAGE
  ======================================================= */

  const [activeImage, setActiveImage] = useState(null);

  /* =======================================================
     CURRENT GALLERY
  ======================================================= */

  const currentGallery =
    activeTab === "restaurant"
      ? restaurantGalleryImages
      : foodGalleryImages;

  /* =======================================================
     OPEN LIGHTBOX
  ======================================================= */

  const openLightbox = (index) => {
    setActiveImage(index);

    document.body.style.overflow = "hidden";
  };

  /* =======================================================
     CLOSE LIGHTBOX
  ======================================================= */

  const closeLightbox = () => {
    setActiveImage(null);

    document.body.style.overflow = "";
  };

  /* =======================================================
     CHANGE TAB
  ======================================================= */

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    // Close lightbox when changing tab
    setActiveImage(null);

    // Restore body scrolling
    document.body.style.overflow = "";
  };

  /* =======================================================
     ESC KEY
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    if (activeImage !== null) {
      document.addEventListener(
        "keydown",
        handleKeyDown
      );
    }

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activeImage]);

  /* =======================================================
     CLEANUP BODY SCROLL
  ======================================================= */

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* =====================================================
          GALLERY SECTION
      ===================================================== */}

      <section className="gallery-section fix section-bg">

        <div className="container">

          {/* =================================================
              GALLERY TABS
          ================================================= */}

          <div className="gallery-tabs restaurant-media-tabs text-center mb-5">

            <button
              type="button"
              className={`gallery-tab nav-link ${activeTab === "restaurant" ? "active" : ""
                }`}
              onClick={() => handleTabChange("restaurant")}
            >
              Our Place
            </button>

            <button
              type="button"
              className={`gallery-tab nav-link ${activeTab === "food" ? "active" : ""
                }`}
              onClick={() => handleTabChange("food")}
            >
              Cravings
            </button>

          </div>
          {/* =================================================
              GALLERY GRID
          ================================================= */}

          <div className="row g-4">

            {currentGallery.map((item, index) => (
              <GalleryItem
                key={`${activeTab}-${item.src}-${index}`}
                src={item.src}
                col={item.col}
                delay={item.delay}
                index={index}
                onOpen={openLightbox}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CUSTOM LIGHTBOX
      ===================================================== */}

      {activeImage !== null && (
        <div
          className="custom-lightbox"
          onClick={closeLightbox}
        >

          <div
            className="lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              <i className="fal fa-times"></i>
            </button>

            {/* LIGHTBOX IMAGE */}

            <div className="lightbox-image-wrapper">

              <img
                src={currentGallery[activeImage].src}
                alt="The Urban Canteen Gallery"
                className="lightbox-image"
              />

            </div>

          </div>

        </div>
      )}

    </>
  );
};

export default NewGallery;