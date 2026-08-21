import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const foodkingUtility = {
  // =====================================================
  // SMOOTH SCROLL + GSAP SCROLLTRIGGER
  // =====================================================
  smoothScroll() {
    if (typeof window === "undefined") return;

    // Prevent duplicate Lenis initialization
    if (window.__foodkingLenis) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    // Update ScrollTrigger whenever Lenis scrolls
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP ticker
    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);

    // Prevent lag between GSAP and Lenis
    gsap.ticker.lagSmoothing(0);

    // Store references
    window.__foodkingLenis = lenis;
    window.__foodkingLenisRaf = raf;
  },

  // =====================================================
  // DESTROY SMOOTH SCROLL
  // =====================================================
  destroySmoothScroll() {
    if (typeof window === "undefined") return;

    const lenis = window.__foodkingLenis;
    const raf = window.__foodkingLenisRaf;

    if (lenis) {
      lenis.destroy();
    }

    if (raf) {
      gsap.ticker.remove(raf);
    }

    delete window.__foodkingLenis;
    delete window.__foodkingLenisRaf;
  },

  // =====================================================
  // WOW.JS SCROLL ANIMATION
  // =====================================================
  scrollAnimation() {
    if (typeof window === "undefined") return;

    try {
      const WOW = require("wowjs");

      if (WOW && WOW.WOW) {
        new WOW.WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: true,
        }).init();
      }
    } catch (error) {
      console.error("WOW.js initialization failed:", error);
    }
  },

  // =====================================================
  // STICKY NAV
  // =====================================================
  stickyNav() {
    if (typeof window === "undefined") return;

    const header = document.getElementById("header-sticky");

    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 250) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // Check initial position
    handleScroll();

    // Return cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },

  // =====================================================
  // PRELOADER
  // =====================================================
  preloader() {
    if (typeof window === "undefined") return;

    const preloader = document.querySelector(".preloader");

    if (!preloader) return;

    preloader.classList.add("loaded");

    setTimeout(() => {
      preloader.style.transition = "opacity 0.6s ease";
      preloader.style.opacity = "0";

      const hidePreloader = () => {
        preloader.style.display = "none";
      };

      preloader.addEventListener("transitionend", hidePreloader, {
        once: true,
      });

      // Fallback
      setTimeout(hidePreloader, 700);
    }, 600);
  },

  // =====================================================
  // SLIDER ANIMATION
  // =====================================================
  sliderAnimation(slides) {
    if (!slides || !slides.length) return;

    slides.forEach((slide) => {
      const animatedElements =
        slide.querySelectorAll("[data-animation]");

      animatedElements.forEach((element) => {
        const anim =
          element.getAttribute("data-animation") || "fadeInUp";

        const delay =
          element.getAttribute("data-delay") || "0s";

        const duration =
          element.getAttribute("data-duration") || "1s";

        // Reset animation
        element.style.animation = "none";

        // Force browser reflow
        void element.offsetWidth;

        // Apply animation
        element.style.animation = `${anim} ${duration} ${delay}`;

        // Add animated class
        element.classList.add("animated");

        // Remove class after animation
        element.addEventListener(
          "animationend",
          () => {
            element.classList.remove("animated");
          },
          {
            once: true,
          }
        );
      });
    });
  },

  // =====================================================
  // GSAP FADE UP ANIMATION
  // =====================================================
  fadeUpAnimation(selector = ".scroll-animate") {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    ScrollTrigger.refresh();
  },

  // =====================================================
  // GSAP IMAGE PARALLAX
  // =====================================================
  parallaxAnimation(selector = ".parallax-image") {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    elements.forEach((element) => {
      gsap.to(element, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    ScrollTrigger.refresh();
  },

  // =====================================================
  // REFRESH SCROLLTRIGGER
  // =====================================================
  refreshScrollTrigger() {
    if (typeof window === "undefined") return;

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  },
};