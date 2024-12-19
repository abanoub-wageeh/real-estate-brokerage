"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const officeImages = [
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    alt: "Modern office reception",
  },
  {
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    alt: "Meeting room",
  },
  {
    url: "https://images.unsplash.com/photo-1497366754035-5f1d3a2f6d44",
    alt: "Private office",
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    alt: "Collaborative space",
  },
  {
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    alt: "Break room",
  },
  {
    url: "https://images.unsplash.com/photo-1497366754035-5f1d3a2f6d44",
    alt: "Exterior view",
  },
];

export function OfficeGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % officeImages.length);
  };

  const previousImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(
      selectedImage === 0 ? officeImages.length - 1 : selectedImage - 1
    );
  };

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {officeImages.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openModal(index)}
          >
            <img
              src={`${image.url}?w=600&fit=crop`}
              alt={image.alt}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="relative max-w-7xl mx-auto p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative">
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <img
                  src={`${officeImages[selectedImage].url}?w=1200&fit=crop`}
                  alt={officeImages[selectedImage].alt}
                  className="max-h-[80vh] mx-auto"
                />

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>

              <p className="text-center text-white mt-4">
                {officeImages[selectedImage].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
