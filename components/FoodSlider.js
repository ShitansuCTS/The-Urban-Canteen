"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import GallerySlider from "./GallerySlider";
import InstagramBannerSlider from "@/components/InstagramBannerSlider";

const FoodSlider = () => {
  return (
    <section className="food-category-section fix section-padding">
      <div className="tomato-shape">
        <img src="assets/img/shape/tomato-shape.png" alt="shape-img" />
      </div>
      <div className="burger-shape-2">
        <img src="assets/img/shape/burger-shape-2.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="section-title" style={{ textAlign: "center" }}>
          <div
            class="premium-eyebrow wow fadeInUp"
            data-wow-duration="0.8s"
            style={{ visibility: "visible", animationDuration: "0.8s"}}
          >
            <span class="eyebrow-line"></span>
            <span
              class="home-about-subtitle wow fadeInUp"
            >
              Taste Meets Vibe
            </span>
            <span class="eyebrow-line"></span>
          </div>
              
              <h2>
                Savour the <span style={{ color: "var(--theme)" }}> Flavours</span>,<br /> Feel the <span style={{ color: "var(--theme)" }}> Vibe </span>
              </h2>
            </div>
        <InstagramBannerSlider />

      </div>
    </section>
  );
};
export default FoodSlider;
