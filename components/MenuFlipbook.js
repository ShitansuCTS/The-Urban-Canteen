"use client";

import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";


// next/dynamic does NOT forward `ref`, so we pass it as `forwardedRef`
const HTMLFlipBook = dynamic(
  () =>
    import("react-pageflip").then((mod) => {
      const FlipBook = mod.default;

      const FlipBookWrapper = ({ forwardedRef, ...props }) => (
        <FlipBook ref={forwardedRef} {...props} />
      );

      FlipBookWrapper.displayName = "FlipBookWrapper";

      return FlipBookWrapper;
    }),
  { ssr: false }
);

/* ---------------- IMAGE SETTINGS ---------------- */
const IMAGE_FOLDER = "/assets/img/menu-pages";
const ITEM_EXT = "webp";
const DESIGN_SRC = `${IMAGE_FOLDER}/09.webp`; // fixed left design

const ITEM_PAGES = ["01", "02", "03", "04", "05", "06", "07", "08"].map(
  (id) => ({
    id,
    src: `${IMAGE_FOLDER}/${id}.${ITEM_EXT}`,
  })
);

const categories = [
  { name: "Breakfast", pages: ["01"] },
  { name: "Soup & Salad", pages: ["02"] },
  { name: "Bread Bites", pages: ["02"] },
  { name: "Small Plates", pages: ["03"] },
  { name: "Mains for One", pages: ["04"] },
  { name: "Rice & Noodles", pages: ["04"] },
  { name: "Thali & Meals", pages: ["05"] },
  { name: "Pizza & Pasta", pages: ["06"] },
  { name: "Mains to Share", pages: ["07"] },
  { name: "Beverages", pages: ["08"] },
];

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.5;

/* ---------------- SINGLE FLIP PAGE ---------------- */
const FlipPage = forwardRef(({ src, alt }, ref) => (
  <div className="menu-book-page" ref={ref}>
    <img
      className="menu-book-image"
      src={src}
      alt={alt}
      draggable="false"
    />
  </div>
));

FlipPage.displayName = "FlipPage";

/* ---------------- MAIN COMPONENT ---------------- */
export default function MenuFlipbook() {
  const bookRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("Breakfast");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Zoom state
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const viewportRef = useRef(null);
  const pointersRef = useRef(new Map());
  const dragStartRef = useRef({ x: 0, y: 0, ox: 0, oy: 0 });
  const pinchStartRef = useRef({ distance: 0, scale: 1 });

  const currentItem = ITEM_PAGES[currentIndex];
  const lastIndex = ITEM_PAGES.length - 1;

  const selectedCategory = categories.find(
    (category) => category.name === activeCategory
  );

  /* ---------- Keep category in sync with a page index ---------- */
  const syncCategory = useCallback((index, preferredName) => {
    const itemId = ITEM_PAGES[index]?.id;
    if (!itemId) return;

    const matching = categories.filter((category) =>
      category.pages.includes(itemId)
    );

    setActiveCategory((previous) => {
      const wanted = preferredName || previous;

      const stillVisible = matching.some(
        (category) => category.name === wanted
      );

      return stillVisible ? wanted : matching[0]?.name || previous;
    });
  }, []);

  /* ---------- Fires after a user flip (drag / click / swipe) ---------- */
  const handlePageFlip = useCallback(
    (event) => {
      const index = event.data;

      if (typeof index !== "number" || index < 0) return;

      setCurrentIndex(index);
      syncCategory(index);
    },
    [syncCategory]
  );

  /* ---------- Go DIRECTLY to a page (no page-by-page flipping) ---------- */
  const goToIndex = useCallback(
    (index, preferredName) => {
      const safeIndex = Math.max(0, Math.min(index, ITEM_PAGES.length - 1));

      const pageFlip = bookRef.current?.pageFlip();

      if (pageFlip) {
        pageFlip.turnToPage(safeIndex);
      }

      setCurrentIndex(safeIndex);
      syncCategory(safeIndex, preferredName);
    },
    [syncCategory]
  );

  /* ---------- Tab click ---------- */
  const handleCategoryClick = (category) => {
    const targetIndex = ITEM_PAGES.findIndex(
      (item) => item.id === category.pages[0]
    );

    if (targetIndex === -1) return;

    setActiveCategory(category.name);

    const pageFlip = bookRef.current?.pageFlip();

    // Already on that page: nothing to turn
    if (pageFlip && pageFlip.getCurrentPageIndex() === targetIndex) {
      setCurrentIndex(targetIndex);
      return;
    }

    goToIndex(targetIndex, category.name);
  };

  /* ---------- Previous / Next ---------- */
const handlePrevious = () => {
  const pageFlip = bookRef.current?.pageFlip();

  if (!pageFlip) return;

  if (pageFlip.getState() === "flipping") return;

  const currentPage = pageFlip.getCurrentPageIndex();

  if (currentPage <= 0) return;

  goToIndex(currentPage - 1);
};

 const handleNext = () => {
  const pageFlip = bookRef.current?.pageFlip();

  if (!pageFlip) return;

  if (pageFlip.getState() === "flipping") return;

  const currentPage = pageFlip.getCurrentPageIndex();

  if (currentPage >= lastIndex) return;

  goToIndex(currentPage + 1);
};
  /* ---------- Click anywhere on menu image = NEXT only ---------- */
const handleMenuImageClick = () => {
  const pageFlip = bookRef.current?.pageFlip();

  if (!pageFlip) return;

  // Ignore while animation is running
  if (pageFlip.getState() === "flipping") return;

  // Don't go beyond the last page
  if (pageFlip.getCurrentPageIndex() >= lastIndex) return;

  pageFlip.flipNext();
};

  /* ---------- Click on the fixed 09.webp design = Previous page ---------- */
 /* ---------- 09.webp click = Previous Page ---------- */
const handleDesignClick = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const pageFlip = bookRef.current?.pageFlip();

  if (!pageFlip) return;

  if (pageFlip.getState() === "flipping") return;

  const currentPage = pageFlip.getCurrentPageIndex();

  if (currentPage <= 0) return;

  goToIndex(currentPage - 1);
};

