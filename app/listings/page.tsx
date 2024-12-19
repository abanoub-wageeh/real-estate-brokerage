"use client";

import { useState, useCallback } from "react";
import { FilterBar, type Filters } from "@/components/listings/filter-bar";
import { ListingGrid } from "@/components/listings/listing-grid";
import { ListingDetailModal } from "@/components/listings/listing-detail-modal";

// Mock data for testing
const mockListings = [
  {
    id: "1",
    title: "Modern Downtown Apartment",
    price: 750000,
    location: "123 Downtown Ave, City Center",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    yearBuilt: 2020,
    description:
      "Luxurious modern apartment in the heart of downtown. Features high-end finishes, floor-to-ceiling windows, and stunning city views.",
    features: [
      "Floor-to-ceiling windows",
      "Stainless steel appliances",
      "Hardwood floors",
      "Central air",
      "In-unit laundry",
      "Balcony",
      "Garage parking",
      "24/7 security",
    ],
    broker: {
      name: "Jane Smith",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      phone: "(555) 123-4567",
      email: "jane.smith@elitebrokerage.com",
    },
    isFeatured: true,
  },
  {
    id: "2",
    title: "Spacious Family Home",
    price: 950000,
    location: "456 Suburban St, Green Valley",
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2800,
    yearBuilt: 2018,
    description:
      "Beautiful family home in a quiet suburban neighborhood. Features an open floor plan, gourmet kitchen, and large backyard.",
    features: [
      "Open floor plan",
      "Gourmet kitchen",
      "Large backyard",
      "Master suite",
      "Walk-in closets",
      "Two-car garage",
      "Smart home features",
      "Energy efficient",
    ],
    broker: {
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      phone: "(555) 987-6543",
      email: "john.doe@elitebrokerage.com",
    },
  },
  {
    id: "3",
    title: "Luxury Penthouse Suite",
    price: 1000000,
    location: "789 Skyview Ave, Downtown",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    bedrooms: 3,
    bathrooms: 3.5,
    squareFeet: 2200,
    yearBuilt: 2021,
    description:
      "Stunning penthouse with panoramic city views. Features a private terrace, chef's kitchen, and luxury finishes throughout.",
    features: [
      "Private terrace",
      "Chef's kitchen",
      "Wine cellar",
      "Home automation",
      "Floor-to-ceiling windows",
      "Private elevator",
      "Concierge service",
      "Spa-like bathrooms",
    ],
    broker: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      phone: "(555) 234-5678",
      email: "sarah.johnson@elitebrokerage.com",
    },
    isFeatured: true,
  },
  {
    id: "4",
    title: "Urban Loft Apartment",
    price: 580000,
    location: "321 Artist Row, Arts District",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1586023492739-9f3f7829c5f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    bedrooms: 1,
    bathrooms: 1.5,
    squareFeet: 1100,
    yearBuilt: 2019,
    description:
      "Contemporary loft in the vibrant Arts District. Features exposed brick walls, high ceilings, and modern industrial design.",
    features: [
      "Exposed brick walls",
      "High ceilings",
      "Industrial design",
      "Modern kitchen",
      "Large windows",
      "Polished concrete floors",
      "Built-in storage",
      "Rooftop access",
    ],
    broker: {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      phone: "(555) 345-6789",
      email: "michael.chen@elitebrokerage.com",
    },
  },
  {
    id: "5",
    title: "Waterfront Studio",
    price: 450000,
    location: "555 Harbor View, Marina District",
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1574362848485-851c523d9c69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    bedrooms: 0,
    bathrooms: 1,
    squareFeet: 650,
    yearBuilt: 2022,
    description:
      "Modern studio apartment with stunning water views. Perfect for young professionals or as an investment property.",
    features: [
      "Water views",
      "Modern appliances",
      "Built-in murphy bed",
      "Custom closets",
      "Smart lighting",
      "Fitness center access",
      "Package concierge",
      "Bike storage",
    ],
    broker: {
      name: "Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      phone: "(555) 456-7890",
      email: "emily.rodriguez@elitebrokerage.com",
    },
  },
  {
    id: "6",
    title: "Modern Farmhouse",
    price: 620000,
    location: "234 Rural Rd, Countryside",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1586023492739-9f3f7829c5f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1586023492945-9f3f7829c5f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1800,
    yearBuilt: 2017,
    description:
      "Stunning modern farmhouse with a rustic charm. Features a private porch, gourmet kitchen, and expansive countryside views.",
    features: [
      "Private porch",
      "Gourmet kitchen",
      "Countryside views",
      "Hardwood floors",
      "Modern appliances",
      "Large windows",
      "Built-in storage",
      "Rural setting",
    ],
    broker: {
      name: "Olivia Brown",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      phone: "(555) 678-9012",
      email: "olivia.brown@elitebrokerage.com",
    },
  },
];

const mockSimilarListings = [
  {
    id: "9",
    title: "Luxury Penthouse Suite",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "10",
    title: "Downtown Loft",
    price: 680000,
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "11",
    title: "Modern Studio",
    price: 450000,
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

export default function ListingsPage() {
  const [filteredListings, setFilteredListings] = useState(mockListings);
  const [selectedListing, setSelectedListing] = useState<string | null>(null);

  const handleFiltersChange = useCallback((filters: Filters) => {
    let results = [...mockListings];

    // Apply search query filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      results = results.filter(
        (listing) =>
          listing.title.toLowerCase().includes(query) ||
          listing.location.toLowerCase().includes(query) ||
          listing.description.toLowerCase().includes(query)
      );
    }

    // Apply location filter
    if (filters.location && filters.location !== "all") {
      results = results.filter((listing) =>
        listing.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Apply property type filter
    if (filters.propertyType && filters.propertyType !== "all") {
      results = results.filter((listing) => {
        const type = filters.propertyType.toLowerCase();
        const title = listing.title.toLowerCase();
        return title.includes(type);
      });
    }

    // Apply price range filter
    results = results.filter(
      (listing) =>
        listing.price >= filters.priceRange[0] &&
        listing.price <= filters.priceRange[1]
    );

    // Apply sorting
    if (filters.sortBy && filters.sortBy !== "default") {
      switch (filters.sortBy) {
        case "price-asc":
          results.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          results.sort((a, b) => b.price - a.price);
          break;
        case "date-desc":
          // Assuming newer listings have higher IDs
          results.sort((a, b) => parseInt(b.id) - parseInt(a.id));
          break;
        case "popularity":
          // For demo purposes, we'll just randomize
          results.sort(() => Math.random() - 0.5);
          break;
      }
    }

    setFilteredListings(results);
  }, []);

  const handleViewDetails = (id: string) => {
    setSelectedListing(id);
  };

  const handleCloseModal = () => {
    setSelectedListing(null);
  };

  const selectedListingData = mockListings.find(
    (listing) => listing.id === selectedListing
  ) ?? null;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Filter Bar */}
      <FilterBar onFiltersChange={handleFiltersChange} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <ListingGrid
            listings={filteredListings}
            onViewDetails={handleViewDetails}
          />
        </div>
      </div>

      {/* Detail Modal */}
      <ListingDetailModal
        listing={selectedListingData}
        isOpen={!!selectedListing}
        onClose={handleCloseModal}
        similarListings={mockSimilarListings}
      />
    </main>
  );
}
