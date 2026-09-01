"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";


const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "#" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];


const Menus = () => {
  const pathname = usePathname();

  return (
    <ul>
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname?.startsWith(item.href + "/");

        return (
          <li key={item.href} className={isActive ? "has-dropdown active" : ""}>
            <Link href={item.href} style={{textTransform: "Capitalize",fontWeight:"500"}}>{item.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};


const Header = () => {

  const [toggle, setToggle] = useState(false);

  useEffect(() => {

    if (toggle) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };

  }, [toggle]);


  return (
    <Fragment>

      <header className="section-bg">
        <div id="header-sticky" className="header-1">
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main" >

                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img
                      src="/assets/img/logo/URBAN-LOGO.png"
                      alt="logo-img"
                      loading="eager"
                      style={{ height: "70px", width: "auto" }}
                    />
                  </Link>
                </div>

                <div className="header-left">
                  <div className="mean__menu-wrapper d-none d-lg-block">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                </div>

                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="header-button">
                    <Link href="/contact" className="theme-btn bg-red-2">
                      Contact Us
                    </Link>
                  </div>

                  <div className="header__hamburger d-xl-block my-auto">
                    <div className="sidebar__toggle">
                      <div className="header-bar" onClick={() => setToggle(true)}>
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="search-wrap">
        <div className="search-inner">
          <i className="fas fa-times search-close" id="search-close" />
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search..." />
              </div>
            </form>
          </div>
        </div>
      </div>

      <Sidebar toggle={toggle} setToggle={setToggle} />

    </Fragment>
  );
};



/* =====================================================
   SIDEBAR
===================================================== */

const galleryImages = [
  "/assets/img/gallery/01.webp",
  "/assets/img/gallery/11.webp",
  "/assets/img/gallery/18.webp",
  "/assets/img/gallery/16.webp",
  "/assets/img/gallery/03.webp",
  "/assets/img/gallery/06.webp",
];

const Sidebar = ({ toggle, setToggle }) => {

  const wrapperRef = useRef(null);

  useEffect(() => {

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleWheel = (e) => {
      e.stopPropagation();
    };

    wrapper.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      wrapper.removeEventListener("wheel", handleWheel);
    };

  }, []);

  return (
    <Fragment>

      <div className="fix-area">
        <div className={`offcanvas__info ${toggle ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper" ref={wrapperRef}>
            <div className="offcanvas__content">

              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img
                      src="/assets/img/logo/URBAN-LOGO.png"
                      alt="logo-img"
                      loading="eager"
                    />
                  </Link>
                </div>

                <div className="offcanvas__close">
                  <button type="button" onClick={() => setToggle(false)}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>

              <p className="text d-none d-lg-block">
                This involves interactions between a business and its
                customers. It's about meeting customers' needs and
                resolving their problems. Effective customer service
                is crucial.
              </p>

              <div className="offcanvas-gallery-area d-none d-lg-block">
                <div className="offcanvas-gallery-items">
                  {galleryImages.slice(0, 3).map((src) => (
                    <a key={src} href={src} className="offcanvas-image img-popup">
                      <img src={src} alt="gallery-img" loading="eager" />
                    </a>
                  ))}
                </div>

                <div className="offcanvas-gallery-items">
                  {galleryImages.slice(3, 6).map((src) => (
                    <a key={src} href={src} className="offcanvas-image img-popup">
                      <img src={src} alt="gallery-img" loading="eager" />
                    </a>
                  ))}
                </div>
              </div>

              <MobileMenu />

              <div className="offcanvas__contact">
                <h4>Contact Info</h4>

                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" rel="noopener noreferrer" href="#">
                        Ground Floor, Infocity Ave, Chandaka
                        Industrial Estate, I.E,
                        Chandrasekharpur, Bhubaneswar,
                        Odisha 751021
                      </a>
                    </div>
                  </li>

                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@foodking.com">info@foodking.com</a>
                    </div>
                  </li>

                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+919938161712">+91 99381 61712</a>
                    </div>
                  </li>
                </ul>

                <div className="header-button mt-4">
                  <Link href="/menu" className="theme-btn" onClick={() => setToggle(false)}>
                    <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                      <span className="button-icon">
                        <i className="bi bi-leaf-fill" />
                      </span>
                      <span className="button-text">View Menu</span>
                    </span>
                  </Link>
                </div>

                <div className="social-icon d-flex align-items-center">
                  <a href="#"><i className="fab fa-facebook-f" /></a>
                  <a href="#"><i className="fab fa-twitter" /></a>
                  <a href="#"><i className="fab fa-youtube" /></a>
                  <a href="#"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div
        className={`offcanvas__overlay ${toggle ? "overlay-open" : ""}`}
        onClick={() => setToggle(false)}
      />

    </Fragment>
  );
};



/* =====================================================
   MOBILE MENU
===================================================== */

const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-lg-none">
      <div className="mean-bar">
        <nav className="mean-nav">
          <ul>
            {navItems.map((item, index) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname?.startsWith(item.href + "/");

              const isLast = index === navItems.length - 1;

              return (
                <li
                  key={item.href}
                  className={
                    isLast
                      ? "mean-last"
                      : isActive
                        ? "has-dropdown active"
                        : "has-dropdown"
                  }
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};


export default Header;