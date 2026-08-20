"use client";

import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const RestaurantHero = () => {
  return (
    <section className="restaurant-hero">
      {/* Existing Green Background Shape */}
      <div className="hero-bg-shape"></div>

      {/* Premium Restaurant Background Image */}
      <div className="hero-restaurant-bg"></div>

      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <div className="col-lg-6">
            <div className="hero-content">

              <span className="hero-small-title">
                ✦ Fresh • Delicious • Authentic
              </span>

              <h1>
                Taste The
                <span> Difference</span>
              </h1>

              <p>
                Discover delicious food crafted with fresh ingredients,
                authentic flavours and a passion for unforgettable dining.
              </p>

              <div className="hero-buttons">
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
            <div className="hero-food-area">

              {/* Green Circle */}
              <div className="food-circle"></div>

              {/* Fresh Ingredients Badge */}
              <div className="floating-text">
                <span>100%</span>
                <small>Fresh Ingredients</small>
              </div>

              {/* Main Food Image */}
              <img
                src="/assets/img/fresh-drink.webp"
                alt="Delicious restaurant food"
                className="hero-food"
              />

              {/* Decorative Stars */}
              <div className="food-leaf leaf-one">✦</div>
              <div className="food-leaf leaf-two">✧</div>
              <div className="food-leaf leaf-three">✦</div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom White Wave */}
      <div className="hero-bottom-wave"></div>
    </section>
  );
};

export default RestaurantHero;