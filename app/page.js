import FoodSlider from "@/components/FoodSlider";
import HomeBanner from "@/components/HomeBanner";
import Marque from "@/components/Marque";
import ReservationForm from "@/components/ReservationForm";
import FoodKingLayout from "@/layouts/FoodKingLayout";

const Page = () => {
  return (
    <FoodKingLayout>
      {/* =====================================================
          HERO
      ===================================================== */}
      <HomeBanner />

      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}
      <section className="about-section section-padding pt-0">
        <div className="leaves-shape">
          <img
            src="/assets/img/shape/leaves.png"
            alt="Decorative leaves"
            loading="lazy"
          />
        </div>

        <div className="container">
          <div className="about-wrapper-2">
            <div className="row align-items-center">

              
              <div className="col-xl-5 col-lg-5">
                <div
                  className="pizza-image wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <img
                    src="/assets/img/food/meal.webp"
                    alt="Authentic Indian cuisine"
                  />

                  <div
                    className="quate-content wow zoomIn"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.6s"
                  >
                    <h3>
                      MADE WITH LOVE,
                      <br />
                      SERVED WITH PASSION
                    </h3>
                  </div>
                </div>
              </div>

             
              <div className="col-xl-7 col-lg-7 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="home-about-content">

                    <span
                      className="home-about-subtitle wow fadeInUp"
                      data-wow-duration="0.8s"
                    >
                      Taste The Tradition
                    </span>

                    <h2
                      className="wow fadeInUp"
                      data-wow-delay="0.15s"
                      data-wow-duration="0.9s"
                    >
                      AUTHENTIC INDIAN <span>CUISINE</span>
                    </h2>

                    <div
                      className="home-about-divider wow fadeInUp"
                      data-wow-delay="0.25s"
                    >
                      <span>✦</span>
                    </div>

                    <p
                      className="wow fadeInUp"
                      data-wow-delay="0.35s"
                      data-wow-duration="0.9s"
                    >
                      Experience the rich and authentic flavours of India,
                      freshly prepared with aromatic spices, traditional
                      recipes and the finest ingredients. From delicious
                      curries and crispy naan to flavourful rice and
                      mouth-watering starters, every dish is crafted to make
                      your dining experience truly special.
                    </p>

                    <a
                      href="/about"
                      className="home-about-btn wow fadeInUp"
                      data-wow-delay="0.5s"
                      data-wow-duration="0.8s"
                    >
                      <span className="home-about-btn-icon">
                        <i className="bi bi-leaf-fill"></i>
                      </span>

                      <span>About Us</span>
                    </a>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PREMIUM CTA BANNER
      ===================================================== */}
      <section
        className="main-cta-banner-2 premium-cta-banner"
        style={{
          backgroundImage: 'url("/assets/img/restaurant/3.webp")',
        }}
      >
        <div className="cta-overlay"></div>

        <div className="premium-banner-frame"></div>

        <div className="container">
          <div className="premium-cta-content">

            <div
              className="premium-eyebrow wow fadeInUp"
              data-wow-duration="0.8s"
            >
              <span className="eyebrow-line"></span>

              <span>A PLACE TO SAVOR</span>

              <span className="eyebrow-line"></span>
            </div>

            <div className="section-title premium-section-title mb-0">

              <h2
                className="wow fadeInUp"
                data-wow-delay="0.15s"
                data-wow-duration="1s"
              >
                More Than Just
                <br />
                <em>A Dining Experience</em>
              </h2>

            </div>

            <p
              className="premium-cta-description wow fadeInUp"
              data-wow-delay="0.3s"
              data-wow-duration="0.9s"
            >
              Where beautiful interiors, warm hospitality and unforgettable
              flavors come together.
            </p>

            <div
              className="premium-divider wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <span></span>

              <i className="bi bi-diamond-fill"></i>

              <span></span>
            </div>

            <a
              href="/menu"
              className="home-about-btn wow fadeInUp"
              data-wow-delay="0.5s"
              data-wow-duration="0.8s"
            >
              <span className="home-about-btn-icon">
                <i className="bi bi-leaf-fill"></i>
              </span>

              <span>See Our Menu</span>
            </a>

          </div>
        </div>
      </section>

      {/* =====================================================
          FOOD BANNER
      ===================================================== */}
      <section className="food-banner-section section-padding fix section-bg">

        <div className="chili-shape">
          <img
            src="/assets/img/shape/chili-shape.png"
            alt="Chili decoration"
            loading="lazy"
          />
        </div>

        <div className="fry-shape">
          <img
            src="/assets/img/shape/fry-shape.png"
            alt="Food decoration"
            loading="lazy"
          />
        </div>

        <div className="container">
          <div className="row">

            {/* LEFT OFFER */}
            <div
              className="col-xl-5 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div
                className="single-offer-items bg-cover"
                style={{
                  backgroundImage:
                    'url("/assets/img/banner/offer-bg.webp")',
                }}
              >

                <div className="offer-content">
                  <h5>crispy, every bite taste</h5>

                  <h3>
                    SUPER
                    <br />
                    DELICIOUS
                  </h3>
                </div>

                <div className="burger-text">
                  <img
                    src="/assets/img/shape/pizza-text-2.png"
                    alt="Food text"
                  />
                </div>

                <div className="main-food">
                  <img
                    src="/assets/img/food/food-01-removebg.png"
                    alt="Delicious food"
                  />
                </div>

              </div>
            </div>

            {/* RIGHT VIDEO */}
            <div
              className="col-xl-7 mt-5 mt-xl-0 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.35s"
            >
              <div
                className="pizza-banner-items bg-cover"
                style={{
                  backgroundImage:
                    'url("/assets/img/banner/corn-bg.webp")',
                }}
              >

                <div className="pizza-text">
                  <img
                    src="/assets/img/shape/corn-content.png"
                    alt="Corn"
                  />
                </div>

                <div className="pizza-image">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="video-section"
                  >
                    <source
                      src="/assets/video/corn.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FOOD COMBO
      ===================================================== */}
      <section
        className="food-comboo-section fix bg-cover section-padding"
        style={{
          backgroundImage: 'url("/assets/img/bg-image/bg.jpg")',
        }}
      >

        <div className="drinks-shape">
          <img
            src="/assets/img/shape/drinks.png"
            alt="Drinks decoration"
            loading="lazy"
          />
        </div>

        <div className="container">

          <div className="comboo-wrapper">

            <div className="row align-items-center">

              {/* CONTENT */}
              <div className="col-xl-6">

                <div className="food-comboo-content">

                  <div className="section-title">

                    <span
                      className="home-about-subtitle wow fadeInUp"
                      data-wow-duration="0.8s"
                    >
                      A Taste Worth Coming Back For
                    </span>

                    <h2
                      className="wow fadeInUp"
                      data-wow-delay="0.15s"
                    >
                      GOOD FOOD. GREAT VIBES.
                      <br />

                      <span style={{ color: "var(--theme)" }}>
                        URBAN MOMENTS.
                      </span>
                    </h2>

                  </div>

                  <p
                    className="wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    From comforting classics to bold new flavours, The Urban
                    Canteen brings together delicious food, refreshing drinks,
                    and a vibrant atmosphere made for every kind of gathering.
                  </p>

                  <div
                    className="nav nav-tabs"
                    id="nav-tab"
                    role="tablist"
                  >

                    {/* TAB 1 */}
                    <button
                      className="nav-link active wow fadeInUp"
                      data-wow-delay="0.4s"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <span className="food-comboo-list">
                        <span className="comboo-title">
                          Bold, delicious dishes crafted to make every bite
                          memorable.
                        </span>
                      </span>
                    </button>

                    {/* TAB 2 */}
                    <button
                      className="nav-link wow fadeInUp"
                      data-wow-delay="0.5s"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      <span className="food-comboo-list">
                        <span className="comboo-title">
                          A lively space where great food meets great
                          conversations.
                        </span>
                      </span>
                    </button>

                    {/* TAB 3 */}
                    <button
                      className="nav-link wow fadeInUp"
                      data-wow-delay="0.6s"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      <span className="food-comboo-list">
                        <span className="comboo-title">
                          Perfect for casual hangouts, celebrations, dates,
                          and everything in between.
                        </span>
                      </span>
                    </button>

                  </div>
                </div>
              </div>

              {/* IMAGE / VIDEO */}
              <div className="col-xl-6">

                <div
                  className="tab-content"
                  id="nav-tab-Content"
                >

                  {/* TAB 1 */}
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div
                      className="comboo-image wow zoomIn"
                      data-wow-duration="1s"
                    >
                      <video
                        className="combo-bg-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      >
                        <source
                          src="/assets/video/ice-cream.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>

                  {/* TAB 2 */}
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div
                      className="comboo-image bg-cover"
                      style={{
                        backgroundImage:
                          'url("/assets/img/banner/comboo-bg.jpg")',
                      }}
                    >

                      <div className="pizza-text">
                        <img
                          src="/assets/img/shape/combo-pizza-text.png"
                          alt="Pizza"
                        />
                      </div>

                      <div className="pizza-image">
                        <img
                          src="/assets/img/food/big-pizza.png"
                          alt="Pizza"
                        />
                      </div>

                      <div className="offer-shape">
                        <img
                          src="/assets/img/offer/50percent-off-2.png"
                          alt="Offer"
                        />
                      </div>

                      <div className="vegetable-shape">
                        <img
                          src="/assets/img/shape/vegetable.png"
                          alt="Vegetables"
                        />
                      </div>

                    </div>
                  </div>

                  {/* TAB 3 */}
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div
                      className="comboo-image bg-cover"
                      style={{
                        backgroundImage:
                          'url("/assets/img/banner/comboo-bg.jpg")',
                      }}
                    >

                      <div className="pizza-text">
                        <img
                          src="/assets/img/shape/combo-pizza-text.png"
                          alt="Pizza"
                        />
                      </div>

                      <div className="pizza-image">
                        <img
                          src="/assets/img/food/big-pizza.png"
                          alt="Pizza"
                        />
                      </div>

                      <div className="offer-shape">
                        <img
                          src="/assets/img/offer/50percent-off-2.png"
                          alt="Offer"
                        />
                      </div>

                      <div className="vegetable-shape">
                        <img
                          src="/assets/img/shape/vegetable.png"
                          alt="Vegetables"
                        />
                      </div>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MARQUE
      ===================================================== */}
      <section
        className="wow fadeIn"
        data-wow-duration="1s"
      >
        <Marque />
      </section>

      {/* =====================================================
          CHOOSE US
      ===================================================== */}
      <section
        className="choose-us fix section-padding pt-0 section-bg"
        style={{ paddingBottom: "50px" }}
      >

        <div className="container">

          <div
            className="food-icon-wrapper bg-cover"
            style={{
              backgroundImage:
                'url("/assets/img/shape/food-shape-2.png")',
            }}
          >

            <div className="row g-4">

              {/* CARD 1 */}
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.15s"
                data-wow-duration="0.8s"
              >
                <div className="single-food-icon">

                  <div className="icon">
                    <i className="flaticon-quality"></i>
                  </div>

                  <div className="content">
                    <h4>QUALITY YOU CAN TASTE</h4>

                    <p>
                      Fresh ingredients, thoughtful preparation, and flavours
                      made to leave a lasting impression.
                    </p>
                  </div>

                </div>
              </div>

              {/* CARD 2 */}
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
                data-wow-duration="0.8s"
              >
                <div className="single-food-icon">

                  <div className="icon">
                    <i className="flaticon-cooking"></i>
                  </div>

                  <div className="content">
                    <h4>ORIGINAL FLAVOURS</h4>

                    <p>
                      Carefully crafted dishes that bring together familiar
                      favourites and exciting new tastes.
                    </p>
                  </div>

                </div>
              </div>

              {/* CARD 3 */}
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.45s"
                data-wow-duration="0.8s"
              >
                <div className="single-food-icon">

                  <div className="icon">
                    <i className="bi bi-fork-knife"></i>
                  </div>

                  <div className="content">
                    <h4>GOOD FOOD, GREAT VIBES</h4>

                    <p>
                      A vibrant space to enjoy delicious food, relaxed
                      conversations, and memorable moments.
                    </p>
                  </div>

                </div>
              </div>

              {/* CARD 4 */}
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.6s"
                data-wow-duration="0.8s"
              >
                <div className="single-food-icon">

                  <div className="icon">
                    <i className="flaticon-heart"></i>
                  </div>

                  <div className="content">
                    <h4>MADE FOR EVERY MOMENT</h4>

                    <p>
                      From casual catch-ups to special celebrations, The Urban
                      Canteen is made for good times.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOD CATEGORY
      ===================================================== */}
      <section
        className="food-slider-wrapper wow fadeInUp"
        data-wow-duration="1s"
      >
        <FoodSlider />
      </section>

      {/* =====================================================
          RESERVATION
      ===================================================== */}
      <section
        className="booking-section fix section-padding bg-cover"
        style={{
          backgroundImage:
            'url("/assets/img/banner/form-bg.webp")',
        }}
      >

        <div className="container">

          <div className="booking-wrapper style-responsive section-padding pb-0">

            <div className="row justify-content-between align-items-center">

              <div
                className="col-lg-5 mt-5 mt-lg-0 wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <ReservationForm />
              </div>

              <div
                className="col-lg-6 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.35s"
              >
                {/* Future booking content */}
              </div>

            </div>

          </div>
        </div>
      </section>

    </FoodKingLayout>
  );
};

export default Page;