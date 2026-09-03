import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";

export const metadata = {
  title: "Contact Us | The Urban Canteen",
  description:
    "Get in touch with The Urban Canteen for reservations, enquiries and more. Visit us and enjoy great food, refreshing drinks and a vibrant dining experience.",
};
const page = () => {

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Contact us"} bannerImage="/assets/img/restaurant/7.webp" />

      {/*<< Contact Section Start >>*/}
      <section className="contact-section section-padding section-bg">
        <div className="container">
          <div className="contact-area">

            <div className="row justify-content-between">
              <div className="col-xl-6 col-lg-6">
                <h3 className="wow fadeInUp" data-wow-delay=".3s">
                  {" "}
                  Dine With Us - <span style={{ color: "var(--theme)" }}>Join Now</span>
                </h3>
                <div className="map-content-area">

                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    Good food tastes even better when shared. Visit The Urban Canteen for delicious flavours, warm hospitality, and a space
                    made for great conversations and memorable moments.
                  </p>
                  <div className="google-map wow fadeInUp" data-wow-delay=".7s">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.7459525538347!2d85.80617339999999!3d20.342034400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190935b96ab859%3A0xa65fabb3fbe131bc!2sThe%20Urban%20Canteen!5e1!3m2!1sen!2sin!4v1787734774225!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 mt-5 mt-lg-0">
                <div className="contact-form-items">
                  <div className="contact-title">
                    <h3 className="wow fadeInUp" data-wow-delay=".3s">
                      Fill Up The Form
                    </h3>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>
                  <form id="contact-form" method="POST">
                    <div className="row g-4">
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name*"
                          />
                          <div className="icon">
                            <i className="fal fa-user" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Address*"
                          />
                          <div className="icon">
                            <i className="fal fa-envelope" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <div className="form-clt-big form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Enter Your Messege here"
                            defaultValue={""}
                          />
                          <div className="icon">
                            <i className="fal fa-edit" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".8s"
                      >
                        <button type="submit" className="theme-btn">
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon">
                              <i className="fal fa-paper-plane" />
                            </span>
                            <span className="button-text">Get In Touch</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Contact Info Section Start >>*/}
      
    </FoodKingLayout>
  );
};
export default page;
