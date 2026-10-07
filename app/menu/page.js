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
  "Starters",
  "Mains",
  "Pizza & Pasta",
  "Asian",
  "Desserts",
  "Drinks",
];

const menuItems = [
  {
    id: 1,
    category: "Starters",
    name: "Crispy Corn",
    description:
      "Crispy golden corn tossed with herbs, spices and a touch of our signature seasoning.",
    price: "₹220",
    image: "/assets/img/gallery/01.webp",
    tag: "Popular",
  },
  {
    id: 2,
    category: "Starters",
    name: "Paneer Tikka",
    description:
      "Char-grilled cottage cheese marinated with aromatic spices, peppers and onions.",
    price: "₹280",
    image: "/assets/img/gallery/02.webp",
    tag: "Chef's Pick",
  },
  {
    id: 3,
    category: "Starters",
    name: "Chicken Tikka",
    description:
      "Tender chicken pieces marinated in aromatic spices and grilled to perfection.",
    price: "₹320",
    image: "/assets/img/gallery/03.webp",
    tag: "",
  },
  {
    id: 4,
    category: "Mains",
    name: "Butter Chicken",
    description:
      "Tender chicken simmered in a rich tomato gravy finished with butter and cream.",
    price: "₹390",
    image: "/assets/img/gallery/04.webp",
    tag: "Signature",
  },
  {
    id: 5,
    category: "Mains",
    name: "Paneer Butter Masala",
    description:
      "Soft paneer cooked in a creamy tomato gravy with subtle Indian spices.",
    price: "₹340",
    image: "/assets/img/gallery/05.webp",
    tag: "",
  },
  {
    id: 6,
    category: "Mains",
    name: "Dal Makhani",
    description:
      "Slow-cooked black lentils finished with butter and cream for a rich flavour.",
    price: "₹280",
    image: "/assets/img/gallery/06.webp",
    tag: "Classic",
  },
  {
    id: 7,
    category: "Pizza & Pasta",
    name: "Urban Margherita",
    description:
      "Classic tomato, mozzarella and basil with our signature hand-finished crust.",
    price: "₹360",
    image: "/assets/img/gallery/07.webp",
    tag: "Popular",
  },
  {
    id: 8,
    category: "Pizza & Pasta",
    name: "Farmhouse Pizza",
    description:
      "Fresh vegetables, mozzarella, herbs and a generous layer of melted cheese.",
    price: "₹420",
    image: "/assets/img/gallery/08.webp",
    tag: "",
  },
  {
    id: 9,
    category: "Pizza & Pasta",
    name: "Creamy Alfredo Pasta",
    description:
      "Silky creamy sauce tossed with pasta, herbs and freshly grated parmesan.",
    price: "₹380",
    image: "/assets/img/gallery/09.webp",
    tag: "",
  },
  {
    id: 10,
    category: "Asian",
    name: "Veg Hakka Noodles",
    description:
      "Wok-tossed noodles with crisp vegetables, herbs and our house seasoning.",
    price: "₹280",
    image: "/assets/img/gallery/10.webp",
    tag: "",
  },
  {
    id: 11,
    category: "Asian",
    name: "Chilli Paneer",
    description:
      "Crispy paneer tossed in a spicy Indo-Chinese sauce with peppers and onions.",
    price: "₹320",
    image: "/assets/img/gallery/11.webp",
    tag: "Popular",
  },
  {
    id: 12,
    category: "Asian",
    name: "Chicken Chilli",
    description:
      "Juicy chicken tossed with peppers, onions and a bold chilli-soy glaze.",
    price: "₹360",
    image: "/assets/img/gallery/12.webp",
    tag: "",
  },
  {
    id: 13,
    category: "Desserts",
    name: "Chocolate Brownie",
    description:
      "Warm, fudgy chocolate brownie served with a decadent chocolate finish.",
    price: "₹220",
    image: "/assets/img/gallery/13.webp",
    tag: "Must Try",
  },
  {
    id: 14,
    category: "Desserts",
    name: "Classic Cheesecake",
    description:
      "Smooth and creamy cheesecake with a delicate biscuit base.",
    price: "₹260",
    image: "/assets/img/gallery/14.webp",
    tag: "",
  },
  {
    id: 15,
    category: "Desserts",
    name: "Ice Cream",
    description:
      "Creamy scoops served chilled with your choice of classic flavours.",
    price: "₹180",
    image: "/assets/img/gallery/15.webp",
    tag: "",
  },
  {
    id: 16,
    category: "Drinks",
    name: "Classic Cold Coffee",
    description:
      "Smooth chilled coffee blended with milk and a touch of sweetness.",
    price: "₹180",
    image: "/assets/img/gallery/16.webp",
    tag: "Popular",
  },
  {
    id: 17,
    category: "Drinks",
    name: "Fresh Lime Cooler",
    description:
      "Refreshing lime, mint and chilled soda for the perfect cool-down.",
    price: "₹150",
    image: "/assets/img/gallery/17.webp",
    tag: "",
  },
  {
    id: 18,
    category: "Drinks",
    name: "Mango Smoothie",
    description:
      "Thick and creamy mango smoothie made with fresh seasonal mangoes.",
    price: "₹220",
    image: "/assets/img/gallery/18.webp",
    tag: "Seasonal",
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return menuItems;
    }

    return menuItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <FoodKingLayout>
      <div
      className="breadcrumb-wrapper bg-cover"
      style={{ backgroundImage: 'url("/assets/img/banner/menu-banner.webp")' }}
    >
      <div className="container">
        <div className="page-heading center">
          <h1>Our Menu</h1>
          <ul className="breadcrumb-items">
            <li>
              <Link href="/">Home Page</Link>
            </li>
            <li>
              <i className="far fa-chevron-right" />
            </li>
            <li>Menu</li>
          </ul>
        </div>
      </div>
    </div>
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

              <span className="home-about-subtitle wow fadeInUp"
                      data-wow-duration="0.8s">
                TASTE THE EXPERIENCE
              </span>

              <h2  className="wow fadeInUp"
                      data-wow-delay="0.15s">
                Made for cravings,
                <br />
                <em>made to share.</em>
              </h2>

              <p>
                From comforting Indian classics to bold Asian flavours,
                handcrafted pizzas, indulgent desserts and refreshing
                drinks — every plate at The Urban Canteen is created
                for good food and great moments.
              </p>

            </div>

            <div className="menu-intro-side">
              <span className="wow fadeInUp"
                      data-wow-delay="0.4s"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true">FRESH</span>
              <span  className="wow fadeInUp"
                      data-wow-delay="0.5s"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false">ORIGINAL</span>
              <span className="wow fadeInUp"
                      data-wow-delay="0.6s"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false">MEMORABLE</span>
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
              <span className="home-about-subtitle wow fadeInUp"
                      data-wow-duration="0.8s">
                EXPLORE OUR MENU
              </span>

              <h2>
                Something for
                <br />
                <em>every craving.</em>
              </h2>
            </div>

            <p className="menu-heading-text">
              Take your time, explore the flavours and find
              something that makes your moment a little better.
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

                  <div className="menu-image-overlay">

                   

                  </div>

                  {item.tag && (
                    <span className="menu-tag">
                      {item.tag}
                    </span>
                  )}

                </div>


                {/* CONTENT */}
                <div className="menu-item-content">

                  <div className="menu-item-top">

                    <div>

                      <span className="menu-item-category">
                        {item.category}
                      </span>

                      <h3>
                        {item.name}
                      </h3>

                    </div>

                    <span className="menu-price">
                      {item.price}
                    </span>

                  </div>

                  <p>
                    {item.description}
                  </p>


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