"use client";

import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Nav, Tab } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

/* =========================================================
   MAIN COMPONENT
========================================================= */

const AboutFoodItems = () => {
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
  ========================================================= */

  const [videoStatus, setVideoStatus] = useState({});

  const setStatusFor = (index, status) => {
    setVideoStatus((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        ...status,
      },
    }));
  };

  /* =========================================================
     RESTAURANT VIDEOS
  ========================================================= */

  const restaurantVideos = [
    {
      video: "/assets/videos/restaurant-1.mp4",
      poster:
        "/assets/img/restaurant/restaurant-1-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-2.mp4",
      poster:
        "/assets/img/restaurant/restaurant-2-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-3.mp4",
      poster:
        "/assets/img/restaurant/restaurant-3-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-4.mp4",
      poster:
        "/assets/img/restaurant/restaurant-4-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-5.mp4",
      poster:
        "/assets/img/restaurant/restaurant-4-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-6.mp4",
      poster:
        "/assets/img/restaurant/restaurant-4-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-7.mp4",
      poster:
        "/assets/img/restaurant/restaurant-4-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-8.mp4",
      poster:
        "/assets/img/restaurant/restaurant-4-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-9.mp4",
      poster:
        "/assets/img/restaurant/restaurant-4-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-10.mp4",
      poster:
        "/assets/img/restaurant/restaurant-4-poster.webp",
    },
    {
      video: "/assets/videos/restaurant-11.mp4",
      poster:
        "/assets/img/restaurant/restaurant-4-poster.webp",
    },
  ];

  /* =========================================================
     REVIEW VIDEOS
  ========================================================= */

  const reviewVideos = [
    {
      video: "/assets/videos/review-1.mp4",
      poster:
        "/assets/img/reviews/review-1-poster.webp",
    },
    {
      video: "/assets/videos/review-2.mp4",
      poster:
        "/assets/img/reviews/review-2-poster.webp",
    },
    {
      video: "/assets/videos/review-3.mp4",
      poster:
        "/assets/img/reviews/review-3-poster.webp",
    },
    {
      video: "/assets/videos/review-4.mp4",
      poster:
        "/assets/img/reviews/review-4-poster.webp",
    },
  ];

  /* =========================================================
     PLAY / PAUSE VIDEO
  ========================================================= */

  const handlePlayVideo = async (index) => {
    const selectedVideo = videoRefs.current[index];

    if (!selectedVideo) {
      console.error(
        "Video reference not found:",
        index
      );
      return;
    }

    // Don't play video if it has an error
    if (videoStatus[index]?.error) {
      return;
    }

    /* =====================================================
       PAUSE CURRENT VIDEO
    ===================================================== */

    if (!selectedVideo.paused) {
      selectedVideo.pause();
      setPlayingVideo(null);
      return;
    }

    /* =====================================================
       PAUSE ALL OTHER VIDEOS
    ===================================================== */

    videoRefs.current.forEach(
      (video, videoIndex) => {
        if (
          video &&
          videoIndex !== index
        ) {
          video.pause();
          video.currentTime = 0;
        }
      }
    );

    /* =====================================================
       PLAY SELECTED VIDEO
    ===================================================== */

    try {
      await selectedVideo.play();

      setPlayingVideo(index);
    } catch (error) {
      console.error(
        "Unable to play video:",
        error
      );

      setStatusFor(index, {
        error: true,
        loading: false,
      });
    }
  };

  /* =========================================================
     VIDEO EVENTS
  ========================================================= */

  const handleVideoPlay = (index) => {
    setPlayingVideo(index);
  };

  const handleVideoPause = (index) => {
    setPlayingVideo((current) =>
      current === index
        ? null
        : current
    );
  };

  const handleVideoEnded = (index) => {
    setPlayingVideo((current) =>
      current === index
        ? null
        : current
    );
  };

  /* =========================================================
     VIDEO LOADED
  ========================================================= */

  const handleVideoLoaded = (index) => {
    setStatusFor(index, {
      loading: false,
      error: false,
    });
  };

  /* =========================================================
     VIDEO ERROR
  ========================================================= */

  const handleVideoError = (
    event,
    videoPath,
    index
  ) => {
    console.error(
      "Unable to load video:",
      videoPath,
      event
    );

    setStatusFor(index, {
      loading: false,
      error: true,
    });
  };

  /* =========================================================
     TAB CHANGE
  ========================================================= */

  const handleTabChange = () => {
    // Stop all videos when changing tab
    videoRefs.current.forEach(
      (video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      }
    );

    setPlayingVideo(null);
  };

  /* =========================================================
     CAROUSEL CONTROLS
  ========================================================= */

  const useCarouselControls = (
    itemCount
  ) => {
    const trackRef = useRef(null);

    const [atStart, setAtStart] =
      useState(true);

    const [atEnd, setAtEnd] =
      useState(false);

    const isCarousel =
      itemCount > 4;

    /* =====================================================
       UPDATE ARROW STATE
    ===================================================== */

    const updateEdges =
      useCallback(() => {
        const element =
          trackRef.current;

        if (!element) return;

        setAtStart(
          element.scrollLeft <= 2
        );

        setAtEnd(
          element.scrollLeft +
            element.clientWidth >=
            element.scrollWidth - 2
        );
      }, []);

    /* =====================================================
       SCROLL LISTENER
    ===================================================== */

    useEffect(() => {
      if (!isCarousel) return;

      const element =
        trackRef.current;

      if (!element) return;

      updateEdges();

      element.addEventListener(
        "scroll",
        updateEdges,
        {
          passive: true,
        }
      );

      window.addEventListener(
        "resize",
        updateEdges
      );

      return () => {
        element.removeEventListener(
          "scroll",
          updateEdges
        );

        window.removeEventListener(
          "resize",
          updateEdges
        );
      };
    }, [
      isCarousel,
      itemCount,
      updateEdges,
    ]);

    /* =====================================================
       SCROLL CAROUSEL
    ===================================================== */

    const scroll = (direction) => {
      const element =
        trackRef.current;

      if (!element) return;

      const firstItem =
        element.querySelector(
          ".video-carousel-item"
        );

      const gap =
        parseFloat(
          getComputedStyle(
            element
          ).columnGap || 24
        ) || 24;

      const step = firstItem
        ? firstItem.getBoundingClientRect()
            .width + gap
        : element.clientWidth * 0.8;

      element.scrollBy({
        left: direction * step,
        behavior: "smooth",
      });
    };

    return {
      trackRef,
      isCarousel,
      atStart,
      atEnd,
      scroll,
    };
  };

  /* =========================================================
     CAROUSEL INSTANCES
  ========================================================= */

  const videosCarousel =
    useCarouselControls(
      restaurantVideos.length
    );

  const reviewsCarousel =
    useCarouselControls(
      reviewVideos.length
    );

  /* =========================================================
     CAROUSEL ARROWS
  ========================================================= */

  const CarouselArrows = ({
    carousel,
  }) => {
    if (!carousel.isCarousel) {
      return null;
    }

    return (
      <>
        {/* PREVIOUS */}

        <button
          type="button"
          className="media-carousel-arrow arrow-prev"
          onClick={() =>
            carousel.scroll(-1)
          }
          disabled={carousel.atStart}
          aria-label="Previous"
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        {/* NEXT */}

        <button
          type="button"
          className="media-carousel-arrow arrow-next"
          onClick={() =>
            carousel.scroll(1)
          }
          disabled={carousel.atEnd}
          aria-label="Next"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </>
    );
  };

  /* =========================================================
     VIDEO TAB RENDERER
  ========================================================= */

  const renderVideoTab = (
    items,
    carousel,
    indexOffset = 0,
    extraCardClass = ""
  ) => {
    return (
      <div
        className={`media-image-carousel-wrapper ${
          carousel.isCarousel
            ? "is-carousel"
            : ""
        }`}
      >

        {/* CAROUSEL ARROWS */}

        <CarouselArrows
          carousel={carousel}
        />

        {/* VIDEO CONTAINER */}

        <div className="media-image-carousel">

          <div
            ref={carousel.trackRef}
            className={
              carousel.isCarousel
                ? "video-carousel-track has-carousel"
                : "video-grid"
            }
          >

            {items.map(
              (item, index) => {
                const videoIndex =
                  indexOffset + index;

                const status =
                  videoStatus[
                    videoIndex
                  ] || {
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

                    <div
                      className={`restaurant-video-card ${extraCardClass}`}
                    >

                      <div className="video-wrapper">

                        {/* =================================================
                            LOADING
                        ================================================= */}

                        {status.loading &&
                          !status.error && (
                            <div className="video-status video-loading">
                              <span className="video-spinner"></span>
                            </div>
                          )}

                        {/* =================================================
                            ERROR
                        ================================================= */}

                        {status.error && (
                          <div className="video-status video-error">
                            <i className="bi bi-exclamation-triangle"></i>

                            <span>
                              Video unavailable
                            </span>
                          </div>
                        )}

                        {/* =================================================
                            VIDEO
                        ================================================= */}

                        <video
                          ref={(element) => {
                            videoRefs.current[
                              videoIndex
                            ] = element;
                          }}
                          src={item.video}
                          poster={item.poster}
                          preload="metadata"
                          playsInline
                          className="restaurant-video"
                          style={{
                            opacity:
                              status.error
                                ? 0
                                : 1,
                          }}
                          onLoadedData={() =>
                            handleVideoLoaded(
                              videoIndex
                            )
                          }
                          onPlay={() =>
                            handleVideoPlay(
                              videoIndex
                            )
                          }
                          onPause={() =>
                            handleVideoPause(
                              videoIndex
                            )
                          }
                          onEnded={() =>
                            handleVideoEnded(
                              videoIndex
                            )
                          }
                          onError={(event) =>
                            handleVideoError(
                              event,
                              item.video,
                              videoIndex
                            )
                          }
                        />

                        {/* =================================================
                            PLAY / PAUSE
                        ================================================= */}

                        {!status.error && (
                          <button
                            type="button"
                            className={`video-play-button ${
                              playingVideo ===
                              videoIndex
                                ? "is-playing"
                                : ""
                            }`}
                            onClick={() =>
                              handlePlayVideo(
                                videoIndex
                              )
                            }
                            aria-label={
                              playingVideo ===
                              videoIndex
                                ? "Pause video"
                                : "Play video"
                            }
                          >
                            <i
                              className={
                                playingVideo ===
                                videoIndex
                                  ? "bi bi-pause-fill"
                                  : "bi bi-play-fill"
                              }
                            ></i>
                          </button>
                        )}

                      </div>

                    </div>

                  </div>
                );
              }
            )}

          </div>
        </div>
      </div>
    );
  };

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <>
      <section className="about-food-section restaurant-media-section">

        <div className="container">

          <div className="about-food-wrapper style-2">

            {/* =================================================
                SECTION TITLE
            ================================================= */}

            <div className="section-title text-center">

              <span className="wow fadeInUp home-about-subtitle">
                A Taste Worth Remembering
              </span>

              <h2
                className="wow fadeInUp"
                data-wow-delay=".3s"
              >
                More Than Food,
                <br />

                <span style={{ color: "var(--theme)" }}>
                  It's an Experience
                </span>
              </h2>

              <p className="media-section-description">
                Explore our restaurant
                moments and see what our
                customers have to say.
              </p>

            </div>

            {/* =================================================
                TABS
            ================================================= */}

            <Tab.Container
              defaultActiveKey="videos"
              id="restaurant-media-tabs"
              onSelect={handleTabChange}
            >

              {/* =================================================
                  TAB NAVIGATION
              ================================================= */}

              <Nav className="restaurant-media-tabs justify-content-center">

                {/* RESTAURANT VIDEOS */}

                <Nav.Item>
                  <Nav.Link eventKey="videos">

                    <i className="bi bi-play-circle"></i>

                    <span>
                      Restaurant Videos
                    </span>

                  </Nav.Link>
                </Nav.Item>

                {/* REVIEWS */}

                <Nav.Item>
                  <Nav.Link eventKey="reviews">

                    <i className="bi bi-chat-quote"></i>

                    <span>
                      Reviews
                    </span>

                  </Nav.Link>
                </Nav.Item>

              </Nav>

              {/* =================================================
                  TAB CONTENT
              ================================================= */}

              <Tab.Content className="restaurant-media-content">

                {/* =================================================
                    RESTAURANT VIDEOS
                ================================================= */}

                <Tab.Pane eventKey="videos">

                  {renderVideoTab(
                    restaurantVideos,
                    videosCarousel,
                    0
                  )}

                </Tab.Pane>

                {/* =================================================
                    REVIEWS
                ================================================= */}

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
    </>
  );
};

export default AboutFoodItems;