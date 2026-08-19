"use client";

import { useEffect, useState } from "react";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import GallerySkeleton from "@/components/GallerySkeleton";

const galleryImages = [
  "assets/img/gallery/23.webp",
  "assets/img/gallery/07.webp",
  "assets/img/gallery/08.webp",
  "assets/img/gallery/21.webp",
  "assets/img/gallery/13.webp",
  "assets/img/gallery/15.webp",
  "assets/img/gallery/01.webp",
  "assets/img/gallery/12.webp",
  "assets/img/gallery/20.webp",
  "assets/img/gallery/22.webp",
  "assets/img/gallery/13.webp",
  "assets/img/gallery/02.webp",
];

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let loadedImages = 0;

    galleryImages.forEach((src) => {
      const img = new Image();

      img.onload = () => {
        loadedImages++;

        if (loadedImages === galleryImages.length) {
          setLoading(false);
        }
      };

      img.onerror = () => {
        loadedImages++;

        if (loadedImages === galleryImages.length) {
          setLoading(false);
        }
      };

      img.src = src;
    });
  }, []);

  return (
    <FoodKingLayout>
      <PageBanner pageName={"gallery"} />

      {loading ? (
        <GallerySkeleton />
      ) : (
        <div className="gallery-section fix section-bg section-padding">
          <div className="container">
            <div className="row g-4">
              {/* 1 */}
              <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
                <div
                  className="galler-image-2 bg-cover"
                  style={{
                    backgroundImage:
                      'url("assets/img/gallery/23.webp")',
                  }}
                >
                  <a
                    href="assets/img/gallery/23.webp"
                    className="icon img-popup"
                  >
                    <i className="fal fa-plus" />
                  </a>
                </div>
              </div>

              {/* 2 */}
              <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
                <div
                  className="galler-image-2 bg-cover"
                  style={{
                    backgroundImage:
                      'url("assets/img/gallery/07.webp")',
                  }}
                >
                  <a
                    href="assets/img/gallery/07.webp"
                    className="icon img-popup"
                  >
                    <i className="fal fa-plus" />
                  </a>
                </div>
              </div>

              {/* 3 */}
              <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                <div
                  className="galler-image-2 bg-cover"
                  style={{
                    backgroundImage:
                      'url("assets/img/gallery/08.webp")',
                  }}
                >
                  <a
                    href="assets/img/gallery/08.webp"
                    className="icon img-popup"
                  >
                    <i className="fal fa-plus" />
                  </a>
                </div>
              </div>

              {/* 4 */}
              <div className="col-lg-8 wow fadeInUp" data-wow-delay=".5s">
                <div
                  className="galler-image-2 bg-cover"
                  style={{
                    backgroundImage:
                      'url("assets/img/gallery/21.webp")',
                  }}
                >
                  <a
                    href="assets/img/gallery/21.webp"
                    className="icon img-popup"
                  >
                    <i className="fal fa-plus" />
                  </a>
                </div>
              </div>

              {/* 5 */}
              <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
                <div
                  className="galler-image-2 bg-cover"
                  style={{
                    backgroundImage:
                      'url("assets/img/gallery/13.webp")',
                  }}
                >
                  <a
                    href="assets/img/gallery/13.webp"
                    className="icon img-popup"
                  >
                    <i className="fal fa-plus" />
                  </a>
                </div>
              </div>

              {/* 6 */}
              <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
                <div
                  className="galler-image-2 bg-cover"
                  style={{
                    backgroundImage:
                      'url("assets/img/gallery/15.webp")',
                  }}
                >
                  <a
                    href="assets/img/gallery/15.webp"
                    className="icon img-popup"
                  >
                    <i className="fal fa-plus" />
                  </a>
                </div>
              </div>

              {/* 7 */}
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                <div
                  className="galler-image-2 bg-cover"
                  style={{
                    backgroundImage:
                      'url("assets/img/gallery/01.webp")',
                  }}
                >
                  <a
                    href="assets/img/gallery/01.webp"
                    className="icon img-popup"
                  >
                    <i className="fal fa-plus" />
                  </a>
                </div>
              </div>

              {/* 8 */}
              <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
                <div
                  className="galler-image-2 bg-cover"
                  style={{
                    backgroundImage:
                      'url("assets/img/gallery/12.webp")',
                  }}
                >
                  <a
                    href="assets/img/gallery/12.webp"
                    className="icon img-popup"
                  >
                    <i className="fal fa-plus" />
                  </a>
                </div>
              </div>

              {/* 9 */}
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                <div
                  className="galler-image-2 bg-cover"
                  style={{
                    backgroundImage:
                      'url("assets/img/gallery/20.webp")',
                  }}
                >
                  <a
                    href="assets/img/gallery/20.webp"
                    className="icon img-popup"
                  >
                    <i className="fal fa-plus" />
                  </a>
                </div>
              </div>

              {/* 10 */}
              <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
                <div
                  className="galler-image-2 bg-cover"
                  style={{
                    backgroundImage:
                      'url("assets/img/gallery/22.webp")',
                  }}
                >
                  <a
                    href="assets/img/gallery/22.webp"
                    className="icon img-popup"
                  >
                    <i className="fal fa-plus" />
                  </a>
                </div>
              </div>

              {/* 11 */}
              <div className="col-lg-9 wow fadeInUp" data-wow-delay=".5s">
                <div
                  className="galler-image-2 bg-cover"
                  style={{
                    backgroundImage:
                      'url("assets/img/gallery/13.webp")',
                  }}
                >
                  <a
                    href="assets/img/gallery/13.webp"
                    className="icon img-popup"
                  >
                    <i className="fal fa-plus" />
                  </a>
                </div>
              </div>

              {/* 12 */}
              <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
                <div
                  className="galler-image-2 bg-cover"
                  style={{
                    backgroundImage:
                      'url("assets/img/gallery/02.webp")',
                  }}
                >
                  <a
                    href="assets/img/gallery/02.webp"
                    className="icon img-popup"
                  >
                    <i className="fal fa-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </FoodKingLayout>
  );
};

export default page;