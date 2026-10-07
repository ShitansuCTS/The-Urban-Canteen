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
        <div className="row">
          <div className="col-md-7 col-9">
            <div className="section-title">
              <span className="home-about-subtitle ">Crispy, Every Bite a Taste</span>
              <h2>
                Popular Food Items
              </h2>
            </div>
          </div>
          
        </div>
        <InstagramBannerSlider />

      </div>
    </section>
  );
};
export default FoodSlider;
