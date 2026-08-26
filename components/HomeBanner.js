"use client";

import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const RestaurantHero = () => {
  return (
    <section className="restaurant-hero">

      {/* Background Shape */}
      <div className="hero-bg-shape"></div>

      {/* Restaurant Background */}
      <div className="hero-restaurant-bg"></div>

      <div className="container">
        <div className="row align-items-center hero-row">

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <div className="col-lg-6">
            <div
              className="hero-content wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".15s"
            >

              <span
                className="home-about-subtitle wow fadeInUp"
                data-wow-duration=".8s"
              >
                ✦ Fresh • Delicious • Authentic
              </span>

              <h1
                className="wow fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".15s"
              >
                Taste The
                <span> Difference</span>
              </h1>

              <p
                className="wow fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                Discover delicious food crafted with fresh ingredients,
                authentic flavours and a passion for unforgettable dining.
              </p>

              <div
                className="hero-buttons wow fadeInUp"
                data-wow-duration=".8s"
                data-wow-delay=".45s"
              >
                <a href="/menu" className="home-about-btn">
                  <span className="home-about-btn-icon">
                    <i className="bi bi-leaf-fill"></i>
                  </span>

                  <span>Explore Menu</span>
                </a>
              </div>

            </div>
          </div>

          {/* =========================
              RIGHT FOOD IMAGE
          ========================= */}
          <div className="col-lg-6">

            <div
              className="hero-food-area wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".25s"
            >

              {/* Green Circle */}
              <div className="food-circle"></div>

              {/* Fresh Ingredients */}
              <div
                className="floating-text wow zoomIn"
                data-wow-duration=".8s"
                data-wow-delay=".7s"
              >
                <span>100%</span>
                <small>Fresh Ingredients</small>
              </div>

              {/* Food Image */}
              <img
                src="/assets/img/fresh-drink.webp"
                alt="Delicious restaurant food"
                className="hero-food"
              />

              {/* Decorative Stars */}
              <div
                className="food-leaf leaf-one wow fadeIn"
                data-wow-delay=".8s"
              >
                ✦
              </div>

              <div
                className="food-leaf leaf-two wow fadeIn"
                data-wow-delay="1s"
              >
                ✧
              </div>

              <div
                className="food-leaf leaf-three wow fadeIn"
                data-wow-delay="1.2s"
              >
                ✦
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="hero-bottom-wave"></div>

    </section>
  );
};

export default RestaurantHero;