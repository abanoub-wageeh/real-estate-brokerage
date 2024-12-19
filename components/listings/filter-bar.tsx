"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, MapPin, Home, DollarSign, Calendar } from "lucide-react";
import * as Slider from "@radix-ui/react-slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const locations = [
  "Downtown",
  "Midtown",
  "Uptown",
  "West End",
  "East Side",
  "South Bay",
  "North Hills",
];

const propertyTypes = [
  "Studio Apartment",
  "1 Bedroom",
  "2 Bedrooms",
  "3+ Bedrooms",
  "Penthouse",
  "Loft",
];

export interface Filters {
  searchQuery: string;
  location: string;
  propertyType: string;
  priceRange: [number, number];
  sortBy: string;
}

interface FilterBarProps {
  onFiltersChange: (filters: Filters) => void;
}

export function FilterBar({ onFiltersChange }: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    searchQuery: "",
    location: "all",
    propertyType: "all",
    priceRange: [0, 1000000],
    sortBy: "default",
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Memoize the filters change callback to prevent infinite loops
  const debouncedFiltersChange = useCallback(
    (filters: Filters) => {
      onFiltersChange(filters);
    },
    [onFiltersChange]
  );

  // Update parent component whenever filters change
  useEffect(() => {
    debouncedFiltersChange(filters);
  }, [filters, debouncedFiltersChange]);

  const handleSearch = (query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
    // Simulate autocomplete suggestions
    if (query) {
      const filtered = [...locations, ...propertyTypes].filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleLocationChange = (value: string) => {
    setFilters((prev) => ({ ...prev, location: value }));
  };

  const handlePropertyTypeChange = (value: string) => {
    setFilters((prev) => ({ ...prev, propertyType: value }));
  };

  const handlePriceRangeChange = (value: number[]) => {
    setFilters((prev) => ({ ...prev, priceRange: [value[0], value[1]] }));
  };

  const handleSortChange = (value: string) => {
    setFilters((prev) => ({ ...prev, sortBy: value }));
  };

  return (
    <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        {/* Search Bar */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search by location, property type..."
              value={filters.searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            
            {/* Autocomplete Suggestions */}
            {suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-1"
              >
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      handleSearch(suggestion);
                      setSuggestions([]);
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
          
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </Button>
        </div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </label>
              <Select
                value={filters.location}
                onValueChange={handleLocationChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location.toLowerCase()}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Home className="w-4 h-4" />
                Property Type
              </label>
              <Select
                value={filters.propertyType}
                onValueChange={handlePropertyTypeChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase()}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Price Range
              </label>
              <div className="px-3">
                <Slider.Root
                  className="relative flex items-center select-none touch-none h-5"
                  value={filters.priceRange}
                  max={1000000}
                  step={10000}
                  onValueChange={handlePriceRangeChange}
                >
                  <Slider.Track className="bg-gray-200/30 relative grow rounded-full h-1">
                    <Slider.Range className="absolute bg-white rounded-full h-full" />
                  </Slider.Track>
                  <Slider.Thumb className="block w-5 h-5 bg-white shadow-lg rounded-full hover:bg-gray-50 focus:outline-none" />
                  <Slider.Thumb className="block w-5 h-5 bg-white shadow-lg rounded-full hover:bg-gray-50 focus:outline-none" />
                </Slider.Root>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>${filters.priceRange[0].toLocaleString()}</span>
                  <span>${filters.priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Sort By */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Sort By
              </label>
              <Select
                value={filters.sortBy}
                onValueChange={handleSortChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="date-desc">Newest First</SelectItem>
                  <SelectItem value="popularity">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
