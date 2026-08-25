"use client";

import EmbedPopup from "@/components/popup/EmbedPopup";
import ImageView from "@/components/popup/ImageView";
import ScrollToTop from "@/components/ScrollToTop";
import { foodkingUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const FoodKingLayout = ({ children, header, footer }) => {
  useEffect(() => {
    // Smooth Scroll
    foodkingUtility.smoothScroll();

    // Scroll Animations
    foodkingUtility.scrollAnimation();

    // Sticky Header
    const cleanupStickyNav = foodkingUtility.stickyNav();

    return () => {
      if (typeof cleanupStickyNav === "function") {
        cleanupStickyNav();
      }

      foodkingUtility.destroySmoothScroll();
    };
  }, []);

  return (
    <Fragment>

      {/* Scroll to top whenever route changes */}
      <ScrollToTop />

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