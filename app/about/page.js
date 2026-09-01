import AboutFoodItems from "@/components/AboutFoodItems";
import InstagramBannerSlider from "@/components/InstagramBannerSlider";
import Marque from "@/components/Marque";
import { NextSaleBanner2 } from "@/components/NextSaleBanner";
import PageBanner from "@/components/PageBanner";
import TestimonialSlider from "@/components/TestimonialSlider";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import ReservationForm from "@/components/ReservationForm";

export const metadata = {
  title: "About Us | The Urban Canteen",
  description:
    "Discover the story behind The Urban Canteen, where delicious food, authentic flavours, warm hospitality and great vibes come together.",
};

const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"About us"} />
      {/* About Section Start */}
      <section className="about-section fix section-padding section-bg">

        <div className="about-top-decoration">
    <img
      src="assets/img/about/mirchi.webp"
      alt=""
    />
  </div>
        <div className="container">
          <div className="about-wrapper">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
                style={{ display: "flex", justifyContent: "center" }}
              >
                
                <div className="about-image">
                  <img src="assets/img/food/03.webp" alt="about-img" />
                  
                  {/* <div className="price">
                    <h2>
                      $<span className="count">4,99</span>
                    </h2>
                  </div>
                  <div
                    className="since-text bg-cover"
                    style={{
                      backgroundImage: 'url("assets/img/shape/food-shape.png")',
                    }}
                  >
                    <h3>since /1985</h3>
                  </div> */}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp home-about-subtitle">About The Urban Canteen</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      WHERE GOOD FOOD MEETS  <span style={{color: "Var(--theme)"}}>GREAT VIBES.</span>
                    </h2>
                  </div>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    The Urban Canteen is more than just a place to eat — it’s a space to gather, relax, and enjoy great food. From freshly prepared favourites to refreshing drinks, every 
                    plate is crafted with quality ingredients and served with a touch of care.
                  </p>
                  <div className="icon-area">
                    <div
                      className="icon-items d-flex wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="icon">
                        <i className="flaticon-quality" />
                      </div>
                      <div className="content">
                        <h4>FRESH & FLAVOURFUL</h4>
                        <p>
                          Every dish is prepared with fresh ingredients and 
                          bold flavours, bringing something delicious to every table.
                        </p>
                      </div>
                    </div>
                    <div
                      className="icon-items d-flex wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="icon">
                        <i className="flaticon-reputation" />
                      </div>
                      <div className="content">
                        <h4>GOOD FOOD, GREAT MOMENTS</h4>
                        <p>
                          A relaxed atmosphere, warm hospitality, and 
                          delicious food come together to create moments worth sharing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="info-area d-flex align-items-center">
                    <div
                className="hero-buttons wow fadeInUp mt-0"
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
                    <div
                      className="info-content wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <span>BRENDON GARREY</span>
                      <h6>YOUR TABLE. YOUR MOMENTS. YOUR URBAN EXPERIENCE.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Cta Banner Section Start */}
      <section
        className="main-cta-banner-2 bg-cover"
        style={{
          backgroundImage: 'url("assets/img/banner/bg-01.webp")', padding: "140px 0"
        }}
      >
        <div className="cta-overlay"></div>
        
        <div className="container">
          <div className="main-cta-banner-wrapper-2 d-flex align-items-center justify-content-between">
            <div className="section-title mb-0">
              
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Good <span className="theme-color-3">food</span>, great moments, <br />
                <span className="theme-color-3"> unforgettable </span>memories.
              </h2>
            </div>
            <div
                className="hero-buttons wow fadeInUp mt-0"
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
            <div className="delivery-man">
              <img src="assets/img/delivery-man-2.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
      {/* About Food Section Start */}
      <AboutFoodItems />
      {/* Testimonial Section Start */}
      {/* <TestimonialSlider /> */}
      {/* Marque Section Start */}
      <Marque />
      {/* Booking Section Start */}
      <section
        className="booking-section fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/banner/form-bg.webp")' }}
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
                {/* <div className="booking-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      crispy, every bite taste
                    </span>
                    <h2
                      className="text-white wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      need booking? <br />
                      reserve your table?
                    </h2>
                  </div>
                  <div
                    className="icon-items d-flex align-items-center wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="icon">
                      <i className="flaticon-phone-call-2" />
                    </div>
                    <div className="content">
                      <h5>24/7 Support center</h5>
                      <h3>
                        <a href="tel:+91 99381 61712">+91 99381 61712</a>
                      </h3>
                    </div>
                  </div>
                </div> */}
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/* Instagram Banner Section Start */}
      {/* <InstagramBannerSlider /> */}
    </FoodKingLayout>
  );
};
export default page;
