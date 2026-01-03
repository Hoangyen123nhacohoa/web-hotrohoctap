"use client";

import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  className?: string;
  opacity?: number;
}

export default function VideoBackground({
  videoSrc,
  className = "",
  opacity = 0.3,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    const video = videoRef.current;
    if (video && !prefersReducedMotion) {
      video.muted = true;
      video.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
        setVideoError(true);
      });
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [prefersReducedMotion]);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {!prefersReducedMotion && !videoError ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={handleVideoError}
          aria-hidden="true"
          key={`video-bg-${videoSrc}-${Date.now()}`}
        >
          <source src={`${videoSrc}?v=${Date.now()}`} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary pointer-events-none" />
      )}
      <div className="absolute inset-0 bg-black pointer-events-none" style={{ opacity }} />
    </div>
  );
}
