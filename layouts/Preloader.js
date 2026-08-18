"use client";
import { foodkingUtility } from "@/utility";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    foodkingUtility.preloader();
  }, []);

  return (
    <div id="preloader" className="preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading">
          <span data-text-preloader="U" className="letters-loading">
            U
          </span>
          <span data-text-preloader="R" className="letters-loading">
            R
          </span>
          <span data-text-preloader="B" className="letters-loading">
            B
          </span>
          <span data-text-preloader="A" className="letters-loading">
            A
          </span>
          <span data-text-preloader="N" className="letters-loading">
            N
          </span>
          
        </div>
        
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
