"use client";

import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/public/assets/custom-css/home.css";

const RestaurantHero = () => {
  return (
    <section className="restaurant-hero">
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/img/restaurant/hero-poster.webp"
      >
        <source
          src="http://production-media.testctsl.in/the-urban-canteen/videos/website-home.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="hero-video-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        {/* Subtitle with Star Icons */}
        <div className="hero-subtitle">
          <span></span>
          <i className="bi bi-sparkle-fill hero-star"></i>
          <span>WELCOME TO</span>
          <i className="bi bi-sparkle-fill hero-star"></i>
          <span></span>
        </div>

        {/* Main Heading */}
        <h1>
          <span className="hero-title-white">THE URBAN </span>
          <span className="hero-title-gold">CANTEEN</span>
        </h1>

        {/* Divider */}
        <div className="hero-divider">
          <span></span>
          <i className="bi bi-grid-fill hero-diamond"></i>
          <span></span>
        </div>

        {/* Description */}
        <p style={{ marginBottom: "20px" }}>Fresh flavours. Good food. Great moments.</p>


        <a
          href="/about"
          className="home-about-btn wow fadeInUp"
          data-wow-delay="0.5s"
          data-wow-duration="0.8s"
        >
          <span className="home-about-btn-icon">
            <i className="bi bi-leaf-fill"></i>
          </span>

          <span>Explore Menu</span>  <i className="bi bi-arrow-right"></i>
        </a>
      </div>

      {/* Bottom Wave */}
      <div className="hero-bottom-wave"></div>
    </section>
  );
};

export default RestaurantHero;