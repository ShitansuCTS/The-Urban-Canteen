"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const FoodSlider = () => {
  return (
    <section className="food-category-section fix section-padding dark-bg">
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
              <span className="wow fadeInUp home-about-subtitle ">Crispy, Every Bite a Taste</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Popular Food Items
              </h2>
            </div>
          </div>
          <div
            className="col-md-5 ps-0 col-3 text-end wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="array-button">
              <button className="array-prev">
                <i className="far fa-long-arrow-left" />
              </button>
              <button className="array-next">
                <i className="far fa-long-arrow-right" />
              </button>
            </div>
          </div>
        </div>
        <Swiper
          {...sliderProps.foodCatagorySlider}
          className="swiper food-catagory-slider"
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div
                className="catagory-product-card bg-cover"
                style={{
                  backgroundImage:
                    'url("assets/img/shape/catagory-card-shape.jpg")',
                }}
              >
                <h5>Combo</h5>
                <div className="catagory-product-image text-center">
                  <Link href="/shop">
                    <img src="assets/img/food/02.webp" alt="product-img" />
                    <div className="decor-leaf">
                      <img
                        src="assets/img/shape/decor-leaf.svg"
                        alt="shape-img"
                      />
                    </div>
                    <div className="decor-leaf-2">
                      <img
                        src="assets/img/shape/decor-leaf-2.svg"
                        alt="shape-img"
                      />
                    </div>
                    {/* <div className="burger-shape">
                      <img src="assets/img/shape/burger-shape.png" alt="shape-img" />
                    </div> */}
                  </Link>
                </div>
                <div className="catagory-product-content text-center">
                  <div className="catagory-product-icon">
                    <img
                      src="assets/img/shape/tasty-shape.webp"
                      alt="shape-text"
                    />
                  </div>
                  <h3>
                    <Link href="/shop-single">Deliciously Fresh</Link>
                  </h3>
                  <p>Combo</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="catagory-product-card bg-cover"
                style={{
                  backgroundImage:
                    'url("assets/img/shape/catagory-card-shape.jpg")',
                }}
              >
                <h5>Combo</h5>
                <div className="catagory-product-image text-center">
                  <Link href="/shop">
                    <img src="assets/img/food/08.webp" alt="product-img" />
                    <div className="decor-leaf">
                      <img
                        src="assets/img/shape/decor-leaf.svg"
                        alt="shape-img"
                      />
                    </div>
                    <div className="decor-leaf-2">
                      <img
                        src="assets/img/shape/decor-leaf-2.svg"
                        alt="shape-img"
                      />
                    </div>
                    
                  </Link>
                </div>
                <div className="catagory-product-content text-center">
                  <div className="catagory-product-icon">
                    <img
                      src="assets/img/shape/tasty-shape.webp"
                      alt="shape-text"
                    />
                  </div>
                  <h3>
                    <Link href="/shop-single">Deliciously Fresh</Link>
                  </h3>
                  <p>Combo</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="catagory-product-card bg-cover"
                style={{
                  backgroundImage:
                    'url("assets/img/shape/catagory-card-shape.jpg")',
                }}
              >
                <h5>Combo</h5>
                <div className="catagory-product-image text-center">
                  <Link href="/shop">
                    <img src="assets/img/food/05.webp" alt="product-img" />
                    <div className="decor-leaf">
                      <img
                        src="assets/img/shape/decor-leaf.svg"
                        alt="shape-img"
                      />
                    </div>
                    <div className="decor-leaf-2">
                      <img
                        src="assets/img/shape/decor-leaf-2.svg"
                        alt="shape-img"
                      />
                    </div>
                    
                  </Link>
                </div>
                <div className="catagory-product-content text-center">
                  <div className="catagory-product-icon">
                    <img
                      src="assets/img/shape/tasty-shape.webp"
                      alt="shape-text"
                    />
                  </div>
                  <h3>
                    <Link href="/shop-single">Deliciously Fresh</Link>
                  </h3>
                  <p>Combo</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="catagory-product-card bg-cover"
                style={{
                  backgroundImage:
                    'url("assets/img/shape/catagory-card-shape.jpg")',
                }}
              >
                <h5>Combo</h5>
                <div className="catagory-product-image text-center">
                  <Link href="/shop">
                    <img
                      src="assets/img/food/07.webp"
                      alt="product-img"
                    />
                    <div className="decor-leaf">
                      <img
                        src="assets/img/shape/decor-leaf.svg"
                        alt="shape-img"
                      />
                    </div>
                    <div className="decor-leaf-2">
                      <img
                        src="assets/img/shape/decor-leaf-2.svg"
                        alt="shape-img"
                      />
                    </div>
                    
                  </Link>
                </div>
                <div className="catagory-product-content text-center">
                  <div className="catagory-product-icon">
                    <img
                      src="assets/img/shape/tasty-shape.webp"
                      alt="shape-text"
                    />
                  </div>
                  <h3>
                    <Link href="/shop-single">Deliciously Fresh</Link>
                  </h3>
                  <p>Combo</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="catagory-product-card bg-cover"
                style={{
                  backgroundImage:
                    'url("assets/img/shape/catagory-card-shape.jpg")',
                }}
              >
                <h5>Combo</h5>
                <div className="catagory-product-image text-center">
                  <Link href="/shop">
                    <img src="assets/img/food/03.webp" alt="product-img" />
                    <div className="decor-leaf">
                      <img
                        src="assets/img/shape/decor-leaf.svg"
                        alt="shape-img"
                      />
                    </div>
                    <div className="decor-leaf-2">
                      <img
                        src="assets/img/shape/decor-leaf-2.svg"
                        alt="shape-img"
                      />
                    </div>
                    
                  </Link>
                </div>
                <div className="catagory-product-content text-center">
                  <div className="catagory-product-icon">
                    <img
                      src="assets/img/shape/tasty-shape.webp"
                      alt="shape-text"
                    />
                  </div>
                  <h3>
                    <Link href="/shop-single">Deliciously Fresh</Link>
                  </h3>
                  <p>Combo</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="catagory-product-card bg-cover"
                style={{
                  backgroundImage:
                    'url("assets/img/shape/catagory-card-shape.jpg")',
                }}
              >
                <h5>Combo</h5>
                <div className="catagory-product-image text-center">
                  <Link href="/shop">
                    <img src="assets/img/food/04.webp" alt="product-img" />
                    <div className="decor-leaf">
                      <img
                        src="assets/img/shape/decor-leaf.svg"
                        alt="shape-img"
                      />
                    </div>
                    <div className="decor-leaf-2">
                      <img
                        src="assets/img/shape/decor-leaf-2.svg"
                        alt="shape-img"
                      />
                    </div>
                    
                  </Link>
                </div>
                <div className="catagory-product-content text-center">
                  <div className="catagory-product-icon">
                    <img
                      src="assets/img/shape/tasty-shape.webp"
                      alt="shape-text"
                    />
                  </div>
                  <h3>
                    <Link href="/shop-single">Deliciously Fresh</Link>
                  </h3>
                  <p>Combo</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="catagory-product-card bg-cover"
                style={{
                  backgroundImage:
                    'url("assets/img/shape/catagory-card-shape.jpg")',
                }}
              >
                <h5>Combo</h5>
                <div className="catagory-product-image text-center">
                  <Link href="/shop">
                    <img src="assets/img/food/06.webp" alt="product-img" />
                    <div className="decor-leaf">
                      <img
                        src="assets/img/shape/decor-leaf.svg"
                        alt="shape-img"
                      />
                    </div>
                    <div className="decor-leaf-2">
                      <img
                        src="assets/img/shape/decor-leaf-2.svg"
                        alt="shape-img"
                      />
                    </div>
                    
                  </Link>
                </div>
                <div className="catagory-product-content text-center">
                  <div className="catagory-product-icon">
                    <img
                      src="assets/img/shape/tasty-shape.webp"
                      alt="shape-text"
                    />
                  </div>
                  <h3>
                    <Link href="/shop-single">Deliciously Fresh</Link>
                  </h3>
                  <p>Combo</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="catagory-product-card bg-cover"
                style={{
                  backgroundImage:
                    'url("assets/img/shape/catagory-card-shape.jpg")',
                }}
              >
                <h5>Combo</h5>
                <div className="catagory-product-image text-center">
                  <Link href="/shop">
                    <img
                      src="assets/img/food/01.webp"
                      alt="product-img"
                    />
                    <div className="decor-leaf">
                      <img
                        src="assets/img/shape/decor-leaf.svg"
                        alt="shape-img"
                      />
                    </div>
                    <div className="decor-leaf-2">
                      <img
                        src="assets/img/shape/decor-leaf-2.svg"
                        alt="shape-img"
                      />
                    </div>
                    
                  </Link>
                </div>
                <div className="catagory-product-content text-center">
                  <div className="catagory-product-icon">
                    <img
                      src="assets/img/shape/tasty-shape.webp"
                      alt="shape-text"
                    />
                  </div>
                  <h3>
                    <Link href="/shop-single">Deliciously Fresh</Link>
                  </h3>
                  <p>Combo</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
export default FoodSlider;
