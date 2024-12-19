"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Bed,
  Bath,
  Square,
  Calendar,
  Share2,
  Heart,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ListingDetailModalProps {
  listing: {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    images: string[];
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    yearBuilt: number;
    features: string[];
    broker: {
      name: string;
      image: string;
      phone: string;
      email: string;
    };
  } | null;
  isOpen: boolean;
  onClose: () => void;
  similarListings: Array<{
    id: string;
    title: string;
    price: number;
    image: string;
  }>;
}

export function ListingDetailModal({
  listing,
  isOpen,
  onClose,
  similarListings,
}: ListingDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!listing) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === listing.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? listing.images.length - 1 : prev - 1
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{listing.title}</DialogTitle>
        </DialogHeader>

        {/* Image Gallery */}
        <div className="relative h-96 mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <Image
                src={listing.images[currentImageIndex]}
                alt={`${listing.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {listing.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart
                className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`}
              />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white"
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Basic Info */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  ${listing.price.toLocaleString()}
                </h2>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{listing.location}</span>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-center">
                <Bed className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">{listing.bedrooms} Beds</div>
              </div>
              <div className="text-center">
                <Bath className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">
                  {listing.bathrooms} Baths
                </div>
              </div>
              <div className="text-center">
                <Square className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">
                  {listing.squareFeet} sq ft
                </div>
              </div>
              <div className="text-center">
                <Calendar className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Built {listing.yearBuilt}</div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{listing.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                {listing.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Broker Info */}
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={listing.broker.image}
                  alt={listing.broker.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{listing.broker.name}</h4>
                  <p className="text-sm text-gray-600">Listing Agent</p>
                </div>
              </div>
              <div className="space-y-2">
                <Button
                  variant="default"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  {listing.broker.phone}
                </Button>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Agent
                </Button>
              </div>
            </div>

            {/* Similar Listings */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Similar Properties</h3>
              <div className="space-y-4">
                {similarListings.map((similar) => (
                  <div
                    key={similar.id}
                    className="flex items-center gap-4 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg cursor-pointer"
                  >
                    <Image
                      src={similar.image}
                      alt={similar.title}
                      width={80}
                      height={60}
                      className="rounded object-cover"
                    />
                    <div>
                      <h4 className="font-medium line-clamp-1">{similar.title}</h4>
                      <p className="text-primary font-semibold">
                        ${similar.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
