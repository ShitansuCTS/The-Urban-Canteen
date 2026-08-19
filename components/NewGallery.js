"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const galleryImages = [
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
    src: "/assets/img/gallery/08.webp",
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

        {/* =========================
            SKELETON
        ========================= */}

        {!loaded && (
          <div className="gallery-skeleton">
            <span></span>
          </div>
        )}

        {/* =========================
            GALLERY IMAGE
        ========================= */}

        <Image
          src={src}
          alt="The Urban Canteen Gallery"
          fill
          sizes="
            (max-width: 575px) 100vw,
            (max-width: 991px) 50vw,
            50vw
          "
          className={`gallery-section-image ${
            loaded
              ? "gallery-image-loaded"
              : "gallery-image-loading"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />

        {/* =========================
            HOVER OVERLAY
        ========================= */}

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
  const [activeImage, setActiveImage] = useState(null);

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

      <section className="gallery-section fix section-bg section-padding">
        <div className="container">
          <div className="row g-4">

            {galleryImages.map((item, index) => (
              <GalleryItem
                key={`${item.src}-${index}`}
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

            {/* ================================================
                CLOSE BUTTON
            ================================================ */}

            <button
              type="button"
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              <i className="fal fa-times"></i>
            </button>

            {/* ================================================
                LIGHTBOX IMAGE
            ================================================ */}

            <div className="lightbox-image-wrapper">
              <img
                src={galleryImages[activeImage].src}
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