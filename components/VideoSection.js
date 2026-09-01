"use client";

import { useEffect, useRef } from "react";

export default function VideoSection() {
  const videoRef = useRef(null);

  

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="video-section"
    >
      <source
        src="/assets/videos/ice-cream-01.mp4"
        type="video/mp4"
      />
    </video>
  );
}