"use client";

import EmbedPopup from "@/components/popup/EmbedPopup";
import OfferPopup from "@/components/popup/OfferPopup";
import ImageView from "@/components/popup/ImageView";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingButtons from "@/components/FloatingButtons";

import { foodkingUtility } from "@/utility";
import { Fragment, useEffect } from "react";

import Footer from "./Footer";
import Header from "./Header";

const FoodKingLayout = ({ children, header, footer }) => {
  useEffect(() => {
    // ============================================
    // SMOOTH SCROLL
    // ============================================
    foodkingUtility.smoothScroll();

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    foodkingUtility.scrollAnimation();

    // ============================================
    // STICKY HEADER
    // ============================================
    const cleanupStickyNav = foodkingUtility.stickyNav();

    // ============================================
    // CLEANUP
    // ============================================
    return () => {
      if (typeof cleanupStickyNav === "function") {
        cleanupStickyNav();
      }

      foodkingUtility.destroySmoothScroll();
    };
  }, []);

  return (
    <Fragment>

      {/* ============================================
          SCROLL TO TOP
      ============================================ */}
      <ScrollToTop />

      {/* ============================================
          IMAGE POPUP
      ============================================ */}
      <ImageView />

      {/* ============================================
          EMBED POPUP
      ============================================ */}
      <EmbedPopup />

      {/* ============================================
          HEADER
      ============================================ */}
      <Header header={header} />

      {/* ============================================
          PAGE CONTENT
      ============================================ */}
      <main>
        {children}
      </main>

      {/* ============================================
          FOOTER
      ============================================ */}
      <Footer footer={footer} />

      {/* ============================================
          OFFER POPUP
          OfferPopup internally checks pathname.
          It will ONLY show on "/"
      ============================================ */}
      <OfferPopup />

      {/* ============================================
          FLOATING BUTTONS
      ============================================ */}
      <FloatingButtons />

    </Fragment>
  );
};

export default FoodKingLayout;