"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<
    { src: string; label?: string } | null
  >(null);

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bg-primary via-[#06070b] to-bg-secondary min-h-[80vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {!prefersReducedMotion && !videoError ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-fallback.jpg"
            onError={handleVideoError}
            aria-label="Background video"
            key={`hero-video-${Date.now()}`}
          >
            <source src="/background-v3.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040507]/85 via-[#040507]/55 to-[#060910]/92" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute -left-28 top-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-0 bottom-6 h-72 w-72 rounded-full bg-accent/8 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg-primary to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom section-padding pt-24 pb-20 lg:pt-28 lg:pb-24">
        <motion.div
          initial={prefersReducedMotion ? {} : fadeInUp.initial}
          animate={prefersReducedMotion ? {} : fadeInUp.animate}
          transition={prefersReducedMotion ? {} : fadeInUp.transition}
          className="grid items-center gap-12 lg:gap-16 lg:grid-cols-[1.1fr,0.9fr]"
        >
          {/* Left: Text */}
          <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm md:text-base font-semibold text-text-secondary shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-sm">
              <span
                className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(94,234,212,0.6)] animate-pulse"
                aria-hidden
              />
              <span className="leading-snug">
                {portfolioData.personal.headline}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.05]">
              {portfolioData.personal.name}
            </h1>

            <p className="text-lg md:text-xl text-text-secondary font-semibold">
              {portfolioData.personal.role}
            </p>

            <p className="text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed">
              {portfolioData.personal.valueProposition}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="w-full sm:w-auto px-7 md:px-8 py-3 bg-accent text-[#0a1428] rounded-xl font-semibold shadow-[0_12px_30px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(59,130,246,0.45)] transition-transform duration-200"
                aria-label="Xem dịch vụ"
              >
                Xem dịch vụ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-7 md:px-8 py-3 rounded-xl font-semibold border border-accent text-text-primary bg-transparent hover:bg-accent/10 transition-colors duration-200 shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
                aria-label="Xem liên hệ"
              >
                Liên hệ
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-text-tertiary">
              <span className="flex items-center gap-2 text-text-secondary">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                Sẵn sàng hỗ trợ
              </span>
              <span className="h-px w-12 bg-white/10" />
              <span>Phản hồi nhanh, tùy chỉnh linh hoạt</span>
            </div>
          </div>

          {/* Right: Avatar */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
            transition={
              prefersReducedMotion
                ? {}
                : { duration: 0.6, ease: "easeOut", delay: 0.15 }
            }
            className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md"
          >
            <div
              className="absolute -inset-7 bg-gradient-to-br from-accent/24 via-accent/10 to-transparent blur-3xl opacity-70"
              aria-hidden
            />
            <div className="relative rounded-[28px] border border-[#1f2430] bg-[#0f1115]/90 p-2 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[22px] border border-white/5 bg-gradient-to-b from-bg-secondary/95 to-bg-tertiary/90">
                <img
                  src={portfolioData.personal.avatar || "/profile.jpg"}
                  alt={`${portfolioData.personal.name} avatar`}
                  className="w-full aspect-[4/5] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/profile.jpg";
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent pointer-events-none"
                  aria-hidden
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm text-text-primary">
                  <div>
                    <p className="font-semibold">
                      {portfolioData.personal.name}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {portfolioData.personal.role}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full border border-white/15 bg-white/10 text-[11px] uppercase tracking-[0.12em] text-text-secondary">
                    Profile
                  </span>
                </div>
              </div>
            </div>

            {portfolioData.personal.gallery &&
              portfolioData.personal.gallery.length > 0 && (
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {portfolioData.personal.gallery.map((photo, idx) => (
                    <button
                      key={photo.src + idx}
                      onClick={() => setSelectedPhoto(photo)}
                      className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/5 aspect-[4/5] shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 hover:border-accent/40 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <img
                        src={photo.src}
                        alt={photo.label || `Ảnh ${idx + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/profile.jpg";
                        }}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
                        aria-hidden
                      />
                      {photo.label && (
                        <span className="absolute bottom-2 left-2 text-[12px] font-semibold text-white bg-black/50 rounded px-2 py-1">
                          {photo.label}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
          </motion.div>
        </motion.div>
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.label || "Preview"}
              className="w-full max-h-[80vh] object-contain rounded-2xl border border-accent/40 shadow-[0_30px_80px_rgba(0,0,0,0.65)] bg-[#0a0c10]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/profile.jpg";
              }}
            />
            <div className="absolute top-3 right-3 flex gap-2">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-3 py-2 rounded-lg bg-black/70 text-text-primary border border-white/15 hover:border-accent transition-colors"
              >
                Đóng
              </button>
              <a
                href={selectedPhoto.src}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-accent text-[#06241d] font-semibold hover:-translate-y-0.5 transition-transform"
              >
                Mở trong tab mới
              </a>
            </div>
          </div>
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 left-4 text-text-secondary hover:text-text-primary"
            aria-label="Quay lại"
          >
            ← Trở lại
          </button>
        </div>
      )}

      {/* Scroll Indicator */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-text-tertiary text-sm"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Cuộn xuống</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="opacity-70"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      )}
    </section>
  );
}
