"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Nav, Tab, Modal } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const AboutFoodItems = () => {
  /* =========================================================
     IMAGE POPUP
  ========================================================= */
  const [selectedImage, setSelectedImage] = useState(null);

  /* =========================================================
     PLAYING VIDEO
  ========================================================= */
  const [playingVideo, setPlayingVideo] = useState(null);

  /* =========================================================
     VIDEO REFERENCES
  ========================================================= */
  const videoRefs = useRef([]);

  /* =========================================================
     VIDEO LOAD / ERROR STATE
     Tracks whether each video (by global index) is still
     loading, has failed, or is ready - so we never just
     show a blank black box.
  ========================================================= */
  const [videoStatus, setVideoStatus] = useState({});

  const setStatusFor = (index, status) => {
    setVideoStatus((prev) => ({
      ...prev,
      [index]: { ...prev[index], ...status },
    }));
  };

  /* =========================================================
     IMAGE LOAD STATE
     Same idea as videoStatus - track per-image (by a
     "tab:index" key so food/restaurant don't collide) so we
     can show a skeleton instead of blank space, and fade the
     image in only once it's actually decoded.
  ========================================================= */
  const [imageLoaded, setImageLoaded] = useState({});

  const markImageLoaded = (key) => {
    setImageLoaded((prev) => ({ ...prev, [key]: true }));
  };

  /* =========================================================
     FOOD IMAGES
  ========================================================= */
  const foodImages = [
    {
      image: "/assets/img/food/09.webp",
      title: "Chicago Deep Pizza",
      description:
        "Freshly prepared with delicious toppings and rich authentic flavours.",
    },
    {
      image: "/assets/img/food/10.webp",
      title: "Crispy Potato",
      description:
        "Golden, crispy and perfectly seasoned for an unforgettable taste.",
    },
    {
      image: "/assets/img/food/11.webp",
      title: "Special Chicken",
      description:
        "Tender chicken prepared with fresh ingredients and signature spices.",
    },
    {
      image: "/assets/img/food/12.webp",
      title: "Classic Cheeseburger",
      description:
        "Juicy, cheesy and loaded with flavour in every single bite.",
    },
    {
      image: "/assets/img/food/13.webp",
      title: "Classic Cheeseburger",
      description:
        "Juicy, cheesy and loaded with flavour in every single bite.",
    },
    {
      image: "/assets/img/food/14.webp",
      title: "Classic Cheeseburger",
      description:
        "Juicy, cheesy and loaded with flavour in every single bite.",
    },
    {
      image: "/assets/img/food/15.webp",
      title: "Classic Cheeseburger",
      description:
        "Juicy, cheesy and loaded with flavour in every single bite.",
    },

    /*
      Example:
      Agar 5th, 6th image add karenge,
      automatically carousel ho jayega.
    */

    // {
    //   image: "/assets/img/about-food/pasta.png",
    //   title: "Special Pasta",
    //   description: "Delicious creamy pasta prepared with fresh ingredients.",
    // },
  ];

  /* =========================================================
     RESTAURANT IMAGES
  ========================================================= */
  const restaurantImages = [
    {
      image: "/assets/img/restaurant/1.webp",
      title: "Our Dining Space",
      description:
        "A warm and elegant space designed for memorable dining experiences.",
    },
    {
      image: "/assets/img/restaurant/2.webp",
      title: "Premium Ambience",
      description:
        "Enjoy delicious food surrounded by a beautiful and relaxing ambience.",
    },
    {
      image: "/assets/img/restaurant/3.webp",
      title: "Perfect Place",
      description:
        "A welcoming environment for family, friends and special moments.",
    },
    {
      image: "/assets/img/restaurant/4.webp",
      title: "Dine With Us",
      description:
        "Experience great food, great service and unforgettable moments.",
    },
    {
      image: "/assets/img/restaurant/5.webp",
      title: "Dine With Us",
      description:
        "Experience great food, great service and unforgettable moments.",
    },
    {
      image: "/assets/img/restaurant/6.webp",
      title: "Dine With Us",
      description:
        "Experience great food, great service and unforgettable moments.",
    },
    {
      image: "/assets/img/restaurant/7.webp",
      title: "Dine With Us",
      description:
        "Experience great food, great service and unforgettable moments.",
    },


    /*
      Agar 5th image add karenge,
      automatically horizontal carousel hoga.
    */

    // {
    //   image: "/assets/img/restaurant/restaurant-5.webp",
    //   title: "Beautiful Corner",
    //   description: "A beautiful corner of our restaurant.",
    // },
  ];

  /* =========================================================
     RESTAURANT VIDEOS
     "poster" is optional but STRONGLY recommended -
     add a real thumbnail (.jpg/.webp) for each video so
     it never shows a black box before playback.
  ========================================================= */
  const restaurantVideos = [
    {
      video: "/assets/videos/restaurant-1.mp4",
      poster: "/assets/img/restaurant/restaurant-1-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-2.mp4",
      poster: "/assets/img/restaurant/restaurant-2-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-3.mp4",
      poster: "/assets/img/restaurant/restaurant-3-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-4.mp4",
      poster: "/assets/img/restaurant/restaurant-4-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-5.mp4",
      poster: "/assets/img/restaurant/restaurant-4-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-6.mp4",
      poster: "/assets/img/restaurant/restaurant-4-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-7.mp4",
      poster: "/assets/img/restaurant/restaurant-4-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-8.mp4",
      poster: "/assets/img/restaurant/restaurant-4-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-9.mp4",
      poster: "/assets/img/restaurant/restaurant-4-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-10.mp4",
      poster: "/assets/img/restaurant/restaurant-4-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-11.mp4",
      poster: "/assets/img/restaurant/restaurant-4-poster.webp",
    },

    // Add a 5th+ video and it will automatically switch to
    // a carousel with prev/next arrows.
    // {
    //   video: "/assets/videos/restaurant-5.mp4",
    //   poster: "/assets/img/restaurant/restaurant-5-poster.webp",
    //   title: "Behind The Scenes",
    // },
  ];

  /* =========================================================
     REVIEW VIDEOS
  ========================================================= */
  const reviewVideos = [
    {
      video: "/assets/videos/review-1.mp4",
      poster: "/assets/img/reviews/review-1-poster.webp",
    },
    {
      video: "/assets/videos/review-2.mp4",
      poster: "/assets/img/reviews/review-2-poster.webp",
    },
    {
      video: "/assets/videos/review-3.mp4",
      poster: "/assets/img/reviews/review-3-poster.webp",
    },
    {
      video: "/assets/videos/review-4.mp4",
      poster: "/assets/img/reviews/review-4-poster.webp",
    },

    // {
    //   video: "/assets/videos/review-5.mp4",
    //   poster: "/assets/img/reviews/review-5-poster.webp",
    //   title: "Another Great Review",
    // },
  ];

  /* =========================================================
     PLAY / PAUSE VIDEO
  ========================================================= */
  const handlePlayVideo = async (index) => {
    const selectedVideo = videoRefs.current[index];

    if (!selectedVideo) {
      console.error("Video reference not found:", index);
      return;
    }

    // Don't try to play a video that errored out
    if (videoStatus[index]?.error) return;

    if (!selectedVideo.paused) {
      selectedVideo.pause();
      setPlayingVideo(null);
      return;
    }

    videoRefs.current.forEach((video, videoIndex) => {
      if (video && videoIndex !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });

    try {
      await selectedVideo.play();
      setPlayingVideo(index);
    } catch (error) {
      console.error("Unable to play video:", error);
      setStatusFor(index, { error: true, loading: false });
    }
  };

  const handleVideoPlay = (index) => setPlayingVideo(index);

  const handleVideoPause = (index) => {
    setPlayingVideo((current) => (current === index ? null : current));
  };

  const handleVideoEnded = (index) => {
    setPlayingVideo((current) => (current === index ? null : current));
  };

  /* =========================================================
     VIDEO LOADED (metadata / data ready)
  ========================================================= */
  const handleVideoLoaded = (index) => {
    setStatusFor(index, { loading: false, error: false });
  };

  /* =========================================================
     VIDEO ERROR
     Instead of leaving a silent black box, mark it as
     errored so we can render a clear fallback message.
  ========================================================= */
  const handleVideoError = (event, videoPath, index) => {
    console.error("Unable to load video:", videoPath, event);
    setStatusFor(index, { loading: false, error: true });
  };

  /* =========================================================
     TAB CHANGE
  ========================================================= */
  const handleTabChange = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
    setPlayingVideo(null);
  };

  /* =========================================================
     GENERIC CAROUSEL ARROWS
     Works for any scrollable track (images or videos).
     Scrolls by exactly one item's width + gap, and keeps
     the arrows' disabled state in sync with scroll position.
  ========================================================= */
  const useCarouselControls = (itemCount) => {
    const trackRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const isCarousel = itemCount > 4;

    const updateEdges = useCallback(() => {
      const el = trackRef.current;
      if (!el) return;
      setAtStart(el.scrollLeft <= 2);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    }, []);

    useEffect(() => {
      if (!isCarousel) return;
      const el = trackRef.current;
      if (!el) return;

      updateEdges();
      el.addEventListener("scroll", updateEdges, { passive: true });
      window.addEventListener("resize", updateEdges);

      return () => {
        el.removeEventListener("scroll", updateEdges);
        window.removeEventListener("resize", updateEdges);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCarousel, itemCount]);

    const scroll = (direction) => {
      const el = trackRef.current;
      if (!el) return;

      const firstItem = el.querySelector(
        ".media-carousel-item, .video-carousel-item"
      );
      const gap = parseFloat(getComputedStyle(el).columnGap || 24) || 24;
      const step = firstItem
        ? firstItem.getBoundingClientRect().width + gap
        : el.clientWidth * 0.8;

      el.scrollBy({ left: direction * step, behavior: "smooth" });
    };

    return { trackRef, isCarousel, atStart, atEnd, scroll };
  };

  const foodCarousel = useCarouselControls(foodImages.length);
  const restaurantCarousel = useCarouselControls(restaurantImages.length);
  const videosCarousel = useCarouselControls(restaurantVideos.length);
  const reviewsCarousel = useCarouselControls(reviewVideos.length);

  /* =========================================================
     ARROW BUTTONS
  ========================================================= */
  const CarouselArrows = ({ carousel }) => {
    if (!carousel.isCarousel) return null;

    return (
      <>
        <button
          type="button"
          className="media-carousel-arrow arrow-prev"
          onClick={() => carousel.scroll(-1)}
          disabled={carousel.atStart}
          aria-label="Previous"
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        <button
          type="button"
          className="media-carousel-arrow arrow-next"
          onClick={() => carousel.scroll(1)}
          disabled={carousel.atEnd}
          aria-label="Next"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </>
    );
  };

  /* =========================================================
     IMAGE TAB RENDERER (food / restaurant - shared)
     - loading="lazy": images outside the viewport are not
       downloaded until the user scrolls near them.
     - decoding="async": image decoding doesn't block the
       main thread / paint.
     - fetchPriority: first couple of images (likely above
       the fold) get eager priority for a faster first paint,
       the rest are deprioritized.
     - width/height: reserves layout space so there's no
       cumulative layout shift (CLS) while images load.
  ========================================================= */
  const renderImageTab = (items, carousel, tabKey) => (
    <div
      className={`media-image-carousel-wrapper ${
        carousel.isCarousel ? "is-carousel" : ""
      }`}
    >
      <CarouselArrows carousel={carousel} />

      <div className="media-image-carousel">
        <div
          ref={carousel.trackRef}
          className={
            carousel.isCarousel
              ? "media-image-carousel-track has-carousel"
              : "media-image-grid"
          }
        >
          {items.map((item, index) => {
            const imgKey = `${tabKey}-${index}`;
            const loaded = !!imageLoaded[imgKey];

            return (
              <div
                className={
                  carousel.isCarousel
                    ? "media-carousel-item"
                    : "media-grid-item"
                }
                key={index}
              >
                <div className="restaurant-media-card">
                  <div
                    className="media-image popup-image-wrapper"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    {/* SKELETON - shown until the real image has decoded */}
                    {!loaded && <div className="media-image-skeleton" />}

                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      // First couple of cards are likely above the fold,
                      // so load them immediately and at higher priority.
                      // Everything else stays lazy (next/image default).
                      priority={index < 2}
                      loading={index < 2 ? "eager" : "lazy"}
                      // Tells the optimizer roughly how big the image will
                      // actually be rendered at each breakpoint, so it
                      // doesn't ship a full-width image to a small card.
                      sizes="(max-width: 576px) 90vw, (max-width: 992px) 45vw, 320px"
                      quality={70}
                      onLoad={() => markImageLoaded(imgKey)}
                      className={`media-tab-image ${
                        loaded ? "is-loaded" : ""
                      }`}
                    />

                    <div className="media-image-overlay">
                      <span className="popup-image-icon">
                        <i className="bi bi-zoom-in"></i>
                      </span>
                    </div>
                  </div>

                  <div className="media-card-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  /* =========================================================
     VIDEO TAB RENDERER (videos / reviews - shared)
     indexOffset lets "reviews" continue the same global
     videoRefs array that "videos" started.
     - poster image loads lazily too (browsers already defer
       full video download until interaction thanks to
       preload="metadata", but poster <img> inside a real
       <video> tag isn't a separate request here since it's
       passed via the poster attribute - nothing to change
       there).
  ========================================================= */
  const renderVideoTab = (items, carousel, indexOffset, extraCardClass = "") => (
    <div
      className={`media-image-carousel-wrapper ${
        carousel.isCarousel ? "is-carousel" : ""
      }`}
    >
      <CarouselArrows carousel={carousel} />

      <div className="media-image-carousel">
        <div
          ref={carousel.trackRef}
          className={
            carousel.isCarousel
              ? "video-carousel-track has-carousel"
              : "video-grid"
          }
        >
          {items.map((item, index) => {
            const videoIndex = indexOffset + index;
            const status = videoStatus[videoIndex] || {
              loading: true,
              error: false,
            };

            return (
              <div
                className={
                  carousel.isCarousel
                    ? "video-carousel-item"
                    : "video-grid-item"
                }
                key={index}
              >
                <div className={`restaurant-video-card ${extraCardClass}`}>
                  <div className="video-wrapper">
                    {/* LOADING STATE */}
                    {status.loading && !status.error && (
                      <div className="video-status video-loading">
                        <span className="video-spinner"></span>
                      </div>
                    )}

                    {/* ERROR STATE */}
                    {status.error && (
                      <div className="video-status video-error">
                        <i className="bi bi-exclamation-triangle"></i>
                        <span>Video unavailable</span>
                      </div>
                    )}

                    {/* VIDEO */}
                    <video
                      ref={(element) => {
                        videoRefs.current[videoIndex] = element;
                      }}
                      src={item.video}
                      poster={item.poster}
                      preload="metadata"
                      playsInline
                      className="restaurant-video"
                      style={{
                        opacity: status.error ? 0 : 1,
                      }}
                      onLoadedData={() => handleVideoLoaded(videoIndex)}
                      onPlay={() => handleVideoPlay(videoIndex)}
                      onPause={() => handleVideoPause(videoIndex)}
                      onEnded={() => handleVideoEnded(videoIndex)}
                      onError={(event) =>
                        handleVideoError(event, item.video, videoIndex)
                      }
                    />

                    {/* PLAY / PAUSE */}
                    {!status.error && (
                      <button
                        type="button"
                        className={`video-play-button ${
                          playingVideo === videoIndex ? "is-playing" : ""
                        }`}
                        onClick={() => handlePlayVideo(videoIndex)}
                        aria-label={
                          playingVideo === videoIndex
                            ? `Pause ${item.title}`
                            : `Play ${item.title}`
                        }
                      >
                        <i
                          className={
                            playingVideo === videoIndex
                              ? "bi bi-pause-fill"
                              : "bi bi-play-fill"
                          }
                        ></i>
                      </button>
                    )}
                  </div>

                  {/* <div className="video-card-content">
                    <h3>{item.title}</h3>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="about-food-section restaurant-media-section section-padding">
        <div className="container">
          <div className="about-food-wrapper style-2">
            <div className="section-title text-center">
              <span className="wow fadeInUp">A Taste Worth Remembering</span>

              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                More Than Food, <br />
                <span className="theme-color-3">It's an Experience</span>
              </h2>

              <p className="media-section-description">
                Explore our delicious food, beautiful ambience, memorable
                moments and what our customers have to say.
              </p>
            </div>

            <Tab.Container
              defaultActiveKey="food"
              id="restaurant-media-tabs"
              onSelect={handleTabChange}
            >
              <Nav className="restaurant-media-tabs justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="food">
                    <i className="bi bi-egg-fried"></i>
                    <span>Our Food</span>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="restaurant">
                    <i className="bi bi-building"></i>
                    <span>Restaurant</span>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="videos">
                    <i className="bi bi-play-circle"></i>
                    <span>Our Videos</span>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="reviews">
                    <i className="bi bi-chat-quote"></i>
                    <span>Reviews</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content className="restaurant-media-content">
                <Tab.Pane eventKey="food">
                  {renderImageTab(foodImages, foodCarousel, "food")}
                </Tab.Pane>

                <Tab.Pane eventKey="restaurant">
                  {renderImageTab(
                    restaurantImages,
                    restaurantCarousel,
                    "restaurant"
                  )}
                </Tab.Pane>

                <Tab.Pane eventKey="videos">
                  {renderVideoTab(restaurantVideos, videosCarousel, 0)}
                </Tab.Pane>

                <Tab.Pane eventKey="reviews">
                  {renderVideoTab(
                    reviewVideos,
                    reviewsCarousel,
                    restaurantVideos.length,
                    "review-video-card"
                  )}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </section>

      {/* IMAGE POPUP */}
      <Modal
        show={!!selectedImage}
        onHide={() => setSelectedImage(null)}
        centered
        size="xl"
        className="restaurant-image-modal"
      >
        <Modal.Body>
          <button
            type="button"
            className="image-modal-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <i className="bi bi-x-lg"></i>
          </button>

          {selectedImage && (
            <div className="popup-full-image-wrapper">
              <Image
                src={selectedImage}
                alt="Restaurant"
                fill
                sizes="90vw"
                quality={80}
                priority
                className="popup-full-image"
              />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AboutFoodItems;