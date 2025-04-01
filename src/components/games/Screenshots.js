import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Screenshots = ({ screenshots, title }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Open the lightbox with the selected image
  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  // Close the lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Navigate to next image
  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev + 1) % screenshots.length);
  };

  // Navigate to previous image
  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            onClick={() => openLightbox(index)}
          >
            <img
              src={screenshot}
              alt={`${title} screenshot ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={closeLightbox}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Previous button */}
              <button
                className="absolute left-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={prevImage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Next button */}
              <button
                className="absolute right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={nextImage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Current image */}
              <img
                src={screenshots[selectedImage]}
                alt={`${title} screenshot ${selectedImage + 1}`}
                className="max-h-full max-w-full object-contain"
              />
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 py-1 px-3 bg-black/70 rounded-full text-white text-sm">
                {selectedImage + 1} / {screenshots.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Screenshots;
