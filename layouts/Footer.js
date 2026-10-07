import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-section section-bg-3 fix">
      <div className="footer-shape">
        <img src="assets/img/shape/cup.png" alt="shape-img" style={{ width: "40%" }} />
      </div>
      <div className="footer-shape-2">
        <img src="assets/img/shape/img-1.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="footer-widgets-wrapper style-2">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 pe-md-2 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-footer-widget pe-md-5 border-right">
                <div className="widget-head">
                  <Link href="/">
                    <img src="assets/img/logo//white-logo.png" alt="logo-img" style={{ width: "35%" }} />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Good food, great vibes, and memorable moments. Welcome to The Urban Canteen — your place to eat, relax, and enjoy.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-2 col-md-6 ps-xl-5 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-footer-widget border-right">
                <div className="widget-head">
                  <h4>Quick Links</h4>
                </div>
                <div className="list-area d-flex align-items-center">
                  <ul>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/menu">Menu</Link>
                    </li>
                    <li>
                      <Link href="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div
              className="col-xl-2 col-lg-2 col-md-6 ps-xl-5 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-footer-widget single-footer-widget-second border-right">
                <div className="widget-head">
                  <h4>Follow Us</h4>
                </div>
                <div className="list-area d-flex align-items-center">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61564685393021">
                        <i className="fab fa-facebook-f" style={{ marginRight: "10px" }} />Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/theurbancanteen_/">
                        <i className="fab fa-instagram" style={{ marginRight: "10px" }} />Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" style={{ marginRight: "10px" }} />Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" style={{ marginRight: "10px" }} />Youtube
                      </a>
                    </li>

                  </ul>
                </div>
              </div>

            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <div className="widget-head">
                    <h4>contact us</h4>
                  </div>
                </div>
                <div className="footer-content">
                  <p><i className="fas fa-map-marker-alt" style={{ marginRight: "10px" }} />
                    Ground Floor, Infocity Ave, Chandaka Industrial Estate, I.E, Chandrasekharpur, <br />Bhubaneswar, Odisha 751021
                  </p>
                  <p><a href="mailto:info@example.com" className="link"><i className="fal fa-envelope" style={{ marginRight: "10px" }} />
                    info@example.com
                  </a></p>
                  <p><a href="tel:+91 99381 61712" className="number"><i className="fal fa-phone" style={{ marginRight: "10px" }} />
                    +91 99381 61712
                  </a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              © Copyright <span className="theme-color-3">2026</span>{" "}
              <Link href="/">The Urban Canteen </Link>. All Rights Reserved By <span className="theme-color-3"><Link href="https://crushaderstech.com/" className="theme-color-3">Crushaders Tech</Link></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
