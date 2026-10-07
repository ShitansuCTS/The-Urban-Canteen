"use client";

import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const InstagramBannerSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const images = [
    "03.webp",
    "02.webp",
    "01.webp",
    "04.webp",
    "05.webp",
    "03.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp",
  ];

  return (
    <div className="instagram-banner fix">
      <div className="instagram-slider-wrapper">

        {/* Previous Button */}
        <button
          ref={prevRef}
          className="instagram-prev"
          type="button"
          aria-label="Previous"
        >
          <i className="far fa-long-arrow-left" />
        </button>

        <Swiper
          modules={[Navigation]}
          className="instagram-banner-slider"
          slidesPerView={3}
          spaceBetween={25}
          loop={true}
          speed={800}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="instagram-banner-items">
                <div className="banner-image">
                  <img
                    src={`/assets/img/gallery/${image}`}
                    alt={`Food ${index + 1}`}
                  />

                  <Link
                    href={`/assets/img/gallery/${image}`}
                    className="icon img-popup"
                  >
                    <i className="far fa-search" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        <button
          ref={nextRef}
          className="instagram-next"
          type="button"
          aria-label="Next"
        >
          <i className="far fa-long-arrow-right" />
        </button>

      </div>
    </div>
  );
};

export default InstagramBannerSlider;