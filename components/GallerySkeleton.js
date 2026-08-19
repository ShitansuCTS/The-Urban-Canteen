"use client";


const galleryItems = [
  "col-lg-8",
  "col-lg-4",
  "col-lg-4",
  "col-lg-8",
  "col-lg-3",
  "col-lg-3",
  "col-lg-6",
  "col-lg-3",
  "col-lg-6",
  "col-lg-3",
  "col-lg-9",
  "col-lg-3",
];

const GallerySkeleton = () => {
  return (
    <div className="gallery-section fix section-bg section-padding">
      <div className="container">
        <div className="row g-4">
          {galleryItems.map((col, index) => (
            <div className={`${col} wow fadeInUp`} key={index}>
              <div className="gallery-skeleton">
                <div className="gallery-skeleton-shine"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySkeleton;