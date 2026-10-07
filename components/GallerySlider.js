"use client";

import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const GallerySlider = () => {
  return (
    <div className="gallery-slider-wrapper">
      <Swiper
        {...sliderProps.gallerySlider}
        className="gallery-slider"
      >
        <SwiperSlide>
          <div className="gallery-image">
            <img
              src="/assets/img/gallery/01.webp"
              alt="Gallery 1"
            />

            <div className="icon">
              <Link href="/gallery">
                <i className="far fa-link" />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="gallery-image">
            <img
              src="/assets/img/gallery/02.webp"
              alt="Gallery 2"
            />

            <div className="icon">
              <Link href="/gallery">
                <i className="far fa-link" />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="gallery-image">
            <img
              src="/assets/img/gallery/04.webp"
              alt="Gallery 4"
            />

            <div className="icon">
              <Link href="/gallery">
                <i className="far fa-link" />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="gallery-image">
            <img
              src="/assets/img/gallery/05.webp"
              alt="Gallery 5"
            />

            <div className="icon">
              <Link href="/gallery">
                <i className="far fa-link" />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="gallery-image">
            <img
              src="/assets/img/gallery/02.webp"
              alt="Gallery 2"
            />

            <div className="icon">
              <Link href="/gallery">
                <i className="far fa-link" />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="gallery-image">
            <img
              src="/assets/img/gallery/03.webp"
              alt="Gallery 3"
            />

            <div className="icon">
              <Link href="/gallery">
                <i className="far fa-link" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GallerySlider;