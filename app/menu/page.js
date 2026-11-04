"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import FoodKingLayout from "@/layouts/FoodKingLayout";
import PageBanner from "@/components/PageBanner";
import Marque from "@/components/Marque";
import ReservationForm from "@/components/ReservationForm";
const categories = [
  "All",
  "Breakfast",
  "Soup & Salad",
  "Small Plates",
  "Mains for one",
  "Pizza & Pasta",
  "Asian",
  "Desserts",
  "Drinks",
];

const menuItems = [
  {
    id: 1,
    category: "Breakfast",
    name: "Smashed HAS Avo",
    description: "With Marinated Tomatoes",
    price: "₹265",
    image: "/assets/img/gallery/01.webp",
    tag: "Popular",
  },
  {
    id: 2,
    category: "Breakfast",
    name: "Cheese Fondue and Chicken Ham Omlette",
    description: "Diced Ham and Lots of Chili Cheese",
    price: "₹265",
    image: "/assets/img/gallery/02.webp",
    tag: "Chef's Pick",
  },
  {
    id: 3,
    category: "Soup & Salad",
    name: "North Eastern Noodle Thukpa",
    description: "Noodles, Flavourful Broth, Vegetables and Crispy Chili Oil",
    price: "₹175",
    image: "/assets/img/gallery/03.webp",
    tag: "",
  },
  {
    id: 4,
    category: "Soup & Salad",
    name: "Mumbai Pani Poori ",
    description:
      "With Aloo ka Filling and Boondi, Teekha Pudina Paani and Meetha Imly Paani",
    price: "₹150",
    image: "/assets/img/gallery/04.webp",
    tag: "Signature",
  },
  {
    id: 5,
    category: "Small Plates",
    name: "Lotus Stem Chili Plum",
    description:
      "Fried Crisp. Wok Tossed with Spicy Green Chili and Plum Sauce",
    price: "₹275",
    image: "/assets/img/gallery/05.webp",
    tag: "",
  },
  {
    id: 6,
    category: "Small Plates",
    name: "Urban KFC Popcorn",
    description: "Kerala Fried Chicken popcorn",
    price: "₹295",
    image: "/assets/img/gallery/06.webp",
    tag: "Classic",
  },
  {
    id: 7,
    category: "Mains for one",
    name: "Jolokia Crunch Wrap",
    description:
      "Refried Beans, Cheese Sauce, Pico de Gallo, Chipotle, Lettuce and Nachos",
    price: "₹245",
    image: "/assets/img/gallery/07.webp",
    tag: "Popular",
  },
  {
    id: 8,
    category: "Mains for one",
    name: "UK's Fish and Chips",
    description: "Crumb Fried Fish, French Fries and Tartar Sauce",
    price: "₹375",
    image: "/assets/img/gallery/08.webp",
    tag: "",
  },
  {
    id: 9,
    category: "Pizza & Pasta",
    name: "Veggie Overload Pizza ",
    description:
      "For the Vegetable Lovers. Artichoke, Brocolli, American Corn, Peppers, Tomato, Onion, Olives, Jalapeno",
    price: "₹335",
    image: "/assets/img/gallery/09.webp",
    tag: "",
  },
  {
    id: 10,
    category: "Pizza & Pasta",
    name: "Butter Chicken Pizza",
    description:
      "Creamy Pulled Chicken, Makhani Sauce, Coriander, Jalapeno, Onion, Chaat Masala",
    price: "₹355",
    image: "/assets/img/gallery/10.webp",
    tag: "",
  },
  {
    id: 11,
    category: "Pizza & Pasta",
    name: "Shroomy Penne",
    description: "Creamy Mushroom, Parmesan, Nutmeg, Garlic",
    price: "₹355",
    image: "/assets/img/gallery/11.webp",
    tag: "Popular",
  },
  {
    id: 12,
    category: "Pizza & Pasta",
    name: "Mac & Cheese Casserol",
    description:
      "Macaroni and Cheese Sauce, Topped with Chili Cheese mix, Baked",
    price: "₹375",
    image: "/assets/img/gallery/12.webp",
    tag: "",
  },
  {
    id: 13,
    category: "Asian",
    name: "Hakka Noodles",
    description: "(Veg / Egg / Chicken)",
    price: "₹265 / ₹295 / ₹325",
    image: "/assets/img/gallery/13.webp",
    tag: "Must Try",
  },
  {
    id: 14,
    category: "Asian",
    name: "Sczhewan Rice",
    description: "(Vegetable Dumplings / Chicken)",
    price: "₹295 / ₹385",
    image: "/assets/img/gallery/14.webp",
    tag: "",
  },
  {
    id: 15,
    category: "Desserts",
    name: "Whipped Blackforest Chocolate Mousse Jar",
    description:
      "Milk Chocolate and Whipped Cream Cheese, Zesty Cherry Sauce, Chocolate Sponge",
    price: "₹255",
    image: "/assets/img/gallery/15.webp",
    tag: "Popular",
  },
  {
    id: 16,
    category: "Desserts",
    name: "Blueberry Cheesecake Jar",
    description: "Cream Cheese Mousse, Blueberry Compote",
    price: "₹255",
    image: "/assets/img/gallery/16.webp",
    tag: "",
  },
  {
    id: 17,
    category: "Drinks",
    name: "Urban Sunshine",
    price: "₹265",
    image: "/assets/img/gallery/17.webp",
    tag: "",
  },
  {
    id: 18,
    category: "Drinks",
    name: "Death By Chocolate Shake",
    price: "₹255",
    image: "/assets/img/gallery/18.webp",
    tag: "",
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return menuItems;
    }

    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <FoodKingLayout>
      <PageBanner
        pageName={"Our Menu"}
        bannerImage="/assets/img/banner/menu-banner.webp"
      />

      <main className="tuc-menu-page">
        {/* =====================================================
          INTRO
      ====================================================== */}
        <section className="section-padding">
          <div className="menu-container">
            <div className="menu-intro-grid">
              <div className="menu-intro-small">
                <span>THE URBAN CANTEEN</span>
                <div className="intro-number">01</div>
              </div>

              <div className="menu-intro-main">
                <span
                  class="home-about-subtitle wow fadeInUp"
                  data-wow-duration="0.8s"
                  style={{ visibility: "visible", animationDuration: "0.8s" }}
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
                  food meets a beautiful ambience, creating the perfect setting
                  to connect, unwind and savour every moment.
                </p>
              </div>

              <div className="menu-intro-side">
                <span
                  className="wow fadeInUp"
                  data-wow-delay="0.4s"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
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
                  type="button"
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
                  type="button"
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

        {/* =====================================================
          CATEGORY NAVIGATION
      ====================================================== */}
        <section className="section-padding dark-bg">
          <div className="menu-container">
            <div className="menu-heading">
              <div>
                <span
                  class="home-about-subtitle wow fadeInUp"
                  data-wow-duration="0.8s"
                  style={{ visibility: "visible", animationDuration: "0.8s" }}
                >
                   Explore Our Menu
                </span>

                <h2>
                  Something for
                  <br />
                  <em>every craving.</em>
                </h2>
              </div>

              <p className="menu-heading-text">
                Take your time, explore the flavours and find something that
                makes your moment a little better.
              </p>
            </div>

            {/* FILTERS */}
            <div className="menu-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "menu-filter active"
                      : "menu-filter"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* MENU GRID */}
            <div className="menu-grid">
              {filteredItems.map((item, index) => (
                <article
                  className="menu-item"
                  key={item.id}
                  style={{
                    "--item-delay": `${index * 70}ms`,
                  }}
                >
                  {/* IMAGE */}
                  <div className="menu-item-image">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="menu-image"
                    />

                    <div className="menu-image-overlay"></div>

                    {item.tag && <span className="menu-tag">{item.tag}</span>}
                  </div>

                  {/* CONTENT */}
                  <div className="menu-item-content">
                    <div className="menu-item-top">
                      <div>
                        <span className="menu-item-category">
                          {item.category}
                        </span>

                        <h3>{item.name}</h3>
                      </div>

                      <span className="menu-price">{item.price}</span>
                    </div>

                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
      </main>
    </FoodKingLayout>
  );
}