const handleDesignKeyDown = (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    handleDesignClick(event);
  }
};

  /* =====================================================
     ZOOM
  ===================================================== */

  const resetZoom = useCallback(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const openZoom = () => {
    resetZoom();
    setIsZoomOpen(true);
  };

  const closeZoom = useCallback(() => {
    setIsZoomOpen(false);
    resetZoom();
    pointersRef.current.clear();
    setIsDragging(false);
  }, [resetZoom]);

  // Keep the picture inside a sensible area while panning
  const clampOffset = (x, y, nextScale) => {
    const el = viewportRef.current;
    if (!el || nextScale <= 1) return { x: 0, y: 0 };

    const maxX = (el.clientWidth * (nextScale - 1)) / 2;
    const maxY = (el.clientHeight * (nextScale - 1)) / 2;

    return {
      x: Math.max(-maxX, Math.min(maxX, x)),
      y: Math.max(-maxY, Math.min(maxY, y)),
    };
  };

  const applyScale = (nextScale) => {
    const clamped = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, nextScale));

    setScale(clamped);
    setOffset((prev) => clampOffset(prev.x, prev.y, clamped));
  };

  const zoomIn = () => applyScale(scale + ZOOM_STEP);
  const zoomOut = () => applyScale(scale - ZOOM_STEP);

  const handleWheel = (event) => {
    const direction = event.deltaY < 0 ? 1 : -1;
    applyScale(scale + direction * 0.25);
  };

  const handleDoubleClick = () => {
    if (scale > 1) {
      resetZoom();
    } else {
      applyScale(2.5);
    }
  };

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture?.(event.pointerId);

    pointersRef.current.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
    });

    if (pointersRef.current.size === 1) {
      dragStartRef.current = {
        x: event.clientX,
        y: event.clientY,
        ox: offset.x,
        oy: offset.y,
      };

      if (scale > 1) setIsDragging(true);
    }

    if (pointersRef.current.size === 2) {
      const [a, b] = Array.from(pointersRef.current.values());

      pinchStartRef.current = {
        distance: Math.hypot(a.x - b.x, a.y - b.y),
        scale,
      };

      setIsDragging(false);
    }
  };

  const handlePointerMove = (event) => {
    if (!pointersRef.current.has(event.pointerId)) return;

    pointersRef.current.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
    });

    // Pinch zoom (two fingers)
    if (pointersRef.current.size === 2) {
      const [a, b] = Array.from(pointersRef.current.values());
      const distance = Math.hypot(a.x - b.x, a.y - b.y);

      if (pinchStartRef.current.distance > 0) {
        applyScale(
          pinchStartRef.current.scale *
            (distance / pinchStartRef.current.distance)
        );
      }

      return;
    }

    // Drag to move (one pointer, only when zoomed in)
    if (pointersRef.current.size === 1 && scale > 1) {
      const dx = event.clientX - dragStartRef.current.x;
      const dy = event.clientY - dragStartRef.current.y;

      setOffset(
        clampOffset(
          dragStartRef.current.ox + dx,
          dragStartRef.current.oy + dy,
          scale
        )
      );
    }
  };

  const handlePointerUp = (event) => {
    pointersRef.current.delete(event.pointerId);

    if (pointersRef.current.size === 1) {
      // Continue dragging with the finger that is left
      const [remaining] = Array.from(pointersRef.current.values());

      dragStartRef.current = {
        x: remaining.x,
        y: remaining.y,
        ox: offset.x,
        oy: offset.y,
      };
    }

    if (pointersRef.current.size === 0) {
      setIsDragging(false);
    }
  };

  const zoomPrevious = () => {
    if (currentIndex > 0) {
      resetZoom();
      goToIndex(currentIndex - 1);
    }
  };

  const zoomNext = () => {
    if (currentIndex < lastIndex) {
      resetZoom();
      goToIndex(currentIndex + 1);
    }
  };

  // Lock page scroll + keyboard shortcuts while zoom is open
  useEffect(() => {
    if (!isZoomOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeZoom();
      if (event.key === "+" || event.key === "=") zoomIn();
      if (event.key === "-") zoomOut();
      if (event.key === "ArrowLeft") zoomPrevious();
      if (event.key === "ArrowRight") zoomNext();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isZoomOpen, scale, currentIndex]);

  /* ---------- Zoom modal ---------- */
  const zoomModal =
    isZoomOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            className="menu-zoom-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Zoomed menu page"
          >
            {/* Toolbar */}
            <div className="menu-zoom-toolbar">
              <div className="menu-zoom-title">
                <span className="home-about-subtitle wow fadeInUp">The Urban Canteen</span>
                <strong>
                  {selectedCategory?.name} · Page {currentItem?.id}
                </strong>
              </div>

              <div className="menu-zoom-controls">
                <button
                  type="button"
                  onClick={zoomOut}
                  disabled={scale <= MIN_ZOOM}
                  aria-label="Zoom out"
                >
                  −
                </button>

                <span className="menu-zoom-level">
                  {Math.round(scale * 100)}%
                </span>

                <button
                  type="button"
                  onClick={zoomIn}
                  disabled={scale >= MAX_ZOOM}
                  aria-label="Zoom in"
                >
                  +
                </button>

                <button
                  type="button"
                  onClick={resetZoom}
                  className="menu-zoom-reset"
                  aria-label="Reset zoom"
                >
                  Reset
                </button>

                <button
                  type="button"
                  onClick={closeZoom}
                  className="menu-zoom-close"
                  aria-label="Close zoom"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Image area */}
            <div
              ref={viewportRef}
              className={
                isDragging
                  ? "menu-zoom-viewport dragging"
                  : scale > 1
                  ? "menu-zoom-viewport can-drag"
                  : "menu-zoom-viewport"
              }
              onWheel={handleWheel}
              onDoubleClick={handleDoubleClick}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              <img
                className="menu-zoom-image"
                src={currentItem?.src}
                alt={`Urban Canteen Menu - Page ${currentItem?.id}`}
                draggable="false"
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                  transition: isDragging ? "none" : "transform 0.2s ease",
                }}
              />
            </div>

            {/* Prev / Next inside zoom */}
            <div className="menu-zoom-footer">
              <button
                type="button"
                onClick={zoomPrevious}
                disabled={currentIndex <= 0}
              >
                ← Previous
              </button>

              <span className="menu-zoom-hint">
                Double-click or pinch to zoom · Drag to move
              </span>

              <button
                type="button"
                onClick={zoomNext}
                disabled={currentIndex >= lastIndex}
              >
                Next →
              </button>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <section className="section-padding dark-bg menu-pdf-section">
      <div className="menu-container">

        {/* MENU HEADING */}
        <div className="menu-heading">
          <div>
            <span
              className="home-about-subtitle wow fadeInUp"
              data-wow-duration="0.8s"
              style={{
                visibility: "visible",
                animationDuration: "0.8s",
              }}
            >
              Explore Our Menu
            </span>

            <h2>
              Something for
              
              <em> every craving.</em>
            </h2>
          </div>

          <p className="menu-heading-text mb-3">
            Take your time, explore the flavours and find something that
            makes your moment a little better.
          </p>
        </div>

        {/* MAIN MENU LAYOUT */}
        <div className="menu-pdf-layout">

          {/* LEFT SIDEBAR */}
          <aside className="menu-pdf-sidebar">
            <div className="menu-sidebar-title">
              <div>
                <span className="menu-sidebar-eyebrow">DISCOVER</span>
                <h3>Our Menu</h3>
              </div>

              <span className="menu-category-count">
                {String(categories.length).padStart(2, "0")}
              </span>
            </div>

            <div
              className="menu-pdf-tabs"
              role="tablist"
              aria-label="Menu categories"
            >
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category.name}
                  className={
                    activeCategory === category.name
                      ? "menu-pdf-tab active"
                      : "menu-pdf-tab"
                  }
                  onClick={() => handleCategoryClick(category)}
                >
                  <span className="menu-tab-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="menu-tab-name">{category.name}</span>

                  <span className="menu-tab-arrow">→</span>
                </button>
              ))}
            </div>

            <div className="menu-sidebar-footer">
              <span className="menu-sidebar-line" />
              <span>GOOD FOOD. GOOD MOOD.</span>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div className="menu-pdf-content">

            <div className="menu-pdf-content-heading">
              <div>
                <span className="menu-content-subtitle">
                  THE URBAN CANTEEN
                </span>

                <h3>{selectedCategory?.name}</h3>
              </div>

              <div className="menu-page-count">
                <span>PAGE</span>
                <strong>{currentItem?.id}</strong>
              </div>
            </div>

            {/* FIXED DESIGN (left) + FLIPPING MENU (right) */}
            <div className="menu-book-wrapper">

              {/* Zoom button */}
              <button
                type="button"
                className="menu-zoom-btn"
                onClick={openZoom}
                aria-label="Zoom menu page"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.5" y2="16.5" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <span>Zoom</span>
              </button>

              <div className="menu-book-stage">

                {/* LEFT: 09.webp design. Click = Previous page */}
                <div
  className={
    currentIndex <= 0
      ? "menu-design-page is-disabled"
      : "menu-design-page"
  }
  role="button"
  tabIndex={0}
  aria-label="Previous menu page"
  aria-disabled={currentIndex <= 0}
  onClick={handleDesignClick}
  onKeyDown={handleDesignKeyDown}
