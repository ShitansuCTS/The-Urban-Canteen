"use client";

import { useEffect, useRef } from "react";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const TestimonialSlider = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.playbackRate = 0.8;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Video autoplay blocked:", error);
      }
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("canplay", playVideo, { once: true });
    }

    return () => {
      video.removeEventListener("canplay", playVideo);
    };
  }, []);
  return (
    <section className="testimonial-section-2">
      <div className="cta-overlay"></div>
      <div className="container">
        <div
          className="testimonial-wrapper-2 bg-cover"
        >
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4">
              <div className="testimonial-image video-wrapper">
                <video
                  className="testimonial-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source
                    src="/assets/videos/people.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="feedback d-flex align-items-center">
                  <img src="/assets/img/feedback.svg" alt="Feedback" />
                  <h4>Feedback</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 mt-5 mt-lg-0">
              <Swiper
                {...sliderProps.testimonialContentSlider2}
                className="swiper testimonial-content-slider-2"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-content center">
                      <div className="client-info">
                        <h4>Piter Bowman</h4>
                        <h5>Business CEO &amp; co founder</h5>
                      </div>
                      <h3>
                        “Thank you for dinner last night. It was amazing!! I
                        have say it’s the best meal I have had in quite some
                        time. will definitely be seeing more eating next year.”
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-content center">
                      <div className="client-info">
                        <h4>Piter Bowman</h4>
                        <h5>Business CEO &amp; co founder</h5>
                      </div>
                      <h3>
                        “Thank you for dinner last night. It was amazing!! I
                        have say it’s the best meal I have had in quite some
                        time. will definitely be seeing more eating next year.”
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-content center">
                      <div className="client-info">
                        <h4>Piter Bowman</h4>
                        <h5>Business CEO &amp; co founder</h5>
                      </div>
                      <h3>
                        “Thank you for dinner last night. It was amazing!! I
                        have say it’s the best meal I have had in quite some
                        time. will definitely be seeing more eating next year.”
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-content center">
                      <div className="client-info">
                        <h4>Piter Bowman</h4>
                        <h5>Business CEO &amp; co founder</h5>
                      </div>
                      <h3>
                        “Thank you for dinner last night. It was amazing!! I
                        have say it’s the best meal I have had in quite some
                        time. will definitely be seeing more eating next year.”
                      </h3>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="swiper-dot style-2">
                  <div className="dot-2" />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialSlider;