"use client";

import { ListingCard } from "./listing-card";

// Mock data type
interface Listing {
  id: string;
  title: string;
  price: number;
  location: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  isFeatured?: boolean;
}

interface ListingGridProps {
  listings: Listing[];
  onViewDetails: (id: string) => void;
}

export function ListingGrid({ listings, onViewDetails }: ListingGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <ListingCard
          key={listing.id}
          listing={listing}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