>
  <img
    src={DESIGN_SRC}
    alt="Urban Canteen Menu Design"
    draggable="false"
  />
</div>

                {/* RIGHT: flipping menu pages (click = Next, drag/swipe works) */}
                <div className="menu-flip-side" onClick={handleMenuImageClick}>
                  <HTMLFlipBook
                    forwardedRef={bookRef}
                    width={420}
                    height={594}
                    size="stretch"
                    minWidth={300}
                    maxWidth={420}
                    minHeight={424}
                    maxHeight={594}
                    maxShadowOpacity={0.45}
                    showCover={false}
                    mobileScrollSupport={true}
                    usePortrait={true}
                    drawShadow={true}
                    flippingTime={900}
                    startPage={0}
                    startZIndex={10}
                    autoSize={true}
                    clickEventForward={true}
                    useMouseEvents={true}
                    swipeDistance={30}
                    showPageCorners={true}
                    disableFlipByClick={true}
                    onFlip={handlePageFlip}
                    className="menu-flipbook"
                  >
                    {ITEM_PAGES.map((item) => (
                      <FlipPage
                        key={item.id}
                        src={item.src}
                        alt={`Urban Canteen Menu - Page ${item.id}`}
                      />
                    ))}
                  </HTMLFlipBook>
                </div>

              </div>
            </div>

            {/* BOOK NAVIGATION */}
            <div className="menu-book-navigation">
              <button
                type="button"
                className="menu-book-nav-btn"
                onClick={handlePrevious}
                disabled={currentIndex <= 0}
                aria-label="Previous menu page"
              >
                <span>←</span>
                <span>Previous</span>
              </button>

              <div className="menu-book-counter">
                <strong>{currentItem?.id}</strong>
                <span className="menu-counter-divider">/</span>
                <span>{ITEM_PAGES[lastIndex].id}</span>
              </div>

              <button
                type="button"
                className="menu-book-nav-btn"
                onClick={handleNext}
                disabled={currentIndex >= lastIndex}
                aria-label="Next menu page"
              >
                <span>Next</span>
                <span>→</span>
              </button>
            </div>

            <p className="menu-book-hint">
              <span>↔</span>
              Click left for previous, right for next, or swipe
            </p>

          </div>
        </div>
      </div>

      {zoomModal}
    </section>
  );
}