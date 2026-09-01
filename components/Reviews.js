"use client";

import React, { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const videos = [
  "https://production-media.testctsl.in/the-urban-canteen/videos/review-1.mp4",
  "https://production-media.testctsl.in/the-urban-canteen/videos/review-2.mp4",
  "https://production-media.testctsl.in/the-urban-canteen/videos/review-3.mp4",
  "https://production-media.testctsl.in/the-urban-canteen/videos/review-4.mp4",
];

const RestaurantVideos = () => {
  const videoRefs = useRef([]);
  const [unmutedVideo, setUnmutedVideo] = useState(null);

  const toggleSound = (index) => {
    const video = videoRefs.current[index];

    if (!video) return;

    if (video.muted) {
      video.muted = false;
      setUnmutedVideo(index);
    } else {
      video.muted = true;
      setUnmutedVideo(null);
    }
  };

  return (
    <section className="section-padding fix">
      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-5">
          <h2>Experience The Urban Canteen</h2>

          <p>
            Fresh flavours, vibrant moments and great food come together
            at The Urban Canteen.
          </p>
        </div>

        {/* VIDEOS */}
        <div className="row g-4">

          {videos.map((video, index) => (
            <div
              className="col-12 col-sm-6 col-lg-3"
              key={index}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "450px",
                  overflow: "hidden",
                  borderRadius: "8px",
                  background: "#000",
                }}
              >

                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    background: "#000",
                  }}
                />

                {/* SOUND BUTTON */}
                <button
                  type="button"
                  onClick={() => toggleSound(index)}
                  aria-label={
                    unmutedVideo === index
                      ? "Mute video"
                      : "Unmute video"
                  }
                  style={{
                    position: "absolute",
                    right: "15px",
                    bottom: "15px",
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(0, 0, 0, 0.65)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    zIndex: 10,
                    padding: 0,
                  }}
                >
                  {unmutedVideo === index ? (
                    <Volume2 size={20} />
                  ) : (
                    <VolumeX size={20} />
                  )}
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default RestaurantVideos;