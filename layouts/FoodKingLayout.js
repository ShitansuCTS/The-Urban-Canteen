"use client";

import EmbedPopup from "@/components/popup/EmbedPopup";
import ImageView from "@/components/popup/ImageView";
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
    // WOW.JS SCROLL ANIMATIONS
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
      {/* Image Popup */}
      <ImageView />

      {/* Embed Popup */}
      <EmbedPopup />

      {/* Header */}
      <Header header={header} />

      {/* Page Content */}
      {children}

      {/* Footer */}
      <Footer footer={footer} />
    </Fragment>
  );
};

export default FoodKingLayout;