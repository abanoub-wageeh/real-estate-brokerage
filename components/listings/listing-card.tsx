"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Share2, MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ListingCardProps {
  listing: {
    id: string;
    title: string;
    price: number;
    location: string;
    images: string[];
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    isFeatured?: boolean;
  };
  onViewDetails: (id: string) => void;
}

export function ListingCard({ listing, onViewDetails }: ListingCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === listing.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
    >
      {/* Image Container */}
      <div className="relative h-64 cursor-pointer" onClick={() => onViewDetails(listing.id)}>
        <Image
          src={listing.images[currentImageIndex]}
          alt={listing.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        
        {/* Image Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
          {listing.images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(index);
              }}
            />
          ))}
        </div>

        {/* Featured Badge */}
        {listing.isFeatured && (
          <div className="absolute top-4 left-4 bg-primary text-secondary px-2 py-1 text-sm font-medium rounded">
            Featured
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            size="icon"
            variant="secondary"
            className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-secondary"
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
          >
            <Heart
              className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`}
            />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="w-8 h-8 rounded-full bg-white/90 text-secondary hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              // Implement share functionality
            }}
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold line-clamp-1">{listing.title}</h3>
          <p className="text-lg font-bold text-primary">
            ${listing.price.toLocaleString()}
          </p>
        </div>

        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{listing.location}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{listing.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{listing.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <Square className="w-4 h-4" />
            <span className="text-sm">{listing.squareFeet} sq ft</span>
          </div>
        </div>

        <Button
          className="w-full flex items-center justify-center gap-2"
          onClick={() => onViewDetails(listing.id)}
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}
