"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    src: "/assets/img/gallery/23.webp",
    col: "col-lg-8",
  },
  {
    src: "/assets/img/gallery/07.webp",
    col: "col-lg-4",
  },
  {
    src: "/assets/img/gallery/08.webp",
    col: "col-lg-4",
  },
  {
    src: "/assets/img/gallery/21.webp",
    col: "col-lg-8",
  },
  {
    src: "/assets/img/gallery/13.webp",
    col: "col-lg-3",
  },
  {
    src: "/assets/img/gallery/15.webp",
    col: "col-lg-3",
  },
  {
    src: "/assets/img/gallery/01.webp",
    col: "col-lg-6",
  },
  {
    src: "/assets/img/gallery/12.webp",
    col: "col-lg-3",
  },
  {
    src: "/assets/img/gallery/20.webp",
    col: "col-lg-6",
  },
  {
    src: "/assets/img/gallery/22.webp",
    col: "col-lg-3",
  },
  {
    src: "/assets/img/gallery/13.webp",
    col: "col-lg-9",
  },
  {
    src: "/assets/img/gallery/02.webp",
    col: "col-lg-3",
  },
];

const GalleryItem = ({ src, col }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={col}>
      <div className="gallery-image-wrapper">
        {/* Skeleton */}
        {!loaded && <div className="gallery-image-skeleton" />}

        {/* Actual Image */}
        <Image
          src={src}
          alt="Gallery Image"
          fill
          sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 50vw"
          className={`gallery-next-image ${
            loaded ? "image-loaded" : "image-loading"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />

        {/* Popup Icon */}
        {loaded && (
          <a
            href={src}
            className="icon img-popup"
            aria-label="View gallery image"
          >
            <i className="fal fa-plus" />
          </a>
        )}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="gallery-section fix section-bg section-padding">
      <div className="container">
        <div className="row g-4">
          {galleryImages.map((item, index) => (
            <GalleryItem
              key={`${item.src}-${index}`}
              src={item.src}
              col={item.col}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;