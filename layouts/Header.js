"use client";
import Link from "next/link";
import { Fragment, useState } from "react";




const Menus = () => {
  return (
    <ul>
      <li className="has-dropdown active">
        <Link href="/">
          Home
          {/* <i className="fas fa-angle-down" /> */}
        </Link>
        {/* <ul className="submenu has-homemenu">
          <li className="border-none">
            <div className="row g-4">
              <div className="col-lg-4 homemenu">
                <div className="homemenu-thumb">
                  <img src="assets/img/header/home-1.jpg" alt="img" />
                  <div className="demo-button">
                    <Link href="/" className="theme-btn">
                      View Demo
                    </Link>
                  </div>
                </div>
                <div className="homemenu-content text-center">
                  <h4 className="homemenu-title">
                    <Link href="/">Home 01</Link>
                  </h4>
                </div>
              </div>
              <div className="col-lg-4  homemenu">
                <div className="homemenu-thumb mb-15">
                  <img src="assets/img/header/home-2.jpg" alt="img" />
                  <div className="demo-button">
                    <Link href="index-2" className="theme-btn">
                      View Demo
                    </Link>
                  </div>
                </div>
                <div className="homemenu-content text-center">
                  <h4 className="homemenu-title">
                    <Link href="index-2">Home 02</Link>
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 homemenu">
                <div className="homemenu-thumb mb-15">
                  <img src="assets/img/header/home-3.jpg" alt="img" />
                  <div className="demo-button">
                    <Link href="index-3" className="theme-btn">
                      View Demo
                    </Link>
                  </div>
                </div>
                <div className="homemenu-content text-center">
                  <h4 className="homemenu-title">
                    <Link href="index-3">Home 03</Link>
                  </h4>
                </div>
              </div>
            </div>
          </li>
        </ul> */}
      </li>
       <li>
        <Link href="about">
          About
         
        </Link>
      </li>
      <li className="has-dropdown">
        <Link href="shop">
          Menu
         
        </Link>
        
      </li>
     
      <li className="has-dropdown">
        <Link href="gallery">
          Gallery
        </Link>
      </li>
      <li>
        <Link href="contact">Contact</Link>
      </li>
    </ul>
  );
};

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <header className="section-bg">
        
        <div id="header-sticky" className="header-1">
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="logo">
  <Link href="/" className="header-logo">
    <img
      src="/assets/img/logo/URBAN-LOGO.png"
      alt="logo-img"
    />
  </Link>
</div>
                <div className="header-left">
                  <div className="mean__menu-wrapper d-none d-lg-block">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <Menus />
                      </nav>
                      {/* for wp */}
                    </div>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  
                  <div className="header-button">
                    <Link href="contact" className="theme-btn bg-red-2">
                      contact us
                    </Link>
                  </div>
                  <div className="header__hamburger d-xl-block my-auto">
                    <div className="sidebar__toggle">
                      <div
                        className="header-bar"
                        onClick={() => setToggle(true)}
                      >
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
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Sidebar toggle={toggle} setToggle={setToggle} />
    </Fragment>
  );
};


const Sidebar = ({ toggle, setToggle }) => {
  return (
    <Fragment>
      <div className="fix-area">
        <div className={`offcanvas__info ${toggle ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="/assets/img/logo/URBAN-LOGO.png" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => setToggle(false)}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="text d-none d-lg-block">
                This involves interactions between a business and its customers.
                It's about meeting customers' needs and resolving their
                problems. Effective customer service is crucial.
              </p>
              <div className="offcanvas-gallery-area d-none d-lg-block">
                <div className="offcanvas-gallery-items">
                  <a
                    href="/assets/img/gallery/01.webp"
                    className="offcanvas-image img-popup"
                  >
                    <img src="/assets/img/gallery/01.webp" alt="gallery-img" />
                  </a>
                  <a
                    href="/assets/img/gallery/11.webp"
                    className="offcanvas-image img-popup"
                  >
                    <img src="/assets/img/gallery/11.webp" alt="gallery-img" />
                  </a>
                  <a
                    href="/assets/img/gallery/18.webp"
                    className="offcanvas-image img-popup"
                  >
                    <img src="/assets/img/gallery/18.webp" alt="gallery-img" />
                  </a>
                </div>
                <div className="offcanvas-gallery-items">
                  <a
                    href="/assets/img/gallery/16.webp"
                    className="offcanvas-image img-popup"
                  >
                    <img src="/assets/img/gallery/16.webp" alt="gallery-img" />
                  </a>
                  <a
                    href="/assets/img/gallery/03.webp"
                    className="offcanvas-image img-popup"
                  >
                    <img src="/assets/img/gallery/03.webp" alt="gallery-img" />
                  </a>
                  <a
                    href="/assets/img/gallery/06.webp"
                    className="offcanvas-image img-popup"
                  >
                    <img src="/assets/img/gallery/06.webp" alt="gallery-img" />
                  </a>
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
                      <a target="_blank" href="#">
                        Ground Floor, Infocity Ave, Chandaka Industrial Estate, I.E, Chandrasekharpur,
Bhubaneswar, Odisha 751021
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+013-003-003-9993">
                        <span className="mailto:info@enofik.com">
                          info@foodking.com
                        </span>
                      </a>
                    </div>
                  </li>
                 
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+91 99381 61712">+91 99381 61712</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="menu" className="theme-btn">
                    <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                      <span className="button-icon">
                        <i className="bi bi-leaf-fill" />
                      </span>
                      <span className="button-text">View Menu</span>
                    </span>
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
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

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-lg-none">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span />
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            <li className="has-dropdown active">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="has-dropdown">
              <Link href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/news">
                Menu
              </Link>
            </li>
            <li className="has-dropdown">
              <Link href="/gallery">
                Gallery
              </Link>
              
            </li>
            <li className="mean-last">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};


export default Header;