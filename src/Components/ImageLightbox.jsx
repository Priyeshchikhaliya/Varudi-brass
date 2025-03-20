/* eslint-disable react/prop-types */
import  { useState, useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ImageLightbox = ({ isOpen, setIsOpen, image, altText }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const lightboxRef = useRef(null);
  const imageContainerRef = useRef(null);

  // Close lightbox when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setIsOpen]);

  // Reset zoom and position when lightbox opens
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  // Handle click outside to close
  const handleBackdropClick = (e) => {
    if (lightboxRef.current && !imageContainerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // Handle zoom in
  const zoomIn = () => {
    if (scale < 3) {
      setScale((prevScale) => prevScale + 0.5);
    }
  };

  // Handle zoom out
  const zoomOut = () => {
    if (scale > 1) {
      setScale((prevScale) => prevScale - 0.5);
    }
  };

  // Handle panning/dragging
  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Prevent scrolling when dragging
  useEffect(() => {
    const preventDefault = (e) => {
      if (isDragging) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", preventDefault, { passive: false });
    return () => {
      document.removeEventListener("touchmove", preventDefault);
    };
  }, [isDragging]);

  if (!isOpen) return null;

  return (
    <div
      ref={lightboxRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 select-none"
      onClick={handleBackdropClick}
    >
      {/* Popup Container */}
      <div
        ref={imageContainerRef}
        className="bg-white rounded-lg shadow-2xl max-w-4xl w-[90%] h-[60%] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <p className="text-lg font-medium truncate">{altText}</p>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close lightbox"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Image container */}
        <div
          className="flex-1 overflow-hidden relative flex items-center justify-center bg-gray-100 p-4"
          style={{ cursor: scale > 1 ? "grab" : "auto" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={image}
            alt={altText}
            className="max-w-full max-h-[calc(90vh-8rem)] object-contain transition-transform duration-200"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: "center center",
            }}
          />
        </div>

        {/* Controls */}
        <div className="p-4 border-t flex justify-center space-x-4">
          <button
            onClick={zoomOut}
            disabled={scale <= 1}
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ${
              scale <= 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            -
          </button>
          <button
            onClick={zoomIn}
            disabled={scale >= 3}
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ${
              scale >= 3 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
