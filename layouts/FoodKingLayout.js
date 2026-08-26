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
    const cleanupStickyNav =
      foodkingUtility.stickyNav();

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
          SCROLL TO TOP ON ROUTE CHANGE
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
      {children}


      {/* ============================================
          FOOTER
      ============================================ */}
      <Footer footer={footer} />

{/* ============================================
          Offer Popup
      ============================================ */}
      <OfferPopup />


      {/* ============================================
          FLOATING WHATSAPP + BACK TO TOP
      ============================================ */}
      <FloatingButtons />

    </Fragment>
  );
};

export default FoodKingLayout;