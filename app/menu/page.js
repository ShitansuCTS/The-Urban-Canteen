"use client";

import React from "react";

import FoodKingLayout from "@/layouts/FoodKingLayout";
import PageBanner from "@/components/PageBanner";
import Marque from "@/components/Marque";
import ReservationForm from "@/components/ReservationForm";

// Change this path if MenuFlipbook.jsx is in a different folder
import MenuFlipbook from "@/components/MenuFlipbook";

export default function Menu() {
  return (
    <FoodKingLayout>
      <PageBanner
        pageName="Our Menu"
        bannerImage="/assets/img/banner/menu-banner.webp"
      />

      <main className="tuc-menu-page">

        {/* INTRO SECTION */}
        <section className="section-padding">
          <div className="menu-container">
            <div className="menu-intro-grid">

              <div className="menu-intro-small">
                <span>THE URBAN CANTEEN</span>
                <div className="intro-number">01</div>
              </div>

              <div className="menu-intro-main">
                <span
                  className="home-about-subtitle wow fadeInUp"
                  data-wow-duration="0.8s"
                  style={{
                    visibility: "visible",
                    animationDuration: "0.8s",
                  }}
                >
                  A Feeling To Remember
                </span>

                <h2 className="wow fadeInUp" data-wow-delay="0.15s">
                  Designed For Moments,
                  <br />
                  <em>made to share.</em>
                </h2>

                <p>
                  From inviting interiors and warm lighting to delightful
                  flavours and thoughtfully crafted spaces, every corner sets
                  the mood for something special. At The Urban Canteen, great
                  food meets a beautiful ambience, creating the perfect
                  setting to connect, unwind and savour every moment.
                </p>
              </div>

              <div className="menu-intro-side">
                <span
                  className="wow fadeInUp"
                  data-wow-delay="0.4s"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  FRESH FLAVOURS
                </span>

                <span
                  className="wow fadeInUp"
                  data-wow-delay="0.5s"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  WARM AMBIENCE
                </span>

                <span
                  className="wow fadeInUp"
                  data-wow-delay="0.6s"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  MEMORABLE
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* MENU FLIPBOOK (heading + sidebar + book) */}
        <MenuFlipbook />

        {/* MARQUE SECTION */}
        <Marque />

        {/* BOOKING SECTION */}
        <section
          className="booking-section fix section-padding bg-cover"
          style={{
            backgroundImage: 'url("/assets/img/banner/form-bg.webp")',
          }}
        >
          <div className="container">
            <div className="booking-wrapper style-responsive section-padding pb-0">
              <div className="row justify-content-between align-items-center">

                <div
                  className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <ReservationForm />
                </div>

                <div className="col-lg-6">
                  {/* Keep your existing booking content here */}
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
    </FoodKingLayout>
  );
}