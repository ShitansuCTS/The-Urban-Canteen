import Link from "next/link";

// const Footer = ({ footer }) => {
//   switch (footer) {
//     case 1:
//       return <Footer1 />;
//     case 2:
//       return <Footer2 />;

//     default:
//       return <Footer1 />;
//   }
// };
// const Footer1 = () => {
//   return (
//     <footer className="footer-section fix section-bg">
//       <div className="burger-shape">
//         <img src="assets/img/shape/burger-shape-3.png" alt="burger-shape" />
//       </div>
//       <div className="fry-shape">
//         <img src="assets/img/shape/fry-shape-2.png" alt="burger-shape" />
//       </div>
//       <div className="container">
//         <div className="footer-widgets-wrapper">
//           <div className="row">
//             <div
//               className="col-xl-3 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
//               data-wow-delay=".2s"
//             >
//               <div className="single-footer-widget">
//                 <div className="widget-head">
//                   <Link href="/">
//                     <img src="assets/img/logo/URBAN-LOGO.png" alt="logo-img" style={{ width: "35%" }} />
//                   </Link>
//                 </div>
//                 <div className="footer-content">
//                   <p>
//                     We believe it has the power to do <br />
//                     amazing things.
//                   </p>
//                   <span>Interested in working with us?</span> <br />
//                   <a href="mailto:info@example.com" className="link">
//                     info@example.com
//                   </a>

//                 </div>
//               </div>
//             </div>
//             <div
//               className="col-xl-3 ps-lg-5 col-sm-6 col-md-3 col-lg-3 wow fadeInUp"
//               data-wow-delay=".4s"
//             >
//               <div className="single-footer-widget">
//                 <div className="widget-head">
//                   <h4>Quick Links</h4>
//                 </div>
//                 <ul className="list-items">
//                   <li>
//                     <Link href="/">Home</Link>
//                   </li>
//                   <li>
//                     <Link href="/about">About</Link>
//                   </li>
//                   <li>
//                     <Link href="#">Menu</Link>
//                   </li>
//                   <li>
//                     <Link href="/gallery">Gallery</Link>
//                   </li>
//                   <li>
//                     <Link href="/contact">Contact Us</Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div
//               className="col-xl-3 ps-lg-4 col-sm-6 col-md-3 col-lg-3 wow fadeInUp"
//               data-wow-delay=".6s"
//             >
//               <div className="single-footer-widget">
//                 <div className="widget-head">
//                   <h4>Follow Us Now</h4>
//                 </div>

//                 <ul className="list-item">
//                   <li>
//                     <a href="#">
//                       <i className="fab fa-facebook-f" style={{marginRight: "10px"}}/>Facebook
//                     </a>
//                   </li>
//                   <li>
//                      <a href="#">
//                       <i className="fab fa-instagram" style={{marginRight: "10px"}}/>Instagram
//                     </a>
//                   </li>
//                   <li>
//                      <a href="#">
//                       <i className="fab fa-twitter" style={{marginRight: "10px"}}/>Twitter
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <i className="fab fa-youtube" style={{marginRight: "10px"}}/>Youtube
//                     </a>
//                   </li>

//                 </ul>
//               </div>
//             </div>
//             <div
//               className="col-xl-3 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
//               data-wow-delay=".8s"
//             >
//               <div className="single-footer-widget">
//                 <div className="widget-head">
//                   <h4>Address:</h4>
//                 </div>
//                 <div className="footer-address-text">
//                   <h6>
//                     Ground Floor, Infocity Ave, Chandaka Industrial Estate, I.E, Chandrasekharpur, Bhubaneswar, Odisha 751021
//                   </h6>
//                   <h5>Hours:</h5>
//                   <h6>
//                     9.30am – 6.30pm <br />
//                     Monday to Friday
//                   </h6>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <div className="container">
//           <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
//             <p className="wow fadeInLeft" data-wow-delay=".3s">
//               © Copyright <span className="theme-color-3">2026</span>{" "}
//               <Link href="/">The Urban Canteen </Link>. All Rights Reserved By <span className="theme-color-3"> <Link href="https://crushaderstech.com/">Crushaders Tech</Link></span>
//             </p>

//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

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
                    Temporibus autem quibusdam officiis debitis aut rerum
                    necessitatibus saepe eveniet voluta repudiandae molestiae
                    recusandae Itaquear rerum hic tenetur sapiente delectus
                  </p>
                  {/* <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div> */}
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
                    {/* <li>
                      <Link href="/">Home</Link>
                    </li> */}
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="#">Menu</Link>
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
                  <h4>Follow Us Now</h4>
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
        {/* <div
          id="scrollUp"
          className="scroll-icon bg-cover"
          style={{ backgroundImage: 'url("assets/img/shop-food/box.png")' }}
        >
          <i className="fas fa-arrow-alt-up" />
        </div> */}
        <div className="container">
          <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              © Copyright <span className="theme-color-3">2026</span>{" "}
              <Link href="/">The Urban Canteen </Link>. All Rights Reserved By <span className="theme-color-3"><Link href="https://crushaderstech.com/" className="theme-color-3">Crushaders Tech</Link></span>
            </p>
            {/* <ul className="wow fadeInRight" data-wow-delay=".5s">
              <li>
                <Link href="/contact">
                  <span className="text-effect">
                    <span className="effect-1">Privacy Policy</span>
                    <span className="effect-1">Privacy Policy</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-effect">
                    <span className="effect-1">Terms &amp; Condition</span>
                    <span className="effect-1">Terms &amp; Condition</span>
                  </span>
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
