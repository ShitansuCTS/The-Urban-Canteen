import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const RestaurantHero = () => {
  return (
    <section className="restaurant-hero">
      <div className="hero-bg-shape"></div>

      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* LEFT CONTENT */}
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

                {/* <a href="/reservation" className="reserve-btn">
                  Book a Table
                </a> */}
              </div>

              {/* <div className="hero-info">
                <div>
                  <strong>20+</strong>
                  <small>Signature Dishes</small>
                </div>

                <div>
                  <strong>4.9</strong>
                  <small>Customer Rating</small>
                </div>

                <div>
                  <strong>10+</strong>
                  <small>Years Experience</small>
                </div>
              </div> */}

            </div>
          </div>

          {/* RIGHT FOOD IMAGE */}
          <div className="col-lg-6">
            <div className="hero-food-area">

              <div className="food-circle"></div>

              <div className="floating-text">
                <span>100%</span>
                <small>Fresh Ingredients</small>
              </div>

              <img
                src="/assets/img/fresh-drink.webp"
                alt="Delicious restaurant food"
                className="hero-food"
              />

              <div className="food-leaf leaf-one">✦</div>
              <div className="food-leaf leaf-two">✧</div>
              <div className="food-leaf leaf-three">✦</div>

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM DECORATION */}
      <div className="hero-bottom-wave"></div>

      
    </section>
  );
};

export default RestaurantHero;